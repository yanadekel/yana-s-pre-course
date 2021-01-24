(function () {
  "use strict";

  const readlineSync = require('readline-sync');
  // question No 1

  let numOfPeop = readlineSync.question('How many people are you going with? ');
  numOfPeop = Number(numOfPeop);
  console.log(numOfPeop);
  console.log(!Number.isInteger(Number(numOfPeop)))

  if (numOfPeop <= 0 ||  !Number.isInteger(Number(numOfPeop))) {
    throw 'NOT A VALID NUMBER, "Bye, Bye"';
  }

  //question No 2,3
  let food = ['Italian', 'spanish', 'Japanis'];
  let krestaurant = [' "HAVA"', ' "Kipa Sruga-Taco"', ' "kosher sushi"'];
  let gkosherrestaurant = [' "MAMA-RAHEL"', ' "KIPA-TACO"', ' "RAK OREZ"'];
  let restaurant = ['"fat vinny"', '"tapio"', '"mojo"'];
  let go = readlineSync.keyInYN('Should it be Kosher? ');





  if (typeof go === 'string') {

    throw "see you next time";
  }
  else if (go) {
    if (readlineSync.keyInYNStrict('Should it be Kosherut Lemehadrin ? ')) {
      let gkosheri = readlineSync.keyInSelect(food, 'What kind of glat kosher food do you want? ', { cancel: false });
      console.log("That's Great! if you prefer " + food[gkosheri] + " food" + " I recomend you " + gkosherrestaurant[gkosheri] + " restaurant.");

    } else {
      let kosheri = readlineSync.keyInSelect(food, 'What kind of  kosher food do you want? ', { cancel: false });
      console.log("That's Great! if you prefer " + food[kosheri] + " food" + " I recomend you " + krestaurant[kosheri] + " restaurant.");
    }
  }
  else {
    let index = readlineSync.keyInSelect(food, 'What kind of food do you want? ', { cancel: false });

    console.log("That's Great! if you prefer " + food[index] + " food" + " I recomend you " + restaurant[index] + " restaurant.");
  }















})();