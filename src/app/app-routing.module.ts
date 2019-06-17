import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardcontentComponent} from './components/dashboardcontent/dashboardcontent.component';
import {CustomercontentComponent} from './components/customercontent/customercontent.component';
import {ItemcontentComponent} from './components/itemcontent/itemcontent.component';
import {OrdercontentComponent} from './components/ordercontent/ordercontent.component';
import {MaincontentComponent} from './components/maincontent/maincontent.component';

const routes: Routes = [
  {
    path: 'dashboard', component: MaincontentComponent
  },
  {
    path: 'dashboardcontent', component: DashboardcontentComponent
  },
  {
    path: 'customercontent', component: CustomercontentComponent
  },
  {
    path: 'itemcontent', component: ItemcontentComponent
  },
  {
    path: 'ordercontent', component: OrdercontentComponent
  },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'dashboard'
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
