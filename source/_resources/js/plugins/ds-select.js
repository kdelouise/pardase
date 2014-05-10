//ds-select v1.8

(function(){
	//~~~~~~~ ** .WITH-SELECT-COUNT ~~~~~~~~~~
	if ($(".ds-select").hasClass("with-select-count")) {
		$(".with-select-count").find(".role").before('<p class="select-count">All</p> ');
	}
}());
	

$("body").on("click", ".ds-select li a", function (e) {
	e.preventDefault();
    var $current = $(this);													//	dropdown menuRole text
    var $menuRole = $current.text();
	var buttonState = "btn-primary active";
	var $dsSelectContainer = $current.closest(".ds-select");

    var $mainButton = $dsSelectContainer.find(".btn");						//	the button
	var $mainSpan = $mainButton.children(".role");
	var activeBtnText = "Active";
	
	var $addRole = $dsSelectContainer.find(".tags-container");				//	tags container
	
	var $menuSelected = $dsSelectContainer.find(".selected");
	var $menuInactive = $dsSelectContainer.find(".inactive");
	
	var $all = $current.parents(".ds-select").find("li > a");
			
	//~~~~~~~ BUTTON FUN ~~~~~~~
	
	// show button is active (selections have been made)
		$mainButton.addClass(buttonState);
		$mainSpan.html(activeBtnText);  //Christian added this on Aug 10th 2013 Common Era

	// selected menu item highlight
	$current.toggleClass("selected");

	//count all selected items
	var $menuSelectedCount = $dsSelectContainer.find(".selected").length;

	// nothing in menu selected? no button style
	if (!$dsSelectContainer.find("li a").hasClass("selected")) {
		$mainButton.removeClass(buttonState);
		// ** .combo make button say inactive
		if ($dsSelectContainer.hasClass("combo")) {
			$mainSpan.html("Inactive");
		}
	}
	

	//~~~~~~~ ** .WITH-SELECT-COUNT ~~~~~~~~~~
	if ($dsSelectContainer.hasClass("with-select-count")) {
		$mainSpan.siblings(".select-count").text(($menuSelectedCount > 0 ? $menuSelectedCount : "All"));
	}
	
	//~~~~~~~ ** .WITH-TAGS ~~~~~~~~~~
	//add selection in fancy tag format
	if ($dsSelectContainer.hasClass("with-tags")) {
		$addRole.append('<li class="tag"> '+'<span>'+$menuRole+'<a href="#" class="remove-code"><i class=\"ss-icon\">&#xE0D0;</i></a></span></li>');
		
		
		// ~~~~~~~~~~ TAG REMOVAL~~~~~~~~~~
		// remove tag from list when toggled in dropdown
		if (!$current.hasClass("selected")) {
			$addRole.children('li:contains("'+$menuRole+'")').remove();
		}
		
		//remove tag from list when trash can is clicked
		$addRole.children("li").on('click', 'a', function(e) {
		    e.preventDefault();
			
			var $menuSelectedRemove = $(this).parents().find(".ds-select.multiple .selected");

			var $roleTagSS = $(this).closest("span").text();
			var roleTag = $roleTagSS.slice(0, -1);								//remove the trash can unicode character
		
			//toggle menu highlighting
			$menuSelectedRemove.each ( function () {
				if ($(this).text() == roleTag) {
					$(this).toggleClass("selected");
				}
			});
		
			//finally remove the tag
			$(this).closest("li").remove();
			// r u empty
			if ($addRole.is(':empty')) {
				$mainButton.removeClass(buttonState);
			}
		});
	}
	
	var allSelected = false;
	//~~~~~~ ** .SELECT-ALL ~~~~~~~~
	if ($current.hasClass("select-all") && ($current.not(".selected"))) {
	
		
		$all.addClass("selected");
		$all.each( function () {
			$addRole.append('<li class="tag"> '+'<span>'+$(this).text()+'<a href="#" class="remove-code"><i class=\"ss-icon\">&#xE0D0;</i></a></span></li>');
			
		});
		
		allSelected = true;

		//if (allSelected) {
		//	$("body").css("background-color", "red");
		//	$(".select-all").click( function() {
		//		$(this).removeClass("selected");
		//		//$(this).parents().find(".tags-container").html("whtu");
		//	});
		//	//$(".select-all").click().parents().css("background-color", "green");
	    //

		//}
	}
//	else if ($current.hasClass("select-all") && $current.hasClass("selected")) {
	

		//$addRole.empty();
//	}
	
	
	//~~~~~~~ALL THE ** .SINGLE LADIES ~~~~~~~~~~
	if ($dsSelectContainer.hasClass("single") && !$dsSelectContainer.hasClass("multiple")) {
		$mainSpan.html($menuRole);
		
		// show button is inactive
		if ($(this).hasClass("inactive")) {
			$menuSelected.removeClass("selected");
			$mainButton.toggleClass(buttonState);
			$mainSpan.html($menuRole);
		}
		else {
			$mainButton.addClass(buttonState);
		}
		// only select one item in menu
		$all.removeClass("selected");
		$current.addClass("selected")
	}
	 
	
	//~~~~~~~ ** .COMBO BUTTON ~~~~~~~~~~
	//show button is inactive when inactive is selected
	if ($dsSelectContainer.hasClass("combo")) {
		if ($current.hasClass("inactive")) {
			$menuSelected.removeClass("selected");
			$addRole.empty();
			
			$mainButton.toggleClass(buttonState);
			$mainSpan.html($menuRole);
		}
		// if any active, deactivate inactive & + "active" text
		else {
			$menuInactive.removeClass("selected");
			$mainSpan.html(activeBtnText);
		}
	}

	
	//~~~~~~~ ** .MENU-OPEN ~~~~~~~~~~  
	//Note: combo has menu-open bundled in by default
	// keep the menu open onclick
	if ($dsSelectContainer.hasClass("combo") || $dsSelectContainer.hasClass("menu-open")) {
	    e.stopImmediatePropagation();
		
		// ...unless you click inactive, then close again
		if ($current.hasClass("inactive")) {
			$current.parents(".btn-group").removeClass("open");
		}
	}
	
	

});

		
//~~~~~~~ RESET ALL ~~~~~~~~~
// .with-tags always means .multiple
$(".ds-select.multiple").on("click", '.reset', function(e) {
	e.preventDefault();
	
	var $menuSelected = $(this).parent().find(".selected");
	var $addRole = $(this).siblings(".tags-container");
	var $mainButton = $(this).siblings(".btn-group").children(".btn");
	var buttonState = "btn-primary active";
	
	$menuSelected.removeClass("selected");
	$addRole.empty();
	$mainButton.removeClass(buttonState);
	
	// for select-count
	$mainButton.find('.select-count').html("All");
});



//~~~~~~~~~ ** .OVERFLOW-# ~~~~~~~
$(".ds-select").on("click", "button", function () {

	var $overflow = $(this).closest(".ds-select");
	var $itemsWrap = $overflow.find(".dropdown-menu"); 
	var	$items = $itemsWrap.children("li");

	var n = $items.length;

	//set how many menu items before overflow
	if ($overflow.is('[class*="overflow-"]')) {			
		var $limitName = $overflow.attr("class");
		var $limitNumber = parseInt(/overflow-(\d+)/.exec($limitName)[1], 10);

		//!!! TO DO: make a calculation
		var $itemHeight = 38;
		var $fixedHeight = $itemHeight * $limitNumber;
	
			if (n > $limitNumber) {
				$itemsWrap.css("height", $fixedHeight).css("overflow", "auto");
			}
	}
});
