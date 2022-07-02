import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

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

  markOrderAsDelivered() {
    this.orderService.delivery(this.sendorder)
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
