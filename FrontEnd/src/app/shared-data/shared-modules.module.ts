import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductService } from "./services/product.service";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { MatCardModule } from "@angular/material/card";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule, MatCardModule, FlexLayoutModule, FormsModule , MatInputModule , MatFormFieldModule],
  exports: [ProductCardComponent, FlexLayoutModule , FormsModule , MatInputModule , MatFormFieldModule],
  providers: [ProductService]
})
export class SharedModulesModule {}
