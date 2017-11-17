import { Component } from '@angular/core';
import { KhachHang } from "../model/khachhang"
import { GiaoHang } from "../model/khachhang"

import { NgForm } from "@angular/forms"
@Component({
  selector: 'app-dathang',
  templateUrl: 'dathang.component.html',
  styleUrls: ['dathang.component.css']
})
export class DatHangComponent {
	khachHang = new KhachHang("", "", "", "");

	phuongThucThanhToan = ["Thanh toán tiền mặt khi nhận hàng", 
							"Thẻ ATM nội địa/Internet Banking (Miễn phí thanh toán)", 
							"Thanh toán bằng thẻ quốc tế Visa, Master, JCB"
						];
	giaoHang = new GiaoHang("", "");

	submitted = false;
	
	onSubmit(form : NgForm){
		this.submitted = true;
	}
	newNguoiDung(){
		this.khachHang = new KhachHang("", "", "", "");
		this.giaoHang = new GiaoHang("", "");

		this.submitted = true;
	}
}
