import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

import {
  provideDesignSystem,
  alphaCard,
  alphaButton,
  alphaTextField,
} from '@genesislcap/alpha-design-system';

provideDesignSystem()
  .register(
    alphaCard(),
    alphaButton(),
    alphaTextField(),
  );

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
