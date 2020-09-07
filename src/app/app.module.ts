import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/views/home/home.components';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './components/views/home/tool-bar/tool-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderDesktopComponent } from './components/header-desktop/header-desktop.component';
import { HeaderMobileComponent } from './components/header-mobile/header-mobile.component';
import { PriceComponent } from './components/views/price/price.component';
import { PlanningComponent } from './components/views/planning/planning.component';
import { PriceColumnComponent } from './components/price-column/price-column.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolBarComponent,
    FooterComponent,
    HeaderDesktopComponent,
    HeaderMobileComponent,
    PriceComponent,
    PlanningComponent,
    PriceColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
