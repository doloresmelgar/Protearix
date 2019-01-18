jQuery(document).ready(function(){

  $('.share_btn').on('click',function(){
    var shareit_change = $('<button class="fb_btn"> &nbsp;Facebook&nbsp; </button>');
    $(this).closest('.proddesc').append(shareit_change);
    $(this).remove();
  });

  $('.price_btn').on('click',function(){
    var selectdescrip = $(this).closest('.proddesc')
    var amount = selectdescrip.data('price');
    var price = $('<p class="prodprice"> '+amount+' </p>');
    selectdescrip.append(price);
    $(this).remove();
  });

  $('.more_btn').on('click',function(){
    $(this).closest('.proddesc').find('.hidding').fadeToggle();
  });

});
