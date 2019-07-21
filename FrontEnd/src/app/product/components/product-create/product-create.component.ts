import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ShopUpConfig } from "src/shopup-config/shop-up.confing";
import { ProductService } from "./../../../shared-data/services/product.service";
import { CommonService } from "./../../../shared-data/services/common.service";
import { Subscription } from "rxjs";
import { CartService } from "./../../../shared-data/services/cart.service";

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
  onEdit: boolean;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private productService: ProductService,
    private commonService: CommonService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    console.log(this.activatedRoute);
    this.subscriptionList.push(
      this.activatedRoute.params.subscribe(param => {
        // console.log(param);
        if (param["productId"]) {
          this.productId = param["productId"];
          this.getProductData();
          this.onEdit = true;
        }
      })
    );
    this.initFrom();
  }
  backToList() {
    setTimeout(() => {
      this.router.navigate(["./products"]);
    }, 300);
  }

  initFrom(data?) {
    this.productForm = this.fb.group({
      ProductName: [data ? data.ProductName : "", Validators.required],
      ProductShortCode: [
        data ? data.ProductShortCode : "",
        Validators.required
      ],
      Category: [this.productCategoryDropDown[0].key, Validators.required],
      Price: [data ? data.Price : "", Validators.required],
      Description: [data ? data.Description : ""],
      ImageUrl: [data ? data.ImageUrl : "", Validators.required],
      IsBestAchived: false,
      CreatedDate: [data ? data.CreatedDate : "", Validators.required],
      Origin: [data ? data.Origin : "", Validators.required]
    });
  }

  submit() {
    // console.log(this.productForm.value);
    this.submitForm = true;
    if (this.onEdit) {
      this.editProduct();
    } else {
      this.createProduct();
    }
  }

  editProduct() {
    this.productService
      .updateProduct(this.productId, this.productForm.value)
      .subscribe(response => {
        console.log(response);

        if (response && response["result"]["success"] === true) {
          this.cartService.updateCartDataByProductId(
            this.productId,
            this.productForm.value
          );
          this.showMessage("success", "Product updated successfully");
          this.backToList();
        } else {
          this.showMessage("error", "Product can not be  created");
        }
        this.submitForm = false;
      });
  }

  createProduct() {
    this.productService
      .createProduct(this.productForm.value)
      .subscribe(response => {
        //  console.log(response);
        if (response && response["result"]["success"] === true) {
          this.showMessage("success", "Product  created successfully");
          this.backToList();
        } else {
          this.showMessage("error", "Product can not be  created");
        }
        this.submitForm = false;
      });
  }

  showMessage(type, message: string) {
    this.commonService.showMessage(type, message);
  }
  getProductData() {
    this.subscriptionList.push(
      this.productService.getProductById(this.productId).subscribe(response => {
        this.initFrom(response["result"]["data"]);
      })
    );
  }
}
