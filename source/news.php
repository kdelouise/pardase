<?php
	//-----------------------------------------------------------------------
	//Load Config file to set directory and relative path constants
	//NOTE: The reference to this config.php file needs to be pathed correctly relative to this host file
	//So 'config.php', '../config.php', '../../config.php'... depending on location of this host
	require('config.php');

	//Page Level Variables
	$section = 'home';
	$pageTitle = 'Pardase';
	//$pageCss = 'example-feature.css';
	//$pageJs = 'example.js';
	// $pageModules = 'daqbar';

	//Page Includes
	include(VIEW_HEADER);
	include(DIR_LAYOUT . 'main-nav.php');
?>



<div id="landing">	

	
	<div class="landing-page-nav">
		<div class="landing-nav-links">
			<ul>
				<li><a href="#"> PARDASE NEWS</a></li>
				<li><a href="#"> LOOKBOOK</a></li>
				<li><a href="#"> CLOTHES</a></li>
				<li><a href="#"> JACKETS</a></li>
				<li><a href="#"> JEWLERY</a></li>
				<li><a href="#"> ACESSORIES</a></li>
				<li><a href="#"> SOCIALIZE</a></li>
				<li><a href="#"> ABOUT</a></li>
				<li><a href="#"> CONTACT</a></li>
			</ul>
		</div>

	
	
	<div class="landing-page-content-container">
		<div class="landing-page-content">
	
			<div class="landing-page-img-container">
				carousel insert here
				<img src="" class="landing-img">
			</div>
			
			<div class="landing-page-content">
				<div class="landing-current-imgs">
					<img src="_resources/img/user-photo.png" class="landing-img">
					<img src="_resources/img/user-photo.png" class="landing-img">
					<img src="_resources/img/user-photo.png" class="landing-img">
					<img src="_resources/img/user-photo.png" class="landing-img">
				</div>
			</div>
			
	
		
		
		</div>
	</div>
	</div>
</div>



 
<?php include(VIEW_FOOTER); ?>

