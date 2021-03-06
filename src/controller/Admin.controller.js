const {
    firebase
} = require('../configFirebase');
const {
    patch
} = require('../router');

const controlador = {};
const db = firebase.firestore();
const auth = firebase.auth();

controlador.inicio = (req, res) => {
    res.render('index');
}
controlador.habitacionS = (req, res) => {
    res.render('./habitacionS');
}
controlador.habitacionD = (req, res) => {
    res.render('./habitacionD');
}
controlador.habitacionE = (req, res) => {
    res.render('./habitacionE');
}
controlador.reservasP = (req, res) => {
    res.render('./reservasP');
}
controlador.ubicacion = (req, res) => {
    res.render('./ubicacion');
}
controlador.login = (req, res) => {
    res.render('./login');
}
controlador.admin = async (req, res) => {
    res.render("./admin", {
        clientes: await leerdatos()
    });
}

const leerdatos = () => {
    return new Promise(resolve => {
        let listaCliente = [];
        db.collection("clientes").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    listaCliente.push(doc.data())
                });
                resolve(listaCliente);

            })
            .catch(function (error) {
                console.log("Error: ", error);
            });
    })
}


/*controlador.reservasp = (req, res) => {
    console.log(req.body);

    db.collection("clientes").add({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correoe_lectronico: req.body.correoelectronico,
            telefono: req.body.telefono,
            fecha_de_entrada: req.body.fechaentrada,
            fecha_de_salida: req.body.fechasalida,
            tipo_habitacion: req.body.tipohabitacion,
            numero_habitacion: req.body.nhabitacion,
            estado_cliente: req.body.estadoo,
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('Reserva realizada', docRef.id);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });

    res.render('./reservasP');
}*/


controlador.reservasp = async (req, res) => {
    console.log(req.body);
    await db.collection("clientes").add({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correoe_lectronico: req.body.correoelectronico,
            telefono: req.body.telefono,
            fecha_de_entrada: req.body.fechaentrada,
            fecha_de_salida: req.body.fechasalida,
            tipo_habitacion: req.body.tipohabitacion,
            numero_habitacion: req.body.nhabitacion,
            estado_cliente: req.body.estadoo,
        })
        .then(async (docRef) => {
            await docRef.update({
                idcliente: docRef.id
            })
            console.log("Document written with ID: ", docRef.id);
            alert('Reserva realizada', docRef.id);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
        res.render('./reservasP');
}


/*controlador.reservasd = (req, res) => {
    console.log(req.body);
    db.collection("clientes").add({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correoe_lectronico: req.body.correoelectronico,
            telefono: req.body.telefono,
            fecha_de_entrada: req.body.fechaentrada,
            fecha_de_salida: req.body.fechasalida,
            tipo_habitacion: req.body.tipohabitacion,
            estado_cliente: req.body.estadoo,
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('Reserva realizada', docRef.id);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });

    res.render('./habitacionD');
}*/

controlador.reservasd = async (req, res) => {
    console.log(req.body);
    await db.collection("clientes").add({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correoe_lectronico: req.body.correoelectronico,
            telefono: req.body.telefono,
            fecha_de_entrada: req.body.fechaentrada,
            fecha_de_salida: req.body.fechasalida,
            tipo_habitacion: req.body.tipohabitacion,
            numero_habitacion: req.body.nhabitacion,
            estado_cliente: req.body.estadoo,
        })
        .then(async (docRef) => {
            await docRef.update({
                idcliente: docRef.id
            })
            console.log("Document written with ID: ", docRef.id);
            alert('Reserva realizada', docRef.id);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
        res.render('./habitacionD');
}

/*controlador.reservase = (req, res) => {
    console.log(req.body);

    db.collection("clientes").add({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correoe_lectronico: req.body.correoelectronico,
            telefono: req.body.telefono,
            fecha_de_entrada: req.body.fechaentrada,
            fecha_de_salida: req.body.fechasalida,
            tipo_habitacion: req.body.tipohabitacion,
            estado_cliente: req.body.estadoo,
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('Reserva realizada', docRef.id);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });

    res.render('./habitacionE');
}*/

controlador.reservase = async (req, res) => {
    console.log(req.body);
    await db.collection("clientes").add({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correoe_lectronico: req.body.correoelectronico,
            telefono: req.body.telefono,
            fecha_de_entrada: req.body.fechaentrada,
            fecha_de_salida: req.body.fechasalida,
            tipo_habitacion: req.body.tipohabitacion,
            numero_habitacion: req.body.nhabitacion,
            estado_cliente: req.body.estadoo,
        })
        .then(async (docRef) => {
            await docRef.update({
                idcliente: docRef.id
            })
            console.log("Document written with ID: ", docRef.id);
            alert('Reserva realizada', docRef.id);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
        res.render('./habitacionE');
}


/*controlador.reservass = (req, res) => {
    console.log(req.body);
    db.collection("clientes").add({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correoe_lectronico: req.body.correoelectronico,
            telefono: req.body.telefono,
            fecha_de_entrada: req.body.fechaentrada,
            fecha_de_salida: req.body.fechasalida,
            tipo_habitacion: req.body.tipohabitacion,
            estado_cliente: req.body.estadoo,
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('Reserva realizada', docRef.id);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });

    res.render('./habitacionS');
}*/

controlador.reservass = async (req, res) => {
    console.log(req.body);
    await db.collection("clientes").add({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correoe_lectronico: req.body.correoelectronico,
            telefono: req.body.telefono,
            fecha_de_entrada: req.body.fechaentrada,
            fecha_de_salida: req.body.fechasalida,
            tipo_habitacion: req.body.tipohabitacion,
            numero_habitacion: req.body.nhabitacion,
            estado_cliente: req.body.estadoo,
        })
        .then(async (docRef) => {
            await docRef.update({
                idcliente: docRef.id
            })
            console.log("Document written with ID: ", docRef.id);
            alert('Reserva realizada', docRef.id);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
        res.render('./habitacionS');
}


//__________________________________________________

controlador.registarUsuario = (req, res) => {
    console.log(req.body);

    auth.createUserWithEmailAndPassword(req.body.emailUser, req.body.passUser)
        .then(() => {
            console.log("El usuario se ha registrado");
            let user = auth.currentUser;
            user.updateProfile({
                phoneNumber: parseInt(req.body.number.value)
            });
            console.log(auth.currentUser);
        })
        .catch(function (error) {
            console.log("Error: ", error.message);
        });
    res.render('./login');
}


controlador.loginn = (req, res) => {
    console.log(req.body);
    auth.signInWithEmailAndPassword(req.body.emailUser, req.body.passUser)
        .then(async () => {
            res.render("./admin", {
                clientes: await leerdatos()
            });
        })
        .catch(function (error) {
            console.log("Error: ", error.message);
            limpiarDatosLogin();
        });
}

controlador.cerrarSesion = (req, res) => {
    console.log(req.body);
    auth.signOut()
        .then(() => {
            console.log("Sesion cerrada exitosamente");
            res.redirect('/');

        }).catch((error) => {
            console.log(error.message)
        });
}


module.exports = controlador;