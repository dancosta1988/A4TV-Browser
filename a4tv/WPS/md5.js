



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-c9020771a6e4b810195b987de791bff4abe1e67919fffc787d4422b02a203d5f.css" integrity="sha256-yQIHcabkuBAZW5h955G/9Kvh5nkZ//x4fUQisCogPV8=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-5d695a93fa4ee78613c8e772394eae10e6711d76be0777d53950b7ab3fd92b63.css" integrity="sha256-XWlak/pO54YTyOdyOU6uEOZxHXa+B3fVOVC3qz/ZK2M=" media="all" rel="stylesheet" />
    
    
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-4a18dc1c93cc7113ea22c7c6b62826f621b52a57f32caea97c682100ac10de36.css" integrity="sha256-ShjcHJPMcRPqIsfGtigm9iG1KlfzLK6pfGghAKwQ3jY=" media="all" rel="stylesheet" />
    

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    <title>pagelyzer/md5.js at master · openpreserve/pagelyzer · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars3.githubusercontent.com/u/448113?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="openpreserve/pagelyzer" name="twitter:title" /><meta content="pagelyzer - Suite of tools for detecting changes in web pages and their rendering" name="twitter:description" />
      <meta content="https://avatars3.githubusercontent.com/u/448113?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="openpreserve/pagelyzer" property="og:title" /><meta content="https://github.com/openpreserve/pagelyzer" property="og:url" /><meta content="pagelyzer - Suite of tools for detecting changes in web pages and their rendering" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    
    <meta name="request-id" content="C2751647:444B:F1ACC63:58074148" data-pjax-transient>

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="C2751647:444B:F1ACC63:58074148" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged Out">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="ZTEyNjM2ZTE0NjRhOWVmODVjNTk1YmY2ODQxZjZjMmMxM2IwZDRhMGEwNWFhMjk1MTJkYWI4OGEzMDU0YjEyNHx7InJlbW90ZV9hZGRyZXNzIjoiMTk0LjExNy4yMi43MSIsInJlcXVlc3RfaWQiOiJDMjc1MTY0Nzo0NDRCOkYxQUNDNjM6NTgwNzQxNDgiLCJ0aW1lc3RhbXAiOjE0NzY4NzA0NzIsImhvc3QiOiJnaXRodWIuY29tIn0=">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="0322c7e739e0bd6421d48aa483a533ff9c09889d">
    <meta content="a76421c134089a1416d726f25932872bc0aea8c3" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="f30d8dab9dc153107e344476e058074c">
    

      
  <meta name="description" content="pagelyzer - Suite of tools for detecting changes in web pages and their rendering">
  <meta name="go-import" content="github.com/openpreserve/pagelyzer git https://github.com/openpreserve/pagelyzer.git">

  <meta content="448113" name="octolytics-dimension-user_id" /><meta content="openpreserve" name="octolytics-dimension-user_login" /><meta content="6797228" name="octolytics-dimension-repository_id" /><meta content="openpreserve/pagelyzer" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="6797228" name="octolytics-dimension-repository_network_root_id" /><meta content="openpreserve/pagelyzer" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/openpreserve/pagelyzer/commits/master.atom" rel="alternate" title="Recent Commits to pagelyzer:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/openpreserve/pagelyzer/blob/master/SettingsFiles/js/md5.js" data-pjax-transient>
  </head>


  <body class="logged-out  env-production windows vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



          <header class="site-header js-details-container" role="banner">
  <div class="container-responsive">
    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
    </a>

    <button class="btn-link float-right site-header-toggle js-details-target" type="button" aria-label="Toggle navigation">
      <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path></svg>
    </button>

    <div class="site-header-menu">
      <nav class="site-header-nav site-header-nav-main">
        <a href="/personal" class="js-selected-navigation-item nav-item nav-item-personal" data-ga-click="Header, click, Nav menu - item:personal" data-selected-links="/personal /personal">
          Personal
</a>        <a href="/open-source" class="js-selected-navigation-item nav-item nav-item-opensource" data-ga-click="Header, click, Nav menu - item:opensource" data-selected-links="/open-source /open-source">
          Open source
</a>        <a href="/business" class="js-selected-navigation-item nav-item nav-item-business" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/partners /business/features /business/customers /business">
          Business
</a>        <a href="/explore" class="js-selected-navigation-item nav-item nav-item-explore" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship /explore">
          Explore
</a>      </nav>

      <div class="site-header-actions">
            <a class="btn btn-primary site-header-actions-btn" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
          <a class="btn site-header-actions-btn mr-2" href="/login?return_to=%2Fopenpreserve%2Fpagelyzer%2Fblob%2Fmaster%2FSettingsFiles%2Fjs%2Fmd5.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
      </div>

        <nav class="site-header-nav site-header-nav-secondary">
          <a class="nav-item" href="/pricing">Pricing</a>
          <a class="nav-item" href="/blog">Blog</a>
          <a class="nav-item" href="https://help.github.com">Support</a>
          <a class="nav-item header-search-link" href="https://github.com/search">Search GitHub</a>
              <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/openpreserve/pagelyzer/search" class="js-site-search-form" data-scoped-search-url="/openpreserve/pagelyzer/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>

        </nav>
    </div>
  </div>
