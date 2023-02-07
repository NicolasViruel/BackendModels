const { db } = require("../util/admin");

const test = async (req, res) => {
    const testRef = db.collection('test');
    try{
            testRef.get().then((snapshot) => {
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

//jquery asistencia
const Filter = async (req, res) => {
    const filterRef = db.collection('test');
    try{
            filterRef.where('last', '!=', 'viruel').get().then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
            console.log(data);
            return res.status(201).json(data);
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ general: "Algo salio mal, intentalo de nuevo"});          
    }
};

const newContact = async (req, res) => {
    console.log(req.body);
     const {id , born , last , first} = req.body
    try {
        await db.collection('test').add({
            id,
            born,
            last,
            first
         })
        res.send('Nuevo contacto Creado')
    } catch (error) {
        res.status(400).send({msg:"El contacto ya existe"})
        console.log(error);
    } 
}

const editContact = async (req, res) =>{
   
    const doc = await db.collection('test').doc(req.params.id).get()
    console.log({
        id: doc.id,
        ...doc.data()
    });
    res.send('Contacto editado exitosamente')

}

const deleteContact = async (req , res ) =>{
    const {id} = req.params
    try {
        await db.collection('test').doc(id).delete()
        res.status(200).send({msg:"Se elimino el contacto"})
    } catch (error) {
        console.log(error);
        res.status(400).send({msg:"El contacto no pudo ser eliminado"})
    }

}

const updateContact = async (req , res) =>{

    const {id} = req.params
    try {
        await db.collection('test').doc(id).update(req.body)
        res.status(200).send({msg:"El contacto fue actualizado"})
    } catch (error) {
        res.status(400).send({msg:"El contacto no pudo ser actualizado"})
    }

}





module.exports ={
    test,
    newContact,
    editContact,
    deleteContact,
    updateContact,
    Filter
}