const mongoose = require("mongoose");

const url = 'mongodb+srv://admin:<password>@cluster0.ix1vv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(url, { useNewUrlParser: true });

module.exports = mongoose;