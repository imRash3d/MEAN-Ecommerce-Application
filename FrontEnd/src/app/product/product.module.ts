import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./components/product-list/product.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedModulesModule } from "../shared-data/shared-modules.module";
import { ProductCreateComponent } from "./components/product-create/product-create.component";
const routes: Routes = [
  {
    path: "",
    component: ProductComponent
  },
  {
    path: "detail/:id",
    component: ProductDetailsComponent
  },
  {
    path: "create",
    component: ProductCreateComponent
  }
];
@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent,
    ProductCreateComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModulesModule]
})
export class ProductModule {}
