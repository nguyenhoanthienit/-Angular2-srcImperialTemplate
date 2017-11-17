import { Headers, Http } from '@angular/http';
import { GioHangItem } from '../model/giohangitem';
import { Injectable, EventEmitter, Output } from '@angular/core';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class GioHangService {
  constructor(private http: Http) { }

  themVaoGioHang(giohangItem: GioHangItem) {
    const ObjGH = {
      masanpham: giohangItem.masanpham,
      tensanpham: giohangItem.tensanpham,
      soluong: giohangItem.soluong,
      dongia: giohangItem.dongia,
    };
    const gg = sessionStorage.getItem('giohang');
    if (gg) {
      const obj = JSON.parse(gg);
      let i;
      for (i = 0; i < obj.length; i++) {
        if (obj[i].masanpham === giohangItem.masanpham) {
          obj[i].soluong = (Number.parseInt(obj[i].soluong) * 1 + giohangItem.soluong * 1).toString();
          break;
        }

      }
      if (i >= obj.length) {
        obj.push(ObjGH);
      }
      const myJString = JSON.stringify(obj);
      sessionStorage.setItem('giohang', myJString);
    } else {
      const myJString = JSON.stringify(ObjGH);
      sessionStorage.setItem('giohang', '[' + myJString + ']');
    }
  }
  capNhatVaoGioHang(giohangItem: GioHangItem) {
    const ObjGH = {
      masanpham: giohangItem.masanpham,
      tensanpham: giohangItem.tensanpham,
      soluong: giohangItem.soluong,
      dongia: giohangItem.dongia,
    };
    const gg = sessionStorage.getItem('giohang');
    if (gg) {
      const obj = JSON.parse(gg);
      let i;
      for (i = 0; i < obj.length; i++) {
        if (obj[i].masanpham === giohangItem.masanpham) {
          obj[i].soluong = (giohangItem.soluong * 1).toString();
          break;
        }
      }
      if (i >= obj.length) {
        obj.push(ObjGH);
      }
      if (obj[i].soluong == '0') {
        obj.splice(i, 1);
      }
      const myJString = JSON.stringify(obj);
      sessionStorage.setItem('giohang', myJString);
    } else {
      const myJString = JSON.stringify(ObjGH);
      sessionStorage.setItem('giohang', '[' + myJString + ']');
    }
  }
  xoaItemGioHang(giohangItem: GioHangItem){
    let arrGioHangMoi: GioHangItem[];
    const gg = sessionStorage.getItem('giohang');
    if (gg){
      const obj = JSON.parse(gg);
      let i;
      for (i = 0; i < obj.length; i++) {
        if (obj[i].masanpham != giohangItem.masanpham) {
          arrGioHangMoi.push(obj[i]);
        }
      }
      const myJString = JSON.stringify(arrGioHangMoi);
      sessionStorage.setItem('giohang', myJString);
      sessionStorage.clear(); 
    }
  }
  getTotalItem(): number {
    const gg = sessionStorage.getItem('giohang');
    if (gg) {
      const obj = JSON.parse(gg);
      let tsl: number;
      tsl = 0;
      let i;
      for (i = 0; i < obj.length; i++) {
        tsl += Number.parseInt(obj[i].soluong);
      }
      return tsl;
    } else {
      return 0;
    }
  }
  getTotal(): number {
    const gg = sessionStorage.getItem('giohang');
    if (gg) {
      const obj = JSON.parse(gg);
      let tt: number;
      tt = 0;
      let i;
      for (i = 0; i < obj.length; i++) {
        tt += Number.parseInt(obj[i].gia) * Number.parseInt(obj[i].so_luong);
      }
      return tt;
    } else {
      return 0;
    }
  }
  getContents(): GioHangItem[] {
    const gg = sessionStorage.getItem('giohang');
    if (gg) {
      const obj = JSON.parse(gg);
      return obj;
    } else {
      return null;
    }
  }
}
