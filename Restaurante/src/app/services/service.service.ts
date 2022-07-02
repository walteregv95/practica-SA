import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http:HttpClient) { }

  public host = "http://localhost";

  public url = `${this.host}:9500/`;

  public auth_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZWxpdmVyeSIsImlhdCI6MTY1NTE0MTkyNywiZXhwIjoxNjU1NTczOTI3fQ.oQBoiAJ4jFt4ohP3TFoMV12uAd3cLbtj9eDykLHIphg';
  public headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.auth_token}`,
    'User-Agent':   'Mozilla/5.0 (Windows NT 10.0;) Gecko/20100101 Firefox/68.0'
  });



  notify(order: any) {
    return this.http.post(this.url+"notifyDeliveryThatOrderIsReady",order, { 'headers': this.headers });
  }
  delivery(order: any) {
    return this.http.post(this.url+"markOrderAsDelivered",order, { 'headers': this.headers });
  }
  
  createOrder(order: any) {
    console.log(order);
    return this.http.post(this.url+"createOrder",order, { 'headers': this.headers });
  }
  
  
  checkOrder(order: any) {
    return this.http.post(this.url+"checkOrderToRestaurant",order, { 'headers': this.headers });
  }
  checkDelivery(order: any) {
    return this.http.post(this.url+"checkOrderWithDelivery",order, { 'headers': this.headers });
  }

  login(r:string) {
    
    var params = {
      role: r
     };

    return this.http.post(this.url+"login",params);     
  }
}
