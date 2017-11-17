import { Injectable, EventEmitter, Output } from "@angular/core";
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from "@angular/http";
import { SanPhamGo } from "../model/sanphamgo"
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';

@Injectable()
export class SanPhamGoService{
    private headers = new Headers({"Content-Type":"application/json"});
    private sanPhamGoUrl = "http://192.168.1.5:8080/services_san_pham_go/";
    constructor(private http:Http){}
    getSanPhamGosUrl(){
        return this.http.get(this.sanPhamGoUrl + 'api_san_pham.php');
    }
    private handleError(error : any): Promise<any>{
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);
    } 
    
    //lấy id sản phẩm gỗ
    public getSanPhamID(id : number) : Observable<SanPhamGo>{
        return this.http.get(this.sanPhamGoUrl + 'api_san_pham_id.php?id=' + id).map((res:Response) => <SanPhamGo>res.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}