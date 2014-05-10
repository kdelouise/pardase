// initialise plugin
var countryData = $.fn.intlTelInput.getCountryData().reverse();
countryData.push({name : " ", iso2: "null", dialCode: " "});
// var arrayLength = countryData.length;
// for(var i = 0; i <arrayLength; i++){
//     console.log(countryData[i]);
// }
$.fn.intlTelInput.setCountryData(countryData.reverse());

$('.intlPhone').intlTelInput({
  defaultCountry: "null",
  validationScript: "/source/_resources/js/plugins/isValidNumber.js"
});

$('body').on('focus', '.intlPhone, .intlPhoneCompany, .intlPhoneBilling, .intlPhonePrimary', function(){
  var telInput = $(this),
  errorMsg = telInput.parent().siblings(".error-msg"),
  validMsg = telInput.parent().siblings(".valid-msg");
  phoneIco = telInput.parent().siblings(".phone-ico");
 
  // on blur: validate
  telInput.blur(function() {
    if ($.trim(telInput.val())) {
      if (telInput.intlTelInput("isValidNumber")) {
        validMsg.removeClass("hide");
        phoneIco.addClass('hide');
        errorMsg.addClass('hide');
      } else {
        telInput.addClass("error");
        errorMsg.removeClass("hide");
        validMsg.addClass("hide");
        phoneIco.addClass('hide');

      }
    }
  });

  // on keydown: reset
  telInput.keydown(function() {
    telInput.removeClass("error");
    phoenIco.removeClass("hide");
    errorMsg.addClass("hide");
    validMsg.addClass("hide");
  });
});
