const express = require("express");
const router = express.Router();
const { getAllUsers } = require("./getAllUsers");
const { createUser } = require("./createUser");
const { updateUser } = require("./UpdateUser");

console.log("Executing router file.");

router.use((req, res, next) => {
  let { headers } = req;
  let routeAuth = headers["route_auth"];

  // ! // Check for Invlaid Key //
  if (!routeAuth) return res.status(500).send("Unknown Auth.");

  // ! // Check for Valid Auth //
  if (routeAuth !== process.env.ROUTE_AUTH_STRING)
    return res.status(500).send("Invalid Auth.");
  console.log({ routeAuth });
  return next();
});

router.get("/all", getAllUsers);
router.post("/create", createUser);
router.put("/:email", updateUser);

module.exports = router;
