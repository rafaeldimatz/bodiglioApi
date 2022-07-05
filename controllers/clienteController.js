const cliente = require('../models/Cliente');


//Agregar Cliente
exports.nuevoCliente = async (req, res, next) => {
  const cli = new cliente(req.body);
  try {
    await cli.save();
    res.json({ mensaje: "Se agrego cliente" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.clientes = async (req, res, next) => {
      const clienteMostrar = await cliente.find();
      if (!clienteMostrar) {
        res.json({ mensaje: "No existe personal" });
        next()
      }else{
        res.json(clienteMostrar);
      }
};

exports.cliente = async(req,res,next)=>{
    const {idCliente} = req.params
    const clienteMostrar = await cliente.findById(idCliente)
    if (!clienteMostrar){
        res.json({mensaje:'No existe personal'});
        return next()
    }
    res.json(clienteMostrar);
 }

 exports.clienteid = async(req,res,next)=>{
  const {idCliente} = req.params
  const clienteMostrar = await cliente.findById(idCliente)
  if (!clienteMostrar){
      res.json({mensaje:'No existe personal'});
      return next()
  }
  res.json(clienteMostrar);
}

exports.clienteUpdate = async(req,res,next)=>{
  const {idCliente} = req.params
  try{
  const clienteUpdate = await cliente.findOneAndUpdate({_id:idCliente},req.body,{new:true})
  console.log(clienteUpdate)
  res.json(clienteUpdate)
  }
  catch(error){
    console.log(error);
    next();
  }
}

exports.clienteRemove = async(req,res,next)=>{
  const {idCliente} = req.params
  try{
  await cliente.findOneAndDelete({_id:idCliente})
  res.json({mensaje:'El Cliente se elimino correctamente'})
  }catch(error){
    console.log(error)
    next()
  }
}

 exports.apellidoPersonal = async(req,res)=>{
    const {apellido} = req.params;
    const personalApe = await personal.find().where('apellido').equals(apellido);
    res.json(personalApe);
 }