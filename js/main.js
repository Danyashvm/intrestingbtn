const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    if(good.checked && cheap.checked && fast.checked) {
        if(good === theClickedOne) {
            fast.checked = false
        }

        if(cheap === theClickedOne) {
            good.checked = false
        }

        if(fast === theClickedOne) {
            cheap.checked = false
        }
    }
}

$(document).ready(function(){
    $('.popup1-btn').on('click', function(event){
      event.preventDefault();
      $('.popup1').fadeIn('fast', function(event) {
      });
    });
    $('.popup-close').on('click', function(event){
      event.preventDefault();
      $('.popup1').fadeOut('fast', function(event) {
      });
    });

    $('.popup2-btn').on('click', function(event){
      event.preventDefault();
      $('.popup2').fadeIn('fast', function(event) {
      });
    });
    $('.popup-close').on('click', function(event){
      event.preventDefault();
      $('.popup2').fadeOut('fast', function(event) {
      });
    });

    $('.popup3-btn').on('click', function(event){
      event.preventDefault();
      $('.popup3').fadeIn('fast', function(event) {
      });
    });
    $('.popup-close').on('click', function(event){
      event.preventDefault();
      $('.popup3').fadeOut('fast', function(event) {
      });
    });

    $('.popup4-btn').on('click', function(event){
      event.preventDefault();
      $('.popup4').fadeIn('fast', function(event) {
      });
    });
    $('.popup-close').on('click', function(event){
      event.preventDefault();
      $('.popup4').fadeOut('fast', function(event) {
      });
    });

    $('.popup5-btn').on('click', function(event){
      event.preventDefault();
      $('.popup5').fadeIn('fast', function(event) {
      });
    });
    $('.popup-close').on('click', function(event){
      event.preventDefault();
      $('.popup5').fadeOut('fast', function(event) {
      });
    });

    $('.popup6-btn').on('click', function(event){
      event.preventDefault();
      $('.popup6').fadeIn('fast', function(event) {
      });
    });
    $('.popup-close').on('click', function(event){
      event.preventDefault();
      $('.popup6').fadeOut('fast', function(event) {
      });
    });
      $('.slider').slick();
});