import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductService } from "./services/product.service";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { MatCardModule } from "@angular/material/card";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { HttpClientModule } from "@angular/common/http";
import { AppDataTableComponent } from './components/app-data-table/app-data-table.component';
@NgModule({
  declarations: [ProductCardComponent, AppDataTableComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule
  ],
  exports: [
    ProductCardComponent,
    FlexLayoutModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [ProductService]
})
export class SharedModulesModule {}
