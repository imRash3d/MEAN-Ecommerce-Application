import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./components/product-list/product.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedModulesModule } from "../shared-data/shared-modules.module";
import { ProductCreateComponent } from "./components/product-create/product-create.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
const routes: Routes = [
  {
    path: "",
    component: ProductComponent
  },
  {
    path: "detail/:productId",
    component: ProductDetailsComponent
  },
  {
    path: "edit/:productId",
    component: ProductCreateComponent
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
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModulesModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class ProductModule {}
