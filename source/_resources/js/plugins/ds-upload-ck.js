


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Daqstrap/daqstrap/views/patterns/ds-upload/ds-upload.js at components · grungerabbit/Daqstrap</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="fe2.rs.github.com">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="xhr-socket" href="/_sockets" />
    
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="5115333" name="octolytics-actor-id" /><meta content="rchemsley" name="octolytics-actor-login" /><meta content="3987df6b78f55d1c007c1f07dacfcdcbb940f4222b829e8ce8db8b50ddb7c520" name="octolytics-actor-hash" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="ubJmexLE6+zhQlCkugOb+zLdSFFHBffAflzeovby+sw=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-c6ca95663cba6496fe7a5bdd98671b82cd956df3.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-d35b02ba3940bde9b9f2c3e58f2dfb1ceff5886c.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-eae23340ab2a6ba722166712e699c87aaf60ad8f.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-aa38592e36e296fae0396bc09f735a630b22c9f3.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="3b80b0c44b25c46cacff3fe11764441c">

        <link data-pjax-transient rel='permalink' href='/grungerabbit/Daqstrap/blob/8500c358b8dd5c0f349f5d70cc41dd3231a6231e/daqstrap/views/patterns/ds-upload/ds-upload.js'>
  <meta property="og:title" content="Daqstrap"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/grungerabbit/Daqstrap"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="Contribute to Daqstrap development by creating an account on GitHub."/>

  <meta name="description" content="Contribute to Daqstrap development by creating an account on GitHub." />

  <meta content="1840745" name="octolytics-dimension-user_id" /><meta content="grungerabbit" name="octolytics-dimension-user_login" /><meta content="11099948" name="octolytics-dimension-repository_id" /><meta content="grungerabbit/Daqstrap" name="octolytics-dimension-repository_nwo" /><meta content="false" name="octolytics-dimension-repository_public" /><meta content="true" name="octolytics-dimension-repository_is_fork" /><meta content="8011224" name="octolytics-dimension-repository_parent_id" /><meta content="prodaq/Daqstrap" name="octolytics-dimension-repository_parent_nwo" /><meta content="8011224" name="octolytics-dimension-repository_network_root_id" /><meta content="prodaq/Daqstrap" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/grungerabbit/Daqstrap/commits/components.atom?login=rchemsley&token=7520849ab650848d3776c7c44689738f" rel="alternate" title="Recent Commits to Daqstrap:components" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob macintosh vis-private fork env-production ">

    <div class="wrapper">
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/organizations/prodaq">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    <div class="divider-vertical"></div>

    
  <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have unread notifications">
    <span class="mail-status unread"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="rchemsley"
      data-repo="grungerabbit/Daqstrap"
      data-branch="components"
      data-sha="95e8a101b5802522802e0b9b0588039c134f669b"
  >

    <input type="hidden" name="nwo" value="grungerabbit/Daqstrap" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
            <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    

  

    <ul id="user-links">
      <li>
        <a href="/rchemsley" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/754f9d05b17205804abfb499e7d92dad?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> rchemsley
        </a>
      </li>

        <li>
          <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo" aria-label="Create a new repo">
            <span class="octicon octicon-repo-create"></span>
          </a>
        </li>

        <li>
          <a href="/settings/profile" id="account_settings"
            class="tooltipped downwards"
            aria-label="Account settings "
            title="Account settings ">
            <span class="octicon octicon-tools"></span>
          </a>
        </li>
        <li>
          <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
            <span class="octicon octicon-log-out"></span>
          </a>
        </li>

    </ul>


<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="grungerabbit/Daqstrap">This repository</span>
    </li>
    <li>
      <a href="/grungerabbit/Daqstrap/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="ubJmexLE6+zhQlCkugOb+zLdSFFHBffAflzeovby+sw=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="11099948" />

    <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/grungerabbit/Daqstrap/watchers">
          1
        </a>
      <span class="minibutton select-menu-button with-count js-menu-target">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  
<div class="js-toggler-container js-social-container starring-container ">
  <a href="/grungerabbit/Daqstrap/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
  </a>
  <a href="/grungerabbit/Daqstrap/star" class="minibutton with-count js-toggler-target star-button unstarred upwards " title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star"></span><span class="text">Star</span>
  </a>
  <a class="social-count js-social-count" href="/grungerabbit/Daqstrap/stargazers">0</a>
