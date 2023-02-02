  document.addEventListener('DOMContentLoaded', () => {
      const dino = document.querySelector('.dino');
      let isJumping = false;
      let gravity = 0.9;


      function control(e) {
          if (e.keyCode === 32) {
              if (!isJumping) {
                  isJumping = true;
                  jump()
              }
              //space
              console.log('space entered')
          }
      }
      document.addEventListener('keyup', control)

      let position = 0;

      function jump() {
          let count = 0;
          let timerId = setInterval(function () {
              console.log('up');
              position += 30
              dino.style.bottom = position + 'px';

              if (count === 15) { //divisible by 30
                  clearInterval(timerId);
                  console.log('down');
                  let downTimerId = setInterval(function () {
                      if (count === 0) {
                          clearInterval(downTimerId)
                          isJumping = false;

                      }
                      position -= 10;
                      count--;
                      position = position * gravity;
                      dino.style.bottom = position + 'px';
                  }, 20)

              }
              count ++;
              position += 30;
              position = position * gravity;
              dino.style.bottom = position + 'px';


          }, 20)
          //   if(e.keyCode === 38){
          //       //up arrow

          //   }

      }
  })