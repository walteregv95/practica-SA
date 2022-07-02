import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-check-delivery',
  templateUrl: './check-delivery.component.html',
  styleUrls: ['./check-delivery.component.css']
})
export class CheckDeliveryComponent implements OnInit {

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

  checkOrderWithDelivery() {
    this.orderService.checkDelivery(this.sendorder)
    .subscribe(
      data => {
      this.info = data;
        this.Order.orderId = this.info.orderId;
        this.Order.dish = this.info.dish;
        this.Order.status = this.info.status;

      }
    );
  }

}
