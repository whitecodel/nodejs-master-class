const router = require("express").Router();
const StudentController = require("../controllers/studentController");

router.get("/get", (req, res) => StudentController.getStudent(req, res));
router.post("/create", StudentController.createStudent);
router.put("/update", StudentController.updateStudent);
router.delete("/delete", StudentController.deleteStudent);

module.exports = router;
