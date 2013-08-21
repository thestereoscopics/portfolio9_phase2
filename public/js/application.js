$(document).ready(function() {

  $('.awesomeness_teller').on('click', function(e) {
    var $teller = $(e.target).text();
    
    console.log($teller);
    $('h2').empty();
    $('h2').append($teller);

  });

  $('.skill_teller').on('click', function() {
       var $url = document.URL.split('/')[4];
       $('h2').empty();
       $('h2').append($url);
  });


  $('.meal_teller').on('click', function() {
       var random_num = Math.random() * meal.length
       var index = Math.floor(random_num)
       var meal_array = $.parseJSON( meal );
       $('h2').empty();
       $('h2').append(meal_array[index]);
       //method only works once in a while? help?
  });

});
