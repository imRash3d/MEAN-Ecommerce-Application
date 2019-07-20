import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Input,
  OnChanges,
  TemplateRef
} from "@angular/core";
import { Page, CorporateEmployee } from "../../models/data-table.model";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-data-table",
  templateUrl: "./app-data-table.component.html",
  styleUrls: ["./app-data-table.component.scss"]
})
export class AppDataTableComponent implements OnInit, AfterViewInit, OnChanges {
  page = new Page();
  @Input() rows = [];
  cache: any = {};
  @Input() columns = [];
  @ViewChild("myTable") table;

  @Input() loadingIndicator: boolean;

  constructor(private proS: ProductService) {}

  ngOnChanges() {}
  ngOnInit() {
    this.rows.length = 5;
  }
  ngAfterViewInit() {}

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    this.page.size = 5;
    console.log("c");
  }
}
