import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ProfileComponent } from './profile/profile.component';
import { CardComponent } from './card/card.component';
import { MediaObjectComponent } from './media-object/media-object.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CardComponent,
    MediaObjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
