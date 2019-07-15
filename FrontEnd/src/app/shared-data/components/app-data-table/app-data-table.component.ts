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
  // @ViewChild('contactTemplate') contactTemplate: TemplateRef<any>;
  @ViewChild("myTable") table;

  @Input() loadingIndicator: boolean;

  constructor(private proS: ProductService) {}

  ngOnChanges() {}
  ngOnInit() {}
  ngAfterViewInit() {
    // this.table.bodyComponent.updatePage = function(direction: string): void {
    //   let offset = this.indexes.first / this.pageSize;
    //   if (direction === 'up') {
    //     offset = Math.ceil(offset);
    //   } else if (direction === 'down') {
    //     offset = Math.floor(offset);
    //   }
    //   if (direction !== undefined && !isNaN(offset)) {
    //     this.page.emit({ offset });
    //   }
    // }
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo) {

    this.page.pageNumber = pageInfo.offset;
    this.page.size = pageInfo.pageSize;
    // this.serverResultsService.getResults(this.page).subscribe(pagedData => {
    //   this.page = pagedData.page;

    //   let rows = this.rows;
    //   if (rows.length !== pagedData.page.totalElements) {
    //     rows = Array.apply(null, Array(pagedData.page.totalElements));
    //     rows = rows.map((x, i) => this.rows[i]);
    //   }

    //   // calc start
    //   const start = this.page.pageNumber * this.page.size;

    //   // set rows to our new rows
    //   pagedData.data.map((x, i) => rows[i + start] = x);
    //   this.rows = rows;
    //   this.isLoading = false;
    // });
  }
}
