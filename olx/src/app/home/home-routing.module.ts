import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ChatsComponent } from './chats/chats.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { HomePage } from './home.page';
import { MyAdsComponent } from './my-ads/my-ads.component';
import { SellComponent } from './sell/sell.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { 
        path: 'home',
        component: HomeViewComponent,
      },
      {
        path: 'chats',
        component: ChatsComponent
      },

      {
        path:'accounts',
        component: AccountComponent
      },

      {
        path: 'sell',
        component: SellComponent
      },
      {
        path: 'my-ads',
        component: MyAdsComponent
      }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
