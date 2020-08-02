 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyB0N3mE_HXs7XGW6i9xN_SzZJ5AY47QwJY",
    authDomain: "proyecto-web-hys.firebaseapp.com",
    databaseURL: "https://proyecto-web-hys.firebaseio.com",
    projectId: "proyecto-web-hys",
    storageBucket: "proyecto-web-hys.appspot.com",
    messagingSenderId: "902711100247",
    appId: "1:902711100247:web:fca0330ece5dab2e3e3412"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var correoelectronico = document.getElementById('correoelectronico');
var telefono = document.getElementById('telefono');
var btnreserva = document.getElementById('btnreserva');
var fechaentrada = document.getElementById('fechaentrada');
var tipohabitacion = document.getElementById('tipohabitacion');


function agregarDatos(user) {
    db.collection("clientes").add({
            nombre: nombre.value,
            apellido: apellido.value,
            correoe_lectronico: correoelectronico.value,
            telefono: telefono.value,
            fecha_de_entrada: fechaentrada.value,
            tipo_habitacion: tipohabitacion.value
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('reserva realizada', docRef.id);
        })
        .catch((error) => {
            console.error("Error: ", error);
        });

}
