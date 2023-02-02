  document.addEventListener('DOMContentLoaded', ()=> {
      const dino = document.querySelector('.dino');

      function control(e){
          if(e.keyCode === 32){
              jump()
              //space
              console.log('space entered')

          }
      }
      document.addEventListener('keyup', control)

      function jump(){
          let position = 0;
          let timerId = setInterval(function(){
              console.log('up');
              position += 30
              dino.style.bottom = position + 'px';


              if(position === 150){
                  clearInterval(timerId);
                  console.log('down');
                position -= 30;
    
              }

          }, 20)
          if(e.keyCode === 38){
              //up arrow

          }
          
      }
  })