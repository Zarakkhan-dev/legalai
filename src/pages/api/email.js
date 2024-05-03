import sendEmail from "./SendMail/emailSender";
export default function handler(req, res) {
    const {email} = req.body;

    let  to ="Your Subscription to Legal AI Assistant Newsletter Confirmed";
    let message = `
    Dear Sir/Madam,
    
    Thank you for subscribing to the legal ai assistant newsletter! We're excited to have you on board.
    
    You will now receive our latest updates, news, and exclusive offers directly in your inbox.
    
    If you have any questions or feedback, feel free to reach out to us at zarakkhan1031@gmail.com.
    
    Best regards,
    The Legal Ai Assistant Team
    `;
    if(email){
        sendEmail(email,to, message)
        res.status(202).send(email);
    }
    else{
        res.status(201).send("not run");
    }

  }
  