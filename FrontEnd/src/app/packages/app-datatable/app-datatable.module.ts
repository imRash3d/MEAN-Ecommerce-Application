import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppDataTableComponent } from "./app-data-table.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
@NgModule({
  declarations: [AppDataTableComponent],
  imports: [CommonModule, NgxDatatableModule],
  exports: [AppDataTableComponent, NgxDatatableModule]
})
export class AppDatatableModule {}
