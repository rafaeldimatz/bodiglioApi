const login = require('../models/Login');
const cliente = require('../models/Cliente');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

 exports.datosLogin = async(req,res)=>{
        const {email,pass} = req.body;
        try{
            const cli = await cliente.find({'email':email,'pass':pass})
            if (cli.length>0){
             return res.json(cli)
            }else{
                console.log("Entro")
                return res.json({'mensaje':'No existe ese usuario'})
            }
        }catch(e){
           return res.json(e)
    }
 }