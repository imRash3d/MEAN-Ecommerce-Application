import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { CartViewToggleComponent } from "./components/cart-view-toggle/cart-view-toggle.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [HeaderComponent, CartViewToggleComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, CartViewToggleComponent]
})
export class HeaderModule {}
