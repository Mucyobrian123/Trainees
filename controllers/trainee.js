
const trainee = require('../models/trainee')

async function findTrainee(request, response) {

}

//function to insert trainee data into the database
async function createTrainee(req,res) {
    try{
        const newTrainee = await trainee.create({
            firstName: req.params.firstName,
            lastName: req.params.lastName,
            stack: req.params.role,
            email: req.params.email,
            phoneNumber: req.params.phoneNumber
    })
}
    catch(e){
        console.log(e.message)
    }
}

//function to update the info
async function updateTrainee (request,response) {
    try{

    }
    catch{

    }
}

//function to delete data based on id provided
async function deleteTrainee(request, response) {
    try{

    }
    catch{

    }
}

module.exports = {
    deleteTrainee,
    updateTrainee,
    createTrainee,
    findTrainee
};