import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { ProductCardComponent } from './components/product-card/product-card.component';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [ProductCardComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [ProductCardComponent],
  providers: [ProductService]
})
export class SharedModulesModule { }
