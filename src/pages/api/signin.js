import connection from "./Database/connection";
import model from './Database/Schema';
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
connection();
export default async function handler(req, res) {
    const {email,password} = req.body;
    const secretKey ="bsbjashdwdne32bkrb32h3sdghnjkwebj23brh"
    try{
        const userResponse = await model.findOne({email});
        if(userResponse){
            const hash_password = await bcrypt.compare(password,userResponse.password);
            if(hash_password){
                const token = jwt.sign({email},secretKey,{ expiresIn: '12h' });
                await userResponse.updateOne({email,token});
                res.status(201).json({message:"User Login Sucessfully",token});
            }
            else{
                res.status(202).json({message:"Invalid Email or password"});
            }
        }
        else{
            res.status(202).json({message:"Invalid Email or password"});
        }
    }catch(error){
        console.log(error)
    }
  }
  