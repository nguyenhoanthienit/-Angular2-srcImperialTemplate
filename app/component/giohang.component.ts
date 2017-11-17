import { Component, OnInit } from '@angular/core';
import { GioHangService } from "../service/giohang.dataservice"
import { GioHangItem } from "../model/giohangitem";
import { Router, ActivatedRoute } from "@angular/router"
@Component({
    selector: 'app-giohang',
    templateUrl: 'giohang.component.html',
})
export class GioHangComponent implements OnInit {
    private gioHangS: GioHangItem[];
    constructor(
        private gioHangService: GioHangService,
        private router : Router
    ) { }
    ngOnInit(): void {
        this.thongTinGioHang();
    }
    thongTinGioHang() {
        this.gioHangS = this.gioHangService.getContents();
    }

    capNhatGioHang(event: any) {
        const id = event.target.id;
        const maSanPham = id.substring(2);
        let soLuong = (event.target.value);
        
        if (soLuong.length >= 0) {
            /*if (soLuong == "")
                soLuong = 0;*/
            soLuong = Number.parseInt(soLuong);
            if (isNaN(soLuong) || soLuong < 0) {
                for (let i = 0; i < this.gioHangS.length; i++) {
                    if (maSanPham == this.gioHangS[i].masanpham) {
                        event.target.value = this.gioHangS[i].soluong;
                        break;
                    }
                }
            }
            else {
                for (let i = 0; i < this.gioHangS.length; i++){
                    if (maSanPham == this.gioHangS[i].masanpham) {
                        // if (this.gioHangS[i].soluong == 0){
                        //     this.gioHangService.xoaItemGioHang(this.gioHangS[i]);
                        //     this.thongTinGioHang();
                        // }
                        // else{
                            this.gioHangS[i].soluong = soLuong;
                            this.gioHangService.capNhatVaoGioHang(this.gioHangS[i]);
                            this.thongTinGioHang();
                        // }          
                    }
                }
            }
        }
    }
    kiemTraGioHang(event: any) {
        const id = event.target.id;
        const maSanPham = id.substring(2);
        let soLuong = Number.parseInt(event.target.value);
        if (isNaN(soLuong) || soLuong < 0) {
            for (let i = 0; i < this.gioHangS.length; i++) {
                if (maSanPham == this.gioHangS[i].masanpham) {
                    event.target.value = this.gioHangS[i].soluong;
                    break;
                }
            }
        }
        else {
            event.target.value = soLuong;
        }
    }

    datHang(){
        this.router.navigateByUrl('khachhang/dathang');
    }
}
