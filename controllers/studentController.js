class StudentController {
    static getStudent = (req, res) => {
        console.log(req.query.name);
        res.send("Hello World From GET");
    };

    static createStudent = (req, res) => {
        console.log(req.body.name);
        return res.send("Hello World From POST");
    };

    static updateStudent = (req, res) => {
        console.log(req.params.id);
        return res.send("Hello World From PUT");
    };

    static deleteStudent = (req, res) => {
        console.log(req.params.id);
        return res.send("Hello World From DELETE");
    };
}

module.exports = StudentController;
