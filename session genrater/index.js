express = require('express');
app = express();
const path = require('path');
student = require('./database');
port = 3000;


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ########   To use Static Files   ##########

app.use(express.static(path.join(__dirname, 'public')));

// ########  To Create, Read & Delete  #########
app.get('/', async (req, res) => {
    students = await student.find()
    res.render(('index'), { title: "Read & Delete" , students: students })
})

app.get('/register', async (req, res) => {
    res.render('register')
})



app.post('/register', async (req, res) => {
    const {fname, dob, city, phone, mail, password} = req.body;
    newstudent = new student({ fname, dob, city, phone, mail, password });
    studentsave = await newstudent.save();
    res.redirect('/')
})

app.get('/delete/:id', async (req, res) => {
    studentdelete = await student.findByIdAndDelete(req.params.id);
    res.redirect('/')
})



app.get("/update/:id",async(req,res)=>{
    const {id} =req.params;
    const user = await student.findById({_id:id});
    if(user==null){
        res.redirect("/");
    }else{
        res.render("update",{
            user:user
        })
    }
})

app.post("/update/:id",async(req,res)=>{
    const {id} =req.params;
    const {fname, dob, city, phone, mail, password}=req.body;
    const updateuser = await student.findByIdAndUpdate({_id:id},
        {fname, dob, city, phone, mail, password},
        {new:true})
    res.redirect("/");
})









