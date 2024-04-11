const proveedor = require('../models/proveedor');

//Funcion Para buscar Proveedores que esten en la base de datos
exports.buscarProveedors = async(req, res) => {

try {
    const Proveedor = await proveedor.find()
    res.send(Proveedor)

} catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al buscar los Proveedores')
}
}

// Funcion Agregar Proveedor
exports.agregarProveedor = async(req, res) =>{
    try{
        let Proveedor;
        Proveedor = new proveedor(req.body)
        await Proveedor.save()
        res.send(Proveedor)

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al agregar un Proveedor')
    }
}

// Funcion para mostrar un solo proveedor
exports.buscarProveedor = async(req,res) =>{
    try {
        let Proveedor = await proveedor.findById(req.params.id);
        if(!Proveedor){
            res.status(404).send({msg:"Proveedor no encontrado con ese Id"})
            return
        }

        res.send(Proveedor);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al buscar un Proveedor')
    }
}

// Funcion para Eliminar un proveedor
exports.eliminarProveedor = async(req,res) => {
    try {
        let Proveedor = await proveedor.findById(req.params.id);
        if(!Proveedor){
            res.status(404).send({msg:"El Proveedor no Existe en la BD"});
            return
        }
        
        await proveedor.findOneAndDelete({_id: req.params.id});
        res.json({msg:"El Proveedor ha sido Eliminado"});
        return

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al Eliminar un Proveedor')
    }
}

// Funcion para actualizar un proveedor

exports.actualizarProveedor = async(req,res) => {
    try {
        const {nombres, nit, tipoProduct, correo, telefono, direccion} = req.body
        let Proveedor = await proveedor.findById(req.params.id);
        if(!Proveedor){
            res.status(404).send({msg:"El Proveedor no Existe"});
        }else{

            Proveedor.nombres = nombres;
            Proveedor.nit = nit;
            Proveedor.tipoProduct = tipoProduct;
            Proveedor.correo = correo;
            Proveedor.telefono = telefono;
            Proveedor.direccion = direccion;

            Proveedor = await proveedor.findOneAndUpdate({_id: req.params.id},Proveedor,{new:true})
            res.send(Proveedor);
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al Actualizar el Proveedor')
    }
}