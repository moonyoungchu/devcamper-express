const express = require("express");
const {
  getBootcamps,
  getBootcamp,
  createBootcamps,
  updateBootcamps,
  deleteBootcamps,
  getBootcampsInRadius,
} = require("../controllers/bootcamps");
const router = express.Router();

const {protect, authorize} = require('../middleware/auth');

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius)

router
  .route("/")
  .get(getBootcamps)
  .post(protect,createBootcamps);

router
  .route("/:id")
  .get(getBootcamp)
  .put(protect,updateBootcamps)
  .delete(protect,authorize('publisher'), deleteBootcamps);

// router.get("/", (req, res) => {
//   res.status(200).json({ success: true, msg: "show all " });
// });

module.exports = router;
