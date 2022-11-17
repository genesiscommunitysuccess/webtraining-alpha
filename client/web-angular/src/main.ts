import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { baseComponents, provideDesignSystem } from '@genesislcap/alpha-design-system';
import { AppModule } from './app/app.module';

provideDesignSystem().register(baseComponents);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
