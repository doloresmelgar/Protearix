jQuery(document).ready(function(){
  $('.more_btn').on('click',function(){
    $(this).closest('.more_btn').fadeToggle();
    $(this).closest('.row').find('.hidding').fadeToggle(2000);

  });

});
