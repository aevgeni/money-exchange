// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change    
    let exchange = {};
    if(currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    if(currency >= 50) {
      exchange.H = Math.floor(currency / 50);
      currency -= (exchange.H * 50);
    }
    if(currency >= 25) {
      exchange.Q = Math.floor(currency / 25);
      currency -= (exchange.Q * 25);
    }
    if(currency >= 10) {
      exchange.D = Math.floor(currency / 10);
      currency -= (exchange.D * 10);
    }
    if(currency >= 5) {
      exchange.N = Math.floor(currency / 5);
      currency -= (exchange.N * 5);
    }
    if(currency > 0) {
      exchange.P = currency;
    }
    return exchange;

}
