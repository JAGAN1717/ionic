import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  httpOption = {
    headers : new HttpHeaders({ 'content-type':'application/json'})
  }

  constructor(private http : HttpClient) { }


  addProduct(product){
    console.log("product",product)
    return this.http.post<any>('http://localhost:7000/api/v2/addItems',product,this.httpOption)
  }

  getProduct(){
    return this.http.get<any>('http://localhost:7000/api/v2/showAllitems',this.httpOption)
  }

  Update(product){
    return this.http.post<any>('http://localhost:7000/api/v2/updateItems',product,this.httpOption)
  }

  Delete(uuid){
    return this.http.delete<any>(`http://localhost:7000/api/v2/deleteItems?uuid=${uuid}`,this.httpOption)
  }

}
