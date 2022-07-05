const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginSchema = new Schema({
 username:{
     type: String,
     trim: true
 },
 pass:{
    type: String,
    trim: true
}
})
module.exports=mongoose.model('login',loginSchema);