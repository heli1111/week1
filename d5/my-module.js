function roundTheNumber (x){
   return Math.floor(x);
}

module.exports = {
    x : 2,
    multiply: function(x,y){
        return roundTheNumber(x * y);
    }
}