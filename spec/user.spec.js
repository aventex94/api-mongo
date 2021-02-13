var mongoose = require('mongoose');
var User = require('../model/user');

describe('Testing Users', function(){
    beforeEach(function(done){
        var mongoDB = 'mongodb://localhost/test';
        mongoose.connect(mongoDB,{useNewUrlParser:true});
        const db = mongoose.connection;
        db.on('error', console.error.bind(console,'connection error'));
        db.once('open', function(){
            console.log('We are connected to test database!');
            done;
        });
    });

    afterEach(function(done){
        User.deleteMany({},function(err,success){
            if(err)console.log(err);
            done;
        })
    })
})

describe('User.createInstance',()=>{
    it('crea una instancia de User',()=>{
        var user = User.createInstance('Matias','Miletich','matias@hotmail.com','42467766');

        expect(user.nombre).toBe('Matias');
        expect(user.apellido).toBe('Miletich');
        expect(user.email).toBe('matias@hotmail.com');
        expect(user.password).toBe('42467766');
    })
});













/* var request = require('request');
var server = require('../bin/www');
//El done de jasmine hace que hasta que no se ejecute el done, no deje de testear, entonces solucionamos el problema del asyncronismo en los endpoints.
describe('Deberia funcionar',()=>{
    describe("End point user/HolaUach", ()=>{
        it("Status 200", (done)=>{
            
            request.get('http://localhost:5000/users/holaMundo',function(err,response,body){
                expect(response.statusCode).toBe(300);
                done();
            });
        });
    });
});
//MODELO DEL TEST DE UN POST
describe("aca se testea un post ",()=>{
    var headers = { 'Content-type' : 'application/json'};
    var jsonBody = {'datos' : 'datos'};
    request.body({
        headers:headers,
        url: 'url del sistema',
        body: jsonBody,
        
    })
})
 */