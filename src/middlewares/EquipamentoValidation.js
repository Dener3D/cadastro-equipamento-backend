const EquipamentoModel = require('../model/EquipamentoModel');

const EquipamentoValidation = async (req, res, next) => {
    const { descricao, patrimonio } = req.body;
    if (!descricao)
    return res.status(400).json({ error: 'Descrição é obrigatória!'})
    else if (!patrimonio)
    return res.status(400).json({ error: "O patrimônio é obrigatório!" })
    else
    next()
}

module.exports = EquipamentoValidation;