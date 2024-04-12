import mongoose from "mongoose";

import { studentModel } from "./models/studentModel.js";
import { courseModel } from "./models/courseModel.js";

const enviromet = async () => {
    await mongoose.connect("mongodb://localhost:27017/class-16");

    /*
    // Insert Data
     await studentModel.create({
         first_name: "Jean",
         last_name: "Montes De Oca",
         email: "j.oca@gmail.com",
         gender: "male"
     })
 
     await courseModel.create({
         title: "Diseño UI/UX ",
         description: "Canvas",
         difficulty: 1,
         topics: ["Figma", "Canvas", "Javascript"],
         proffesor: "Joaquin Cejas"
     })
     */

    /*
    // Agregando el curso al estudiante
    const sid = "66157a435575458592e1f4af";
    const cid = "66157a445575458592e1f4b1";

    const student = await studentModel.findOne({_id: sid});
    student.courses.push({course: cid});

    await studentModel.updateOne({_id: sid}, student);
    */

    const sid = "66157a435575458592e1f4af";

    //const student = await studentModel.findOne({ _id: sid }).populate("courses.course"); //Sin middleware pre
     const student = await studentModel.findOne({_id: sid}); // Con el middleware pre
     
    console.log(JSON.stringify(student, null, "\t"))
}

enviromet();