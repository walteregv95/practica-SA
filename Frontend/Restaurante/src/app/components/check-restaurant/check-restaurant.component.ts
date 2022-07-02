import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-check-restaurant',
  templateUrl: './check-restaurant.component.html',
  styleUrls: ['./check-restaurant.component.css']
})
export class CheckRestaurantComponent implements OnInit {

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

  checkOrderToRestaurant() {
    this.orderService.checkOrder(this.sendorder)
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
