
export default function handler(req, res) {
    const {email} = req.body;
    if(email){
        res.status(202).send(email);
    }
    else{
        res.status(201).send("not run");
    }

  }
  