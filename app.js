var form = document.querySelector('.form');
var input = document.querySelector('.input1');
var btn = document.querySelector('.btn');
var result = document.querySelector('.result');

result.textContent = '👆Yoshingizni kiriting!';

form.addEventListener('submit', function (evt){
  evt.preventDefault();

  if (isNaN(input.value)) {
    result.textContent = 'Son kiriting!';
  } else {
    if (input.value > 130) {
      result.textContent = 'Xaqiqiy yoshingizni kiriting! ';
    } else {
      if (input.value > 60) {
        result.textContent = 'Sizga chipta bepul!';
      } else {
        if (input.value > 20) {
          result.textContent = 'Sizga chipta narxi 2.000 sum';
        } else {
          if (input.value > 6) {
            result.textContent = 'Sizga chipta narxi 1.400 sum';
          } else {
            if (input.value == 0 ) {
              result.textContent = '👆Yoshingizni kiriting!';
            } else {
              if (input.value < 0 ) {
                result.textContent = 'Xaqiqiy yoshingizni kiriting!';
              } else {
                if (input.value < 7 ) {
                  result.textContent = 'Sizga chipta bepul!';
                } else {
                  result.textContent = 'error';
                }
              }
            }
          }
        }
      }
    }
  } 
})







