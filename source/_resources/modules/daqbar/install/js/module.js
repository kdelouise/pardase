$(document).ready(function(){
  $('.daqbar li:first-child a').on('click', function(e){
      e.preventDefault();
      if($(this).hasClass('closed')){
          $(this).removeClass('closed');
          $(this).html('<i class="ss-icon ss-standard">&#x002D;</i>');
          $('.daqbar li.options').fadeIn('fast');
      }
      else{
          $(this).addClass('closed');
          $(this).html('<i class="ss-icon ss-standard">&#x002B;</i>');
          $('.daqbar li.options').fadeOut('fast');
      }
  });

});