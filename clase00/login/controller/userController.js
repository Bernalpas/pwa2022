
const knex = require('../db/conexion')


const userLogin = (req, res) => {

    const { user, pass } = req.body
    console.log(user, pass);
    
    if(user && pass) { 
        knex('users')
            .where('username', '==', user)
            .andWhere('password', '==', pass)
            .then((response) => {
                res.status(200).json(`Usuario Logueado: ${user} - ${pass}`);
            })
            .catch(error =>{
                res.json({ 
                    data: "User || Password incorrecto"
                })
            }) 
    }else{
        res.json({ 
            data: "Ingrese sus datos para el Loguin"
        })
    }
}


module.exports = userLogin;