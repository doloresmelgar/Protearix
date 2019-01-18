jQuery(document).ready(function(){

  $('.icon').on('mouseover',function(){
    $('.highlighted').removeClass('highlighted');
    $(this).closest('.b_icon').addClass('highlighted');
  });

  $('.icon').on('mouseout',function(){
    $('.highlighted').removeClass('highlighted');
  });
  
});
