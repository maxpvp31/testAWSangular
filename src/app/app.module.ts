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
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { PlanningComponent } from './components/views/planning/planning.component';
import { PriceColumnComponent } from './components/price-column/price-column.component';
import { SvgRightComponent } from './components/SVG/svg-right/svg-right.component';
import { SvgLeftComponent } from './components/SVG/svg-left/svg-left.component';
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
    PriceColumnComponent,
    SvgRightComponent,
    SvgLeftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
