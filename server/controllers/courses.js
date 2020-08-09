/*
    Courses in a sample controller that can be used to demostrate how a collection can be used in
    an application.
*/

/*
    npm install joi @13.1.0
    joi is a useful package for validaing a mode.
*/
var Joi = require("joi");
const express = require('express');
//Route() replaces app this allows us to to use differnt routes  
const router = express.Router();

const courses = [
    {id: 1, name: "node"},
    {id: 2, name: "flutter"},
    {id: 3, name: "html5"}
]

//Fetch all the data since there are not parameters
router.get('/', (req, res) =>{
    res.send(courses);
});

//Fetch data for given id
router.get('/:id', (req, res) =>{

  const course =  courses.find(c => c.id == parseInt(req.params.id));
    if(!course)
    res.status(404).send('course not found...');

  res.send(course);
});

//Post data to the database/server
router.post('/', (req, res) =>{
    /*
        Sample validation withing route:
        // const schema = {
        // name: Joi.string().min(3).required()
        // }
        //const result = Joi.validate(req.body, schema);
    */
    const {error} = validateCourse(req.body);
    if(error){
    res.status(400).send(error);
    return
    }
        const course =  {
            id: courses.length + 1,
            name: req.body.name
        }

        courses.push(course);

        res.send(course);
  });

  //Update data to the database/server
    router.put('/', (req, res) =>{

        console.log("hello", req.body.id)
        const course =  courses.find(c => c.id == parseInt(req.body.id));
        if(!course)
        res.status(404).send('course not found...');

        const {error} = validateCourse(req.body);
        if(error){
        res.status(400).send(error);
        return
        }

        //update the row
        course.name = req.body.name;
        
        res.send(course);
    });

  //Delete data to the database/server
  router.delete('/:id', (req, res) =>{

    const course =  courses.find(c => c.id == parseInt(req.params.id));
    if(!course)
    res.status(404).send('course not found...');

    //delete the row
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

function validateCourse(course){
    const schema = {
        id: Joi.number(),
        name: Joi.string().min(3).required()
        }

        return Joi.validate(course, schema);
}

  module.exports = router