import express from 'express'
import cors from 'cors'
import 'dotenv/config' 
import connectDB from './configs/mongodb.js'
import { clerkWebhooks} from './controllers/webhooks.js'
// initialize express
const app = express()

// connect to database
await connectDB()

// middleware
app.use(cors())

//routes
app.get('/', (req, res)=> res.send("API Working"))

app.post('/clerk',express.json(), clerkWebhooks ) 
 
// port
const Port = process.env.PORT || 5000

app.listen(Port, ()=> {
    console.log(`Server is running on ${Port}`)
} )

