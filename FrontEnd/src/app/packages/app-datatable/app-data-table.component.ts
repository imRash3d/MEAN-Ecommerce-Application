import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from "@angular/core";

import { ProductService } from "../../shared-data/services/product.service";

@Component({
  selector: "app-data-table",
  templateUrl: "./app-data-table.component.html",
  styleUrls: ["./app-data-table.component.scss"]
})
export class AppDataTableComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() rows = [];
  @Input() columns = [];
  @ViewChild("myTable") table;
  @Input() pageConfig;
  @Input() loadingIndicator: boolean;
  @Output() onPageChange = new EventEmitter();
  constructor(private proS: ProductService) {}

  ngOnChanges() {}
  ngOnInit() {}
  ngAfterViewInit() {}

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo) {
    this.onPageChange.emit(pageInfo);
  }
}
