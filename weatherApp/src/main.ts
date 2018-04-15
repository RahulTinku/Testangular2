import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

  if('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('./service-worker.js', { scope : './'})
		.then(function(registration) {
			console.log('Service worker Registered', registration);
		})
		.catch(function(error) {
			console.log('Service worker not Registered', error);
		})
	}