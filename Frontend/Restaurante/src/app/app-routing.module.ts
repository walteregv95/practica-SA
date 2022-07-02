import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckDeliveryComponent } from './components/check-delivery/check-delivery.component';
import { CheckRestaurantComponent } from './components/check-restaurant/check-restaurant.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { FoodComponent } from './components/food/food.component';
import { NotifyComponent } from './components/notify/notify.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  { path: 'home', component :  FoodComponent},
  { path: 'order', component :  OrderComponent},
  { path: 'notify', component :  NotifyComponent},
  { path: 'delivery', component :  DeliveryComponent},
  { path: 'checkDelivery', component :  CheckDeliveryComponent},
  { path: 'checkRestaurant', component :  CheckRestaurantComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
