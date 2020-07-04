import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutWebModule } from '@kikstart-ui/layout-web';
import { UiNavbarModule} from '@kikstart-ui/ui-navbar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutWebModule,
    UiNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
