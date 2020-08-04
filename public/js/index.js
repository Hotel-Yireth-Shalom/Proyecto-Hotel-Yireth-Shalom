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
            alert('Reserva realizada', docRef.id);
        })
        .catch((error) => {
            console.error("Error: ", error);
        });

}
