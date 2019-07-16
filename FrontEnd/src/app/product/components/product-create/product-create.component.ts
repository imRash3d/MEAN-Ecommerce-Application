import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ShopUpConfig } from "src/shopup-config/shop-up.confing";
import { ProductService } from "./../../../shared-data/services/product.service";
import { CommonService } from "./../../../shared-data/services/common.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.scss"]
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  productCategoryDropDown = ShopUpConfig.ProductCategory;
  submitForm = false;
  subscriptionList: Subscription[] = [];
  productId: string;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private productService: ProductService,
    private commonService: CommonService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.activatedRoute);
    this.subscriptionList.push(
      this.activatedRoute.params.subscribe(param => {
        if (param["productId"]) {
          this.productId = param["productId"];
          this.getProductData();
        }
      })
    );
    this.initFrom();
  }
  cancel() {
    this.router.navigate(["./products"]);
  }

  initFrom() {
    this.productForm = this.fb.group({
      ProductName: ["", Validators.required],
      ProductShortCode: ["", Validators.required],
      Category: [this.productCategoryDropDown[0].key, Validators.required],
      Price: ["", Validators.required],
      Description: ["", Validators.required],
      ImageUrl: ["", Validators.required],
      IsBestAchived: false,
      CreatedDate: ["", Validators.required],
      Origin: ["", Validators.required]
    });
  }

  submit() {
    // console.log(this.productForm.value);
    this.submitForm = true;
    this.productService
      .createProduct(this.productForm.value)
      .subscribe(response => {
        //  console.log(response);
        if (response && response["result"]["success"] === true) {
          this.commonService.showMessage(
            "success",
            "Product created successfully"
          );
          this.productForm.reset();
        } else {
          this.commonService.showMessage(
            "error",
            "Product can not be  created"
          );
        }
        this.submitForm = false;
      });
  }

  getProductData() {
    // this.subscriptionList.push(
    //   this.productService.getProductById(this.productId).subscribe(response => {
    //     console.log(response);
    //   })
    // );
  }
}
