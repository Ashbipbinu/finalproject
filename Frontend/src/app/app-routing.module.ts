import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { NewCatComponent } from './new-cat/new-cat.component';
import { NewItemComponent } from './new-item/new-item.component';
import { UpdateCatComponent } from './update-cat/update-cat.component';

const routes: Routes = [
  
  {path:"",redirectTo:"catlist",pathMatch: "full"},
  {path:"new-cat", component: NewCatComponent},
  {path:"catlist",component:MainPageComponent},
  {path:"update-cat",component:UpdateCatComponent},
  {path:"catlist/:catId",component:MainPageComponent},
  {path:"catlist/:catId/new-item", component: NewItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
