const {
    Router
} = require('express');

const router = Router();

const controlador = require('../controller/Admin.controller');

router.get('/', controlador.inicio);

router.get('/habitacionS', controlador.habitacionS);
router.get('/habitacionD', controlador.habitacionD);
router.get('/habitacionE', controlador.habitacionE);
router.get('/reservasp', controlador.reservasP);
router.get('/ubicacion', controlador.ubicacion);


router.post('/reservasP', controlador.reservasp);
router.post('/habitacionS', controlador.reservass);
router.post('/habitacionD', controlador.reservasd);
router.post('/habitacionE', controlador.reservase);

module.exports = router;