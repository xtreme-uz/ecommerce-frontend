import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductComponent } from './admin/components/list-product/list-product.component';


const routes: Routes = [
  {path: '', redirectTo: '/product/list', pathMatch: 'full'},
  {path: 'product/list', component: ListProductComponent},
  {path: 'product/create', component: ListProductComponent},
  {path: 'product/edit', component: ListProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
