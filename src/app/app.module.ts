import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutWebModule } from '@kikstart-ui/layout-web';
import { UiNavbarModule } from '@kikstart-ui/ui-navbar';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UiHeroModule } from '@kikstart-ui/ui-hero';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutWebModule,
    UiNavbarModule,
    UiHeroModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
