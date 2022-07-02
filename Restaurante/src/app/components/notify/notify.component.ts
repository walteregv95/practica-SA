import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {

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

  sendNotification () {
    this.orderService.notify(this.sendorder)
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
