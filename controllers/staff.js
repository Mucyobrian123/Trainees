
const staff = require('../models/staff')

async function findStaff(req,res) {
    try{

    }
    catch(e){
        console.log(e.message)
    }
}

//function to insert staff data into the database
async function createStaff(req,res) {
        try{
            const newStaff = await staff.create({
                    firstName: req.params.firstName,
                    lastName: req.params.lastName,
                    role: req.params.role,
                    email: req.params.email,
                    phoneNumber: req.params.phoneNumber
        });
    }
    catch (e){
        e.message
    }
    }

//function to update the info
async function updateStaff(req,res) {
    try{
        const staffUpdated = await staff.findByIdAndUpdate(req.params.id, r);

    }
    catch(e){
        console.log(e.message)
    }
}

//function to delete data based on id provided
async function deleteStaff(req,res) {
    try{

    }
    catch(e){
        console.log(e.message)
    }
}

module.exports = {
    updateStaff,
    createStaff,
    deleteStaff,
    findStaff
};