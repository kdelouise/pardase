$(document).ready(function () {
	/*Scroll out Payment*/
	
    var paymentHeight = $('.payment_profile').outerHeight();
    $('#payment_process').css('min-height', '230px');

    $('.payment_profile_select').on('click', function(e){
        e.preventDefault();
        paymentHeight = $('.payment_invoice_holder').outerHeight();
        $('#payment_process').animate({
            height: paymentHeight
        }, 250, function(){
            $('.payment_profile').addClass('slideout');
            $('.payment_invoice_holder').css('right', '0');
        });
        
    });	 
    $('.payment_invoice_holder button.payment_profile_select').on('click', function(e){
        e.preventDefault();
        paymentHeight = $('.payment_profile').outerHeight();
        $('#payment_process').animate({
            height: paymentHeight
        }, 250, function(){
            $('.payment_invoice_holder').css('right', '-900px');
            $('.payment_profile').removeClass('slideout');
        });
    });  
    
    $('body').on('click', '.social-list td:last-child a', function(e){
        e.preventDefault();
        var socialTable = $(this).closest('table'),
            closestRow = $(this).closest('tr'),
            tableRows = socialTable.find('tbody tr').length;

        $('#socialDeleteModal').modal('show');
        $('body').on('click', '#socialDeleteModal .modal-footer .btn-success', function(){
            closestRow.remove();
            tableRows --;
            $('#socialDeleteModal').modal('hide');
            console.log(tableRows);
            if(tableRows == 0){
                socialTable.animate({opacity: 0}, 250, function(){
                    socialTable.replaceWith('<p>You have not added any accounts. Please add an account above.</p>');
                    socialTable.animate({opacity: 1}, 250);
                });
            }
        });
        
    });
	
	$("#SocialMediaDistribution a.social_delete").on("click", function(e){
		e.preventDefault();
		console.log("bye");
		$("#socialDeleteModal #modal-body p").html("<p>Are you sure you would like to delete this social media account?</p>");
		$("#socialDeleteModal #modal-body small").show().html("Note: Pending tasks which use this account may be affected.");
	});
	
	$("#payment_process .payment_delete_modal").on("click", function(e){
		e.preventDefault();
		console.log("hi");
		$("#socialDeleteModal #modal-body p").html("<p>Are you sure you wish to delete this Payment Profile?</p>");
		$("#socialDeleteModal #modal-body small").hide();
	});
	
	/*check for right currency pattern*/
	
	jQuery(function($) {
	      $('#payment_amount').autoNumeric('init');    
	  });
	
	
	

	/* Auto Safe Alert BEGINS */
    $('.add-alert').click(function(){
        $(".alert-message").show();
    });
	/* Auto Safe Alert ENDS */


    /* User Table Control BEGINS */

    /* User Table Control: Up/Down Arrow */
    $('.contacts li').click(function () {
		$('.contacts li').removeClass('bgHover');
        $(this).toggleClass('bgHover');
    });
    
/*     Christian write this..  */
    $('.arrow-down').on("click", function () {
        $(this).parents().find('.edit-buttons').toggleClass('displBlck');
        $(this).toggleClass('up-arrow');
        $(this).parents().find('dd').toggleClass('displBlck');
        $(this).parents().find('.edit-buttons').toggle();  

    });

    /* User Table Control: Edit Button Show Form      */
       $('.edit-buttons').on("click", function () {
        $(this).parents().find('dl, i').hide();
        $(this).hide();
        $(this).next().show();
        var divAppend = $(this).parents().find('.add-user-form').addClass('addUser-form');
        $(this).parents().append(divAppend);
        $('.addUser-form .user-btns .btn').on("click", function () {
            $(this).parents().find('dl, i').show();
            $(this).parents().find('.edit-buttons').show();
            $(this).parents().find('.arrow-down').on("click", function () {
                $(this).parents().find('.edit-buttons').toggleClass('dispNoneCancel');
            });
        });
    });


    $('.addUser-form .user-btns .btn').on("click", function () {
        window.scrollTo(0, 0);
        $(this).parents().eq(7).find('.arrow-down').on("click", function () {
            $(this).parents().eq(0).find('.edit-buttons').toggleClass('dispNoneCancel');
        });

        $(this).parents().find('.edit-buttons').on("click", function () {
            $(this).parents().find('.addUser-form').show();
            $(this).hide();
        });

        $(this).parents('.addUser-form').hide();
        $(this).parents().eq(7).find('dl, i').show();
        $(this).parents().eq(7).find('.edit-buttons').show();
    });

    /* User Table Control ENDS */


    // Show & Hide : Fax User BEGINS */
    $("span.faxUser a").click(function () {
        $('span.faxUser a').hide();
        $('span.faxUser label').show();
        $('span.faxUser input').show();
    });
    // Show & Hide : Fax User ENDS */

    
    // Show & Hide : Fax Edit BEGINS */
    $('span.faxEdit a').click(function () {
        $('span.faxEdit a').hide();
        $('span.faxEdit label').show();
        $('span.faxEdit input').show();
    });
    // Show & Hide : Fax Edit ENDS */

   
    // Show & Hide : Fax Contact BEGINS */
    $('span.faxContact a').click(function () {
        $('span.faxContact a').hide();
        $('span.faxContact label').show();
        $('span.faxContact input').show();
    });
    // Show & Hide : Fax Contact ENDS */


    //TODO: with this, any ".show_hide" click with toggle BOTH the contact user select and the reject email.  Is that what we want?  These should be combined or re-written
    // Show & Hide : Contact is also a user? BEGINS */
    $(".contactUser select").hide();
    $(".show_hide").show().click(function(){
        $(".contactUser select").slideToggle();
    });
    // Show & Hide : Contact is also a user? ENDS */


    // Show & Hide : Include email in rejection modal BEGINS */
    $(".rejectEmail").hide();
    $(".show_hide").show().click(function(){
        $(".rejectEmail").slideToggle();
    });
    // Show & Hide : Include email in rejection modal ENDS */



    // Show & Hide : Contact Email BEGINS */
    $(".add-contact-form .addEmail a.plus").click(function(){
        $(".add-contact-form .moreEmail input").show();
        $(".add-contact-form .moreEmail a.plus").show();
        $(".add-contact-form .addEmail a.plus").hide();
    });

    $(".add-contact-form .moreEmail a.plus").click(function(){
        $(".add-contact-form .moreEmail a.exit").show();
        $(".add-contact-form .anotherEmail input").show();
        $(".add-contact-form .anotherEmail a.exit").show();
        $(".add-contact-form .moreEmail a.plus").hide();
    });

    $(".add-contact-form .moreEmail a.exit").click(function(){
        $(".add-contact-form .moreEmail input").hide();
        $(".add-contact-form .moreEmail a.exit").hide();
    });

    $(".add-contact-form .anotherEmail a.exit").click(function(){
        $(".add-contact-form .anotherEmail input").hide();
        $(".add-contact-form .anotherEmail a.exit").hide();
    });
    
    // Show & Hide : Contact Email ENDS */


    // Show & Hide : User Email BEGINS */
    $(".add-user-form .addEmail a.plus").click(function(){
        $(".add-user-form .moreEmail input").show();
        $(".add-user-form .moreEmail a.plus").show();
        $(".add-user-form .addEmail a.plus").hide();
    });

    $(".add-user-form .moreEmail a.plus").click(function(){
        $(".add-user-form .moreEmail a.exit").show();
        $(".add-user-form .anotherEmail input").show();
        $(".add-user-form .anotherEmail a.exit").show();
        $(".add-user-form .moreEmail a.plus").hide();
    });

    $(".add-user-form .moreEmail a.exit").click(function(){
        $(".add-user-form .moreEmail input").hide();
        $(".add-user-form .moreEmail a.exit").hide();
    });

    $(".add-user-form .anotherEmail a.exit").click(function(){
        $(".add-user-form .anotherEmail input").hide();
        $(".add-user-form .anotherEmail a.exit").hide();
    });
    $(document).ready(function () {
    	$(".toolTip").tipTip();
 	});
    
    
    });
    
    // Admin : Alerts */
    	// Localization */
    	
	    $(".form-control-local").change(function () {
	    var str = "";
	
	    str = parseInt($("select option:selected").val());
	        
	     if(str >= 1)
	         $(".alert-regional").fadeIn().delay(4000).fadeOut();
	      else
	          $(".alert-regional").hide();
	});

    	// Time Zone */
    	
	    $(".form-control-timezone").change(function () {
	    var str = "";
	
	    str = parseInt($("select option:selected").val());
	        
	     if(str >= 1)
	         $(".alert-timezone").fadeIn().delay(4000).fadeOut();
	      else
	          $(".alert-timezone").hide();
	});

    	// Email Preference */
    	
    	$(document).ready(function(){
    	  $(".update-email-btn").click(function(){
	    	  $(".alert-email-pref").fadeIn().delay(4000).fadeOut();;
	    	  });
    
    
    });
    
        	// Update Company Contact */
    	
    	$(document).ready(function(){
    	  $(".btn-success").click(function(){
	    	  $(".alert-contact-update").fadeIn().delay(2000).fadeOut();;
	    	  });
    
    
    });

    
    
   		 // Update User Contact */
    	
    	$(document).ready(function(){
    	  $(".btn-success").click(function(){
	    	  $(".alert-user-contact-update").fadeIn().delay(2000).fadeOut();;
	    	  });
    
    
    });
    
     // Update User Avatar */
    	
    	$(document).ready(function(){
    	  $(".btn-success").click(function(){
	    	  $(".alert-avatar-update").fadeIn().delay(2000).fadeOut();;
	    	  });
    
    






    	//Avatar Mouseover */
    	
    	$(document).ready(function(){
                $('#hover').hover(
                function(){$('#effect').fadeIn()}, 
                function(){$('#effect').fadeOut()}
                );
                });
 

 
 // Expand Label  */

 		// Expand Label  */
			
			$(".expand0").click(function(){
	 		$(".expand0").hide();
	 		$(".collapse0").show();
			})
			
			$(".collapse0").click(function(){
	 		$(".collapse0").hide();
	 		$(".expand0").show();
			})

 		
 			$(".expand1").click(function(){
	 		$(".expand1").hide();
	 		$(".collapse1").show();
			})
			
			
			$(".collapse1").click(function(){
	 		$(".collapse1").hide();
	 		$(".expand1").show();
			})
			
			
			$(".expand2").click(function(){
	 		$(".expand2").hide();
	 		$(".collapse2").show();
			})
			
			
			$(".collapse2").click(function(){
	 		$(".collapse2").hide();
	 		$(".expand2").show();
			})


			$(".expand3").click(function(){
	 		$(".expand3").hide();
	 		$(".collapse3").show();
			})
			
			
			$(".collapse3").click(function(){
	 		$(".collapse3").hide();
	 		$(".expand3").show();
			})


			
  		// Social Drawers */

        $('.btn.facebook.canHit').click(function(e){
                $('.facebook-info').toggleClass('visible');
                $('.facebook-info').removeClass('more');
                $('.twitter-info').removeClass('visible more');
                $('.linkedin-info').removeClass('visible more');
        });


        $('.btn.linkedin.canHit').click(function(e){
                $('.linkedin-info').toggleClass('visible');
                $('.linkedin-info').removeClass('more');
                $('.twitter-info').removeClass('visible more');
                $('.facebook-info').removeClass('visible more');
        });

        $('.btn.twitter.canHit').click(function(e){
                $('.twitter-info').toggleClass('visible');
                $('.twitter-info').removeClass('more');
                $('.linkedin-info').removeClass('visible more');
                $('.facebook-info').removeClass('visible more');

        });

        $(".facebook.setup > .btn").click(function(e){
            $('.facebook.setup').fadeOut();
            $('.facebook-info').removeClass("halfling");
            $('.facebook-info').addClass('visible');
            $('.social-contain').fadeIn();;
        })

        $('.edit-social').click(function(){
            //$(this).hide();
            $('.social-account-setup.review').hide();
            $('.social-account-setup.edit-2').show();
            
        });

        $(document).on('click' , '.social-saved' , function(){
            $('.hashtags .label').show();
            $('.alert-danger').show();
            $('.social-account-setup.review').fadeIn();
            $('.social-account-setup.edit-2').fadeOut();
            $('.social-account-setup.deactivated').fadeOut();
            $('.select2-search-choice').remove();
            $('.hide-deactive').text('View Deactived Accounts').removeClass('hide-deactive').addClass('view-deactive');
            $('.social-account-setup.deactivated').fadeOut();
        });

        $(document).on('click' , '.social-removed' ,function(){
            $('.social-account-setup.review').fadeOut();
            $('.social-account-setup.deactivated').fadeIn();
            $('.alert-danger').hide();
            $('.view-deactive').text('Hide Deactived Accounts').removeClass('view-deactive').addClass('hide-deactive');
            $('.social-account-setup.deactivated').fadeIn();
            //$('.active-social').text("INACTIVE").removeClass('active-social').addClass('inactive');
        });

        $(document).on('click', '.view-deactive', function(){
            $(this).text('Hide Deactived Accounts').removeClass('view-deactive').addClass('hide-deactive');
            $('.social-account-setup.deactivated').fadeIn();
        });

        $(document).on('click', '.hide-deactive', function(){
            $(this).text('View Deactived Accounts').removeClass('hide-deactive').addClass('view-deactive');
            $('.social-account-setup.deactivated').fadeOut();
        });

        var totalcount = 0;

        $('.account-validate').keyup( function (){

              var arr = $(this).val().split(" ");
              var matchitems = count('acmeco', arr);

              console.log(matchitems);

              if(matchitems > totalcount){
                totalcount = matchitems;
                $(this).tooltip('show');
              }
              if(matchitems < totalcount)
              {
                totalcount = matchitems;
                $(this).tooltip('hide');
              }

        });

        function count(value, array){
            var j=0;

            for(var i=0;i<array.length;i++)
            {

                if(array[i] == "acmeco"){
                    j++;    
                }
            }
            return j;
        }

        $('.delete-tag').click(function(){
            $(this).parent().hide();
        });

        $('.social-textarea').tooltip({trigger: 'hover'});
// Hashtag bank
    $(".hash-tag-input").select2({
        placeholder:'Select Hashtags',
        tags:[ '#Acquisitions', '#Advisory', '#Advertising', '#Aerospace', '#Agriculture', '#Airlines', '#Aviation', '#Automotive', '#Banking', '#Beverages', '#Biotechnology', '#Building', '#Chemicals', '#Class Action Lawsuits', '#Computers', '#Conference Call', '#Construction', '#Consumer', '#Contracts', '#Corporate', '#Defense', '#Dividend', '#Earnings', '#Ecommerce', '#Eda', '#Education', '#Electronics', '#Energy', '#Entertainment', '#Environment', '#Financing Agreements', 'Foods', 'Gaming', 'Government', 'Hardware', 'Health', 'Homeland Security', 'Insurance', 'Interactive', 'International', 'Internet', 'Investment Opinion', 'Joint Venture', 'Legal', 'Licensing Agreements Machinery', 'Management Changes', 'Manufacturing', 'Maritime', 'Marketing', 'Medical', 'Mergers', 'Metals', 'Mining', 'Movies', 'Multimedia', 'Music', 'Networking', 'Nonprofit', 'Nutrition', 'Oil', 'Paper', 'Peripherals', 'Pharmaceuticals', 'Philanthropy', 'Plastics Product', 'Public Affairs', 'Publishing', 'Real Estate', 'Religion', 'Reminder', 'Restaurants', 'Retail', 'Science', 'Semiconductors', 'Shipbuilding', 'Software', 'Sports', 'Supermarkets', 'Telecommunications', 'Textiles', 'Tobacco', 'Transportation', 'Travel', 'Utilities', 'Webcast'],
        multiple:true,
        tokenSeparators: [",", " "]
    });

	$('.add-another-sro-area').each(function(){
		$(this).find('.remove-added').click(function(){
			$(this).parents().eq(0).children('.input-append-sro-add').slideUp();
			$(this).parents().eq(0).children('.edgar-filing-edit-field').slideUp();
			$(this).parents().eq(0).slideUp();
		});
	
		$(this).find('.edgar-filing-filer-name').click(function(){
			$(this).parents().eq(0).children('.input-append-sro-second').slideUp();
			$(this).parents().eq(0).children('.edgar-filer-name').hide();
			$(this).parents().eq(0).children('.edgar-filer-name-edit-field').show();
		});
	
		$(this).find('.edgar-add-another-sro').click(function(){
			$(this).parents().eq(0).children('.input-append-sro-add').slideDown();
			$(this).parents().eq(0).children('.remove-added').show();
		});
	
	});
	
    $('.edgar-add-another-filer').click(function(){	 
   	 $('.create-edgar-signature-area').slideDown(1000);
	
	});
    $('.edgar-cancel-inline').click(function(){	 
   	 $('.create-edgar-signature-area').slideUp(1000);
	});
	
	
	$('.daqbar').on('change','select', function(){
		if(this.value=="op1"){
		 console.log('Changed');
		   $('#edgar_Application').removeClass('pending').removeClass('enabled').addClass('disabled');
		    $('.edgar_enable').html('Disabled');
			$('.custom-settings-btn a').prop('disabled', true);
			$('.expand-lab').remove();
		}
		if(this.value=="op2"){
		 console.log('Changed');
		   $('#edgar_Application').removeClass('disabled').removeClass('enabled').addClass('pending');
		}
		else if(this.value=="op3"){
		 console.log('Changed');
		   $('#edgar_Application').removeClass('disabled').removeClass('pending').addClass('enabled');
		   $('.edgar_enable').html('Enabled');
		   $('.custom-settings-btn a').prop('disabled', false);
		   $('.expand-lab').removeClass('hide');
		}
	});
	
    $('.view-edgar-filer-dropdown').click(function(){
   	 $('.edgar-filer-info-table').slideToggle();
   	 $('.add-new-filer-button').slideToggle();
   	 $('.edgar-add-another-filer').show();
   	 $('#EdgarCustomizeUserSettings').modal('show');
    });
 
    $('.add-new-filer-button').click(function(){
    	$('#AddFilerForm').modal('show');
   	$('#EdgarCustomizeUserSettings').modal('hide');
	
    });
	
	$('.payment_profile_new').tooltip('hide')
	
    });
	
	
    

