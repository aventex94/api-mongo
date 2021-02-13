var request = require('request');
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
