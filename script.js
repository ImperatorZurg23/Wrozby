$(document).ready(function(){

  const sentence ='Spotkasz piękną blondynkę wieczorową porą'
  var letters = sentence.split('')

  const divRandom = document.getElementById('random')
  for(let i = 0; i<letters.length; i++){
    const letter = document.createElement('span')
    letter.setAttribute('data-change', Math.round(Math.random()*500) )
    letter.innerHTML = '0'
    letter.classList.add('nbr')
    letter.classList.add('ltr')
    letter.setAttribute("id", "span")
    divRandom.appendChild(letter)
  }

  var $data = 0;
  var $randomnbr = $('.nbr');
  var $timer= 10;
  var $it;
  var index;

  function random(){
    return Math.round(Math.random()*9);
  };
  
  function select(){
    return Math.round(Math.random()*letters.length+1);
  };
  
  function value(){
    $('.nbr:nth-child('+select()+')').html(''+random()+'');
    $('.nbr:nth-child('+select()+')').attr('data-number', $data);
    $data++;
    
    $randomnbr.each(function(){
        if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))){
          index = $('.ltr').index(this);
          $(this).html(letters[index]);
          $(this).removeClass('nbr');
        }
    });
    
  };
  $it = setInterval(value, $timer);
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));

  }
  sleep(6000).then(() => {

    const span = document.querySelectorAll('#span')

    for (let i = 0; i < span.length; i++) {
      let item = span[i]
      if (item.innerText.length === 0){
        item.classList.add('newClass')
        console.log(item)
      }
    }
  });


});