</div>

  </li>


        <li>
          <a href="/grungerabbit/Daqstrap/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="facebox nofollow">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/grungerabbit/Daqstrap/network" class="social-count">9</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title private">
          <span class="repo-label"><span>private</span></span>
          <span class="mega-octicon octicon-repo-forked"></span>
          <span class="author">
            <a href="/grungerabbit" class="url fn" itemprop="url" rel="author"><span itemprop="title">grungerabbit</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/grungerabbit/Daqstrap" class="js-current-repository js-repo-home-link">Daqstrap</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

            <span class="fork-flag">
              <span class="text">forked from <a href="/prodaq/Daqstrap">prodaq/Daqstrap</a></span>
            </span>
        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/grungerabbit/Daqstrap/tree/components" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /grungerabbit/Daqstrap/tree/components">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


      <li class="tooltipped leftwards" title="Pull Requests"><a href="/grungerabbit/Daqstrap/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /grungerabbit/Daqstrap/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/grungerabbit/Daqstrap/wiki" aria-label="Wiki" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_wiki /grungerabbit/Daqstrap/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/grungerabbit/Daqstrap/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /grungerabbit/Daqstrap/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/grungerabbit/Daqstrap/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /grungerabbit/Daqstrap/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/grungerabbit/Daqstrap/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /grungerabbit/Daqstrap/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    </ul>

  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/grungerabbit/Daqstrap.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/grungerabbit/Daqstrap.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="git@github.com:grungerabbit/Daqstrap.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:grungerabbit/Daqstrap.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/grungerabbit/Daqstrap" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/grungerabbit/Daqstrap" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>



<p class="clone-options">You can clone with
    <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
    <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
    <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>,
  and <a href="https://help.github.com/articles/which-remote-url-should-i-use">other methods.</a>
</p>

  <a href="http://mac.github.com" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/grungerabbit/Daqstrap/archive/components.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:d28f52343ca1afc856c9a8d00ce80818 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:d28f52343ca1afc856c9a8d00ce80818 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/grungerabbit/Daqstrap/find/components" data-pjax data-hotkey="t" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="components">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">components</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/grungerabbit/Daqstrap/blob/components/daqstrap/views/patterns/ds-upload/ds-upload.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="components" data-skip-pjax="true" rel="nofollow" title="components">components</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/grungerabbit/Daqstrap/blob/docs/daqstrap/views/patterns/ds-upload/ds-upload.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="docs" data-skip-pjax="true" rel="nofollow" title="docs">docs</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/grungerabbit/Daqstrap/blob/master/daqstrap/views/patterns/ds-upload/ds-upload.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" data-skip-pjax="true" rel="nofollow" title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/grungerabbit/Daqstrap/tree/components" data-branch="components" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">Daqstrap</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/grungerabbit/Daqstrap/tree/components/daqstrap" data-branch="components" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">daqstrap</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/grungerabbit/Daqstrap/tree/components/daqstrap/views" data-branch="components" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">views</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/grungerabbit/Daqstrap/tree/components/daqstrap/views/patterns" data-branch="components" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">patterns</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/grungerabbit/Daqstrap/tree/components/daqstrap/views/patterns/ds-upload" data-branch="components" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">ds-upload</span></a></span><span class="separator"> / </span><strong class="final-path">ds-upload.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="daqstrap/views/patterns/ds-upload/ds-upload.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/610b9c73d9ff6ee98e7d00ecd8ac90ba?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><span rel="author">Cheryl Wu</span></span>
    <time class="js-relative-date" datetime="2013-08-05T11:15:47-07:00" title="2013-08-05 11:15:47">August 05, 2013</time>
    <div class="commit-title">
        <a href="/grungerabbit/Daqstrap/commit/8500c358b8dd5c0f349f5d70cc41dd3231a6231e" class="message" data-pjax="true" title="ds-upload 1.2 (NOTE: not self-contained)

