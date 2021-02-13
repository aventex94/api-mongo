var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    email: String,
    password: String,

})

userSchema.statics.createInstance = function(nombre,apellido,email,password){
    return new this({
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password,
    })
};

userSchema.statics.AllUser = function (us){
    return this.find({},us);
};

module.exports = mongoose.model('User',userSchema); 