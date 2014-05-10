		<!-- <footer class="footer navbar-fixed-bottom">
		</footer> -->
	<!-- </section> --><!-- END CONTAINER -->
	
	<!-- SCRIPTS -->
		<script src="<?php echo DIR_JS; ?>libs/jquery.min.js" type="text/javascript" charset="utf-8"></script>

	<!-- Bootstrap JS Plugins -->
		<script src="<?php echo DIR_JS; ?>plugins/bootstrap.js"></script>


	<!-- Symbolset keyword support to legacy browsers through Javascript -->
		<script src="<?php echo DIR_JS; ?>plugins/ss-standard.js"></script>
		<script src="<?php echo DIR_JS; ?>plugins/ss-symbolicons.js"></script>
		<script src="<?php echo DIR_JS; ?>plugins/ss-social.js"></script>
		
		
	<!-- Helper libraries -->
		<script src="<?php echo DIR_JS; ?>plugins/mustache.js" type="text/javascript" charset="utf-8"></script>
	
	<!-- jQuery Plugins -->
		<script src="<?php echo DIR_JS; ?>plugins/texttext.js"></script>
		<script src="<?php echo DIR_JS; ?>plugins/switchbutton.js"></script>
		<script src="<?php echo DIR_JS; ?>plugins/jquery.tipTip.js"></script>
		<script src="<?php echo DIR_JS; ?>plugins/jquery.tipTip.minified.js"></script>	
		<script src="<?php echo DIR_JS; ?>plugins/ds-upload.js"></script>
		<script src="<?php echo DIR_JS; ?>plugins/ds-select.js"></script>
		<script src="<?php echo DIR_JS; ?>plugins/select2.js"></script>
		<script src="<?php echo DIR_JS; ?>plugins/autoNumeric.js"></script>
					 

	<!-- Zingcharts Lib -->

	
	
	<!-- Custom JS -->
	<script src="<?php echo DIR_JS; ?>application.js"></script>
	<?php
        //if page js has been set, load it here, accounting for rel path to JS.
        //2 ways to load: single string or array.
        //ex: to load feature1.js in _resources/js/feature1/, set this var on the host pg:
        //$pageJs = 'firms.js';
        //ex2: to load multiple files, set an array:
        //$pageJs = ['charts.js','firms.js'];
        if (isset($pageJs)) {
            //if it's an array, foreach them, otherwise, just load the one file
            if (gettype($pageJs) == 'array') {
                foreach($pageJs as $jsFile) {
                    echo '<script src="' . DIR_JS . $jsFile . '"></script>';
                }
            }
            //load single js file
            else {
                    echo '<script src="' . DIR_JS . $pageJs . '"></script>';
            }
        }
        //Take Listed modules at page level and inject js into footer... not sure if theres a way to specify order yet
	    if (isset($pageModules)) {
	        //if it's an array, foreach them, otherwise, just load the one file
	        if (gettype($pageModules) == 'array') {
	            foreach($pageModules as $module) {
	                $files = scandir(DIR_MODULES . $module . '/install/js/');
		            if($files){   
		            	$files = preg_grep('/^([^.])/', scandir(DIR_MODULES . $module . '/install/js/'));
		                foreach($files as $file) {
						  echo '<script src="' . DIR_MODULES . $module . '/install/js/' . $file .'"></script>';
						}
					}
	            }
	        }
	        //load single js file
	        else {
	        	$files = scandir(DIR_MODULES . $pageModules . '/install/js/');
	        	if($files){
	        		$files = preg_grep('/^([^.])/', scandir(DIR_MODULES . $pageModules . '/install/js/'));
	        		foreach($files as $file) {
					  echo '<script src="' . DIR_MODULES . $pageModules . '/install/js/' . $file .'"></script>';
					}
	        	}       
	        }
	    }

    ?>
	
  </body>
</html>