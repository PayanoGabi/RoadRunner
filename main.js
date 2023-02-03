  document.addEventListener('DOMContentLoaded', () => {
      const dino = document.querySelector('.dino');
      const grid = document.querySelector('.grid')
      const alert = document.querySelector('.alert')
      let isJumping = false;
      let gravity = 0.9;
      let gameOver = false;


      function control(e) {
          if (e.keyCode === 32 ) {
              if (!isJumping) {
                  isJumping = true;
                  jump()
              }
              //space
              console.log('space entered')
          }
      }

      function controlMob() {
        
            if (!isJumping) {
                isJumping = true;
                jump()
            }
            console.log('space entered')
        
        }
      document.addEventListener('touchend', controlMob)
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
      }

      function generateObstacles(){
          let randomTime = Math.random() * 4000;
          let obstaclePosition = 1000;
          const obstacle = document.createElement('div')
          if (!gameOver) obstacle.classList.add('obstacle')
          grid.appendChild(obstacle);
          obstacle.style.left = obstaclePosition + 'px';

          let timerId = setInterval(function(){
              if(obstaclePosition > 0 && obstaclePosition < 50  && position < 50){ 
                  clearInterval(timerId);
                  gameOver = true
                  alert.innerHTML = "Game Over";

                  while(grid.firstChild){
                      grid.removeChild(grid.lastChild)
                  }
              }
              obstaclePosition -=10;
              obstacle.style.left = obstaclePosition + 'px';
          },20)

          if(!gameOver) setTimeout(generateObstacles, randomTime)

      }
      generateObstacles()
  })