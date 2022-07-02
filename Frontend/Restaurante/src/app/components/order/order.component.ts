import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private orderService :ServiceService) { }
  private info : any;

  public Order = {
    orderId: 0,
    dish: "",  
    status: ""
  };


  public sendorder = {
    orderId: 0,
    dish: "",
    status: ""
  }

  ngOnInit(): void {    
    
  }

  createOrder() {
    this.orderService.createOrder(this.sendorder)
    .subscribe(
      data => {
        this.info = data;
          this.Order.orderId = this.info.orderId;
          this.Order.dish = this.info.dish;
          this.Order.status = this.info.status;
  
        }
    );
  }

  /*
  async createOrder() {

    const host = "http://localhost";

    const url = `${host}:9500/`;

    const auth_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZWxpdmVyeSIsImlhdCI6MTY1NTE0MTkyNywiZXhwIjoxNjU1NTczOTI3fQ.oQBoiAJ4jFt4ohP3TFoMV12uAd3cLbtj9eDykLHIphg';

    let reqInstance = axios.create({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`,
      }
    });

    console.log(url+"createOrder");
    let tmp = await reqInstance.post(url+"createOrder",{dish:"pizza"});
    console.log(tmp);
    

    




  }*/


  
  


}
