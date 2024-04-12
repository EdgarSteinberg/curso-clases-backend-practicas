import mongoose from 'mongoose';

import studentModel from './models/studentModel.js';

const main = async () => {
    const uri = "mongodb+srv://steinberg2024:cai2024@cluster0.cl7spkj.mongodb.net/class-17?retryWrites=true&w=majority&appName=Cluster0";
    await mongoose.connect(uri);

    // const result = await studentModel.insertMany(
    //     [
    //         {"first_name":"Juan","last_name":"Pérez","email":"juan.perez@example.com","gender":"M","grade":8,"group":"1A"},
    //         {"first_name":"María","last_name":"López","email":"maria.lopez@example.com","gender":"F","grade":9,"group":"1B"},
    //         {"first_name":"Pedro","last_name":"Martínez","email":"pedro.martinez@example.com","gender":"M","grade":7,"group":"1A"},
    //         {"first_name":"Ana","last_name":"García","email":"ana.garcia@example.com","gender":"F","grade":6,"group":"1B"},
    //         {"first_name":"José","last_name":"Rodríguez","email":"jose.rodriguez@example.com","gender":"M","grade":5,"group":"1A"},
    //         {"first_name":"Laura","last_name":"Sánchez","email":"laura.sanchez@example.com","gender":"F","grade":10,"group":"1B"},
    //         {"first_name":"Luis","last_name":"González","email":"luis.gonzalez@example.com","gender":"M","grade":4,"group":"1A"},
    //         {"first_name":"Isabel","last_name":"Ruiz","email":"isabel.ruiz@example.com","gender":"F","grade":9,"group":"1B"},
    //         {"first_name":"Antonio","last_name":"Torres","email":"antonio.torres@example.com","gender":"M","grade":8,"group":"1A"},
    //         {"first_name":"Julia","last_name":"Vega","email":"julia.vega@example.com","gender":"F","grade":7,"group":"1B"},
    //         {"first_name":"David","last_name":"Muñoz","email":"david.munoz@example.com","gender":"M","grade":6,"group":"1A"},
    //         {"first_name":"Carmen","last_name":"Navarro","email":"carmen.navarro@example.com","gender":"F","grade":5,"group":"1B"}
    //      ]
    // )

    // const result = await studentModel.find()
    // console.log(result)

    /*
    //Obtener a los estudiantes agrupados por califacion del mejor al peor.
     const result = await studentModel.aggregate([
     
        {
            $group: {
                _id: "$grade",
                students: {
                    //$push: "$$ROOT"
                    $push: 
                   { first_name: "$first_name", last_name: "$last_name"}
                }
            }   
        },
        {
            $sort: {
                _id: -1
            }
        }
    ]);
    */
    //Obtener a los estudiantes agrupados por grupo
    /*
    const result = await studentModel.aggregate([
     
        {
            $group: {
                _id: "$group",
                students: {
                    //$push: "$$ROOT"
                    $push: 
                   { first_name: "$first_name", last_name: "$last_name"}
                }
            }   
        }
      
    ]);
    */
    //Obtener el promedio de los estudiantes del grupo 1B
    /*const result = await studentModel.aggregate([

        {
            $match: {
                group: "1B"
            }
        },
        {
            $group: {
                _id: "$group",
                avgGrade: {
                    $avg: "$grade"
                }
            }
        }
    ]);
    */
    //Obtener el promedio de los estudiantes del grupo 1A
    /*
    const result = await studentModel.aggregate([

        {
            $match: {
                group: "1A"
            }
        },
        {
            $group: {
                _id: "$group",
                avgGrade: {
                    $avg: "$grade"
                }
            }
        }
    ]);
    */
    //Obtener el promedio general de todos los estudiantes
    /*const result = await studentModel.aggregate([
        {
            $group: {
                _id: "all_students",
                avgGrade: {
                    $avg: "$grade"
                }
            }
        }
    ])
    */
   //Obtener el promedio de califaciones de los Hombres 
    /*const result = await studentModel.aggregate([
        {
            $match: {
                gender: "M"
            }
        },
        {
            $group: {
                _id: "gender",
                avgGrade: {
                    $avg: "$grade"
                }
            }
        }
    ])
    */
   //Obtener el promedio de califaciones de las Mujeres 
   const result = await studentModel.aggregate([
    {
        $match: {
            gender: "F"
        }
    },
    {
        $group: {
            _id: "gender",
            avgGrade: {
                $avg: "$grade"
            }
        }
    }
])
    console.log(JSON.stringify(result, null, 2));
}
main();

