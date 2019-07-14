import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(private toastr: ToastrService) {}

  showMessage(type: "success" | "error", message) {
    if (type === "success") {
      this.toastr.success(message);
    } else {
      this.toastr.error(message);
    }
  }
}
