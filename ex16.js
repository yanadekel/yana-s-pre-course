(function () {
    "use strict";

    // A solution without revers method:

    let intArr = [2, 5, 6, 6, 7, 9]

    function reverseArr(Arr) {

        let newArr = [];

        for (let i = Arr.length - 1; i >= 0; i--) {
            newArr.push(Arr[i]);
        }
        return newArr;
    }

    console.log(reverseArr(intArr));




    //A solution without revers method:

    //let intArr = [1, 2, 3, 4]

    // function reverseArr(arr) {

    //     return intArr.reverse().join('');
    // }


    // console.log(reverseArr(intArr));















})();