const { Router } = require('express')
const router = Router()
const fileMiddleware = require("../middleware/fileUpload")
const adminController = require("../controller/adminController")

router
    .route("/")
    .get(adminController.mainAdmin);
/* +++++++++++++++++++++++++++++++++++++++ Category ++++++++++++++++++++++++++++++++++++++++++++++ */

router
    .route("/category")
    .get(adminController.GetReadCategory);

router
    .route("/category/add")
    .get(adminController.GetAddCategory)
    .post(fileMiddleware.single("img"), adminController.PostAddCategory);
router
    .route("/category/:id")
    .get(adminController.GetIDCategory)
    .delete(adminController.IdDeleteCategory);
router
    .route("/category/edit/:id")
    .get(adminController.GetEditCategory)
    .put(fileMiddleware.single("img"), adminController.PostEditCategory);
/* +++++++++++++++++++++++++++++++++++++++ Worker ++++++++++++++++++++++++++++++++++++++++++++++ */

router
    .route("/worker")
    .get(adminController.GetReadWorker);
router
    .route("/worker/add")
    .get(adminController.GetAddWorker)
    .post(fileMiddleware.single("img"), adminController.PostAddWorker);
router
    .route("/worker/:id")
    .get(adminController.GetIDWorker)
    .delete(adminController.IdDeleteWorker);
router
    .route("/worker/edit/:id")
    .get(adminController.GetEditWorker)
    .put(fileMiddleware.single("img"), adminController.PostEditWorker);

module.exports = router;