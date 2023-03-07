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

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius)

router.route("/").get(getBootcamps).post(createBootcamps);

router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamps)
  .delete(deleteBootcamps);

// router.get("/", (req, res) => {
//   res.status(200).json({ success: true, msg: "show all " });
// });

module.exports = router;
