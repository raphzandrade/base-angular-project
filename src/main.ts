import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// modules
import { AppModule } from './app/app.module';

// environment
import { environment } from './environments/environment';

// akita
import { enableAkitaProdMode } from '@datorama/akita';

if (environment.production) {
  enableProdMode();
  enableAkitaProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
