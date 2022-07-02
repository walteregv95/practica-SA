import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FoodComponent } from './components/food/food.component';
import { OrderComponent } from './components/order/order.component';
import { NotifyComponent } from './components/notify/notify.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { CheckRestaurantComponent } from './components/check-restaurant/check-restaurant.component';
import { CheckDeliveryComponent } from './components/check-delivery/check-delivery.component';
import { ServiceService } from './services/service.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FoodComponent,
    OrderComponent,
    NotifyComponent,
    DeliveryComponent,
    CheckRestaurantComponent,
    CheckDeliveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
