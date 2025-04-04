import express from 'express'
import cors from 'cors'
import 'dotenv/config' 
import connectDB from './configs/mongodb.js'
import { clerkWebhooks, stripeWebhooks} from './controllers/webhooks.js'
import educatorRouter from './routes/educatorRoutes.js'
import { clerkMiddleware } from '@clerk/express'
import connectCloudinary from './configs/cloudinary.js'
import courseRouter from './routes/courseRoute.js'
import userRouter from './routes/userRoutes.js'
// initialize express
const app = express()


// connect to database
await connectDB()
await connectCloudinary()
// middleware
app.use(cors())
app.use(clerkMiddleware())
app.use(express.json());
//routes

app.get('/', (req, res)=> res.send("API Working"))
app.post('/clerk',  clerkWebhooks ) 
app.use('/api/educator',  educatorRouter)
app.use('/api/course',  courseRouter)
app.use('/api/user',  userRouter)
app.post('/stripe', express.raw({type: 'application/json'}), stripeWebhooks)

app.post('/api/course', (req, res) => {
    console.log('Received req.body:', req.body);
    const { CourseData } = req.body;
    console.log(typeof CourseData, CourseData);
    // Rest of your code...
});

// port
const Port = process.env.PORT || 5000 ;

app.listen(Port, ()=> {
    console.log(`Server is running on ${Port}`)
} )
