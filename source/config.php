<?php

	//SITE CONSTANTS
	//Directory constants are file system paths.
	//	ex: DIR_INCLUDES might = 'C:\GitHub\gnw-admin\_includes\' (pc) or '/Users/jerbre/github/gnw-admin/_includes/' (mac)
	define('DIR_BASE', __DIR__ . DIRECTORY_SEPARATOR);
		define('DIR_INCLUDES', DIR_BASE . '_includes' . DIRECTORY_SEPARATOR);
			define('DIR_CONTROLS', DIR_INCLUDES . '_controls' . DIRECTORY_SEPARATOR);
				define('DIR_MODAL', DIR_CONTROLS . 'modals' . DIRECTORY_SEPARATOR);
				define('DIR_SECTIONS', DIR_CONTROLS . 'sections' . DIRECTORY_SEPARATOR);
				define('DIR_PANEL', DIR_CONTROLS . 'panels' . DIRECTORY_SEPARATOR);
			define('DIR_LAYOUT', DIR_INCLUDES . '_layout' . DIRECTORY_SEPARATOR);
				define('VIEW_HEADER', DIR_LAYOUT . 'header.php');
				define('VIEW_FOOTER', DIR_LAYOUT . 'footer.php');

	//Relative Root constants are rel paths from the host pg to the web root or other useful folders.
	//	ex: REL_CSS might = 'lib/css/', '../lib/css/', '../../lib/css/', etc...
	define('DIR_REL', setPathToWebRoot());
		define('DIR_RESOURCES', DIR_REL . '_resources/');
			define('DIR_CSS', DIR_RESOURCES . 'css/');
			define('DIR_IMG', DIR_RESOURCES . 'img/');
			define('DIR_JS', DIR_RESOURCES . 'js/');
			define('DIR_JSON', DIR_RESOURCES . 'json/');
			define('DIR_MODULES', DIR_RESOURCES . 'modules/');


	//find the relative URL to the root for web assets (ex: '../../')
	function setPathToWebRoot()
	{
		$rel = '';
		//$_SERVER['SCRIPT_NAME'] will be something like "/file.php", or "/dir/file.php", so split (explode) on the / character
		$arrPath = explode('/', strtolower($_SERVER['SCRIPT_NAME']));
		//1st index of the array will be empty and represents the web root because SCRIPT_NAME starts with "/"
		//last index of the array is the filename.  We only care about the directories (if any) between the root and filename
		//so remove the 1st (array_shift) and last (array_pop) items, and then reverse so we work backwards accountting for any "real" directories before hitting 'gnw-admin' or 'prototype'
		array_shift($arrPath);
		array_pop($arrPath);
		$arrPath = array_reverse($arrPath);
		//loop over the remaining path folders to determine how many directories deep the requested file sits
		foreach($arrPath as $folder) {
			//the 'gnw-admin' and 'prototype' exclusions are there in case this site is running as a subdir.
			if($folder == 'gnw-myadmin' || $folder == 'source') { break; }
			//add a "../" for each legit directory we found
			$rel .= '../';
		}
		return $rel;
	}

?>