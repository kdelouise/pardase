// ds-upload v 0.1.0
/* ds-upload v1.5
// REQUIRES DS-SELECT */

(function(){
	var numUpload = 0;
	//Upload File
	function uploadFile(file) {
		var fileType = file.slice(-4);
		var fileString = file.slice(12,25)+"..."+fileType;
		var fileTypeGuess;

		if (fileType === "xlsx") {
			fileTypeGuess = 'Spreadsheet';
		} else if (fileType === ".xls") {
			fileTypeGuess = 'Spreadsheet';
		} else if (fileType === ".csv") {
			fileTypeGuess = 'CSV';
		} else if (fileType === ".jpg" || fileType === ".png" && file.search("logo") === -1) {
			fileTypeGuess = 'Image';
		} else if (fileType === ".jpg" && file.search("logo") != -1){
			fileTypeGuess = 'Image';
		} else if (fileType === ".pdf") {
			fileTypeGuess = 'PDF';
		} else if (fileType === "docx" || fileType === ".doc") {
			fileTypeGuess = 'Document';
		} else if (fileType === "pptx" || fileType === ".ppt") {
			fileTypeGuess = 'Presentation';
		} else {		
			fileTypeGuess = 'Other';
		}

		
		var rando1 = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
		var rando2 = Math.floor(Math.random() * (200 - 100 + 1)) + 100;

		var uploadOnlyFileDisallowed = false;

		/* ~~~~~~ ** .ALLOW-ONLY ~~~~~~~~~
		// restricting file types, with error message */
		if( $(".loaded").hasClass("allow-only")) {
			//scope UOFD inside upload-only to true --> disallow all files until checked
			var uploadOnlyFileDisallowed = true;
			var str = $(".loaded").attr("class");
			var only = str.split(" ");
			var numOnly = only.length;


			// check: if fileTypeGuess IN MARKUP matches array, then allow upload
				for (i=2; i<numOnly; i++) {		
					if (fileTypeGuess === only[i]) {
						return uploadOnlyFileDisallowed = false;
					}
				}	
				// otherwise, throw error message if (still) disallowed
				if (uploadOnlyFileDisallowed) {
					$(".loaded").before('<div class="alert alert-error">Error: ' + fileTypeGuess + ' is not supported.<button type="button" class="close" data-dismiss="alert">×</button></div>');
					$(".loaded").siblings(".alert").delay(1200).fadeOut(function() { $(this).remove(); });
					return false;
				}
			} 

		// don't run allow-only JS if not set/false	
		if (!uploadOnlyFileDisallowed) {

   			 $(".loaded").prepend('\
   			 <li>\
				<img src="http://placekitten.com/' + rando1 + '/' + rando2 + '" />\
   			 	<div class="progress">\
   			 		<div class="bar" style="width:5%;"></div>\
   			 	</div>\
   			 	<div class="about">\
   			 		<p class="filename" data-toggle="tooltip" data-animation="fade" data-placement="top" data-trigger="hover" data-title="'+fileString+'">'+fileString+'</p>\
   			 	</div>\
   			 	</li>\
   			 	'
   			 ); 
			}

			 /* ~~~~ ** .WITH-SELECT ~~~~~~~~
			 // show the select button with a file type guess, allow fixing */
			 if($(".ds-upload").hasClass("with-select")) {
				 $(".loaded li .about").first().append('\
				 <div class="ds-select single">\
						<div class="btn-group">\
							<button class="btn dropdown-toggle" data-toggle="dropdown"><span class="role">' + "Priority" +'</span> <span class="caret"></span></button>\
							<ul class="dropdown-menu pull-right">\
								<li><a href="#">Primary</a></li>\
								<li><a href="#">Secondary</a></li>\
							</ul>\
						</div>\
					</div><br class="clearfix"><br class="clearfix">\
					');
			 }

		 numUpload++;


		setTimeout(function(){
			$(".ds-upload ul.loaded li:first-child .progress .bar").css("width","100%");

			//what's this? $(".ds-upload ul.loaded li:last-child .thumb i").css("opacity","1");
		},1500);

		$(".ds-upload .upload-count span").text(numUpload);
	}


 	/* ~~~~ ** .DS-UPLOAD.SELECT-ALL ~~~~~~
	// ds-select highlights automatically */
 	if($(".ds-upload").hasClass("with-select")) {
 		$("body").on("change", ".ds-upload", function() {
 			var $fileTypeSelect = $(".ds-upload .about > .ds-select").first();
 			var $fileTypeList =  $fileTypeSelect.find("li a");
 			
 			// the most recent select
 			$fileTypeSelect.each ( function() {
 				var current = $(this).find(".role").text();
 	
 				$fileTypeList.each( function() {
 					var menuItem = $(this).text();
 					
 					if (current == menuItem) {
 						$(this).addClass("selected");
 					}
 				});
 			});
 		 });
 	}


	$(".ds-upload .file-upload").change(function(){		
		var file = $(this).val().toString();
		uploadFile(file);

	});

	$(".ds-upload").on("click", ".remove-attachment", function(e) {
		e.preventDefault();
		$(this).closest("li").remove();
		numUpload--;

		$(".ds-upload .upload-count span").text(numUpload);
	});
}());