</header>



    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fopenpreserve%2Fpagelyzer"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
    Watch
  </a>
  <a class="social-count" href="/openpreserve/pagelyzer/watchers"
     aria-label="35 users are watching this repository">
    35
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fopenpreserve%2Fpagelyzer"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/openpreserve/pagelyzer/stargazers"
      aria-label="15 users starred this repository">
      15
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fopenpreserve%2Fpagelyzer"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
        Fork
      </a>

    <a href="/openpreserve/pagelyzer/network" class="social-count"
       aria-label="7 users are forked this repository">
      7
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/openpreserve" class="url fn" rel="author">openpreserve</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/openpreserve/pagelyzer" data-pjax="#js-repo-pjax-container">pagelyzer</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/openpreserve/pagelyzer" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /openpreserve/pagelyzer" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/openpreserve/pagelyzer/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /openpreserve/pagelyzer/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">3</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/openpreserve/pagelyzer/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /openpreserve/pagelyzer/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="/openpreserve/pagelyzer/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /openpreserve/pagelyzer/projects">
    <svg class="octicon" aria-hidden="true" version="1.1" width="15" height="16" viewBox="0 0 15 16">
      <path d="M1 15h13V1H1v14zM15 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1zm-4.41 11h1.82c.59 0 .59-.41.59-1V3c0-.59 0-1-.59-1h-1.82C10 2 10 2.41 10 3v8c0 .59 0 1 .59 1zm-4-2h1.82C9 10 9 9.59 9 9V3c0-.59 0-1-.59-1H6.59C6 2 6 2.41 6 3v6c0 .59 0 1 .59 1zM2 13V3c0-.59 0-1 .59-1h1.82C5 2 5 2.41 5 3v10c0 .59 0 1-.59 1H2.59C2 14 2 13.59 2 13z"></path>
    </svg>
    Projects
    <span class="counter">0</span>
</a>


  <a href="/openpreserve/pagelyzer/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /openpreserve/pagelyzer/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"></path></svg>
    Pulse
</a>
  <a href="/openpreserve/pagelyzer/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /openpreserve/pagelyzer/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/openpreserve/pagelyzer/blob/accc4c16f1dd5e655d9d7efcdc74ad89e12d883e/SettingsFiles/js/md5.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:4100d1fdcfe2e76c6be7a0317a76dbe2 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/openpreserve/pagelyzer/blob/gh-pages/SettingsFiles/js/md5.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/openpreserve/pagelyzer/blob/master/SettingsFiles/js/md5.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/openpreserve/pagelyzer/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/openpreserve/pagelyzer"><span>pagelyzer</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/openpreserve/pagelyzer/tree/master/SettingsFiles"><span>SettingsFiles</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/openpreserve/pagelyzer/tree/master/SettingsFiles/js"><span>js</span></a></span><span class="separator">/</span><strong class="final-path">md5.js</strong>
  </div>
</div>

<include-fragment class="commit-tease" src="/openpreserve/pagelyzer/contributors/master/SettingsFiles/js/md5.js">
  <div>
    Fetching contributors&hellip;
  </div>

  <div class="commit-tease-contributors">
    <img alt="" class="loader-loading float-left" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" />
    <span class="loader-error">Cannot retrieve contributors at this time</span>
  </div>
