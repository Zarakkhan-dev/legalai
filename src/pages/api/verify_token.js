import jwt from "jsonwebtoken";

const secretKey ="bsbjashdwdne32bkrb32h3sdghnjkwebj23brh"
export default function handler(req, res) {
    try {

        const {token} =req.body;
        const decodedToken = jwt.verify(token, secretKey);
        if(decodedToken){
            res.status(201).json("Token available");
        }
        else{
            res.status(202).json("Token not available")
        }

      } catch (error) {
        res.status(202).json("Token not available",error)
      }

  }
  