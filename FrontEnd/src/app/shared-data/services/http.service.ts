import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get(url, option?) {
    return this.http.get(url, option);
  }

  post(url, body, option?) {
    return this.http.post(url, body, option);
  }

  delete(url, option?) {
    return this.http.delete(url, option);
  }
  put(url, body , option?) {
    return this.http.put(url, body);
  }
}
