  document.addEventListener('DOMContentLoaded', () => {
      const dino = document.querySelector('.dino');
      const grid = document.querySelector('.grid')
      const alert = document.querySelector('.alert')
      const gameOverPic = document.querySelector('#gameOverPic')
      const exitBtn = document.querySelector('#exitBtn');
      const replayBtn = document.querySelector('#replayBtn')
      const gameFinished = document.querySelector('.finishedGame')
      let isJumping = false;
      let gravity = 0.9;
      let gameOver = false;


      function control(e) {
          if (e.keyCode === 32 ) {
              if (!isJumping) {
                  isJumping = true;
                  jump()
              }
            
          }
      }

      function controlMob() {
            if (!isJumping) {
                isJumping = true;
                jump()
            }
        }
      document.addEventListener('touchend', controlMob)
      document.addEventListener('keyup', control)

      let position = 0;

      function jump() {
          let count = 0;
          let timerId = setInterval(function () {
             // console.log('up');
              position += 30
              dino.style.bottom = position + 'px';

              if (count === 15) { //divisible by 30
                  clearInterval(timerId);
                 // console.log('down');
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
                  gameOverPic.setAttribute('src', 'https://64.media.tumblr.com/f23656943ce76476cc2d9cbe46f7b082/tumblr_n1g5u4k9Em1svwlszo1_500.gifv');
                  replayBtn.style.visibility = "visible";
                  exitBtn.style.visibility = "visible";
                  gameFinished.style = "display: flex;flex-direction: column;align-items: center;";
                  replayBtn.innerHTML = "Play again";
                  exitBtn.innerHTML = "Back to google";






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