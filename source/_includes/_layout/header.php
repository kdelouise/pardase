<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title><?php echo (isset($pageTitle)) ? 'Pardase - ' . $pageTitle : 'Pardase'; ?></title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <meta name="author" content="">

	<!-- Make sure you've got CodeKit running and compiling lib/less/styles.less to lib/css/styles.css -->
	<!-- Linking to compiled stylesheets -->
  <link rel="stylesheet" href="<?php echo DIR_CSS; ?>select2.css" type="text/css">
	<link rel="stylesheet" href="<?php echo DIR_CSS; ?>styles.css" type="text/css">	
  <link rel="stylesheet" href="<?php echo DIR_CSS; ?>intlTelInput.css" type="text/css">
  <?php
    if (isset($pageModules)) {
          //if it's an array, foreach them, otherwise, just load the one file
          if (gettype($pageModules) == 'array') {
              foreach($pageModules as $module) {
                  echo '<link rel="stylesheet" href="' . DIR_MODULES . $module . '/install/css/styles.css"></script>';
                  define($module, DIR_MODULES . $module . '/install/' . $module . '.php');
              }
          }
          //load single css file
          else {
                  echo '<link rel="stylesheet" href="' . DIR_MODULES . $pageModules . '/install/css/styles.css"></script>';
                  define($pageModules, DIR_MODULES . $pageModules . '/install/' . $pageModules . '.php');
          }
      }
  ?>

    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!--[if IE 8]>
    <link rel="stylesheet" href="<?php echo DIR_CSS; ?>ie8-styles.css" type="text/css">
    <![endif]-->


  <link rel="shortcut icon" href="assets/ico/favicon.ico">
  <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/apple-touch-icon-144-precomposed.png">
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/apple-touch-icon-114-precomposed.png">
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/apple-touch-icon-72-precomposed.png">
  <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-57-precomposed.png">

</head>

<body class="<?php echo isset($section) ? $section : '' ?>">
