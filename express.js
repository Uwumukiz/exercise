//const Joi=require('joi');
const cors = require('cors')
const express = require('express');
const app =express();


const corsOptions={
    origin: /\/*/
};
app.use(cors(corsOptions));

const courses= [
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'},
]
app.get('/', (_req, res)=>{
    res.send('Hello World!!!!');
    
});

app.get('/api/courses', (_req,res)=> {
    console.log('Hello Marcel');
    res.send(courses);
});

    app.get('/api/courses/:id', (req, res) =>{
        const course =courses.find(c => c.id === parseInt(req.params.id));

        if(!course) res.status(404).send(`The course with id is not found error code:404`);
        res.send(course);
        }); 


//PORT
const port = process.env.PORT || 3000;

// app.post('/api/courses', (req,res) => {
//   //  if(!req.body.name || req.body.name.length <5){
//     //    const schema={
//       //      name: Joi.string().min(5).required()
//         //};
//         //const result= Joi.validate(req.body, schema);
//       //  console.log(result);
//         //res.status(400).send('error, name required and of minimum 5 characters');
//         //return;

//     //}
//     co
//     const course={
//         id: courses.length+1,
//         name:req.body.name,
//     };
// courses.push(course);
// res.send(course);
// });

app.listen(port, ()=> console.log(`listenig on port ${port}...`));