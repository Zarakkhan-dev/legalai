import connection from "./Database/connection";
import model from './Database/Schema';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
connection();
export default async function handler(req, res) {
    const {email,password}= req.body;
    const secretKey ="bsbjashdwdne32bkrb32h3sdghnjkwebj23brh"
    try {
        const userResponse = await model.findOne({email});
        if(!userResponse){
        const hash_password = await bcrypt.hash(password,10);
        const token = jwt.sign({email},secretKey);
        const UserData = new model ({email,password:hash_password,token});
        const SavedResponse = await UserData.save();
        if(SavedResponse){
            res.status(201).json({message:"Registered Successfully",token})
            
        }
        else{
            res.status(202).json({message:"Not Registered Successfully"})
        }
        }else{
            res.status(200).json({message:"user Already Exist"});
        }

    } catch (error) {
        console.log(error)
    }
   
  }
  