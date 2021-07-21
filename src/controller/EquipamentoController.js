const EquipamentoModel = require('../model/EquipamentoModel');

class EquipamentoController{
    
    async create(req, res){
        const equipamento = new EquipamentoModel(req.body);
        await equipamento
                    .save()
                    .then(response => {
                        return res.status(200).json(response)
                    })
                    .catch(error => {
                        return res.status(500).json(error);
                    })
    }

    async all(req, res){
        await EquipamentoModel.find()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
        
    }

    async delete(req, res){
        await EquipamentoModel.deleteOne({'_id': req.params.id})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async deleteAll(req, res){
        await EquipamentoModel.delete()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
}

module.exports = new EquipamentoController();