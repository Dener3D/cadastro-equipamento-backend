const express = require("express");
const cors = require('cors');
const server = express();
server.use(express.json());
server.use(cors())

const EquipamentoRoute = require('./routes/EquipamentoRoute');
server.use('/equipamento', EquipamentoRoute);

server.listen(3333, () => {
    console.log("API ONLINE");
});