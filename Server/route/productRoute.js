const router = require("express").Router();
const Product = require("../model/Product");
router.get("/", (req, res, next) => {
  Product.find()
    .then(data =>
      res.status(201).json({
        messge: "Found",
        data
      })
    )
    .catch(err => {
      res.status(500).json({
        message: "Something Wrong !!!"
      });
    });
});

router.post("/", (req, res, next) => {
  const product = new Product({
    ProductName: req.body.ProductName,
    ProductShortCode: req.body.ProductShortCode,
    Category: req.body.Category,
    Price: req.body.Price,
    Description: req.body.Description,
    ImageUrl: req.body.ImageUrl,
    IsBestAchived: req.body.IsBestAchived,
    CreatedDate: req.body.CreatedDate,
    Origin: req.body.Origin
  });
  product
    .save()
    .then(data =>
      res.status(201).json({
        message: "Product added Successfully",
        result: {
          data: product,
          success: true
        }
      })
    )
    .catch(err => console.log(err));
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Product.findById(id)
    .then(data =>
      res.status(201).json({
        result: {
          data
        }
      })
    )
    .catch(err => {
      res.status(500).json({
        message: "Something Wrong !!!"
      });
    });
});

router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  let updatedProduct = {};
  for (let key in req.body) {
    updatedProduct[key] = req.body[key];
  }

  Product.findByIdAndUpdate(id, { $set: updatedProduct })
    .then(data =>
      res.status(201).json({
        messge: "Product updated successfully",
        result: {
          data: updatedProduct,
          success: true
        }
      })
    )
    .catch(err => {
      res.status(500).json({
        message: "Something Wrong !!!"
      });
    });
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  Product.findByIdAndRemove(id)
    .then(data =>
      res.status(201).json({
        messge: "Product Deleted Successfully",
        result: {
          success: true
        }
      })
    )
    .catch(err => {
      res.status(500).json({
        message: "Something Wrong !!!"
      });
    });
});
module.exports = router;
