import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './admin/components/create-product/create-product.component';
import { EditProductComponent } from './admin/components/edit-product/edit-product.component';
import { ListProductComponent } from './admin/components/list-product/list-product.component';


const routes: Routes = [
  {path: '', redirectTo: '/product/list', pathMatch: 'full'},
  {path: 'product/list', component: ListProductComponent},
  {path: 'product/create', component: CreateProductComponent},
  {path: 'product/edit', component: EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
