jQuery(document).ready(function(){

  $('.more_btn').on('mouseover',function(){
    $('.highlighted').removeClass('highlighted');
    $(this).closest('.more_btn').addClass('highlighted');
  });
  $('.more_btn').on('mouseout',function(){
    $('.highlighted').removeClass('highlighted');
  });

  $('.more_btn').on('click',function(){
    $(this).closest('.more_btn').fadeToggle();
    $(this).closest('.row').find('.hidding').fadeToggle(2000);

  });

});
