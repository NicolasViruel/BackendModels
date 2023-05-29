const { db } = require("../util/admin")

const contactoGet = async (req, res) => {
    const contactoRef = db.collection('Contacto');
    try{
            contactoRef.get().then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
            console.log(data);
            return res.status(201).json(data);
        })
    } catch (error) {
        return res
        .status(500)
        .json({ general: "Algo salio mal, intentalo de nuevo"});          
    }
};

const crearMensaje = async (req, res) =>{
    const {nombre, email, telefono, mensaje} =req.body
    try{
        await db.collection('Contacto').add({
            nombre,
            email,
            telefono,
            mensaje,
        })
        res.send('El mensaje fue creado')
    }catch(error){
        res.status(400).send({ msg: "No se pudo enviar el mensaje"})
    }
}

module.exports = {
    contactoGet,
    crearMensaje,
}