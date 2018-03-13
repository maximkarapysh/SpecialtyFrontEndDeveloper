import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsDetailComponent } from './products/products-detail/products-detail.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  { path: "products", component: ProductsComponent },
  { path: "admin", component: AdminComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "product/:id", component: ProductsDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
