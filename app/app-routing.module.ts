import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./layout/header.component";
import { FooterComponent } from "./layout/footer.component";
import { NavComponent } from "./layout/nav.component";

import { AboutComponent } from "./component/about.component";
import { ContactComponent } from "./component/contact.component";
import { PortfolioComponent } from "./component/portfolio.component";
import { ServicesComponent } from "./component/services.component";
import { TeamComponent } from "./component/team.component";
import { TestimonialsComponent } from "./component/testimonials.component";
import { ChiTietSanPhamComponent } from "./sanphamgo/chitietsanpham.component"
import { GioHangComponent } from "./component/giohang.component";
import { DatHangComponent } from "./component/dathang.component";


import { TrangChuComponent } from "./trangchu.component";

const routes: Routes = [
  { path: '', component: TrangChuComponent },
  { path: 'sanpham/:id', component: ChiTietSanPhamComponent },
  { path: 'khachhang/thongtingiohang', component: GioHangComponent },
  { path: 'khachhang/dathang', component:  DatHangComponent},
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
