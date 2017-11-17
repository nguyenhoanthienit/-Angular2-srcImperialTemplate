import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from "./layout/header.component";
import { FooterComponent } from "./layout/footer.component";
import { NavComponent } from "./layout/nav.component";
import { AboutComponent } from "./component/about.component";
import { ContactComponent } from "./component/contact.component";
import { PortfolioComponent } from "./component/portfolio.component";
import { ServicesComponent } from "./component/services.component";
import { GioHangComponent } from "./component/giohang.component";
import { DatHangComponent } from "./component/dathang.component";


import { TeamComponent } from "./component/team.component";
import { TestimonialsComponent } from "./component/testimonials.component";
import { TrangChuComponent } from "./trangchu.component";
import { ChiTietSanPhamComponent } from "./sanphamgo/chitietsanpham.component"

import { SanPhamGoService } from "./service/sanphamgoservice";
import { GioHangService } from "./service/giohang.dataservice";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    ServicesComponent,
    TeamComponent,
    TestimonialsComponent,
    TrangChuComponent,
    ChiTietSanPhamComponent,
    GioHangComponent,
    DatHangComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
  ],
  providers: [SanPhamGoService, GioHangService],
  bootstrap: [AppComponent]
})
export class AppModule { }
