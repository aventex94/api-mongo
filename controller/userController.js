module.exports = {
    v1: {
        getHolaMundo:getHolaMundo

    }
};
//Get Functions
function getHolaMundo(req,res,next){
    res.status(200).send("HOLA UACH");

}