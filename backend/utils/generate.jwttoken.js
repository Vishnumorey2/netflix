import jwt from "jsonwebtoken";

import {ENV_VAR} from "../Config/enVar.js";

export const generateJwtToken = (userId,res) => {
    
       console.log(ENV_VAR.NODE_ENV);
                           //payload,secret,expiration
    const token = jwt.sign({userId},ENV_VAR.JWT_SECRET,{expiresIn:"15d"});
    
    res.cookie("jwt-netflix",token,{
        httpOnly:true,
        maxAge:15*24*60*60*1000,
        sameSite:"strict",
        secure:ENV_VAR.NODE_ENV !== "development",
    });
    return token;
};