import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpService } from "./http.service";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private API_URL = environment.API_ENDPOINT;
  constructor(private http: HttpService) {}

  getProducts(pagination?) {
    console.log(pagination);
    pagination["sortKey"] = "_id";
    const url =
      this.API_URL +
      `?page=${pagination.pageNumber}&limit=${pagination.limit}&sortKey=${
        pagination.sortKey
      }`;
    return this.http.get(url);
  }

  getProductById(productId) {
    return this.http.get(this.API_URL + `/${productId}`);
  }

  deleteProduct(productId) {
    return this.http.delete(this.API_URL + `/${productId}`);
  }

  updateProduct(productId, data) {
    return this.http.put(this.API_URL + `/${productId}`, data);
  }

  createProduct(productData) {
    return this.http.post(this.API_URL, productData);
  }
}
