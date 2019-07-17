import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyCartComponent } from "./my-cart.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedModulesModule } from "../shared-data/shared-modules.module";
const routes: Routes = [
  {
    path: "",
    component: MyCartComponent
  }
];
@NgModule({
  declarations: [MyCartComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModulesModule]
})
export class MyCartModule {}
