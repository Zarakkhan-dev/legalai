import jwt from "jsonwebtoken";
import connection from "./Database/connection";
import model from './Database/Schema';
connection();
const secretKey ="bsbjashdwdne32bkrb32h3sdghnjkwebj23brh"
export default function handler(req, res) {
    try {
        const {token} =req.body;
        const decodedToken = jwt.verify(token, secretKey);
        if(decodedToken){
            const actual_email = decodedToken.email;
            const email = model.findOne({actual_email});
            if(email){
                res.status(201).json("Token available");
            }
        }
        else{
            res.status(202).json("Token not available")
        }
      } catch (error) {
        res.status(202).json("Token not available",error)
      }

  }
  