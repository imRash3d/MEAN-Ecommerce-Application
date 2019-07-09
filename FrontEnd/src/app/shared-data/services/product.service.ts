import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {
  constructor() {}

  getProduct() {
    return [
      {
        _id: "5d246abfd8be723494c4d2ec",
        ProductName: "Lungi",
        ProductShortCode: "2323Bt",
        Category: "Watch",
        Price: 300,
        Description: "Watch ",
        ImageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71X-m4MRMFL._UL1500_.jpg",
        IsBestAchived: true,
        CreatedDate: "22/3/5",
        Origin: "Watch "
      },
      {
        _id: "5d246abfd8be723494c4d2ec",
        ProductName: "Lungi",
        ProductShortCode: "2323Bt",
        Category: "Watch",
        Price: 300,
        Description: "Watch ",
        ImageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71X-m4MRMFL._UL1500_.jpg",
        IsBestAchived: true,
        CreatedDate: "22/3/5",
        Origin: "Watch "
      },
      {
        _id: "5d246abfd8be723494c4d2ec",
        ProductName: "Lungi",
        ProductShortCode: "2323Bt",
        Category: "Watch",
        Price: 300,
        Description: "Watch ",
        ImageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71X-m4MRMFL._UL1500_.jpg",
        IsBestAchived: true,
        CreatedDate: "22/3/5",
        Origin: "Watch "
      },
      {
        _id: "5d246abfd8be723494c4d2ec",
        ProductName: "Lungi",
        ProductShortCode: "2323Bt",
        Category: "Watch",
        Price: 300,
        Description: "Watch ",
        ImageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71X-m4MRMFL._UL1500_.jpg",
        IsBestAchived: true,
        CreatedDate: "22/3/5",
        Origin: "Watch "
      }
    ];
  }

  getProductById() {}

  deleteProduct() {}

  updateProduct() {}
}
