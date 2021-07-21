const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const EquipamentoSchema = new Schema({
   descricao: {type: String, required: true},
   patrimonio: {type: Number, required: true},
   created: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Equipamento', EquipamentoSchema);