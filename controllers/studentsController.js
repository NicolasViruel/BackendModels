const { db } = require("../util/admin");

const studens = async (req, res) => {
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

module.exports = {
    studens,
}