</include-fragment>
<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/openpreserve/pagelyzer/raw/master/SettingsFiles/js/md5.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/openpreserve/pagelyzer/blame/master/SettingsFiles/js/md5.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item">Blame</a>
      <a href="/openpreserve/pagelyzer/commits/master/SettingsFiles/js/md5.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
        </a>

        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"></path></svg>
        </button>
  </div>

  <div class="file-info">
      20 lines (19 sloc)
      <span class="file-info-divider"></span>
    6.12 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c">CryptoJS v3.1.2</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c">code.google.com/p/crypto-js</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c">(c) 2009-2013 by Jeff Mott. All rights reserved.</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c">code.google.com/p/crypto-js/wiki/License</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*/</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> CryptoJS<span class="pl-k">=</span>CryptoJS<span class="pl-k">||</span><span class="pl-k">function</span>(<span class="pl-smi">s</span>,<span class="pl-smi">p</span>){<span class="pl-k">var</span> m<span class="pl-k">=</span>{},l<span class="pl-k">=</span><span class="pl-smi">m</span>.<span class="pl-smi">lib</span><span class="pl-k">=</span>{},<span class="pl-en">n</span><span class="pl-k">=</span><span class="pl-k">function</span>(){},r<span class="pl-k">=</span><span class="pl-smi">l</span>.<span class="pl-smi">Base</span><span class="pl-k">=</span>{<span class="pl-en">extend</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-smi">n</span>.<span class="pl-c1">prototype</span><span class="pl-k">=</span><span class="pl-v">this</span>;<span class="pl-k">var</span> h<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">n</span>;b<span class="pl-k">&amp;&amp;</span><span class="pl-smi">h</span>.<span class="pl-en">mixIn</span>(b);<span class="pl-smi">h</span>.<span class="pl-en">hasOwnProperty</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>init<span class="pl-pds">&quot;</span></span>)<span class="pl-k">||</span>(<span class="pl-smi">h</span>.<span class="pl-en">init</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-smi">h</span>.<span class="pl-smi">$super</span>.<span class="pl-smi">init</span>.<span class="pl-c1">apply</span>(<span class="pl-v">this</span>,<span class="pl-v">arguments</span>)});<span class="pl-smi">h</span>.<span class="pl-smi">init</span>.<span class="pl-c1">prototype</span><span class="pl-k">=</span>h;<span class="pl-smi">h</span>.<span class="pl-smi">$super</span><span class="pl-k">=</span><span class="pl-v">this</span>;<span class="pl-k">return</span> h},<span class="pl-en">create</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-en">extend</span>();<span class="pl-smi">b</span>.<span class="pl-smi">init</span>.<span class="pl-c1">apply</span>(b,<span class="pl-v">arguments</span>);<span class="pl-k">return</span> b},<span class="pl-en">init</span><span class="pl-k">:</span><span class="pl-k">function</span>(){},<span class="pl-en">mixIn</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> h <span class="pl-k">in</span> b)<span class="pl-smi">b</span>.<span class="pl-en">hasOwnProperty</span>(h)<span class="pl-k">&amp;&amp;</span>(<span class="pl-v">this</span>[h]<span class="pl-k">=</span>b[h]);<span class="pl-smi">b</span>.<span class="pl-en">hasOwnProperty</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>toString<span class="pl-pds">&quot;</span></span>)<span class="pl-k">&amp;&amp;</span>(<span class="pl-v">this</span>.<span class="pl-smi">toString</span><span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-smi">toString</span>)},<span class="pl-en">clone</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-smi">init</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">extend</span>(<span class="pl-v">this</span>)}},</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">q<span class="pl-k">=</span><span class="pl-smi">l</span>.<span class="pl-smi">WordArray</span><span class="pl-k">=</span><span class="pl-smi">r</span>.<span class="pl-en">extend</span>({<span class="pl-en">init</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>,<span class="pl-smi">h</span>){b<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-smi">words</span><span class="pl-k">=</span>b<span class="pl-k">||</span>[];<span class="pl-v">this</span>.<span class="pl-smi">sigBytes</span><span class="pl-k">=</span>h<span class="pl-k">!=</span>p<span class="pl-k">?</span>h<span class="pl-k">:</span><span class="pl-c1">4</span><span class="pl-k">*</span><span class="pl-smi">b</span>.<span class="pl-c1">length</span>},<span class="pl-en">toString</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">return</span>(b<span class="pl-k">||</span>t).<span class="pl-en">stringify</span>(<span class="pl-v">this</span>)},<span class="pl-en">concat</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">var</span> h<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-smi">words</span>,a<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-smi">words</span>,j<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-smi">sigBytes</span>;b<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-smi">sigBytes</span>;<span class="pl-v">this</span>.<span class="pl-en">clamp</span>();<span class="pl-k">if</span>(j<span class="pl-k">%</span><span class="pl-c1">4</span>)<span class="pl-k">for</span>(<span class="pl-k">var</span> g<span class="pl-k">=</span><span class="pl-c1">0</span>;g<span class="pl-k">&lt;</span>b;g<span class="pl-k">++</span>)h[j<span class="pl-k">+</span>g<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">2</span>]<span class="pl-k">|=</span>(a[g<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">2</span>]<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">24</span><span class="pl-k">-</span><span class="pl-c1">8</span><span class="pl-k">*</span>(g<span class="pl-k">%</span><span class="pl-c1">4</span>)<span class="pl-k">&amp;</span><span class="pl-c1">255</span>)<span class="pl-k">&lt;&lt;</span><span class="pl-c1">24</span><span class="pl-k">-</span><span class="pl-c1">8</span><span class="pl-k">*</span>((j<span class="pl-k">+</span>g)<span class="pl-k">%</span><span class="pl-c1">4</span>);<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-c1">65535</span><span class="pl-k">&lt;</span><span class="pl-smi">a</span>.<span class="pl-c1">length</span>)<span class="pl-k">for</span>(g<span class="pl-k">=</span><span class="pl-c1">0</span>;g<span class="pl-k">&lt;</span>b;g<span class="pl-k">+=</span><span class="pl-c1">4</span>)h[j<span class="pl-k">+</span>g<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">2</span>]<span class="pl-k">=</span>a[g<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">2</span>];<span class="pl-k">else</span> <span class="pl-smi">h</span>.<span class="pl-smi">push</span>.<span class="pl-c1">apply</span>(h,a);<span class="pl-v">this</span>.<span class="pl-smi">sigBytes</span><span class="pl-k">+=</span>b;<span class="pl-k">return</span> <span class="pl-v">this</span>},<span class="pl-en">clamp</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-smi">words</span>,h<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-smi">sigBytes</span>;b[h<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">2</span>]<span class="pl-k">&amp;=</span><span class="pl-c1">4294967295</span><span class="pl-k">&lt;&lt;</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">32</span><span class="pl-k">-</span><span class="pl-c1">8</span><span class="pl-k">*</span>(h<span class="pl-k">%</span><span class="pl-c1">4</span>);<span class="pl-smi">b</span>.<span class="pl-c1">length</span><span class="pl-k">=</span><span class="pl-smi">s</span>.<span class="pl-en">ceil</span>(h<span class="pl-k">/</span><span class="pl-c1">4</span>)},<span class="pl-en">clone</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-smi">r</span>.<span class="pl-smi">clone</span>.<span class="pl-c1">call</span>(<span class="pl-v">this</span>);<span class="pl-smi">b</span>.<span class="pl-smi">words</span><span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-smi">words</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>);<span class="pl-k">return</span> b},<span class="pl-en">random</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> h<span class="pl-k">=</span>[],a<span class="pl-k">=</span><span class="pl-c1">0</span>;a<span class="pl-k">&lt;</span>b;a<span class="pl-k">+=</span><span class="pl-c1">4</span>)<span class="pl-smi">h</span>.<span class="pl-c1">push</span>(<span class="pl-c1">4294967296</span><span class="pl-k">*</span><span class="pl-smi">s</span>.<span class="pl-en">random</span>()<span class="pl-k">|</span><span class="pl-c1">0</span>);<span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">q.init</span>(h,b)}}),v<span class="pl-k">=</span><span class="pl-smi">m</span>.<span class="pl-smi">enc</span><span class="pl-k">=</span>{},t<span class="pl-k">=</span><span class="pl-smi">v</span>.<span class="pl-smi">Hex</span><span class="pl-k">=</span>{<span class="pl-en">stringify</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-smi">words</span>;b<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-smi">sigBytes</span>;<span class="pl-k">for</span>(<span class="pl-k">var</span> g<span class="pl-k">=</span>[],j<span class="pl-k">=</span><span class="pl-c1">0</span>;j<span class="pl-k">&lt;</span>b;j<span class="pl-k">++</span>){<span class="pl-k">var</span> k<span class="pl-k">=</span>a[j<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">2</span>]<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">24</span><span class="pl-k">-</span><span class="pl-c1">8</span><span class="pl-k">*</span>(j<span class="pl-k">%</span><span class="pl-c1">4</span>)<span class="pl-k">&amp;</span><span class="pl-c1">255</span>;<span class="pl-smi">g</span>.<span class="pl-c1">push</span>((k<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">4</span>).<span class="pl-c1">toString</span>(<span class="pl-c1">16</span>));<span class="pl-smi">g</span>.<span class="pl-c1">push</span>((k<span class="pl-k">&amp;</span><span class="pl-c1">15</span>).<span class="pl-c1">toString</span>(<span class="pl-c1">16</span>))}<span class="pl-k">return</span> <span class="pl-smi">g</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)},<span class="pl-en">parse</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">length</span>,g<span class="pl-k">=</span>[],j<span class="pl-k">=</span><span class="pl-c1">0</span>;j<span class="pl-k">&lt;</span>a;j<span class="pl-k">+=</span><span class="pl-c1">2</span>)g[j<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">3</span>]<span class="pl-k">|=</span><span class="pl-c1">parseInt</span>(<span class="pl-smi">b</span>.<span class="pl-c1">substr</span>(j,</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">2</span>),<span class="pl-c1">16</span>)<span class="pl-k">&lt;&lt;</span><span class="pl-c1">24</span><span class="pl-k">-</span><span class="pl-c1">4</span><span class="pl-k">*</span>(j<span class="pl-k">%</span><span class="pl-c1">8</span>);<span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">q.init</span>(g,a<span class="pl-k">/</span><span class="pl-c1">2</span>)}},a<span class="pl-k">=</span><span class="pl-smi">v</span>.<span class="pl-smi">Latin1</span><span class="pl-k">=</span>{<span class="pl-en">stringify</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-smi">words</span>;b<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-smi">sigBytes</span>;<span class="pl-k">for</span>(<span class="pl-k">var</span> g<span class="pl-k">=</span>[],j<span class="pl-k">=</span><span class="pl-c1">0</span>;j<span class="pl-k">&lt;</span>b;j<span class="pl-k">++</span>)<span class="pl-smi">g</span>.<span class="pl-c1">push</span>(<span class="pl-c1">String</span>.<span class="pl-c1">fromCharCode</span>(a[j<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">2</span>]<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">24</span><span class="pl-k">-</span><span class="pl-c1">8</span><span class="pl-k">*</span>(j<span class="pl-k">%</span><span class="pl-c1">4</span>)<span class="pl-k">&amp;</span><span class="pl-c1">255</span>));<span class="pl-k">return</span> <span class="pl-smi">g</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)},<span class="pl-en">parse</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">length</span>,g<span class="pl-k">=</span>[],j<span class="pl-k">=</span><span class="pl-c1">0</span>;j<span class="pl-k">&lt;</span>a;j<span class="pl-k">++</span>)g[j<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">2</span>]<span class="pl-k">|=</span>(<span class="pl-smi">b</span>.<span class="pl-c1">charCodeAt</span>(j)<span class="pl-k">&amp;</span><span class="pl-c1">255</span>)<span class="pl-k">&lt;&lt;</span><span class="pl-c1">24</span><span class="pl-k">-</span><span class="pl-c1">8</span><span class="pl-k">*</span>(j<span class="pl-k">%</span><span class="pl-c1">4</span>);<span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">q.init</span>(g,a)}},u<span class="pl-k">=</span><span class="pl-smi">v</span>.<span class="pl-smi">Utf8</span><span class="pl-k">=</span>{<span class="pl-en">stringify</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">try</span>{<span class="pl-k">return</span> <span class="pl-c1">decodeURIComponent</span>(<span class="pl-c1">escape</span>(<span class="pl-smi">a</span>.<span class="pl-en">stringify</span>(b)))}<span class="pl-k">catch</span>(g){<span class="pl-k">throw</span> <span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Malformed UTF-8 data<span class="pl-pds">&quot;</span></span>);}},<span class="pl-en">parse</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">return</span> <span class="pl-smi">a</span>.<span class="pl-c1">parse</span>(<span class="pl-c1">unescape</span>(<span class="pl-c1">encodeURIComponent</span>(b)))}},</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">g<span class="pl-k">=</span><span class="pl-smi">l</span>.<span class="pl-smi">BufferedBlockAlgorithm</span><span class="pl-k">=</span><span class="pl-smi">r</span>.<span class="pl-en">extend</span>({<span class="pl-en">reset</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-v">this</span>.<span class="pl-smi">_data</span><span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">q.init</span>;<span class="pl-v">this</span>.<span class="pl-smi">_nDataBytes</span><span class="pl-k">=</span><span class="pl-c1">0</span>},<span class="pl-en">_append</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span><span class="pl-k">typeof</span> b<span class="pl-k">&amp;&amp;</span>(b<span class="pl-k">=</span><span class="pl-smi">u</span>.<span class="pl-c1">parse</span>(b));<span class="pl-v">this</span>.<span class="pl-smi">_data</span>.<span class="pl-c1">concat</span>(b);<span class="pl-v">this</span>.<span class="pl-smi">_nDataBytes</span><span class="pl-k">+=</span><span class="pl-smi">b</span>.<span class="pl-smi">sigBytes</span>},<span class="pl-en">_process</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-smi">_data</span>,g<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">words</span>,j<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">sigBytes</span>,k<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-smi">blockSize</span>,m<span class="pl-k">=</span>j<span class="pl-k">/</span>(<span class="pl-c1">4</span><span class="pl-k">*</span>k),m<span class="pl-k">=</span>b<span class="pl-k">?</span><span class="pl-smi">s</span>.<span class="pl-en">ceil</span>(m)<span class="pl-k">:</span><span class="pl-smi">s</span>.<span class="pl-en">max</span>((m<span class="pl-k">|</span><span class="pl-c1">0</span>)<span class="pl-k">-</span><span class="pl-v">this</span>.<span class="pl-smi">_minBufferSize</span>,<span class="pl-c1">0</span>);b<span class="pl-k">=</span>m<span class="pl-k">*</span>k;j<span class="pl-k">=</span><span class="pl-smi">s</span>.<span class="pl-en">min</span>(<span class="pl-c1">4</span><span class="pl-k">*</span>b,j);<span class="pl-k">if</span>(b){<span class="pl-k">for</span>(<span class="pl-k">var</span> l<span class="pl-k">=</span><span class="pl-c1">0</span>;l<span class="pl-k">&lt;</span>b;l<span class="pl-k">+=</span>k)<span class="pl-v">this</span>.<span class="pl-en">_doProcessBlock</span>(g,l);l<span class="pl-k">=</span><span class="pl-smi">g</span>.<span class="pl-c1">splice</span>(<span class="pl-c1">0</span>,b);<span class="pl-smi">a</span>.<span class="pl-smi">sigBytes</span><span class="pl-k">-=</span>j}<span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">q.init</span>(l,j)},<span class="pl-en">clone</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-smi">r</span>.<span class="pl-smi">clone</span>.<span class="pl-c1">call</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">b</span>.<span class="pl-smi">_data</span><span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-smi">_data</span>.<span class="pl-en">clone</span>();<span class="pl-k">return</span> b},_minBufferSize<span class="pl-k">:</span><span class="pl-c1">0</span>});<span class="pl-smi">l</span>.<span class="pl-smi">Hasher</span><span class="pl-k">=</span><span class="pl-smi">g</span>.<span class="pl-en">extend</span>({cfg<span class="pl-k">:</span><span class="pl-smi">r</span>.<span class="pl-en">extend</span>(),<span class="pl-en">init</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-v">this</span>.<span class="pl-smi">cfg</span><span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-smi">cfg</span>.<span class="pl-en">extend</span>(b);<span class="pl-v">this</span>.<span class="pl-c1">reset</span>()},<span class="pl-en">reset</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-smi">g</span>.<span class="pl-smi">reset</span>.<span class="pl-c1">call</span>(<span class="pl-v">this</span>);<span class="pl-v">this</span>.<span class="pl-en">_doReset</span>()},<span class="pl-en">update</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-v">this</span>.<span class="pl-en">_append</span>(b);<span class="pl-v">this</span>.<span class="pl-en">_process</span>();<span class="pl-k">return</span> <span class="pl-v">this</span>},<span class="pl-en">finalize</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){b<span class="pl-k">&amp;&amp;</span><span class="pl-v">this</span>.<span class="pl-en">_append</span>(b);<span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-en">_doFinalize</span>()},blockSize<span class="pl-k">:</span><span class="pl-c1">16</span>,<span class="pl-en">_createHelper</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">g</span>){<span class="pl-k">return</span>(<span class="pl-k">new</span> <span class="pl-en">b.init</span>(g)).<span class="pl-en">finalize</span>(a)}},<span class="pl-en">_createHmacHelper</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">g</span>){<span class="pl-k">return</span>(<span class="pl-k">new</span> <span class="pl-en">k.HMAC.init</span>(b,</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">g)).<span class="pl-en">finalize</span>(a)}}});<span class="pl-k">var</span> k<span class="pl-k">=</span><span class="pl-smi">m</span>.<span class="pl-smi">algo</span><span class="pl-k">=</span>{};<span class="pl-k">return</span> m}(<span class="pl-c1">Math</span>);</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-smi">s</span>){<span class="pl-k">function</span> <span class="pl-en">p</span>(<span class="pl-smi">a</span>,<span class="pl-smi">k</span>,<span class="pl-smi">b</span>,<span class="pl-smi">h</span>,<span class="pl-smi">l</span>,<span class="pl-smi">j</span>,<span class="pl-smi">m</span>){a<span class="pl-k">=</span>a<span class="pl-k">+</span>(k<span class="pl-k">&amp;</span>b<span class="pl-k">|~</span>k<span class="pl-k">&amp;</span>h)<span class="pl-k">+</span>l<span class="pl-k">+</span>m;<span class="pl-k">return</span>(a<span class="pl-k">&lt;&lt;</span>j<span class="pl-k">|</span>a<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">32</span><span class="pl-k">-</span>j)<span class="pl-k">+</span>k}function m(a,k,b,h,l,j,m){a=a+(k&amp;h|b&amp;~h)+l+m;return(a&lt;&lt;j|a&gt;&gt;&gt;32-j)+k}function l(a,k,b,h,l,j,m){a=a+(k^b^h)+l+m;return(a&lt;&lt;j|a&gt;&gt;&gt;32-j)+k}function n(a,k,b,h,l,j,m){a=a+(b^(k|~h))+l+m;return(a&lt;&lt;j|a&gt;&gt;&gt;32-j)+k}for(var r=CryptoJS,q=r.lib,v=q.WordArray,t=q.Hasher,q=r.algo,a=[],u=0;64&gt;u;u++)a[u]=4294967296*s.abs(s.sin(u+1))|0;q=q.MD5=t.extend({_doReset:function(){this._hash=new v.init([1732584193,4023233417,2562383102,271733878])},</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-en">_doProcessBlock</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">g</span>,<span class="pl-smi">k</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-c1">16</span><span class="pl-k">&gt;</span>b;b<span class="pl-k">++</span>){<span class="pl-k">var</span> h<span class="pl-k">=</span>k<span class="pl-k">+</span>b,w<span class="pl-k">=</span>g[h];g[h]<span class="pl-k">=</span>(w<span class="pl-k">&lt;&lt;</span><span class="pl-c1">8</span><span class="pl-k">|</span>w<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">24</span>)<span class="pl-k">&amp;</span><span class="pl-c1">16711935</span><span class="pl-k">|</span>(w<span class="pl-k">&lt;&lt;</span><span class="pl-c1">24</span><span class="pl-k">|</span>w<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">8</span>)<span class="pl-k">&amp;</span><span class="pl-c1">4278255360</span>}<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-smi">_hash</span>.<span class="pl-smi">words</span>,h<span class="pl-k">=</span>g[k<span class="pl-k">+</span><span class="pl-c1">0</span>],w<span class="pl-k">=</span>g[k<span class="pl-k">+</span><span class="pl-c1">1</span>],j<span class="pl-k">=</span>g[k<span class="pl-k">+</span><span class="pl-c1">2</span>],q<span class="pl-k">=</span>g[k<span class="pl-k">+</span><span class="pl-c1">3</span>],r<span class="pl-k">=</span>g[k<span class="pl-k">+</span><span class="pl-c1">4</span>],s<span class="pl-k">=</span>g[k<span class="pl-k">+</span><span class="pl-c1">5</span>],t<span class="pl-k">=</span>g[k<span class="pl-k">+</span><span class="pl-c1">6</span>],u<span class="pl-k">=</span>g[k<span class="pl-k">+</span><span class="pl-c1">7</span>],v<span class="pl-k">=</span>g[k<span class="pl-k">+</span><span class="pl-c1">8</span>],x<span class="pl-k">=</span>g[k<span class="pl-k">+</span><span class="pl-c1">9</span>],y<span class="pl-k">=</span>g[k<span class="pl-k">+</span><span class="pl-c1">10</span>],z<span class="pl-k">=</span>g[k<span class="pl-k">+</span><span class="pl-c1">11</span>],<span class="pl-c1">A</span><span class="pl-k">=</span>g[k<span class="pl-k">+</span><span class="pl-c1">12</span>],<span class="pl-c1">B</span><span class="pl-k">=</span>g[k<span class="pl-k">+</span><span class="pl-c1">13</span>],<span class="pl-c1">C</span><span class="pl-k">=</span>g[k<span class="pl-k">+</span><span class="pl-c1">14</span>],<span class="pl-c1">D</span><span class="pl-k">=</span>g[k<span class="pl-k">+</span><span class="pl-c1">15</span>],c<span class="pl-k">=</span>b[<span class="pl-c1">0</span>],d<span class="pl-k">=</span>b[<span class="pl-c1">1</span>],e<span class="pl-k">=</span>b[<span class="pl-c1">2</span>],f<span class="pl-k">=</span>b[<span class="pl-c1">3</span>],c<span class="pl-k">=</span><span class="pl-en">p</span>(c,d,e,f,h,<span class="pl-c1">7</span>,a[<span class="pl-c1">0</span>]),f<span class="pl-k">=</span><span class="pl-en">p</span>(f,c,d,e,w,<span class="pl-c1">12</span>,a[<span class="pl-c1">1</span>]),e<span class="pl-k">=</span><span class="pl-en">p</span>(e,f,c,d,j,<span class="pl-c1">17</span>,a[<span class="pl-c1">2</span>]),d<span class="pl-k">=</span><span class="pl-en">p</span>(d,e,f,c,q,<span class="pl-c1">22</span>,a[<span class="pl-c1">3</span>]),c<span class="pl-k">=</span><span class="pl-en">p</span>(c,d,e,f,r,<span class="pl-c1">7</span>,a[<span class="pl-c1">4</span>]),f<span class="pl-k">=</span><span class="pl-en">p</span>(f,c,d,e,s,<span class="pl-c1">12</span>,a[<span class="pl-c1">5</span>]),e<span class="pl-k">=</span><span class="pl-en">p</span>(e,f,c,d,t,<span class="pl-c1">17</span>,a[<span class="pl-c1">6</span>]),d<span class="pl-k">=</span><span class="pl-en">p</span>(d,e,f,c,u,<span class="pl-c1">22</span>,a[<span class="pl-c1">7</span>]),</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">c<span class="pl-k">=</span><span class="pl-en">p</span>(c,d,e,f,v,<span class="pl-c1">7</span>,a[<span class="pl-c1">8</span>]),f<span class="pl-k">=</span><span class="pl-en">p</span>(f,c,d,e,x,<span class="pl-c1">12</span>,a[<span class="pl-c1">9</span>]),e<span class="pl-k">=</span><span class="pl-en">p</span>(e,f,c,d,y,<span class="pl-c1">17</span>,a[<span class="pl-c1">10</span>]),d<span class="pl-k">=</span><span class="pl-en">p</span>(d,e,f,c,z,<span class="pl-c1">22</span>,a[<span class="pl-c1">11</span>]),c<span class="pl-k">=</span><span class="pl-en">p</span>(c,d,e,f,<span class="pl-c1">A</span>,<span class="pl-c1">7</span>,a[<span class="pl-c1">12</span>]),f<span class="pl-k">=</span><span class="pl-en">p</span>(f,c,d,e,<span class="pl-c1">B</span>,<span class="pl-c1">12</span>,a[<span class="pl-c1">13</span>]),e<span class="pl-k">=</span><span class="pl-en">p</span>(e,f,c,d,<span class="pl-c1">C</span>,<span class="pl-c1">17</span>,a[<span class="pl-c1">14</span>]),d<span class="pl-k">=</span><span class="pl-en">p</span>(d,e,f,c,<span class="pl-c1">D</span>,<span class="pl-c1">22</span>,a[<span class="pl-c1">15</span>]),c<span class="pl-k">=</span><span class="pl-en">m</span>(c,d,e,f,w,<span class="pl-c1">5</span>,a[<span class="pl-c1">16</span>]),f<span class="pl-k">=</span><span class="pl-en">m</span>(f,c,d,e,t,<span class="pl-c1">9</span>,a[<span class="pl-c1">17</span>]),e<span class="pl-k">=</span><span class="pl-en">m</span>(e,f,c,d,z,<span class="pl-c1">14</span>,a[<span class="pl-c1">18</span>]),d<span class="pl-k">=</span><span class="pl-en">m</span>(d,e,f,c,h,<span class="pl-c1">20</span>,a[<span class="pl-c1">19</span>]),c<span class="pl-k">=</span><span class="pl-en">m</span>(c,d,e,f,s,<span class="pl-c1">5</span>,a[<span class="pl-c1">20</span>]),f<span class="pl-k">=</span><span class="pl-en">m</span>(f,c,d,e,y,<span class="pl-c1">9</span>,a[<span class="pl-c1">21</span>]),e<span class="pl-k">=</span><span class="pl-en">m</span>(e,f,c,d,<span class="pl-c1">D</span>,<span class="pl-c1">14</span>,a[<span class="pl-c1">22</span>]),d<span class="pl-k">=</span><span class="pl-en">m</span>(d,e,f,c,r,<span class="pl-c1">20</span>,a[<span class="pl-c1">23</span>]),c<span class="pl-k">=</span><span class="pl-en">m</span>(c,d,e,f,x,<span class="pl-c1">5</span>,a[<span class="pl-c1">24</span>]),f<span class="pl-k">=</span><span class="pl-en">m</span>(f,c,d,e,<span class="pl-c1">C</span>,<span class="pl-c1">9</span>,a[<span class="pl-c1">25</span>]),e<span class="pl-k">=</span><span class="pl-en">m</span>(e,f,c,d,q,<span class="pl-c1">14</span>,a[<span class="pl-c1">26</span>]),d<span class="pl-k">=</span><span class="pl-en">m</span>(d,e,f,c,v,<span class="pl-c1">20</span>,a[<span class="pl-c1">27</span>]),c<span class="pl-k">=</span><span class="pl-en">m</span>(c,d,e,f,<span class="pl-c1">B</span>,<span class="pl-c1">5</span>,a[<span class="pl-c1">28</span>]),f<span class="pl-k">=</span><span class="pl-en">m</span>(f,c,</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">d,e,j,<span class="pl-c1">9</span>,a[<span class="pl-c1">29</span>]),e<span class="pl-k">=</span><span class="pl-en">m</span>(e,f,c,d,u,<span class="pl-c1">14</span>,a[<span class="pl-c1">30</span>]),d<span class="pl-k">=</span><span class="pl-en">m</span>(d,e,f,c,<span class="pl-c1">A</span>,<span class="pl-c1">20</span>,a[<span class="pl-c1">31</span>]),c<span class="pl-k">=</span><span class="pl-en">l</span>(c,d,e,f,s,<span class="pl-c1">4</span>,a[<span class="pl-c1">32</span>]),f<span class="pl-k">=</span><span class="pl-en">l</span>(f,c,d,e,v,<span class="pl-c1">11</span>,a[<span class="pl-c1">33</span>]),e<span class="pl-k">=</span><span class="pl-en">l</span>(e,f,c,d,z,<span class="pl-c1">16</span>,a[<span class="pl-c1">34</span>]),d<span class="pl-k">=</span><span class="pl-en">l</span>(d,e,f,c,<span class="pl-c1">C</span>,<span class="pl-c1">23</span>,a[<span class="pl-c1">35</span>]),c<span class="pl-k">=</span><span class="pl-en">l</span>(c,d,e,f,w,<span class="pl-c1">4</span>,a[<span class="pl-c1">36</span>]),f<span class="pl-k">=</span><span class="pl-en">l</span>(f,c,d,e,r,<span class="pl-c1">11</span>,a[<span class="pl-c1">37</span>]),e<span class="pl-k">=</span><span class="pl-en">l</span>(e,f,c,d,u,<span class="pl-c1">16</span>,a[<span class="pl-c1">38</span>]),d<span class="pl-k">=</span><span class="pl-en">l</span>(d,e,f,c,y,<span class="pl-c1">23</span>,a[<span class="pl-c1">39</span>]),c<span class="pl-k">=</span><span class="pl-en">l</span>(c,d,e,f,<span class="pl-c1">B</span>,<span class="pl-c1">4</span>,a[<span class="pl-c1">40</span>]),f<span class="pl-k">=</span><span class="pl-en">l</span>(f,c,d,e,h,<span class="pl-c1">11</span>,a[<span class="pl-c1">41</span>]),e<span class="pl-k">=</span><span class="pl-en">l</span>(e,f,c,d,q,<span class="pl-c1">16</span>,a[<span class="pl-c1">42</span>]),d<span class="pl-k">=</span><span class="pl-en">l</span>(d,e,f,c,t,<span class="pl-c1">23</span>,a[<span class="pl-c1">43</span>]),c<span class="pl-k">=</span><span class="pl-en">l</span>(c,d,e,f,x,<span class="pl-c1">4</span>,a[<span class="pl-c1">44</span>]),f<span class="pl-k">=</span><span class="pl-en">l</span>(f,c,d,e,<span class="pl-c1">A</span>,<span class="pl-c1">11</span>,a[<span class="pl-c1">45</span>]),e<span class="pl-k">=</span><span class="pl-en">l</span>(e,f,c,d,<span class="pl-c1">D</span>,<span class="pl-c1">16</span>,a[<span class="pl-c1">46</span>]),d<span class="pl-k">=</span><span class="pl-en">l</span>(d,e,f,c,j,<span class="pl-c1">23</span>,a[<span class="pl-c1">47</span>]),c<span class="pl-k">=</span><span class="pl-en">n</span>(c,d,e,f,h,<span class="pl-c1">6</span>,a[<span class="pl-c1">48</span>]),f<span class="pl-k">=</span><span class="pl-en">n</span>(f,c,d,e,u,<span class="pl-c1">10</span>,a[<span class="pl-c1">49</span>]),e<span class="pl-k">=</span><span class="pl-en">n</span>(e,f,c,d,</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">C</span>,<span class="pl-c1">15</span>,a[<span class="pl-c1">50</span>]),d<span class="pl-k">=</span><span class="pl-en">n</span>(d,e,f,c,s,<span class="pl-c1">21</span>,a[<span class="pl-c1">51</span>]),c<span class="pl-k">=</span><span class="pl-en">n</span>(c,d,e,f,<span class="pl-c1">A</span>,<span class="pl-c1">6</span>,a[<span class="pl-c1">52</span>]),f<span class="pl-k">=</span><span class="pl-en">n</span>(f,c,d,e,q,<span class="pl-c1">10</span>,a[<span class="pl-c1">53</span>]),e<span class="pl-k">=</span><span class="pl-en">n</span>(e,f,c,d,y,<span class="pl-c1">15</span>,a[<span class="pl-c1">54</span>]),d<span class="pl-k">=</span><span class="pl-en">n</span>(d,e,f,c,w,<span class="pl-c1">21</span>,a[<span class="pl-c1">55</span>]),c<span class="pl-k">=</span><span class="pl-en">n</span>(c,d,e,f,v,<span class="pl-c1">6</span>,a[<span class="pl-c1">56</span>]),f<span class="pl-k">=</span><span class="pl-en">n</span>(f,c,d,e,<span class="pl-c1">D</span>,<span class="pl-c1">10</span>,a[<span class="pl-c1">57</span>]),e<span class="pl-k">=</span><span class="pl-en">n</span>(e,f,c,d,t,<span class="pl-c1">15</span>,a[<span class="pl-c1">58</span>]),d<span class="pl-k">=</span><span class="pl-en">n</span>(d,e,f,c,<span class="pl-c1">B</span>,<span class="pl-c1">21</span>,a[<span class="pl-c1">59</span>]),c<span class="pl-k">=</span><span class="pl-en">n</span>(c,d,e,f,r,<span class="pl-c1">6</span>,a[<span class="pl-c1">60</span>]),f<span class="pl-k">=</span><span class="pl-en">n</span>(f,c,d,e,z,<span class="pl-c1">10</span>,a[<span class="pl-c1">61</span>]),e<span class="pl-k">=</span><span class="pl-en">n</span>(e,f,c,d,j,<span class="pl-c1">15</span>,a[<span class="pl-c1">62</span>]),d<span class="pl-k">=</span><span class="pl-en">n</span>(d,e,f,c,x,<span class="pl-c1">21</span>,a[<span class="pl-c1">63</span>]);b[<span class="pl-c1">0</span>]<span class="pl-k">=</span>b[<span class="pl-c1">0</span>]<span class="pl-k">+</span>c<span class="pl-k">|</span><span class="pl-c1">0</span>;b[<span class="pl-c1">1</span>]<span class="pl-k">=</span>b[<span class="pl-c1">1</span>]<span class="pl-k">+</span>d<span class="pl-k">|</span><span class="pl-c1">0</span>;b[<span class="pl-c1">2</span>]<span class="pl-k">=</span>b[<span class="pl-c1">2</span>]<span class="pl-k">+</span>e<span class="pl-k">|</span><span class="pl-c1">0</span>;b[<span class="pl-c1">3</span>]<span class="pl-k">=</span>b[<span class="pl-c1">3</span>]<span class="pl-k">+</span>f<span class="pl-k">|</span><span class="pl-c1">0</span>},<span class="pl-en">_doFinalize</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-smi">_data</span>,k<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">words</span>,b<span class="pl-k">=</span><span class="pl-c1">8</span><span class="pl-k">*</span><span class="pl-v">this</span>.<span class="pl-smi">_nDataBytes</span>,h<span class="pl-k">=</span><span class="pl-c1">8</span><span class="pl-k">*</span><span class="pl-smi">a</span>.<span class="pl-smi">sigBytes</span>;k[h<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">5</span>]<span class="pl-k">|=</span><span class="pl-c1">128</span><span class="pl-k">&lt;&lt;</span><span class="pl-c1">24</span><span class="pl-k">-</span>h<span class="pl-k">%</span><span class="pl-c1">32</span>;<span class="pl-k">var</span> l<span class="pl-k">=</span><span class="pl-smi">s</span>.<span class="pl-en">floor</span>(b<span class="pl-k">/</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">4294967296</span>);k[(h<span class="pl-k">+</span><span class="pl-c1">64</span><span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">9</span><span class="pl-k">&lt;&lt;</span><span class="pl-c1">4</span>)<span class="pl-k">+</span><span class="pl-c1">15</span>]<span class="pl-k">=</span>(l<span class="pl-k">&lt;&lt;</span><span class="pl-c1">8</span><span class="pl-k">|</span>l<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">24</span>)<span class="pl-k">&amp;</span><span class="pl-c1">16711935</span><span class="pl-k">|</span>(l<span class="pl-k">&lt;&lt;</span><span class="pl-c1">24</span><span class="pl-k">|</span>l<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">8</span>)<span class="pl-k">&amp;</span><span class="pl-c1">4278255360</span>;k[(h<span class="pl-k">+</span><span class="pl-c1">64</span><span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">9</span><span class="pl-k">&lt;&lt;</span><span class="pl-c1">4</span>)<span class="pl-k">+</span><span class="pl-c1">14</span>]<span class="pl-k">=</span>(b<span class="pl-k">&lt;&lt;</span><span class="pl-c1">8</span><span class="pl-k">|</span>b<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">24</span>)<span class="pl-k">&amp;</span><span class="pl-c1">16711935</span><span class="pl-k">|</span>(b<span class="pl-k">&lt;&lt;</span><span class="pl-c1">24</span><span class="pl-k">|</span>b<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">8</span>)<span class="pl-k">&amp;</span><span class="pl-c1">4278255360</span>;<span class="pl-smi">a</span>.<span class="pl-smi">sigBytes</span><span class="pl-k">=</span><span class="pl-c1">4</span><span class="pl-k">*</span>(<span class="pl-smi">k</span>.<span class="pl-c1">length</span><span class="pl-k">+</span><span class="pl-c1">1</span>);<span class="pl-v">this</span>.<span class="pl-en">_process</span>();a<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-smi">_hash</span>;k<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">words</span>;<span class="pl-k">for</span>(b<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-c1">4</span><span class="pl-k">&gt;</span>b;b<span class="pl-k">++</span>)h<span class="pl-k">=</span>k[b],k[b]<span class="pl-k">=</span>(h<span class="pl-k">&lt;&lt;</span><span class="pl-c1">8</span><span class="pl-k">|</span>h<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">24</span>)<span class="pl-k">&amp;</span><span class="pl-c1">16711935</span><span class="pl-k">|</span>(h<span class="pl-k">&lt;&lt;</span><span class="pl-c1">24</span><span class="pl-k">|</span>h<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">8</span>)<span class="pl-k">&amp;</span><span class="pl-c1">4278255360</span>;<span class="pl-k">return</span> a},<span class="pl-en">clone</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-smi">t</span>.<span class="pl-smi">clone</span>.<span class="pl-c1">call</span>(<span class="pl-v">this</span>);<span class="pl-smi">a</span>.<span class="pl-smi">_hash</span><span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-smi">_hash</span>.<span class="pl-en">clone</span>();<span class="pl-k">return</span> a}});<span class="pl-smi">r</span>.<span class="pl-c1">MD5</span><span class="pl-k">=</span><span class="pl-smi">t</span>.<span class="pl-en">_createHelper</span>(q);<span class="pl-smi">r</span>.<span class="pl-smi">HmacMD5</span><span class="pl-k">=</span><span class="pl-smi">t</span>.<span class="pl-en">_createHmacHelper</span>(q)})(<span class="pl-c1">Math</span>);</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.16977s from github-fe149-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
      </button>
      You can't perform that action at this time.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-ag2yCS6kaZCq8nDa5FweQdSGGjNryiKHSEzXglBRRqA=" src="https://assets-cdn.github.com/assets/frameworks-6a0db2092ea46990aaf270dae45c1e41d4861a336bca2287484cd782505146a0.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-9/CA9yQex0JZ3AelH6ritL4gWMhTzsINgtyIfkV319Q=" src="https://assets-cdn.github.com/assets/github-f7f080f7241ec74259dc07a51faae2b4be2058c853cec20d82dc887e4577d7d4.js"></script>
      
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

