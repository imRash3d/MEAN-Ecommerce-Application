import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Product } from "src/app/shared-data/models/product.model";
import { ProductService } from "src/app/shared-data/services/product.service";
import { CartService } from "src/app/shared-data/services/cart.service";
import { Page } from "src/app/shared-data/models/data-table.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  private subscriptionList: Subscription[] = [];
  products: Product[] = [];
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  pageConfig: Page;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.pageConfig = {
      limit: 10,
      pageNumber: 0
    };
    this.getProductList();
  }

  getProductList() {
    this.subscriptionList.push(
      this.productService.getProducts(this.pageConfig).subscribe(response => {
        if (this.products.length) {
          this.products = [...this.products, ...response["data"]];
        } else {
          this.products = [...response["data"]];
        }
      })
    );
  }

  onScrollDown() {
    console.log("ccc");
    this.pageConfig.pageNumber++;
    this.getProductList();
  }
}
