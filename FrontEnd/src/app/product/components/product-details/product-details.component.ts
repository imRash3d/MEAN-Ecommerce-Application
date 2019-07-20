import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/shared-data/services/product.service";
import { Product } from "./../../../shared-data/models/product.model";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})
export class ProductDetailsComponent implements OnInit {
  subscriptionList: Subscription[] = [];
  productId: string;
  product: Product;
  constructor(
    private router: Router,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscriptionList.push(
      this.activatedRoute.params.subscribe(param => {
        this.productId = param["productId"];
        console.log(this.productId);
        this.getProductById();
      })
    );
  }

  getProductById() {
    this.subscriptionList.push(
      this.productService.getProductById(this.productId).subscribe(response => {
        this.product = response["result"]["data"];
        console.log(response);
      })
    );
  }
  backToList() {
    this.router.navigate(["./products"]);
  }
}
