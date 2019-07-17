import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { ProductService } from "src/app/shared-data/services/product.service";
import { Router } from "@angular/router";
import { Product } from "src/app/shared-data/models/product.model";
import { CommonService } from "./../../../shared-data/services/common.service";
import { CartService } from 'src/app/shared-data/services/cart.service';

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  rows = [];
  cache: any = {};
  @ViewChild("headerTemplate") headerTemplate: TemplateRef<any>;
  columns = [];
  @ViewChild("actionTemplate") actionTemplate: TemplateRef<any>;
  @ViewChild("imageTemplate") imageTemplate: TemplateRef<any>;
  loadingIndicator: boolean;
  constructor(
    private router: Router,
    private productService: ProductService,
    private commonService: CommonService,
    private cartService:CartService
  ) {}

  ngOnInit() {
    console.log(this.headerTemplate);
    this.columns = [
      {
        name: "Image",
        prop: "ImageUrl",
        headerTemplate: this.headerTemplate,
        cellTemplate: this.imageTemplate,
        width: 200,
        draggable: false
      },
      {
        name: "ProductName",
        prop: "ProductName",
        headerTemplate: this.headerTemplate,
        width: 400,
        draggable: false
      },
      {
        name: "ProductShortCode",
        prop: "ProductShortCode",
        headerTemplate: this.headerTemplate,
        width: 300,
        draggable: false
      },
      {
        name: "Price",
        prop: "Price",
        headerTemplate: this.headerTemplate,
        width: 300,
        draggable: false
      },
      {
        name: "Category",
        prop: "Category",
        headerTemplate: this.headerTemplate,
        width: 300,
        draggable: false
      },
      {
        name: "Actions",
        prop: "Actions",
        headerTemplate: this.headerTemplate,
        cellTemplate: this.actionTemplate,
        width: 300,
        draggable: false
      }
    ];

    this.getProducts();
  }

  getProducts() {
    this.loadingIndicator = true;
    this.productService.getProducts().subscribe(res => {
      console.log(res);
      const data = res["data"];
      this.rows = data;
      this.loadingIndicator = false;
      // console.log(this.rows);
      // const page: Page = {
      //   pageNumber: 0,
      //   totalPages: 1,
      //   totalElements: 9,
      //   size: 3
      // };
      // this.page = page;
    });
  }

  navigateToEdit(product: Product) {
    // debugger;
    this.router.navigate([`products/edit/${product._id}`]);
  }

  delete(product: Product) {
    if (this.isProductAlreadyInCart(product._id) > -1) {
      this.commonService.showMessage("error", "Product already in Cart . Product  can not be  deleted");
    } else {
      this.productService.deleteProduct(product._id).subscribe(response => {
        if (response && response["result"]["success"] === true) {
          this.commonService.showMessage(
            "success",
            "Product deleted successfully"
          );
          this.rows = this.rows.filter(_product => _product._id !== product._id);
        } else {
          this.commonService.showMessage("error", "Product can not be  deleted");
        }
      });

    }

  }

  isProductAlreadyInCart(productId) {
   const isExist =  this.cartService.itemExistIncart(productId);
   return isExist;
  }

  navigateToCreate() {
    this.router.navigate([`products/create`]);
  }

  view(product: Product) {
    this.router.navigate([`products/detail/` + product._id]);
  }
}