Signed-off-by: Cheryl Wu &lt;Cheryl.Wu@nasdaqomx.com&gt;">ds-upload 1.2 (NOTE: not self-contained)</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>0</strong> contributors</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
      </ul>
    </div>
  </div>


<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>158 lines (131 sloc)</span>
        <span>4.799 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped leftwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/grungerabbit/Daqstrap/edit/components/daqstrap/views/patterns/ds-upload/ds-upload.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/grungerabbit/Daqstrap/raw/components/daqstrap/views/patterns/ds-upload/ds-upload.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/grungerabbit/Daqstrap/blame/components/daqstrap/views/patterns/ds-upload/ds-upload.js" class="button minibutton ">Blame</a>
          <a href="/grungerabbit/Daqstrap/commits/components/daqstrap/views/patterns/ds-upload/ds-upload.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon tooltipped downwards"
               href="/grungerabbit/Daqstrap/delete/components/daqstrap/views/patterns/ds-upload/ds-upload.js"
               title="Fork this project and delete file" data-method="post" rel="nofollow">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/* ds-upload v1.2</span></div><div class='line' id='LC2'><span class="cm">// REQUIRES DS-SELECT */</span></div><div class='line' id='LC3'><br/></div><div class='line' id='LC4'><span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">ready</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC5'>	<span class="kd">var</span> <span class="nx">numUpload</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC6'>	<span class="c1">//Upload File</span></div><div class='line' id='LC7'>	<span class="kd">function</span> <span class="nx">uploadFile</span><span class="p">(</span><span class="nx">file</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC8'>		<span class="kd">var</span> <span class="nx">fileType</span> <span class="o">=</span> <span class="nx">file</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="o">-</span><span class="mi">4</span><span class="p">);</span></div><div class='line' id='LC9'>		<span class="kd">var</span> <span class="nx">fileString</span> <span class="o">=</span> <span class="nx">file</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">12</span><span class="p">,</span><span class="mi">25</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;...&quot;</span><span class="o">+</span><span class="nx">fileType</span><span class="p">;</span></div><div class='line' id='LC10'>		<span class="kd">var</span> <span class="nx">fileTypeGuess</span><span class="p">;</span></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'>		<span class="k">if</span><span class="p">(</span><span class="nx">fileType</span> <span class="o">==</span> <span class="s2">&quot;xlsx&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC14'>			<span class="nx">fileTypeGuess</span> <span class="o">=</span> <span class="s1">&#39;Spreadsheet&#39;</span><span class="p">;</span></div><div class='line' id='LC15'>		<span class="p">}</span></div><div class='line' id='LC16'>		<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">fileType</span> <span class="o">==</span> <span class="s2">&quot;.xls&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC17'>			<span class="nx">fileTypeGuess</span> <span class="o">=</span> <span class="s1">&#39;Spreadsheet&#39;</span><span class="p">;</span></div><div class='line' id='LC18'>		<span class="p">}</span></div><div class='line' id='LC19'>		<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">fileType</span> <span class="o">==</span> <span class="s2">&quot;.csv&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC20'>			<span class="nx">fileTypeGuess</span> <span class="o">=</span> <span class="s1">&#39;CSV&#39;</span><span class="p">;</span></div><div class='line' id='LC21'>		<span class="p">}</span></div><div class='line' id='LC22'>		<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">fileType</span> <span class="o">==</span> <span class="s2">&quot;.jpg&quot;</span> <span class="o">||</span> <span class="nx">fileType</span> <span class="o">==</span> <span class="s2">&quot;.png&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">file</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span><span class="s2">&quot;logo&quot;</span><span class="p">)</span> <span class="o">==</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC23'>			<span class="nx">fileTypeGuess</span> <span class="o">=</span> <span class="s1">&#39;Image&#39;</span><span class="p">;</span></div><div class='line' id='LC24'>		<span class="p">}</span></div><div class='line' id='LC25'>		<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">fileType</span> <span class="o">==</span> <span class="s2">&quot;.jpg&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">file</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span><span class="s2">&quot;logo&quot;</span><span class="p">)</span> <span class="o">!=</span> <span class="o">-</span><span class="mi">1</span><span class="p">){</span></div><div class='line' id='LC26'>			<span class="nx">fileTypeGuess</span> <span class="o">=</span> <span class="s1">&#39;Image&#39;</span><span class="p">;</span></div><div class='line' id='LC27'>		<span class="p">}</span></div><div class='line' id='LC28'>		<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">fileType</span> <span class="o">==</span> <span class="s2">&quot;.pdf&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC29'>			<span class="nx">fileTypeGuess</span> <span class="o">=</span> <span class="s1">&#39;PDF&#39;</span><span class="p">;</span></div><div class='line' id='LC30'>		<span class="p">}</span></div><div class='line' id='LC31'>		<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">fileType</span> <span class="o">==</span> <span class="s2">&quot;docx&quot;</span> <span class="o">||</span> <span class="nx">fileType</span> <span class="o">==</span> <span class="s2">&quot;.doc&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC32'>			<span class="nx">fileTypeGuess</span> <span class="o">=</span> <span class="s1">&#39;Document&#39;</span><span class="p">;</span></div><div class='line' id='LC33'>		<span class="p">}</span></div><div class='line' id='LC34'>		<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">fileType</span> <span class="o">==</span> <span class="s2">&quot;pptx&quot;</span> <span class="o">||</span> <span class="nx">fileType</span> <span class="o">==</span> <span class="s2">&quot;.ppt&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC35'>			<span class="nx">fileTypeGuess</span> <span class="o">=</span> <span class="s1">&#39;Presentation&#39;</span><span class="p">;</span></div><div class='line' id='LC36'>		<span class="p">}</span></div><div class='line' id='LC37'>		<span class="k">else</span> <span class="p">{</span>		</div><div class='line' id='LC38'>			<span class="nx">fileTypeGuess</span> <span class="o">=</span> <span class="s1">&#39;Other&#39;</span><span class="p">;</span></div><div class='line' id='LC39'>		<span class="p">}</span></div><div class='line' id='LC40'><br/></div><div class='line' id='LC41'><br/></div><div class='line' id='LC42'>		<span class="kd">var</span> <span class="nx">uploadOnlyFileDisallowed</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC43'><br/></div><div class='line' id='LC44'><br/></div><div class='line' id='LC45'>		<span class="k">if</span><span class="p">(</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.loaded&quot;</span><span class="p">).</span><span class="nx">hasClass</span><span class="p">(</span><span class="s2">&quot;ds-upload-only&quot;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC46'>			<span class="c1">//scope UOFD inside upload-only to true --&gt; disallow all files until checked</span></div><div class='line' id='LC47'>			<span class="kd">var</span> <span class="nx">uploadOnlyFileDisallowed</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC48'>			<span class="kd">var</span> <span class="nx">str</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.loaded&quot;</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;class&quot;</span><span class="p">);</span></div><div class='line' id='LC49'>			<span class="kd">var</span> <span class="nx">only</span> <span class="o">=</span> <span class="nx">str</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot; &quot;</span><span class="p">);</span></div><div class='line' id='LC50'>			<span class="kd">var</span> <span class="nx">numOnly</span> <span class="o">=</span> <span class="nx">only</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC51'><br/></div><div class='line' id='LC52'><br/></div><div class='line' id='LC53'>			<span class="c1">// check: if fileTypeGuess IN MARKUP MATCHES ARRAY, ALLOW UPLOAD</span></div><div class='line' id='LC54'>				<span class="k">for</span> <span class="p">(</span><span class="nx">i</span><span class="o">=</span><span class="mi">2</span><span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="nx">numOnly</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>		</div><div class='line' id='LC55'>					<span class="k">if</span> <span class="p">(</span><span class="nx">fileTypeGuess</span> <span class="o">==</span> <span class="nx">only</span><span class="p">[</span><span class="nx">i</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC56'>						<span class="nx">uploadOnlyFileDisallowed</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC57'>					<span class="p">}</span></div><div class='line' id='LC58'>				<span class="p">}</span>	</div><div class='line' id='LC59'>				<span class="c1">// otherwise, throw error message if (still) disallowed</span></div><div class='line' id='LC60'>				<span class="k">if</span> <span class="p">(</span><span class="nx">uploadOnlyFileDisallowed</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC61'>					<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.loaded&quot;</span><span class="p">).</span><span class="nx">before</span><span class="p">(</span><span class="s1">&#39;&lt;div class=&quot;alert alert-error&quot;&gt;Error: &#39;</span> <span class="o">+</span> <span class="nx">fileTypeGuess</span> <span class="o">+</span> <span class="s1">&#39; is not supported.&lt;button type=&quot;button&quot; class=&quot;close&quot; data-dismiss=&quot;alert&quot;&gt;×&lt;/button&gt;&lt;/div&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC62'>					<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.loaded&quot;</span><span class="p">).</span><span class="nx">siblings</span><span class="p">(</span><span class="s2">&quot;.alert&quot;</span><span class="p">).</span><span class="nx">delay</span><span class="p">(</span><span class="mi">1200</span><span class="p">).</span><span class="nx">fadeOut</span><span class="p">(</span><span class="s2">&quot;slow&quot;</span><span class="p">);</span></div><div class='line' id='LC63'>					<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC64'>				<span class="p">}</span></div><div class='line' id='LC65'>			<span class="p">}</span> </div><div class='line' id='LC66'><br/></div><div class='line' id='LC67'>		<span class="c1">// don&#39;t run upload-only JS if not set/false	</span></div><div class='line' id='LC68'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">uploadOnlyFileDisallowed</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;			 <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.loaded&quot;</span><span class="p">).</span><span class="nx">prepend</span><span class="p">(</span><span class="s1">&#39;\</span></div><div class='line' id='LC71'><span class="s1">   			 &lt;li&gt;\</span></div><div class='line' id='LC72'><span class="s1">   			 	&lt;div class=&quot;thumb table&quot;&gt;&lt;/div&gt;\</span></div><div class='line' id='LC73'><span class="s1">   			 	&lt;div class=&quot;progress&quot;&gt;\</span></div><div class='line' id='LC74'><span class="s1">   			 		&lt;div class=&quot;bar&quot; style=&quot;width:5%;&quot;&gt;&lt;/div&gt;\</span></div><div class='line' id='LC75'><span class="s1">   			 	&lt;/div&gt;\</span></div><div class='line' id='LC76'><span class="s1">   			 	&lt;div class=&quot;about&quot;&gt;\</span></div><div class='line' id='LC77'><span class="s1">   			 		&lt;p class=&quot;filename&quot; data-toggle=&quot;tooltip&quot; data-animation=&quot;fade&quot; data-placement=&quot;top&quot; data-trigger=&quot;hover&quot; data-title=&quot;&#39;</span><span class="o">+</span><span class="nx">fileString</span><span class="o">+</span><span class="s1">&#39;&quot;&gt;&#39;</span><span class="o">+</span><span class="nx">fileString</span><span class="o">+</span><span class="s1">&#39;&lt;/p&gt;\</span></div><div class='line' id='LC78'><span class="s1">   			 			&lt;a href=&quot;#&quot; class=&quot;remove-attachment&quot;&gt;&lt;i class=&quot;ss-icon&quot;&gt;&amp;#xE0D0;&lt;/i&gt;&lt;/a&gt;\</span></div><div class='line' id='LC79'><span class="s1">   			 	&lt;/div&gt;\</span></div><div class='line' id='LC80'><span class="s1">   			 		&lt;button type=&quot;button&quot; class=&quot;btn&quot; data-toggle=&quot;collapse&quot; data-target=&quot;#edit&#39;</span><span class="o">+</span><span class="nx">numUpload</span><span class="o">+</span><span class="s1">&#39;&quot;&gt;Edit Resource&lt;/button&gt;\</span></div><div class='line' id='LC81'><span class="s1">   			 		&lt;div id=&quot;edit&#39;</span><span class="o">+</span><span class="nx">numUpload</span><span class="o">+</span><span class="s1">&#39;&quot; class=&quot;collapse&quot;&gt;Edit all the things!&lt;/div&gt;\</span></div><div class='line' id='LC82'><span class="s1">   			 	&lt;/li&gt;\</span></div><div class='line' id='LC83'><span class="s1">   			 	&#39;</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;			 <span class="p">);</span> </div><div class='line' id='LC85'>			<span class="p">}</span></div><div class='line' id='LC86'><br/></div><div class='line' id='LC87'>			 <span class="cm">/* ~~~~ ** .DS-UPLOAD-SELECT-ALL </span></div><div class='line' id='LC88'><span class="cm">			 // show the select button with file type guess */</span></div><div class='line' id='LC89'>			 <span class="k">if</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.ds-upload&quot;</span><span class="p">).</span><span class="nx">hasClass</span><span class="p">(</span><span class="s2">&quot;select-all&quot;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC90'>				 <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.loaded li .about&quot;</span><span class="p">).</span><span class="nx">first</span><span class="p">().</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;\</span></div><div class='line' id='LC91'><span class="s1">				 &lt;div class=&quot;ds-select single&quot;&gt;\</span></div><div class='line' id='LC92'><span class="s1">						&lt;div class=&quot;btn-group&quot;&gt;\</span></div><div class='line' id='LC93'><span class="s1">							&lt;button class=&quot;btn dropdown-toggle btn-primary active&quot; data-toggle=&quot;dropdown&quot;&gt;&lt;span class=&quot;role&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">fileTypeGuess</span> <span class="o">+</span><span class="s1">&#39;&lt;/span&gt; &lt;span class=&quot;caret&quot;&gt;&lt;/span&gt;&lt;/button&gt;\</span></div><div class='line' id='LC94'><span class="s1">							&lt;ul class=&quot;dropdown-menu pull-right&quot;&gt;\</span></div><div class='line' id='LC95'><span class="s1">								&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Audio&lt;/a&gt;&lt;/li&gt;\</span></div><div class='line' id='LC96'><span class="s1">								&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Excel&lt;/a&gt;&lt;/li&gt;\</span></div><div class='line' id='LC97'><span class="s1">								&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Image&lt;/a&gt;&lt;/li&gt;\</span></div><div class='line' id='LC98'><span class="s1">					    		&lt;li&gt;&lt;a href=&quot;#&quot;&gt;PDF&lt;/a&gt;&lt;/li&gt;\</span></div><div class='line' id='LC99'><span class="s1">					    		&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Presentation&lt;/a&gt;&lt;/li&gt;\</span></div><div class='line' id='LC100'><span class="s1">								&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Video&lt;/a&gt;&lt;/li&gt;\</span></div><div class='line' id='LC101'><span class="s1">								&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Document&lt;/a&gt;&lt;/li&gt;\</span></div><div class='line' id='LC102'><span class="s1">								&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Other&lt;/a&gt;&lt;/li&gt;\</span></div><div class='line' id='LC103'><span class="s1">							&lt;/ul&gt;\</span></div><div class='line' id='LC104'><span class="s1">						&lt;/div&gt;\</span></div><div class='line' id='LC105'><span class="s1">					&lt;/div&gt;&lt;br class=&quot;clearfix&quot;&gt;&lt;br class=&quot;clearfix&quot;&gt;\</span></div><div class='line' id='LC106'><span class="s1">					&#39;</span><span class="p">);</span></div><div class='line' id='LC107'>			 <span class="p">}</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'>		 <span class="nx">numUpload</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC110'><br/></div><div class='line' id='LC111'><br/></div><div class='line' id='LC112'>		<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC113'>			<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.ds-upload ul.loaded li:first-child .progress .bar&quot;</span><span class="p">).</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;width&quot;</span><span class="p">,</span><span class="s2">&quot;100%&quot;</span><span class="p">);</span></div><div class='line' id='LC114'><br/></div><div class='line' id='LC115'>			<span class="c1">//what&#39;s this? $(&quot;.ds-upload ul.loaded li:last-child .thumb i&quot;).css(&quot;opacity&quot;,&quot;1&quot;);</span></div><div class='line' id='LC116'>		<span class="p">},</span><span class="mi">1500</span><span class="p">);</span></div><div class='line' id='LC117'><br/></div><div class='line' id='LC118'>		<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.ds-upload .upload-count span&quot;</span><span class="p">).</span><span class="nx">text</span><span class="p">(</span><span class="nx">numUpload</span><span class="p">);</span></div><div class='line' id='LC119'>	<span class="p">}</span></div><div class='line' id='LC120'><br/></div><div class='line' id='LC121'><br/></div><div class='line' id='LC122'>&nbsp;	<span class="cm">/* ~~~~ ** .DS-UPLOAD-SELECT-ALL </span></div><div class='line' id='LC123'><span class="cm">	// ds-select highlights automatically */</span></div><div class='line' id='LC124'>&nbsp;	<span class="k">if</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.ds-upload&quot;</span><span class="p">).</span><span class="nx">hasClass</span><span class="p">(</span><span class="s2">&quot;select-all&quot;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC125'>&nbsp;		<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;body&quot;</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;change&quot;</span><span class="p">,</span> <span class="s2">&quot;.ds-upload&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC126'>&nbsp;			<span class="kd">var</span> <span class="nx">$fileTypeSelect</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.ds-upload .about &gt; .ds-select&quot;</span><span class="p">).</span><span class="nx">first</span><span class="p">();</span></div><div class='line' id='LC127'>&nbsp;			<span class="kd">var</span> <span class="nx">$fileTypeList</span> <span class="o">=</span>  <span class="nx">$fileTypeSelect</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;li a&quot;</span><span class="p">);</span></div><div class='line' id='LC128'>&nbsp;			</div><div class='line' id='LC129'>&nbsp;			<span class="c1">// the most recent select</span></div><div class='line' id='LC130'>&nbsp;			<span class="nx">$fileTypeSelect</span><span class="p">.</span><span class="nx">each</span> <span class="p">(</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC131'>&nbsp;				<span class="kd">var</span> <span class="nx">current</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.role&quot;</span><span class="p">).</span><span class="nx">text</span><span class="p">();</span></div><div class='line' id='LC132'>&nbsp;	</div><div class='line' id='LC133'>&nbsp;				<span class="nx">$fileTypeList</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC134'>&nbsp;					<span class="kd">var</span> <span class="nx">menuItem</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">text</span><span class="p">();</span></div><div class='line' id='LC135'>&nbsp;					</div><div class='line' id='LC136'>&nbsp;					<span class="k">if</span> <span class="p">(</span><span class="nx">current</span> <span class="o">==</span> <span class="nx">menuItem</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC137'>&nbsp;						<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s2">&quot;selected&quot;</span><span class="p">);</span></div><div class='line' id='LC138'>&nbsp;					<span class="p">}</span></div><div class='line' id='LC139'>&nbsp;				<span class="p">});</span></div><div class='line' id='LC140'>&nbsp;			<span class="p">});</span></div><div class='line' id='LC141'>&nbsp;		 <span class="p">});</span></div><div class='line' id='LC142'>&nbsp;	<span class="p">}</span></div><div class='line' id='LC143'><br/></div><div class='line' id='LC144'><br/></div><div class='line' id='LC145'>	<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.ds-upload .file-upload&quot;</span><span class="p">).</span><span class="nx">change</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span>		</div><div class='line' id='LC146'>		<span class="kd">var</span> <span class="nx">file</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">val</span><span class="p">().</span><span class="nx">toString</span><span class="p">();</span></div><div class='line' id='LC147'>		<span class="nx">uploadFile</span><span class="p">(</span><span class="nx">file</span><span class="p">);</span></div><div class='line' id='LC148'><br/></div><div class='line' id='LC149'>	<span class="p">});</span></div><div class='line' id='LC150'><br/></div><div class='line' id='LC151'>	<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.ds-upload&quot;</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;click&quot;</span><span class="p">,</span> <span class="s2">&quot;.remove-attachment&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC152'>		<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC153'>		<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">closest</span><span class="p">(</span><span class="s2">&quot;li&quot;</span><span class="p">).</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC154'>		<span class="nx">numUpload</span><span class="o">--</span><span class="p">;</span></div><div class='line' id='LC155'><br/></div><div class='line' id='LC156'>		<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.ds-upload .upload-count span&quot;</span><span class="p">).</span><span class="nx">text</span><span class="p">(</span><span class="nx">numUpload</span><span class="p">);</span></div><div class='line' id='LC157'>	<span class="p">});</span></div><div class='line' id='LC158'><span class="p">});</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.11986s from fe2.rs.github.com">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/grungerabbit/Daqstrap/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
  </body>
</html>

