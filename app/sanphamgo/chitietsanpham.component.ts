import { Component, OnInit } from '@angular/core';
import { SanPhamGo } from '../model/sanphamgo';
import { GioHangItem } from '../model/giohangitem';

import { SanPhamGoService } from '../service/sanphamgoservice';
import { GioHangService } from '../service/giohang.dataservice';

import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common";
@Component({
  selector: 'app-chitietsanpham',
  templateUrl: 'chitietsanpham.component.html',
  styleUrls: ['chitietsanpham.component.css'],
  providers: [SanPhamGoService],
})
export class ChiTietSanPhamComponent implements OnInit {
  sanPhamGos: SanPhamGo[];
  selectedSanPham: SanPhamGo;
  id: string;
  chuoiUrl: string;
  chuoiArr: string[];
  private gioHangItem: GioHangItem;
  
  constructor(
    private sanPhamGoService: SanPhamGoService,
    private gioHangService: GioHangService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }


  getSanPhamGos(): void {
    this.sanPhamGoService.getSanPhamGosUrl().subscribe(sanPhamGos => this.sanPhamGos = sanPhamGos.json());
  }

  getSanPhamGosID(id: number): void {
    this.sanPhamGoService.getSanPhamID(id).subscribe(sanPhamGos => this.selectedSanPham = sanPhamGos);
  }

  ngOnInit(): void {
    // this.getSanPhamGos();
    let chuoiUrl = this.route.snapshot.params["id"];
    this.chuoiArr = chuoiUrl.split("-");
    this.id = this.chuoiArr[this.chuoiArr.length - 1];
    this.getSanPhamGosID(Number.parseInt(this.id));
    this.gioHangItem = new GioHangItem();
  }
  onSelect(sanPham: SanPhamGo): void {
    this.selectedSanPham = sanPham;
  }
  
  getThemVaoGioHang(soLuong: number) {
    this.gioHangItem.masanpham = this.selectedSanPham.masanpham;
    this.gioHangItem.tensanpham = this.selectedSanPham.tensanpham;
    if (this.selectedSanPham.dongiakhuyenmai > 0){
      this.gioHangItem.dongia = this.selectedSanPham.dongiakhuyenmai;
    }else{
      this.gioHangItem.dongia = this.selectedSanPham.dongia;
    }
    this.gioHangItem.soluong = soLuong;
    this.gioHangService.themVaoGioHang(this.gioHangItem);
  }
}




