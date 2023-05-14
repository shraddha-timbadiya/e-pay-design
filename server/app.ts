import express ,{ Response ,Request, NextFunction} from "express"
import cors from 'cors'
import bodyparser from "body-parser"
import slotRoute from './routes/route'
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/api',slotRoute );



app.use(function(err:Error,req:Request, res:Response, next:NextFunction) {
    if(err){
      res.status(500).json({message:err.message})
    }
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });
    
  app.listen(port,():void =>{
      try{
          console.log(`server running on port ${port}`)
      }catch(e){
          console.log(e)
      }
  })