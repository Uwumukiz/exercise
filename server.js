const Joi=require('joi');
const cors = require('cors')
const express = require('express');
const app =express();


const corsOptions={
    origin: /\/*/
};
app.use(cors(corsOptions));
app.use(express.json());

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

app.post('/api/courses', (req,res) => {
   
    
    console.log(req.body)
    
    const course={
        id: courses.length+1,
       name: req.body.name,
    };
courses.push(course);
res.send(course);
});

app.put('/api/courses/:id', (req,res) =>{

    const id = req.params.id;
    console.log(id);
    let course
    for(let i=0; i<courses.length; i++){
        if(courses[i].id==id){
            course=courses[i];
        
        }
    }
    console.log(course);
    course.name= req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', (req,res) =>{

    const id = req.params.id;
    console.log(id);
    let course
    for(let i=0; i<courses.length; i++){
        if(courses[i].id==id){
            course=courses[i];
        
        }
        if(!course) res.status(404).send('the course is not exist')
    }
    
    const index =courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
})

app.listen(port, ()=> console.log(`listenig on port ${port}...`));