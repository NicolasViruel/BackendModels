const { db } = require("../util/admin")

const quieroSMGet = async (req, res) => {
    const quieroRef = db.collection('QuieroSM');
    try{
            quieroRef.get().then((snapshot) => {
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

const crearQuieroSM = async (req, res) =>{
    const {nombre, apellido, edad, correo, mensaje} =req.body
    try{
        await db.collection('QuieroSM').add({
            nombre,
            apellido,
            edad,
            correo,
            mensaje,
        })
        res.send('El mensaje fue creado')
    }catch(error){
        res.status(400).send({ msg: "No se pudo enviar el QuieroSM"})
    }
}

module.exports = {
    quieroSMGet,
    crearQuieroSM,
}