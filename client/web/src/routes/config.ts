import {
  Auth,
  FoundationAnalytics,
  FoundationAnalyticsEvent,
  FoundationAnalyticsEventType,
  Session,
} from '@genesislcap/foundation-comms';
import {Settings as LoginSettings} from '@genesislcap/foundation-login';
import {Constructable} from '@microsoft/fast-element';
import {Container} from '@microsoft/fast-foundation';
import {Route, RouterConfiguration} from '@microsoft/fast-router';
import {defaultLayout, loginLayout} from '../layouts';
import {Home} from './home/home';
import {NotFound} from './not-found/not-found';
import {Playground} from './playground/playground';
import {Order} from './order/order';
import {Trade} from './trade/trade';
import {UserComponent} from './user/user';
import {Reporting} from '@genesislcap/foundation-reporting';
import { CustomOrderPage } from './custom-order/custom-order';
import {UserRegistration} from './userRegistration/userRegistration';
import {StockRegistration} from './stockRegistration/stockRegistration';

type RouterSettings = {
  autoAuth?: boolean;
} & LoginSettings;

export class MainRouterConfig extends RouterConfiguration<RouterSettings> {
  constructor(
    @Auth private auth: Auth,
    @Container private container: Container,
    @FoundationAnalytics private analytics: FoundationAnalytics,
    @Session private session: Session
  ) {
    super();
  }

  public allRoutes = [
    {index: 1, path: 'home', title: 'Home', icon: 'home', variant: 'solid'},
    {index: 2, path: 'playground', title: 'Playground', icon: 'home', variant: 'solid'},
    {index: 3, path: 'order', title: 'Order', icon: 'home', variant: 'solid'},
    {index: 4, path: 'reporting', title: 'Reporting', icon: 'home', variant: 'solid'},
    {index: 5, path: 'trade', title: 'Trade', icon: 'home', variant: 'solid'},
    {index: 6, path: 'custom-order', title: 'Custom Order Grid', icon: 'home', variant: 'solid'},
    {index: 7, path: 'user', title: 'User', icon: 'home', variant: 'solid'},
    {index: 8, path: 'userRegistration', title: 'User Registration', icon: 'user-plus', variant: 'solid'},
    {index: 9, path: 'stockRegistration', title: 'Stock Registration', icon: 'money-bill', variant: 'solid'},

  ];

  public configure() {
    this.title = 'Blank App Demo';
    this.defaultLayout = defaultLayout;

    const authPath = 'login';
    const commonSettings: RouterSettings = { autoAuth: true };

    this.routes.map(
      { path: '', redirect: authPath },
      {
        path: authPath,
        name: 'login',
        title: 'Login',
        element: async () => {
          const { configure, define } = await import(
            /* webpackChunkName: "foundation-login" */
            '@genesislcap/foundation-login'
          );
          configure(this.container, {
            autoConnect: true,
            defaultRedirectUrl: 'home',
          });
          return define({
            name: `blank-app-login`,
            /**
             * You can augment the template and styles here when needed.
             */
          });
        },
        layout: loginLayout,
        settings: { public: true },
        childRouters: true,
      },      {path: 'home', element: Home, title: 'Home', name: 'home', settings: commonSettings},
      {path: 'not-found', element: NotFound, title: 'Not Found', name: 'not-found'},
      {path: 'playground', element: Playground, title: 'Playground', name: 'playground', settings: commonSettings},
      {path: 'order', element: Order, title: 'Order', name: 'order', settings: commonSettings},
      {path: 'reporting', element: Reporting, title: 'Reporting', name: 'reporting', settings: commonSettings},
      {path: 'trade', element: Trade, title: 'Trade', name: 'trade', settings: commonSettings},
      {path: 'custom-order', element: CustomOrderPage, title: 'Custom Order', name: 'custom-order', settings: commonSettings},
      {path: 'user', element: UserComponent, title: 'User', name: 'user', settings: commonSettings},
      {path: 'userRegistration', element: UserRegistration, title: 'User Registration', name: 'userRegistration', settings: commonSettings},
      {path: 'stockRegistration', element: StockRegistration, title: 'Stock Registration', name: 'stockRegistration', settings: commonSettings},
    );

    const auth = this.auth;

    /**
     * Example of a FallbackRouteDefinition
     */
    this.routes.fallback(() =>
      this.auth.isLoggedIn ? { redirect: 'not-found' } : { redirect: authPath }
    );
    /**
     * Example of a NavigationContributor
     */
    this.contributors.push({
      navigate: async (phase) => {
        const settings = phase.route.settings;

        this.analytics.trackEvent(FoundationAnalyticsEventType.routeChanged, <
          FoundationAnalyticsEvent.RouteChanged
        >{
          path: phase.route.endpoint.path,
        });

        /**
         * If public route don't block
         */
        if (settings && settings.public) {
          return;
        }

        /**
         * If logged in don't block
         */
        if (this.auth.isLoggedIn) {
          return;
        }

        /**
         * If allowAutoAuth and session is valid try to connect+auto-login
         */
        if (settings && settings.autoAuth && await auth.reAuthFromSession()) {
          return;
        }

        /**
         * Otherwise route them somewhere, like to a login
         */
        phase.cancel(() => {
          this.session.captureReturnUrl();
          Route.name.replace(phase.router, 'login');
        });
      },
    });
  }

  public construct<T>(Type: Constructable<T>): T {
    return this.container.get(Type) as T;
  }
}
