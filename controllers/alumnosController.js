const { db } = require("../util/admin");

const alumnosGet = async (req, res) => {
    const testRef = db.collection('Alumnos');
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

const alumnoGet = async (req, res) =>{
    try {
        const doc = await db.collection('Alumnos').doc(req.params.id).get();
        if (!doc.exists) {
          console.log('No se encontró ningún documento con el ID proporcionado');
          res.status(404).send('No se encontró ningún documento con el ID proporcionado');
          return;
      }
        const person = doc.data();
       
        console.log(person);
        //traeme la persona
        res.send(person);
  } catch (error) {
        console.error(error);
        res.status(500).send('Error al buscar el documento');
  }
}

const nuevoAlumno = async (req, res) =>{
    const {nombreAlumno, edad, estadoAcademico, correo} = req.body
    try {
        await db.collection('Alumnos').add({
            nombreAlumno,
            edad,
            estadoAcademico,
            correo,
        })
        res.send('Nuevo Alumno Creado')
    } catch (error) {
        res.status(400).send({msg:"El alumno ya existe"})
        console.log(error);
    }   
}

const editarAlumno = async (req, res) =>{
    const {id} = req.params
    try {
        await db.collection('Alumnos').doc(id).update(req.body)
        res.status(200).send('Alumno editado Correctamente')
    } catch (error) {
        console.log(error);
        res.status(400).send({msg:"El Alumno no pudo ser actualizado"})
    }    
}

const borrarAlumno =async (req, res) =>{
    const {id} = req.params
    try {
        await db.collection('Alumnos').doc(id).delete()
        res.status(200).send({msg: "Se elimino el Alumno"})
    } catch (error) {
        console.log(error);
        res.status(400).send({msg: "El Alumno no pude ser eliminado"})
    }
}

const updateAlumno = async (req, res) =>{
    const {id} = req.params
    try {
        await db.collection('Alumnos').doc(id).update(req.body)
        res.status(200).send({msg:"El alumno fue actualizado"})
    } catch (error) {
        res.status(400).send({msg:"El alumno no pudo ser actualizado"})
    }
}


module.exports = {
    alumnosGet,
    alumnoGet,
    nuevoAlumno,
    editarAlumno,
    borrarAlumno,
    updateAlumno,
}