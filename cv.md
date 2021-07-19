# Struchynski Aleksandr
## e-mail: ams23post@gmail.com
* HTML
* CSS
* JavaScript
* Git
### example code:
```javascript
function validPass(password){

  let regexp = /^(?=.*[A-Za-z])(?=.*[\d])\w{4,19}$/gi;
  if (regexp.test(password)) {
  return 'VALID'
  }
  else {
    return 'INVALID'
  }
}
```