const express = require('express');
const router = express.Router();

const EquipamentoController = require('../controller/EquipamentoController');
const EquipamentoValidation = require('../middlewares/EquipamentoValidation');

router.post('/', EquipamentoValidation, EquipamentoController.create);
router.get('/filter/all', EquipamentoController.all);
router.delete('/:id', EquipamentoController.delete);
router.delete('/all/delete', EquipamentoController.deleteAll);

module.exports = router;