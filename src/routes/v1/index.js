import express from "express";
const router = express.Router();
import { InfoController } from "../../controllers/index.js";


/*
router.get("/info", (req, res) => {
  // Link : http://localhost:3000/api/v1/info
  return res.json({ ms: "OK" });
});
*/
// Replace the above code using this current clean code



router.get("/info", InfoController);

export default router;
