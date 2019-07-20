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
import { AppDataTableComponent } from "./components/app-data-table/app-data-table.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { AppLoaderComponent } from "./components/app-loader/app-loader.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
@NgModule({
  declarations: [
    ProductCardComponent,
    AppDataTableComponent,
    AppLoaderComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    NgxDatatableModule,
    MatProgressSpinnerModule
  ],
  exports: [
    ProductCardComponent,
    AppDataTableComponent,
    FlexLayoutModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    NgxDatatableModule,
    MatProgressSpinnerModule,
    AppLoaderComponent
  ],
  providers: [ProductService]
})
export class SharedModulesModule {}
