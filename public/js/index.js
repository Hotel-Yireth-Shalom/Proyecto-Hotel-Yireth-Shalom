var firebaseConfig = {
    apiKey: "AIzaSyDXR4x1rOj77ho74nZ3N_Rw3AmrzWQ2Jr0",
    authDomain: "proyectoweb-hotelys.firebaseapp.com",
    databaseURL: "https://proyectoweb-hotelys.firebaseio.com",
    projectId: "proyectoweb-hotelys",
    storageBucket: "proyectoweb-hotelys.appspot.com",
    messagingSenderId: "459843385871",
    appId: "1:459843385871:web:8f2827bac1c44eb50c417a"
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



function agregarDatos(user) {
    db.collection("clientes").add({
            nombre: nombre.value,
            apellido: apellido.value,
            correoelectronico: correoelectronico.value,
            telefono: telefono.value,
            fechaentrada: fechaentrada.value,
            
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('reserva realizada', docRef.id);
        })
        .catch((error) => {
            console.error("Error: ", error);
        });

}
