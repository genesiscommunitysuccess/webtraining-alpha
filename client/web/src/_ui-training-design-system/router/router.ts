import { customElement, DOM, FASTElement } from '@microsoft/fast-element';
import { Router, RouterElement } from '@microsoft/fast-router';

const routerProperty = '$router';

/**
 * @beta
 * @privateRemarks
 * Created to patch an issue and act as a placeholder to improve the api ahead of upgrading to the latest. Depending on
 * how much we build on this, we may want to promote it to its own package.
 */
@customElement({
  name: 'alpha-router',
})
export class AlphaRouter extends (Router.from(FASTElement) as {
  new (): FASTElement & RouterElement;
}) {
  connectedCallback() {
    super.connectedCallback();
    /**
     * Tactical patch for Safari 16
     * {@link https://genesisglobal.atlassian.net/browse/PA-226}
     *
     * Explicitly set the config on the $router property when we connect to the DOM.
     */
    DOM.queueUpdate(async () => {
      this[routerProperty].config = this.config;
    });
  }
}
