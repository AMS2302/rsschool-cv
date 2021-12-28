# Aleksandr Struchinski
***
### Contacts
* __Address:__ Minsk, Belarus
* __Phone:__ +375(29) 524-74-14
* __E-mail:__ ams23post@gmail.com
* __GitHub:__ [AMS2302](https://github.com/AMS2302)
* __Discord:__ AMS2302#3475

***
### Skills
* HTML
* CSS
* JavaScript
* Git, GitHub
* VS Code
* Figma

***
### Code example
__16 + 18 = 214 (KATA from CODEWARS):__ In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-) You may assume both integers are positive integers.
```
function add(num1, num2) {

  function makeArray(num) {
    return String(num).split('');
  }

  let arr1 = makeArray(num1);
  let arr2 = makeArray(num2);
  let maxLength = Math.max(arr1.length, arr2.length);
  let sumArr = [];

  for (let i = maxLength - 1; i >= 0; i--) {

    function findValue(arr, i) {
      let index = arr.length - (i + 1);
      return +((index >= 0) ? arr[index] : 0);
    }

    let value1 = findValue(arr1, i);
    let value2 = findValue(arr2, i);
    sumArr.push(value1 + value2);
  }

  return +sumArr.join('');
}
```
