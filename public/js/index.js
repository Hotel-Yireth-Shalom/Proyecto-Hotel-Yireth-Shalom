// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAj7QPyNvuUrWWe9GBdXTwbb5aZAeoEzkc",
    authDomain: "hotel-yireth-shalom-florencia.firebaseapp.com",
    databaseURL: "https://hotel-yireth-shalom-florencia.firebaseio.com",
    projectId: "hotel-yireth-shalom-florencia",
    storageBucket: "hotel-yireth-shalom-florencia.appspot.com",
    messagingSenderId: "112301165076",
    appId: "1:112301165076:web:a386235bceca2f2644b501"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();


var listaCliente = document.getElementById('listaCliente');
 var nombre = document.getElementById('nombre');
 var apellido = document.getElementById('apellido');
 var correoelectronico = document.getElementById('correoelectronico');
 var telefono = document.getElementById('telefono');
 var fechaentrada = document.getElementById('fechaentrada');
 var fechasalida = document.getElementById('fechasalida');
 var tipohabitacion = document.getElementById('tipohabitacion');
 var estadoo = document.getElementById('estadoo');
 var btnreserva = document.getElementById('btnreserva');
 var btnActualizar = document.getElementById('btnActualizar');
 var idUsuario = document.getElementById('id');

// login y registro
var emailUser = document.getElementById('emailUser');
var passUser = document.getElementById('passUser');

var emailUsuarioLogueado = document.getElementById('emailUsuarioLogueado');

function agregarDatos(user) {
    db.collection("clientes").add({
            nombre: nombre.value,
            apellido: apellido.value,
            correoe_lectronico: correoelectronico.value,
            telefono: telefono.value,
            fecha_de_entrada: fechaentrada.value,
            fecha_de_salida: fechasalida.value,
            tipo_habitacion: tipohabitacion.value,
            estado_cliente: estadoo.value,
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('Reserva realizada', docRef.id);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
}


function limpiarDatos() {
    nombre.value = "";
    apellido.value = "";
    correoelectronico.value = "";
    telefono.value = "";
    fechaentrada.value = "";
    fechasalida.value = "";
    //tipohabitacion.value = "";
    //estadoo.value = "";
}

//--------------------------------------------

function limpiarDatosLogin() {
    emailUser.value = "";
    passUser.value = "";
}

function registarUsuario() {
    firebase.auth().createUserWithEmailAndPassword(emailUser.value, passUser.value)
        .then(() => {

            console.log("El usuario se ha registrado");

        })
        .catch(function (error) {
            console.log("Error: ", error.message);
        });
}

function login() {
    var uno = emailUser.value;
    firebase.auth().signInWithEmailAndPassword(uno, passUser.value)
        .then((user) => {
            sessionStorage.setItem('login', user.email);
            window.location.href = 'administrador.html';
        })
        .catch(function (error) {
            console.log("Error: ", error.message);
            limpiarDatosLogin();
        });
}