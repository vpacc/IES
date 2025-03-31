import express from 'express'
import cors from 'cors'
import 'dotenv/config' 
import connectDB from './configs/mongodb.js'
import { clerkWebhooks} from './controllers/webhooks.js'
import educatorRouter from './routes/educatorRoutes.js'
import { clerkMiddleware } from '@clerk/express'
import connectCloudinary from './configs/cloudinary.js'
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
app.post('/clerk', express.json(), clerkWebhooks ) 
app.use('/api/educator', express.json(), educatorRouter)
// port
const Port = process.env.PORT || 5000 ;

app.listen(Port, ()=> {
    console.log(`Server is running on ${Port}`)
} )
