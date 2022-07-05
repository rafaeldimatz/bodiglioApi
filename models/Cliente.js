const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
 nombre:{
     type: String,
     trim: true
 },
 apellido:{
    type: String,
    trim: true
},
edad:{
    type: Number
},
email:{
    type: String,
    trim: true
},
pass:{
    type: String,
    required: true,
    minlength: 6
},
image:{
    type:String
}
})
module.exports=mongoose.model('cliente',clienteSchema);