import { Component, OnInit } from '@angular/core';
import { SanPhamGo } from '../model/sanphamgo';
import { SanPhamGoService } from '../service/sanphamgoservice';

@Component({
  selector: 'app-portfolio',
  templateUrl: 'portfolio.component.html',
  providers: [SanPhamGoService],
})
export class PortfolioComponent implements OnInit{
  sanPhamGos: SanPhamGo[];
  constructor(private sanPhamGoService: SanPhamGoService){}

  ngOnInit(): void{
    this.getSanPhamGos();
  }
  getSanPhamGos():void{
    this.sanPhamGoService.getSanPhamGosUrl().subscribe(sanphamgos => this.sanPhamGos = sanphamgos.json());
  }
}




