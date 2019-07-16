import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProductService {
  private API_URL = environment.API_ENDPOINT;
  constructor(private http: HttpClient) {}

  getProducts() {
    // const data = [
    //   {
    //     _id: "5d246abfd8be723494c4d2ec",
    //     ProductName: "Lungi",
    //     ProductShortCode: "2323Bt",
    //     Category: "Watch",
    //     Price: 300,
    //     Description: "Watch ",
    //     ImageUrl:
    //       "https://images-na.ssl-images-amazon.com/images/I/71X-m4MRMFL._UL1500_.jpg",
    //     IsBestAchived: true,
    //     CreatedDate: "22/3/5",
    //     Origin: "Watch "
    //   },
    //   {
    //     _id: "5d246abfd8be723494c4d2ec",
    //     ProductName: "Lungi",
    //     ProductShortCode: "2323Bt",
    //     Category: "Watch",
    //     Price: 300,
    //     Description: "Watch ",
    //     ImageUrl:
    //       "https://images-na.ssl-images-amazon.com/images/I/71X-m4MRMFL._UL1500_.jpg",
    //     IsBestAchived: true,
    //     CreatedDate: "22/3/5",
    //     Origin: "Watch "
    //   },
    //   {
    //     _id: "5d246abfd8be723494c4d2ec",
    //     ProductName: "Lungi",
    //     ProductShortCode: "2323Bt",
    //     Category: "Watch",
    //     Price: 300,
    //     Description: "Watch ",
    //     ImageUrl:
    //       "https://images-na.ssl-images-amazon.com/images/I/71X-m4MRMFL._UL1500_.jpg",
    //     IsBestAchived: true,
    //     CreatedDate: "22/3/5",
    //     Origin: "Watch "
    //   },
    //   {
    //     _id: "5d246abfd8be723494c4d2ec",
    //     ProductName: "Lungi",
    //     ProductShortCode: "2323Bt",
    //     Category: "Watch",
    //     Price: 300,
    //     Description: "Watch ",
    //     ImageUrl:
    //       "https://images-na.ssl-images-amazon.com/images/I/71X-m4MRMFL._UL1500_.jpg",
    //     IsBestAchived: true,
    //     CreatedDate: "22/3/5",
    //     Origin: "Watch "
    //   },
    //   {
    //     _id: "5d246abfd8be723494c4d2ec",
    //     ProductName: "Lungi",
    //     ProductShortCode: "2323Bt",
    //     Category: "Watch",
    //     Price: 300,
    //     Description: "Watch ",
    //     ImageUrl:
    //       "https://images-na.ssl-images-amazon.com/images/I/71X-m4MRMFL._UL1500_.jpg",
    //     IsBestAchived: true,
    //     CreatedDate: "22/3/5",
    //     Origin: "Watch "
    //   },
    //   {
    //     _id: "5d246abfd8be723494c4d2ec",
    //     ProductName: "Lungi",
    //     ProductShortCode: "2323Bt",
    //     Category: "Watch",
    //     Price: 300,
    //     Description: "Watch ",
    //     ImageUrl:
    //       "https://images-na.ssl-images-amazon.com/images/I/71X-m4MRMFL._UL1500_.jpg",
    //     IsBestAchived: true,
    //     CreatedDate: "22/3/5",
    //     Origin: "Watch "
    //   },
    //   {
    //     _id: "5d246abfd8be723494c4d2ec",
    //     ProductName: "Lungi",
    //     ProductShortCode: "2323Bt",
    //     Category: "Watch",
    //     Price: 300,
    //     Description: "Watch ",
    //     ImageUrl:
    //       "https://images-na.ssl-images-amazon.com/images/I/71X-m4MRMFL._UL1500_.jpg",
    //     IsBestAchived: true,
    //     CreatedDate: "22/3/5",
    //     Origin: "Watch "
    //   },
    //   {
    //     _id: "5d246abfd8be723494c4d2ec",
    //     ProductName: "Lungi",
    //     ProductShortCode: "2323Bt",
    //     Category: "Watch",
    //     Price: 300,
    //     Description: "Watch ",
    //     ImageUrl:
    //       "https://images-na.ssl-images-amazon.com/images/I/71X-m4MRMFL._UL1500_.jpg",
    //     IsBestAchived: true,
    //     CreatedDate: "22/3/5",
    //     Origin: "Watch "
    //   },
    //   {
    //     _id: "5d246abfd8be723494c4d2ec",
    //     ProductName: "Lungi",
    //     ProductShortCode: "2323Bt",
    //     Category: "Watch",
    //     Price: 300,
    //     Description: "Watch ",
    //     ImageUrl:
    //       "https://images-na.ssl-images-amazon.com/images/I/71X-m4MRMFL._UL1500_.jpg",
    //     IsBestAchived: true,
    //     CreatedDate: "22/3/5",
    //     Origin: "Watch "
    //   }
    // ];
    return this.http.get(this.API_URL);
    // return of(data);
  }

  getProductById(productId) {
    return this.http.get(this.API_URL + `/${productId}`);
  }

  deleteProduct() {}

  updateProduct() {}

  createProduct(productData) {
    return this.http.post(this.API_URL, productData);
  }
}
