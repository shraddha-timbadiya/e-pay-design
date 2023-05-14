import { Router,Response ,Request }  from "express";
import db from '../config/config'
const router = Router();

interface Icontact {
    fname:string;
    lname:string;
    phone:number;
    email:string;
    address:string;
    message:string;
}
interface  IcontactRequest extends Request{
    body:Icontact;
}

router.post('/',async(req:IcontactRequest,res:Response)=>{
    try{
    const {fname,lname,phone,email,address,message} = req.body
    const data = {
        fname:fname,
        lname:lname,
        phone:phone,
        email:email,
        address:address,
        message:message
    }
    const docRef = db.collection("contact").doc();
    await docRef.set(data);
    res.status(200).json({ message: "data stored Successfully" }); 
         
    }catch (error:any) {
    console.error(error);
    res.status(500).json({ message: error.message });
    }
})

export default router