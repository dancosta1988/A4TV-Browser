



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
    
    <title>pagelyzer/bf_blocks.js at master · openpreserve/pagelyzer · GitHub</title>
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
    
    <meta name="request-id" content="C2751647:444B:F1A2DAA:580740BD" data-pjax-transient>

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="C2751647:444B:F1A2DAA:580740BD" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged Out">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="MjgyNjk5Y2QwNjJlOTM3NzM2MWU1ODk3ZmQ2ZjkzNDg4ODY3NDRmZTA2MjIyNWM3MTg2NTcyZmYzYTVlOWQ2M3x7InJlbW90ZV9hZGRyZXNzIjoiMTk0LjExNy4yMi43MSIsInJlcXVlc3RfaWQiOiJDMjc1MTY0Nzo0NDRCOkYxQTJEQUE6NTgwNzQwQkQiLCJ0aW1lc3RhbXAiOjE0NzY4NzAzMzMsImhvc3QiOiJnaXRodWIuY29tIn0=">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="0322c7e739e0bd6421d48aa483a533ff9c09889d">
    <meta content="a76421c134089a1416d726f25932872bc0aea8c3" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="f30d8dab9dc153107e344476e058074c">
    

      
  <meta name="description" content="pagelyzer - Suite of tools for detecting changes in web pages and their rendering">
  <meta name="go-import" content="github.com/openpreserve/pagelyzer git https://github.com/openpreserve/pagelyzer.git">

  <meta content="448113" name="octolytics-dimension-user_id" /><meta content="openpreserve" name="octolytics-dimension-user_login" /><meta content="6797228" name="octolytics-dimension-repository_id" /><meta content="openpreserve/pagelyzer" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="6797228" name="octolytics-dimension-repository_network_root_id" /><meta content="openpreserve/pagelyzer" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/openpreserve/pagelyzer/commits/master.atom" rel="alternate" title="Recent Commits to pagelyzer:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/openpreserve/pagelyzer/blob/master/SettingsFiles/js/bf_blocks.js" data-pjax-transient>
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
          <a class="btn site-header-actions-btn mr-2" href="/login?return_to=%2Fopenpreserve%2Fpagelyzer%2Fblob%2Fmaster%2FSettingsFiles%2Fjs%2Fbf_blocks.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
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

    

<a href="/openpreserve/pagelyzer/blob/accc4c16f1dd5e655d9d7efcdc74ad89e12d883e/SettingsFiles/js/bf_blocks.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:4130b51a9eb8d28fa1ab50f78e178140 -->

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
               href="/openpreserve/pagelyzer/blob/gh-pages/SettingsFiles/js/bf_blocks.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/openpreserve/pagelyzer/blob/master/SettingsFiles/js/bf_blocks.js"
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
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/openpreserve/pagelyzer"><span>pagelyzer</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/openpreserve/pagelyzer/tree/master/SettingsFiles"><span>SettingsFiles</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/openpreserve/pagelyzer/tree/master/SettingsFiles/js"><span>js</span></a></span><span class="separator">/</span><strong class="final-path">bf_blocks.js</strong>
  </div>
</div>

<include-fragment class="commit-tease" src="/openpreserve/pagelyzer/contributors/master/SettingsFiles/js/bf_blocks.js">
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
      <a href="/openpreserve/pagelyzer/raw/master/SettingsFiles/js/bf_blocks.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/openpreserve/pagelyzer/blame/master/SettingsFiles/js/bf_blocks.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item">Blame</a>
      <a href="/openpreserve/pagelyzer/commits/master/SettingsFiles/js/bf_blocks.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
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
      3 lines (2 sloc)
      <span class="file-info-divider"></span>
    55.6 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">var url = &quot;http://fr.wikipedia.com/wiki/France&quot;;</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">var blocks = [[&#39;B1&#39;,[&#39;//HTML[0]/BODY[0]/DIV[8]/DIV[8]/DIV[8]&#39;,&#39;//HTML[0]/BODY[0]/DIV[12]/DIV[12]/DIV[12]/DIV[12]&#39;,&#39;//HTML[0]/BODY[0]/DIV[13]/DIV[13]/DIV[13]/DIV[13]/P[0]&#39;],[&#39;B2&#39;,[&#39;//HTML[0]/BODY[0]/DIV[19]/DIV[19]/DIV[19]/DIV[19]/P[7]&#39;,&#39;//HTML[0]/BODY[0]/DIV[25]/DIV[25]/DIV[25]/DIV[25]/P[8]&#39;],[&#39;B3&#39;,[&#39;//HTML[0]/BODY[0]/DIV[25]/DIV[25]/DIV[25]/DIV[25]/TABLE[3]/TBODY[3]/TR[13]/TD[14]&#39;,&#39;//HTML[0]/BODY[0]/DIV[25]/DIV[25]/DIV[25]/DIV[25]/TABLE[4]/CAPTION[2]&#39;],[&#39;B4&#39;,[&#39;//HTML[0]/BODY[0]/DIV[25]/DIV[25]/DIV[25]/DIV[25]/TABLE[6]/TBODY[6]/TR[24]/TD[25]/SMALL[6]&#39;,&#39;//HTML[0]/BODY[0]/DIV[25]/DIV[25]/DIV[25]/DIV[25]/TABLE[6]/TBODY[6]/TR[24]/TD[25]/SMALL[7]&#39;],[&#39;B5&#39;,[&#39;//HTML[0]/BODY[0]/DIV[25]/DIV[25]/DIV[25]/P[10]&#39;,&#39;//HTML[0]/BODY[0]/DIV[25]/DIV[25]/DIV[25]/P[11]&#39;,&#39;//HTML[0]/BODY[0]/DIV[25]/DIV[25]/DIV[25]/P[12]&#39;,&#39;//HTML[0]/BODY[0]/DIV[25]/DIV[25]/DIV[25]/P[13]/TIME[2]/A[164]/ABBR[6]&#39;,&#39;//HTML[0]/BODY[0]/DIV[25]/DIV[25]/DIV[25]/P[13]&#39;,&#39;//HTML[0]/BODY[0]/DIV[27]/DIV[27]/DIV[27]/DIV[27]/DIV[27]/H2[0]&#39;],[&#39;B6&#39;,[&#39;//HTML[0]/BODY[0]/DIV[28]/DIV[28]/DIV[28]/H3[0]&#39;,&#39;//HTML[0]/BODY[0]/DIV[32]/DIV[32]/DIV[32]/DIV[32]/DIV[32]/DIV[32]&#39;,&#39;//HTML[0]/BODY[0]/DIV[32]/DIV[32]/DIV[32]/P[16]&#39;,&#39;//HTML[0]/BODY[0]/DIV[32]/DIV[32]/DIV[32]/P[17]&#39;,&#39;//HTML[0]/BODY[0]/DIV[32]/DIV[32]/DIV[32]/P[18]&#39;,&#39;//HTML[0]/BODY[0]/DIV[32]/DIV[32]/DIV[32]/P[19]&#39;,&#39;//HTML[0]/BODY[0]/DIV[32]/DIV[32]/DIV[32]/P[20]&#39;],[&#39;B7&#39;,[&#39;//HTML[0]/BODY[0]/DIV[32]/DIV[32]/DIV[32]/UL[11]/LI[68]&#39;,&#39;//HTML[0]/BODY[0]/DIV[32]/DIV[32]/DIV[32]/P[21]&#39;,&#39;//HTML[0]/BODY[0]/DIV[32]/DIV[32]/DIV[32]/P[22]&#39;,&#39;//HTML[0]/BODY[0]/DIV[32]/DIV[32]/DIV[32]/P[23]&#39;,&#39;//HTML[0]/BODY[0]/DIV[32]/DIV[32]/DIV[32]/P[24]&#39;,&#39;//HTML[0]/BODY[0]/DIV[32]/DIV[32]/DIV[32]/P[25]&#39;,&#39;//HTML[0]/BODY[0]/DIV[32]/DIV[32]/DIV[32]/H3[1]&#39;,&#39;//HTML[0]/BODY[0]/DIV[37]/DIV[37]/DIV[37]/DIV[37]&#39;,&#39;//HTML[0]/BODY[0]/DIV[37]/DIV[37]/DIV[37]/P[26]&#39;,&#39;//HTML[0]/BODY[0]/DIV[37]/DIV[37]/DIV[37]/P[27]&#39;,&#39;//HTML[0]/BODY[0]/DIV[37]/DIV[37]/DIV[37]/P[28]&#39;,&#39;//HTML[0]/BODY[0]/DIV[37]/DIV[37]/DIV[37]/P[29]&#39;,&#39;//HTML[0]/BODY[0]/DIV[38]/DIV[38]/DIV[38]/H3[2]&#39;],[&#39;B8&#39;,[&#39;//HTML[0]/BODY[0]/DIV[43]/DIV[43]/DIV[43]/P[30]&#39;,&#39;//HTML[0]/BODY[0]/DIV[43]/DIV[43]/DIV[43]/UL[12]/LI[69]&#39;,&#39;//HTML[0]/BODY[0]/DIV[43]/DIV[43]/DIV[43]/UL[12]/LI[70]&#39;,&#39;//HTML[0]/BODY[0]/DIV[43]/DIV[43]/DIV[43]/UL[12]/LI[71]&#39;,&#39;//HTML[0]/BODY[0]/DIV[43]/DIV[43]/DIV[43]/UL[12]/LI[72]&#39;,&#39;//HTML[0]/BODY[0]/DIV[43]/DIV[43]/DIV[43]/UL[12]/LI[73]&#39;,&#39;//HTML[0]/BODY[0]/DIV[43]/DIV[43]/DIV[43]/UL[12]/LI[74]&#39;,&#39;//HTML[0]/BODY[0]/DIV[43]/DIV[43]/DIV[43]/P[31]&#39;,&#39;//HTML[0]/BODY[0]/DIV[43]/DIV[43]/DIV[43]/P[32]&#39;,&#39;//HTML[0]/BODY[0]/DIV[43]/DIV[43]/DIV[43]/P[33]&#39;,&#39;//HTML[0]/BODY[0]/DIV[43]/DIV[43]/DIV[43]/H3[3]&#39;,&#39;//HTML[0]/BODY[0]/DIV[43]/DIV[43]/DIV[43]/P[34]&#39;,&#39;//HTML[0]/BODY[0]/DIV[51]/DIV[51]/DIV[51]/UL[13]/LI[76]/DIV[51]/DIV[51]/P[36]&#39;,&#39;//HTML[0]/BODY[0]/DIV[55]/DIV[55]/DIV[55]/UL[13]/LI[77]/DIV[55]/DIV[55]/P[37]&#39;,&#39;//HTML[0]/BODY[0]/DIV[59]/DIV[59]/DIV[59]/UL[13]/LI[78]/DIV[59]/DIV[59]/P[38]&#39;,&#39;//HTML[0]/BODY[0]/DIV[63]/DIV[63]/DIV[63]/UL[13]/LI[79]/DIV[63]/DIV[63]/P[39]&#39;,&#39;//HTML[0]/BODY[0]/DIV[67]/DIV[67]/DIV[67]/UL[13]/LI[80]/DIV[67]/DIV[67]/P[40]&#39;,&#39;//HTML[0]/BODY[0]/DIV[67]/DIV[67]/DIV[67]/TABLE[7]/TBODY[7]/TR[26]/TD[28]/SMALL[10]&#39;,&#39;//HTML[0]/BODY[0]/DIV[67]/DIV[67]/DIV[67]/P[41]&#39;,&#39;//HTML[0]/BODY[0]/DIV[67]/DIV[67]/DIV[67]/P[42]&#39;,&#39;//HTML[0]/BODY[0]/DIV[67]/DIV[67]/DIV[67]/H3[4]&#39;,&#39;//HTML[0]/BODY[0]/DIV[68]/DIV[68]/DIV[68]/DIV[68]&#39;,&#39;//HTML[0]/BODY[0]/DIV[72]/DIV[72]/DIV[72]/DIV[72]/DIV[72]/DIV[72]/UL[14]&#39;,&#39;//HTML[0]/BODY[0]/DIV[72]/DIV[72]/DIV[72]/DIV[72]/DIV[72]/DIV[72]/UL[14]/LI[81]&#39;,&#39;//HTML[0]/BODY[0]/DIV[72]/DIV[72]/DIV[72]/DIV[72]/DIV[72]/DIV[72]/UL[14]/LI[82]&#39;,&#39;//HTML[0]/BODY[0]/DIV[72]/DIV[72]/DIV[72]/DIV[72]/DIV[72]/DIV[72]/UL[14]/LI[83]&#39;,&#39;//HTML[0]/BODY[0]/DIV[72]/DIV[72]/DIV[72]/DIV[72]/DIV[72]/DIV[72]/UL[14]/LI[84]&#39;,&#39;//HTML[0]/BODY[0]/DIV[72]/DIV[72]/DIV[72]/DIV[72]/DIV[72]/DIV[72]/UL[14]/LI[85]&#39;,&#39;//HTML[0]/BODY[0]/DIV[72]/DIV[72]/DIV[72]/DIV[72]/DIV[72]/DIV[72]/UL[14]/LI[86]&#39;,&#39;//HTML[0]/BODY[0]/DIV[76]/DIV[76]/DIV[76]/DIV[76]/DIV[76]/DIV[76]&#39;,&#39;//HTML[0]/BODY[0]/DIV[76]/DIV[76]/DIV[76]/P[43]&#39;,&#39;//HTML[0]/BODY[0]/DIV[76]/DIV[76]/DIV[76]/P[44]&#39;,&#39;//HTML[0]/BODY[0]/DIV[76]/DIV[76]/DIV[76]/TABLE[8]/TBODY[8]/TR[27]/TH[25]&#39;],[&#39;B9&#39;,[&#39;//HTML[0]/BODY[0]/DIV[77]/DIV[77]/DIV[77]/DIV[77]&#39;,&#39;//HTML[0]/BODY[0]/DIV[77]/DIV[77]/DIV[77]/P[45]&#39;,&#39;//HTML[0]/BODY[0]/DIV[81]/DIV[81]/DIV[81]/DIV[81]/DIV[81]/DIV[81]&#39;,&#39;//HTML[0]/BODY[0]/DIV[81]/DIV[81]/DIV[81]/P[46]&#39;,&#39;//HTML[0]/BODY[0]/DIV[81]/DIV[81]/DIV[81]/P[47]&#39;,&#39;//HTML[0]/BODY[0]/DIV[81]/DIV[81]/DIV[81]/P[48]&#39;,&#39;//HTML[0]/BODY[0]/DIV[81]/DIV[81]/DIV[81]/P[49]&#39;,&#39;//HTML[0]/BODY[0]/DIV[82]/DIV[82]/DIV[82]/H2[2]&#39;,&#39;//HTML[0]/BODY[0]/DIV[87]/DIV[87]/DIV[87]/DIV[87]&#39;,&#39;//HTML[0]/BODY[0]/DIV[87]/DIV[87]/DIV[87]/P[50]&#39;,&#39;//HTML[0]/BODY[0]/DIV[87]/DIV[87]/DIV[87]/H3[6]&#39;,&#39;//HTML[0]/BODY[0]/DIV[88]/DIV[88]/DIV[88]/DIV[88]&#39;,&#39;//HTML[0]/BODY[0]/DIV[88]/DIV[88]/DIV[88]/P[51]&#39;,&#39;//HTML[0]/BODY[0]/DIV[88]/DIV[88]/DIV[88]/P[52]&#39;,&#39;//HTML[0]/BODY[0]/DIV[88]/DIV[88]/DIV[88]/P[53]&#39;,&#39;//HTML[0]/BODY[0]/DIV[88]/DIV[88]/DIV[88]/P[54]&#39;,&#39;//HTML[0]/BODY[0]/DIV[88]/DIV[88]/DIV[88]/P[55]&#39;,&#39;//HTML[0]/BODY[0]/DIV[88]/DIV[88]/DIV[88]/H3[7]&#39;,&#39;//HTML[0]/BODY[0]/DIV[89]/DIV[89]/DIV[89]/DIV[89]&#39;,&#39;//HTML[0]/BODY[0]/DIV[93]/DIV[93]/DIV[93]/DIV[93]/DIV[93]/DIV[93]&#39;,&#39;//HTML[0]/BODY[0]/DIV[93]/DIV[93]/DIV[93]/P[56]&#39;,&#39;//HTML[0]/BODY[0]/DIV[93]/DIV[93]/DIV[93]/P[57]&#39;,&#39;//HTML[0]/BODY[0]/DIV[93]/DIV[93]/DIV[93]/P[58]&#39;,&#39;//HTML[0]/BODY[0]/DIV[93]/DIV[93]/DIV[93]/P[59]&#39;,&#39;//HTML[0]/BODY[0]/DIV[93]/DIV[93]/DIV[93]/P[60]&#39;,&#39;//HTML[0]/BODY[0]/DIV[94]/DIV[94]/DIV[94]/DIV[94]&#39;,&#39;//HTML[0]/BODY[0]/DIV[94]/DIV[94]/DIV[94]/P[61]&#39;,&#39;//HTML[0]/BODY[0]/DIV[94]/DIV[94]/DIV[94]/P[62]&#39;,&#39;//HTML[0]/BODY[0]/DIV[94]/DIV[94]/DIV[94]/P[63]&#39;,&#39;//HTML[0]/BODY[0]/DIV[94]/DIV[94]/DIV[94]/P[64]&#39;,&#39;//HTML[0]/BODY[0]/DIV[95]/DIV[95]/DIV[95]/H3[9]&#39;],[&#39;B10&#39;,[&#39;//HTML[0]/BODY[0]/DIV[104]/DIV[104]/DIV[104]/DIV[104]/DIV[104]/DIV[104]&#39;,&#39;//HTML[0]/BODY[0]/DIV[104]/DIV[104]/DIV[104]/P[66]&#39;,&#39;//HTML[0]/BODY[0]/DIV[104]/DIV[104]/DIV[104]/P[67]&#39;,&#39;//HTML[0]/BODY[0]/DIV[104]/DIV[104]/DIV[104]/P[68]&#39;,&#39;//HTML[0]/BODY[0]/DIV[104]/DIV[104]/DIV[104]/P[69]&#39;,&#39;//HTML[0]/BODY[0]/DIV[104]/DIV[104]/DIV[104]/P[70]&#39;,&#39;//HTML[0]/BODY[0]/DIV[104]/DIV[104]/DIV[104]/H3[10]&#39;,&#39;//HTML[0]/BODY[0]/DIV[108]/DIV[108]/DIV[108]/DIV[108]/DIV[108]/DIV[108]&#39;,&#39;//HTML[0]/BODY[0]/DIV[109]/DIV[109]/DIV[109]/DIV[109]&#39;,&#39;//HTML[0]/BODY[0]/DIV[109]/DIV[109]/DIV[109]/P[71]&#39;,&#39;//HTML[0]/BODY[0]/DIV[109]/DIV[109]/DIV[109]/P[72]&#39;,&#39;//HTML[0]/BODY[0]/DIV[109]/DIV[109]/DIV[109]/P[73]&#39;,&#39;//HTML[0]/BODY[0]/DIV[109]/DIV[109]/DIV[109]/H3[11]&#39;,&#39;//HTML[0]/BODY[0]/DIV[110]/DIV[110]/DIV[110]/DIV[110]&#39;,&#39;//HTML[0]/BODY[0]/DIV[110]/DIV[110]/DIV[110]/P[74]&#39;,&#39;//HTML[0]/BODY[0]/DIV[110]/DIV[110]/DIV[110]/P[75]&#39;,&#39;//HTML[0]/BODY[0]/DIV[110]/DIV[110]/DIV[110]/P[76]&#39;,&#39;//HTML[0]/BODY[0]/DIV[110]/DIV[110]/DIV[110]/P[77]&#39;,&#39;//HTML[0]/BODY[0]/DIV[110]/DIV[110]/DIV[110]/H2[3]&#39;,&#39;//HTML[0]/BODY[0]/DIV[111]/DIV[111]/DIV[111]/DIV[111]&#39;,&#39;//HTML[0]/BODY[0]/DIV[111]/DIV[111]/DIV[111]/P[78]&#39;,&#39;//HTML[0]/BODY[0]/DIV[111]/DIV[111]/DIV[111]/H3[12]&#39;,&#39;//HTML[0]/BODY[0]/DIV[112]/DIV[112]/DIV[112]/DIV[112]&#39;,&#39;//HTML[0]/BODY[0]/DIV[112]/DIV[112]/DIV[112]/P[79]&#39;,&#39;//HTML[0]/BODY[0]/DIV[112]/DIV[112]/DIV[112]/P[80]&#39;,&#39;//HTML[0]/BODY[0]/DIV[112]/DIV[112]/DIV[112]/P[81]&#39;,&#39;//HTML[0]/BODY[0]/DIV[112]/DIV[112]/DIV[112]/P[82]&#39;,&#39;//HTML[0]/BODY[0]/DIV[112]/DIV[112]/DIV[112]/P[83]&#39;,&#39;//HTML[0]/BODY[0]/DIV[117]/DIV[117]/DIV[117]/DIV[117]/DIV[117]/DIV[117]/DIV[117]&#39;,&#39;//HTML[0]/BODY[0]/DIV[117]/DIV[117]/DIV[117]/H3[13]&#39;,&#39;//HTML[0]/BODY[0]/DIV[123]/DIV[123]/DIV[123]/DIV[123]&#39;,&#39;//HTML[0]/BODY[0]/DIV[123]/DIV[123]/DIV[123]/P[84]&#39;,&#39;//HTML[0]/BODY[0]/DIV[123]/DIV[123]/DIV[123]/P[85]&#39;,&#39;//HTML[0]/BODY[0]/DIV[123]/DIV[123]/DIV[123]/H3[14]&#39;,&#39;//HTML[0]/BODY[0]/DIV[127]/DIV[127]/DIV[127]/DIV[127]/DIV[127]/DIV[127]&#39;,&#39;//HTML[0]/BODY[0]/DIV[132]/DIV[132]/DIV[132]/DIV[132]/DIV[132]/DIV[132]/DIV[132]&#39;,&#39;//HTML[0]/BODY[0]/DIV[132]/DIV[132]/DIV[132]/DIV[132]/DIV[132]/DIV[132]/DIV[132]/UL[15]/LI[87]&#39;],[&#39;B11&#39;,[&#39;//HTML[0]/BODY[0]/DIV[133]/DIV[133]/DIV[133]/DIV[133]&#39;,&#39;//HTML[0]/BODY[0]/DIV[133]/DIV[133]/DIV[133]/P[86]&#39;,&#39;//HTML[0]/BODY[0]/DIV[133]/DIV[133]/DIV[133]/P[87]&#39;,&#39;//HTML[0]/BODY[0]/DIV[133]/DIV[133]/DIV[133]/P[88]&#39;,&#39;//HTML[0]/BODY[0]/DIV[133]/DIV[133]/DIV[133]/H3[15]&#39;,&#39;//HTML[0]/BODY[0]/DIV[134]/DIV[134]/DIV[134]/DIV[134]&#39;,&#39;//HTML[0]/BODY[0]/DIV[134]/DIV[134]/DIV[134]/P[89]&#39;,&#39;//HTML[0]/BODY[0]/DIV[134]/DIV[134]/DIV[134]/P[90]&#39;,&#39;//HTML[0]/BODY[0]/DIV[134]/DIV[134]/DIV[134]/H3[16]&#39;],[&#39;B12&#39;,[&#39;//HTML[0]/BODY[0]/DIV[134]/DIV[134]/DIV[134]/P[91]/TIME[4]&#39;,&#39;//HTML[0]/BODY[0]/DIV[134]/DIV[134]/DIV[134]/P[91]&#39;],[&#39;B13&#39;,[&#39;//HTML[0]/BODY[0]/DIV[150]/DIV[150]/DIV[150]/UL[16]/LI[97]/DIV[150]/DIV[150]/P[96]&#39;,&#39;//HTML[0]/BODY[0]/DIV[150]/DIV[150]/DIV[150]/H3[17]&#39;,&#39;//HTML[0]/BODY[0]/DIV[150]/DIV[150]/DIV[150]/P[97]&#39;,&#39;//HTML[0]/BODY[0]/DIV[150]/DIV[150]/DIV[150]/P[98]&#39;,&#39;//HTML[0]/BODY[0]/DIV[155]/DIV[155]/DIV[155]/DIV[155]/DIV[155]/DIV[155]/DIV[155]&#39;,&#39;//HTML[0]/BODY[0]/DIV[155]/DIV[155]/DIV[155]/H3[18]&#39;,&#39;//HTML[0]/BODY[0]/DIV[156]/DIV[156]/DIV[156]/DIV[156]&#39;,&#39;//HTML[0]/BODY[0]/DIV[159]/DIV[159]/DIV[159]/DIV[159]/TABLE[9]/TBODY[9]/TR[49]/TD[93]/DIV[159]&#39;,&#39;//HTML[0]/BODY[0]/DIV[160]/DIV[160]/DIV[160]/DIV[160]/TABLE[9]/TBODY[9]/TR[49]/TD[93]/DIV[160]&#39;,&#39;//HTML[0]/BODY[0]/DIV[160]/DIV[160]/DIV[160]/P[99]&#39;,&#39;//HTML[0]/BODY[0]/DIV[160]/DIV[160]/DIV[160]/P[100]&#39;,&#39;//HTML[0]/BODY[0]/DIV[160]/DIV[160]/DIV[160]/H3[19]&#39;,&#39;//HTML[0]/BODY[0]/DIV[165]/DIV[165]/DIV[165]/DIV[165]&#39;,&#39;//HTML[0]/BODY[0]/DIV[165]/DIV[165]/DIV[165]/P[101]&#39;,&#39;//HTML[0]/BODY[0]/DIV[165]/DIV[165]/DIV[165]/P[102]&#39;,&#39;//HTML[0]/BODY[0]/DIV[165]/DIV[165]/DIV[165]/P[103]&#39;,&#39;//HTML[0]/BODY[0]/DIV[165]/DIV[165]/DIV[165]/H3[20]&#39;],[&#39;B14&#39;,[&#39;//HTML[0]/BODY[0]/DIV[170]/DIV[170]/DIV[170]/P[104]&#39;,&#39;//HTML[0]/BODY[0]/DIV[170]/DIV[170]/DIV[170]/P[105]&#39;,&#39;//HTML[0]/BODY[0]/DIV[170]/DIV[170]/DIV[170]/P[106]&#39;,&#39;//HTML[0]/BODY[0]/DIV[170]/DIV[170]/DIV[170]/H3[21]&#39;,&#39;//HTML[0]/BODY[0]/DIV[171]/DIV[171]/DIV[171]/DIV[171]&#39;,&#39;//HTML[0]/BODY[0]/DIV[171]/DIV[171]/DIV[171]/P[107]&#39;,&#39;//HTML[0]/BODY[0]/DIV[171]/DIV[171]/DIV[171]/P[108]&#39;,&#39;//HTML[0]/BODY[0]/DIV[171]/DIV[171]/DIV[171]/P[109]&#39;,&#39;//HTML[0]/BODY[0]/DIV[171]/DIV[171]/DIV[171]/H3[22]&#39;,&#39;//HTML[0]/BODY[0]/DIV[176]/DIV[176]/DIV[176]/DIV[176]&#39;,&#39;//HTML[0]/BODY[0]/DIV[176]/DIV[176]/DIV[176]/P[110]&#39;,&#39;//HTML[0]/BODY[0]/DIV[176]/DIV[176]/DIV[176]/P[111]&#39;,&#39;//HTML[0]/BODY[0]/DIV[176]/DIV[176]/DIV[176]/P[112]&#39;,&#39;//HTML[0]/BODY[0]/DIV[176]/DIV[176]/DIV[176]/H2[4]&#39;,&#39;//HTML[0]/BODY[0]/DIV[176]/DIV[176]/DIV[176]/H3[23]&#39;,&#39;//HTML[0]/BODY[0]/DIV[180]/DIV[180]/DIV[180]/DIV[180]/DIV[180]/DIV[180]&#39;,&#39;//HTML[0]/BODY[0]/DIV[181]/DIV[181]/DIV[181]/DIV[181]&#39;,&#39;//HTML[0]/BODY[0]/DIV[181]/DIV[181]/DIV[181]/P[113]&#39;,&#39;//HTML[0]/BODY[0]/DIV[181]/DIV[181]/DIV[181]/P[114]&#39;,&#39;//HTML[0]/BODY[0]/DIV[181]/DIV[181]/DIV[181]/P[115]&#39;,&#39;//HTML[0]/BODY[0]/DIV[181]/DIV[181]/DIV[181]/P[116]&#39;,&#39;//HTML[0]/BODY[0]/DIV[181]/DIV[181]/DIV[181]/H3[24]&#39;,&#39;//HTML[0]/BODY[0]/DIV[182]/DIV[182]/DIV[182]/DIV[182]&#39;,&#39;//HTML[0]/BODY[0]/DIV[182]/DIV[182]/DIV[182]/P[117]&#39;,&#39;//HTML[0]/BODY[0]/DIV[182]/DIV[182]/DIV[182]/P[118]&#39;,&#39;//HTML[0]/BODY[0]/DIV[182]/DIV[182]/DIV[182]/P[119]&#39;,&#39;//HTML[0]/BODY[0]/DIV[182]/DIV[182]/DIV[182]/P[120]&#39;,&#39;//HTML[0]/BODY[0]/DIV[182]/DIV[182]/DIV[182]/P[121]&#39;,&#39;//HTML[0]/BODY[0]/DIV[182]/DIV[182]/DIV[182]/H3[25]&#39;,&#39;//HTML[0]/BODY[0]/DIV[182]/DIV[182]/DIV[182]/P[122]&#39;,&#39;//HTML[0]/BODY[0]/DIV[182]/DIV[182]/DIV[182]/P[123]&#39;,&#39;//HTML[0]/BODY[0]/DIV[182]/DIV[182]/DIV[182]/P[124]&#39;,&#39;//HTML[0]/BODY[0]/DIV[182]/DIV[182]/DIV[182]/P[125]&#39;,&#39;//HTML[0]/BODY[0]/DIV[182]/DIV[182]/DIV[182]/H3[26]&#39;,&#39;//HTML[0]/BODY[0]/DIV[183]/DIV[183]/DIV[183]/DIV[183]&#39;,&#39;//HTML[0]/BODY[0]/DIV[183]/DIV[183]/DIV[183]/P[126]&#39;,&#39;//HTML[0]/BODY[0]/DIV[183]/DIV[183]/DIV[183]/P[127]&#39;,&#39;//HTML[0]/BODY[0]/DIV[183]/DIV[183]/DIV[183]/P[128]&#39;,&#39;//HTML[0]/BODY[0]/DIV[183]/DIV[183]/DIV[183]/H3[27]&#39;,&#39;//HTML[0]/BODY[0]/DIV[184]/DIV[184]/DIV[184]/P[129]&#39;,&#39;//HTML[0]/BODY[0]/DIV[184]/DIV[184]/DIV[184]/P[130]&#39;,&#39;//HTML[0]/BODY[0]/DIV[184]/DIV[184]/DIV[184]/P[131]&#39;,&#39;//HTML[0]/BODY[0]/DIV[184]/DIV[184]/DIV[184]/P[132]&#39;,&#39;//HTML[0]/BODY[0]/DIV[184]/DIV[184]/DIV[184]/P[133]&#39;,&#39;//HTML[0]/BODY[0]/DIV[184]/DIV[184]/DIV[184]/H3[28]&#39;,&#39;//HTML[0]/BODY[0]/DIV[189]/DIV[189]/DIV[189]/DIV[189]/DIV[189]/DIV[189]&#39;,&#39;//HTML[0]/BODY[0]/DIV[193]/DIV[193]/DIV[193]/DIV[193]/DIV[193]/DIV[193]&#39;,&#39;//HTML[0]/BODY[0]/DIV[193]/DIV[193]/DIV[193]/P[134]&#39;,&#39;//HTML[0]/BODY[0]/DIV[193]/DIV[193]/DIV[193]/P[135]&#39;,&#39;//HTML[0]/BODY[0]/DIV[193]/DIV[193]/DIV[193]/P[136]&#39;,&#39;//HTML[0]/BODY[0]/DIV[193]/DIV[193]/DIV[193]/P[137]&#39;,&#39;//HTML[0]/BODY[0]/DIV[193]/DIV[193]/DIV[193]/P[138]&#39;,&#39;//HTML[0]/BODY[0]/DIV[193]/DIV[193]/DIV[193]/P[139]&#39;,&#39;//HTML[0]/BODY[0]/DIV[193]/DIV[193]/DIV[193]/P[140]&#39;,&#39;//HTML[0]/BODY[0]/DIV[194]/DIV[194]/DIV[194]/H3[29]&#39;,&#39;//HTML[0]/BODY[0]/DIV[195]/DIV[195]/DIV[195]/DIV[195]&#39;,&#39;//HTML[0]/BODY[0]/DIV[195]/DIV[195]/DIV[195]/P[141]&#39;,&#39;//HTML[0]/BODY[0]/DIV[195]/DIV[195]/DIV[195]/P[142]&#39;,&#39;//HTML[0]/BODY[0]/DIV[195]/DIV[195]/DIV[195]/P[143]&#39;,&#39;//HTML[0]/BODY[0]/DIV[195]/DIV[195]/DIV[195]/H3[30]&#39;],[&#39;B15&#39;,[&#39;//HTML[0]/BODY[0]/DIV[200]/DIV[200]/DIV[200]/P[144]&#39;,&#39;//HTML[0]/BODY[0]/DIV[200]/DIV[200]/DIV[200]/P[145]&#39;,&#39;//HTML[0]/BODY[0]/DIV[200]/DIV[200]/DIV[200]/P[146]&#39;,&#39;//HTML[0]/BODY[0]/DIV[200]/DIV[200]/DIV[200]/P[147]&#39;,&#39;//HTML[0]/BODY[0]/DIV[200]/DIV[200]/DIV[200]/P[148]&#39;,&#39;//HTML[0]/BODY[0]/DIV[200]/DIV[200]/DIV[200]/H3[31]&#39;,&#39;//HTML[0]/BODY[0]/DIV[204]/DIV[204]/DIV[204]/DIV[204]/DIV[204]/DIV[204]&#39;,&#39;//HTML[0]/BODY[0]/DIV[205]/DIV[205]/DIV[205]/DIV[205]&#39;,&#39;//HTML[0]/BODY[0]/DIV[205]/DIV[205]/DIV[205]/P[149]&#39;,&#39;//HTML[0]/BODY[0]/DIV[205]/DIV[205]/DIV[205]/P[150]&#39;,&#39;//HTML[0]/BODY[0]/DIV[205]/DIV[205]/DIV[205]/P[151]&#39;,&#39;//HTML[0]/BODY[0]/DIV[205]/DIV[205]/DIV[205]/P[152]&#39;,&#39;//HTML[0]/BODY[0]/DIV[205]/DIV[205]/DIV[205]/H3[32]&#39;,&#39;//HTML[0]/BODY[0]/DIV[209]/DIV[209]/DIV[209]/DIV[209]/DIV[209]/DIV[209]&#39;,&#39;//HTML[0]/BODY[0]/DIV[210]/DIV[210]/DIV[210]/DIV[210]&#39;,&#39;//HTML[0]/BODY[0]/DIV[210]/DIV[210]/DIV[210]/P[153]&#39;,&#39;//HTML[0]/BODY[0]/DIV[210]/DIV[210]/DIV[210]/P[154]&#39;,&#39;//HTML[0]/BODY[0]/DIV[210]/DIV[210]/DIV[210]/H2[5]&#39;,&#39;//HTML[0]/BODY[0]/DIV[211]/DIV[211]/DIV[211]/DIV[211]&#39;,&#39;//HTML[0]/BODY[0]/DIV[211]/DIV[211]/DIV[211]/P[155]&#39;,&#39;//HTML[0]/BODY[0]/DIV[211]/DIV[211]/DIV[211]/P[156]&#39;,&#39;//HTML[0]/BODY[0]/DIV[211]/DIV[211]/DIV[211]/H3[33]&#39;,&#39;//HTML[0]/BODY[0]/DIV[212]/DIV[212]/DIV[212]/DIV[212]&#39;,&#39;//HTML[0]/BODY[0]/DIV[212]/DIV[212]/DIV[212]/P[157]&#39;,&#39;//HTML[0]/BODY[0]/DIV[212]/DIV[212]/DIV[212]/P[158]&#39;,&#39;//HTML[0]/BODY[0]/DIV[212]/DIV[212]/DIV[212]/P[159]&#39;,&#39;//HTML[0]/BODY[0]/DIV[212]/DIV[212]/DIV[212]/H3[34]&#39;,&#39;//HTML[0]/BODY[0]/DIV[216]/DIV[216]/DIV[216]/DIV[216]/DIV[216]/DIV[216]&#39;,&#39;//HTML[0]/BODY[0]/DIV[217]/DIV[217]/DIV[217]/DIV[217]&#39;,&#39;//HTML[0]/BODY[0]/DIV[217]/DIV[217]/DIV[217]/P[160]&#39;,&#39;//HTML[0]/BODY[0]/DIV[217]/DIV[217]/DIV[217]/P[161]&#39;,&#39;//HTML[0]/BODY[0]/DIV[218]/DIV[218]/DIV[218]/H3[35]&#39;,&#39;//HTML[0]/BODY[0]/DIV[219]/DIV[219]/DIV[219]/DIV[219]&#39;,&#39;//HTML[0]/BODY[0]/DIV[223]/DIV[223]/DIV[223]/DIV[223]/DIV[223]/DIV[223]&#39;,&#39;//HTML[0]/BODY[0]/DIV[223]/DIV[223]/DIV[223]/P[162]&#39;,&#39;//HTML[0]/BODY[0]/DIV[223]/DIV[223]/DIV[223]/H4[0]&#39;,&#39;//HTML[0]/BODY[0]/DIV[223]/DIV[223]/DIV[223]/P[163]&#39;,&#39;//HTML[0]/BODY[0]/DIV[223]/DIV[223]/DIV[223]/P[164]&#39;,&#39;//HTML[0]/BODY[0]/DIV[223]/DIV[223]/DIV[223]/H4[1]&#39;,&#39;//HTML[0]/BODY[0]/DIV[223]/DIV[223]/DIV[223]/P[165]&#39;,&#39;//HTML[0]/BODY[0]/DIV[223]/DIV[223]/DIV[223]/P[166]&#39;,&#39;//HTML[0]/BODY[0]/DIV[223]/DIV[223]/DIV[223]/P[167]&#39;,&#39;//HTML[0]/BODY[0]/DIV[223]/DIV[223]/DIV[223]/P[168]&#39;,&#39;//HTML[0]/BODY[0]/DIV[223]/DIV[223]/DIV[223]/H4[2]&#39;,&#39;//HTML[0]/BODY[0]/DIV[228]/DIV[228]/DIV[228]/DIV[228]/DIV[228]/DIV[228]&#39;,&#39;//HTML[0]/BODY[0]/DIV[228]/DIV[228]/DIV[228]/P[169]&#39;,&#39;//HTML[0]/BODY[0]/DIV[228]/DIV[228]/DIV[228]/H4[3]&#39;,&#39;//HTML[0]/BODY[0]/DIV[228]/DIV[228]/DIV[228]/P[170]&#39;,&#39;//HTML[0]/BODY[0]/DIV[228]/DIV[228]/DIV[228]/P[171]&#39;,&#39;//HTML[0]/BODY[0]/DIV[228]/DIV[228]/DIV[228]/H4[4]&#39;,&#39;//HTML[0]/BODY[0]/DIV[229]/DIV[229]/DIV[229]/DIV[229]&#39;,&#39;//HTML[0]/BODY[0]/DIV[233]/DIV[233]/DIV[233]/DIV[233]/DIV[233]/DIV[233]&#39;,&#39;//HTML[0]/BODY[0]/DIV[233]/DIV[233]/DIV[233]/P[172]&#39;,&#39;//HTML[0]/BODY[0]/DIV[233]/DIV[233]/DIV[233]/H4[5]&#39;,&#39;//HTML[0]/BODY[0]/DIV[234]/DIV[234]/DIV[234]/DIV[234]&#39;,&#39;//HTML[0]/BODY[0]/DIV[234]/DIV[234]/DIV[234]/P[173]&#39;,&#39;//HTML[0]/BODY[0]/DIV[234]/DIV[234]/DIV[234]/P[174]&#39;,&#39;//HTML[0]/BODY[0]/DIV[234]/DIV[234]/DIV[234]/H4[6]&#39;,&#39;//HTML[0]/BODY[0]/DIV[234]/DIV[234]/DIV[234]/P[175]&#39;,&#39;//HTML[0]/BODY[0]/DIV[234]/DIV[234]/DIV[234]/P[176]&#39;,&#39;//HTML[0]/BODY[0]/DIV[234]/DIV[234]/DIV[234]/H3[36]&#39;,&#39;//HTML[0]/BODY[0]/DIV[234]/DIV[234]/DIV[234]/P[177]&#39;,&#39;//HTML[0]/BODY[0]/DIV[234]/DIV[234]/DIV[234]/P[178]&#39;,&#39;//HTML[0]/BODY[0]/DIV[234]/DIV[234]/DIV[234]/P[179]&#39;,&#39;//HTML[0]/BODY[0]/DIV[234]/DIV[234]/DIV[234]/P[180]/TIME[5]/A[1993]&#39;,&#39;//HTML[0]/BODY[0]/DIV[234]/DIV[234]/DIV[234]/P[180]/TIME[5]&#39;,&#39;//HTML[0]/BODY[0]/DIV[234]/DIV[234]/DIV[234]/P[180]&#39;,&#39;//HTML[0]/BODY[0]/DIV[234]/DIV[234]/DIV[234]/H2[6]&#39;,&#39;//HTML[0]/BODY[0]/DIV[238]/DIV[238]/DIV[238]/DIV[238]/DIV[238]/DIV[238]&#39;,&#39;//HTML[0]/BODY[0]/DIV[238]/DIV[238]/DIV[238]/H3[37]&#39;,&#39;//HTML[0]/BODY[0]/DIV[239]/DIV[239]/DIV[239]/P[181]&#39;,&#39;//HTML[0]/BODY[0]/DIV[239]/DIV[239]/DIV[239]/H4[7]&#39;,&#39;//HTML[0]/BODY[0]/DIV[239]/DIV[239]/DIV[239]/P[182]&#39;,&#39;//HTML[0]/BODY[0]/DIV[239]/DIV[239]/DIV[239]/H4[8]&#39;,&#39;//HTML[0]/BODY[0]/DIV[239]/DIV[239]/DIV[239]/P[183]&#39;,&#39;//HTML[0]/BODY[0]/DIV[239]/DIV[239]/DIV[239]/H3[38]&#39;,&#39;//HTML[0]/BODY[0]/DIV[240]/DIV[240]/DIV[240]/DIV[240]&#39;,&#39;//HTML[0]/BODY[0]/DIV[240]/DIV[240]/DIV[240]/P[184]&#39;],[&#39;B16&#39;,[&#39;//HTML[0]/BODY[0]/DIV[256]/DIV[256]/DIV[256]/UL[17]/LI[101]/DIV[256]/DIV[256]/P[188]&#39;,&#39;//HTML[0]/BODY[0]/DIV[256]/DIV[256]/DIV[256]/P[189]&#39;,&#39;//HTML[0]/BODY[0]/DIV[256]/DIV[256]/DIV[256]/P[190]&#39;,&#39;//HTML[0]/BODY[0]/DIV[260]/DIV[260]/DIV[260]/DIV[260]/DIV[260]/DIV[260]&#39;,&#39;//HTML[0]/BODY[0]/DIV[260]/DIV[260]/DIV[260]/P[191]&#39;,&#39;//HTML[0]/BODY[0]/DIV[260]/DIV[260]/DIV[260]/P[192]&#39;,&#39;//HTML[0]/BODY[0]/DIV[260]/DIV[260]/DIV[260]/H3[39]&#39;,&#39;//HTML[0]/BODY[0]/DIV[260]/DIV[260]/DIV[260]/P[193]&#39;,&#39;//HTML[0]/BODY[0]/DIV[260]/DIV[260]/DIV[260]/P[194]&#39;,&#39;//HTML[0]/BODY[0]/DIV[260]/DIV[260]/DIV[260]/H3[40]&#39;,&#39;//HTML[0]/BODY[0]/DIV[265]/DIV[265]/DIV[265]/DIV[265]&#39;,&#39;//HTML[0]/BODY[0]/DIV[265]/DIV[265]/DIV[265]/P[195]&#39;,&#39;//HTML[0]/BODY[0]/DIV[265]/DIV[265]/DIV[265]/P[196]&#39;,&#39;//HTML[0]/BODY[0]/DIV[265]/DIV[265]/DIV[265]/H3[41]&#39;],[&#39;B17&#39;,[&#39;//HTML[0]/BODY[0]/DIV[270]/DIV[270]/DIV[270]/DIV[270]&#39;,&#39;//HTML[0]/BODY[0]/DIV[270]/DIV[270]/DIV[270]/P[197]&#39;,&#39;//HTML[0]/BODY[0]/DIV[270]/DIV[270]/DIV[270]/P[198]&#39;,&#39;//HTML[0]/BODY[0]/DIV[270]/DIV[270]/DIV[270]/P[199]&#39;,&#39;//HTML[0]/BODY[0]/DIV[271]/DIV[271]/DIV[271]/H2[7]&#39;],[&#39;B18&#39;,[&#39;//HTML[0]/BODY[0]/DIV[271]/DIV[271]/DIV[271]/UL[19]/LI[108]&#39;,&#39;//HTML[0]/BODY[0]/DIV[271]/DIV[271]/DIV[271]/UL[19]/LI[109]&#39;],[&#39;B19&#39;,[&#39;//HTML[0]/BODY[0]/DIV[271]/DIV[271]/DIV[271]/H2[8]&#39;,&#39;//HTML[0]/BODY[0]/DIV[271]/DIV[271]/DIV[271]/H3[42]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[114]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[115]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[116]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[117]/SPAN[1718]/BR[17]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[117]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[118]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[119]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[120]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[121]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[122]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[123]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[124]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[125]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[126]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[127]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[128]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[129]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[130]/SPAN[1754]/SPAN[1754]/CITE[0]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[130]/SPAN[1754]/SPAN[1754]/CITE[0]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[130]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[131]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[132]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[133]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[134]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[135]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[136]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[137]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[138]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[139]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[140]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[141]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[142]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[143]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[144]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[145]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[146]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[147]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[148]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[149]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[150]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[151]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[152]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[153]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[155]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[156]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[157]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[158]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/DIV[273]/OL[0]/LI[159]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/H3[43]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/UL[20]/LI[160]/SPAN[1820]/CITE[1]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/UL[20]/LI[160]/SPAN[1820]/CITE[1]&#39;,&#39;//HTML[0]/BODY[0]/DIV[273]/DIV[273]/DIV[273]/UL[20]/LI[160]/SPAN[1820]/SMALL[11]&#39;,&#39;//HTML[0]/BODY[0]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/OL[1]/LI[161]&#39;,&#39;//HTML[0]/BODY[0]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/OL[1]/LI[162]&#39;],[&#39;B20&#39;,[&#39;//HTML[0]/BODY[0]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/OL[1]/LI[168]&#39;,&#39;//HTML[0]/BODY[0]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/OL[1]/LI[169]&#39;,&#39;//HTML[0]/BODY[0]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/OL[1]/LI[170]&#39;,&#39;//HTML[0]/BODY[0]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/OL[1]/LI[171]&#39;,&#39;//HTML[0]/BODY[0]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/OL[1]/LI[172]&#39;,&#39;//HTML[0]/BODY[0]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/OL[1]/LI[173]&#39;],[&#39;B21&#39;,[&#39;//HTML[0]/BODY[0]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/OL[1]/LI[176]&#39;,&#39;//HTML[0]/BODY[0]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/OL[1]/LI[177]&#39;,&#39;//HTML[0]/BODY[0]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/OL[1]/LI[178]&#39;,&#39;//HTML[0]/BODY[0]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/OL[1]/LI[179]&#39;],[&#39;B22&#39;,[&#39;//HTML[0]/BODY[0]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/OL[1]/LI[183]&#39;,&#39;//HTML[0]/BODY[0]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/DIV[275]/OL[1]/LI[184]&#39;,&#39;//HTML[0]/BODY[0]/DIV[275]/DIV[275]/DIV[275]/UL[21]/LI[186]/SPAN[1898]/CITE[2]&#39;,&#39;//HTML[0]/BODY[0]/DIV[275]/DIV[275]/DIV[275]/UL[21]/LI[186]/SPAN[1898]/CITE[2]&#39;],[&#39;B23&#39;,[&#39;//HTML[0]/BODY[0]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/OL[2]/LI[188]&#39;,&#39;//HTML[0]/BODY[0]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/OL[2]/LI[189]&#39;],[&#39;B24&#39;,[&#39;//HTML[0]/BODY[0]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/OL[2]/LI[193]&#39;,&#39;//HTML[0]/BODY[0]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/OL[2]/LI[194]&#39;,&#39;//HTML[0]/BODY[0]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/OL[2]/LI[195]&#39;,&#39;//HTML[0]/BODY[0]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/OL[2]/LI[196]&#39;,&#39;//HTML[0]/BODY[0]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/OL[2]/LI[198]&#39;,&#39;//HTML[0]/BODY[0]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/OL[2]/LI[199]&#39;],[&#39;B25&#39;,[&#39;//HTML[0]/BODY[0]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/OL[2]/LI[203]&#39;,&#39;//HTML[0]/BODY[0]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/OL[2]/LI[204]&#39;],[&#39;B26&#39;,[&#39;//HTML[0]/BODY[0]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/OL[2]/LI[209]&#39;,&#39;//HTML[0]/BODY[0]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/OL[2]/LI[210]&#39;],[&#39;B27&#39;,[&#39;//HTML[0]/BODY[0]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/OL[2]/LI[213]&#39;,&#39;//HTML[0]/BODY[0]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/OL[2]/LI[214]&#39;],[&#39;B28&#39;,[&#39;//HTML[0]/BODY[0]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/OL[2]/LI[220]&#39;,&#39;//HTML[0]/BODY[0]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/DIV[277]/OL[2]/LI[221]&#39;,&#39;//HTML[0]/BODY[0]/DIV[277]/DIV[277]/DIV[277]/UL[22]/LI[222]/SPAN[2006]/CITE[3]&#39;,&#39;//HTML[0]/BODY[0]/DIV[277]/DIV[277]/DIV[277]/UL[22]/LI[222]/SPAN[2006]/CITE[3]&#39;],[&#39;B29&#39;,[&#39;//HTML[0]/BODY[0]/DIV[281]/DIV[281]/DIV[281]/DIV[281]/DIV[281]/OL[4]/LI[233]&#39;,&#39;//HTML[0]/BODY[0]/DIV[281]/DIV[281]/DIV[281]/DIV[281]/DIV[281]/OL[4]/LI[234]&#39;,&#39;//HTML[0]/BODY[0]/DIV[281]/DIV[281]/DIV[281]/UL[24]/LI[235]/SPAN[2045]/CITE[5]&#39;,&#39;//HTML[0]/BODY[0]/DIV[281]/DIV[281]/DIV[281]/UL[24]/LI[235]/SPAN[2045]/CITE[5]&#39;],[&#39;B30&#39;,[&#39;//HTML[0]/BODY[0]/DIV[283]/DIV[283]/DIV[283]/DIV[283]/DIV[283]/OL[5]/LI[319]&#39;,&#39;//HTML[0]/BODY[0]/DIV[283]/DIV[283]/DIV[283]/DIV[283]/DIV[283]/OL[5]/LI[320]&#39;],[&#39;B31&#39;,[&#39;//HTML[0]/BODY[0]/DIV[283]/DIV[283]/DIV[283]/UL[25]/LI[333]/SPAN[2339]/CITE[6]&#39;,&#39;//HTML[0]/BODY[0]/DIV[283]/DIV[283]/DIV[283]/UL[25]/LI[333]/SPAN[2339]/SMALL[16]&#39;],[&#39;B32&#39;,[&#39;//HTML[0]/BODY[0]/DIV[285]/DIV[285]/DIV[285]/UL[26]/LI[338]/SPAN[2354]/CITE[7]&#39;,&#39;//HTML[0]/BODY[0]/DIV[285]/DIV[285]/DIV[285]/UL[26]/LI[338]/SPAN[2354]/CITE[7]&#39;],[&#39;B33&#39;,[&#39;//HTML[0]/BODY[0]/DIV[287]/DIV[287]/DIV[287]/UL[27]/LI[344]/SPAN[2373]/CITE[8]&#39;,&#39;//HTML[0]/BODY[0]/DIV[287]/DIV[287]/DIV[287]/UL[27]/LI[344]/SPAN[2373]/SMALL[18]&#39;],[&#39;B34&#39;,[&#39;//HTML[0]/BODY[0]/DIV[289]/DIV[289]/DIV[289]/DIV[289]/DIV[289]/OL[8]/LI[346]&#39;,&#39;//HTML[0]/BODY[0]/DIV[289]/DIV[289]/DIV[289]/DIV[289]/DIV[289]/OL[8]/LI[347]&#39;,&#39;//HTML[0]/BODY[0]/DIV[289]/DIV[289]/DIV[289]/UL[28]/LI[349]/SPAN[2388]/CITE[9]&#39;,&#39;//HTML[0]/BODY[0]/DIV[289]/DIV[289]/DIV[289]/UL[28]/LI[349]/SPAN[2388]/CITE[9]&#39;],[&#39;B35&#39;,[&#39;//HTML[0]/BODY[0]/DIV[291]/DIV[291]/DIV[291]/DIV[291]/DIV[291]/OL[9]/LI[355]&#39;,&#39;//HTML[0]/BODY[0]/DIV[291]/DIV[291]/DIV[291]/DIV[291]/DIV[291]/OL[9]/LI[356]&#39;],[&#39;B36&#39;,[&#39;//HTML[0]/BODY[0]/DIV[291]/DIV[291]/DIV[291]/DIV[291]/DIV[291]/OL[9]/LI[364]/SPAN[2436]/SPAN[2436]/CITE[10]&#39;,&#39;//HTML[0]/BODY[0]/DIV[291]/DIV[291]/DIV[291]/DIV[291]/DIV[291]/OL[9]/LI[364]&#39;,&#39;//HTML[0]/BODY[0]/DIV[291]/DIV[291]/DIV[291]/DIV[291]/DIV[291]/OL[9]/LI[365]&#39;,&#39;//HTML[0]/BODY[0]/DIV[291]/DIV[291]/DIV[291]/DIV[291]/DIV[291]/OL[9]/LI[366]&#39;,&#39;//HTML[0]/BODY[0]/DIV[291]/DIV[291]/DIV[291]/DIV[291]/DIV[291]/OL[9]/LI[368]&#39;,&#39;//HTML[0]/BODY[0]/DIV[291]/DIV[291]/DIV[291]/DIV[291]/DIV[291]/OL[9]/LI[369]&#39;],[&#39;B37&#39;,[&#39;//HTML[0]/BODY[0]/DIV[291]/DIV[291]/DIV[291]/DIV[291]/DIV[291]/OL[9]/LI[373]&#39;,&#39;//HTML[0]/BODY[0]/DIV[291]/DIV[291]/DIV[291]/DIV[291]/DIV[291]/OL[9]/LI[374]/SPAN[2468]/SPAN[2468]/CITE[11]&#39;,&#39;//HTML[0]/BODY[0]/DIV[291]/DIV[291]/DIV[291]/DIV[291]/DIV[291]/OL[9]/LI[374]/SPAN[2468]/SPAN[2468]/CITE[11]&#39;],[&#39;B38&#39;,[&#39;//HTML[0]/BODY[0]/DIV[293]/DIV[293]/DIV[293]/DIV[293]/DIV[293]/OL[10]/LI[390]&#39;,&#39;//HTML[0]/BODY[0]/DIV[293]/DIV[293]/DIV[293]/DIV[293]/DIV[293]/OL[10]/LI[391]&#39;,&#39;//HTML[0]/BODY[0]/DIV[293]/DIV[293]/DIV[293]/UL[30]/LI[392]/SPAN[2522]/CITE[13]&#39;,&#39;//HTML[0]/BODY[0]/DIV[293]/DIV[293]/DIV[293]/UL[30]/LI[392]/SPAN[2522]/CITE[13]&#39;],[&#39;B39&#39;,[&#39;//HTML[0]/BODY[0]/DIV[295]/DIV[295]/DIV[295]/DIV[295]/DIV[295]/OL[11]/LI[394]&#39;,&#39;//HTML[0]/BODY[0]/DIV[295]/DIV[295]/DIV[295]/DIV[295]/DIV[295]/OL[11]/LI[395]&#39;,&#39;//HTML[0]/BODY[0]/DIV[295]/DIV[295]/DIV[295]/DIV[295]/DIV[295]/OL[11]/LI[396]&#39;,&#39;//HTML[0]/BODY[0]/DIV[295]/DIV[295]/DIV[295]/DIV[295]/DIV[295]/OL[11]/LI[397]&#39;],[&#39;B40&#39;,[&#39;//HTML[0]/BODY[0]/DIV[295]/DIV[295]/DIV[295]/DIV[295]/DIV[295]/OL[11]/LI[404]&#39;,&#39;//HTML[0]/BODY[0]/DIV[295]/DIV[295]/DIV[295]/DIV[295]/DIV[295]/OL[11]/LI[405]&#39;,&#39;//HTML[0]/BODY[0]/DIV[295]/DIV[295]/DIV[295]/DIV[295]/DIV[295]/OL[11]/LI[407]&#39;,&#39;//HTML[0]/BODY[0]/DIV[295]/DIV[295]/DIV[295]/DIV[295]/DIV[295]/OL[11]/LI[408]&#39;,&#39;//HTML[0]/BODY[0]/DIV[295]/DIV[295]/DIV[295]/DIV[295]/DIV[295]/OL[11]/LI[409]&#39;,&#39;//HTML[0]/BODY[0]/DIV[295]/DIV[295]/DIV[295]/DIV[295]/DIV[295]/OL[11]/LI[410]&#39;],[&#39;B41&#39;,[&#39;//HTML[0]/BODY[0]/DIV[297]/DIV[297]/DIV[297]/DIV[297]/DIV[297]/OL[12]/LI[421]&#39;,&#39;//HTML[0]/BODY[0]/DIV[297]/DIV[297]/DIV[297]/UL[32]/LI[422]/SPAN[2612]/CITE[15]&#39;],[&#39;B42&#39;,[&#39;//HTML[0]/BODY[0]/DIV[299]/DIV[299]/DIV[299]/DIV[299]/DIV[299]/OL[13]/LI[424]&#39;,&#39;//HTML[0]/BODY[0]/DIV[299]/DIV[299]/DIV[299]/DIV[299]/DIV[299]/OL[13]/LI[425]&#39;,&#39;//HTML[0]/BODY[0]/DIV[299]/DIV[299]/DIV[299]/DIV[299]/DIV[299]/OL[13]/LI[426]&#39;,&#39;//HTML[0]/BODY[0]/DIV[299]/DIV[299]/DIV[299]/DIV[299]/DIV[299]/OL[13]/LI[427]&#39;],[&#39;B43&#39;,[&#39;//HTML[0]/BODY[0]/DIV[301]/DIV[301]/DIV[301]/DIV[301]/DIV[301]/OL[14]/LI[433]&#39;,&#39;//HTML[0]/BODY[0]/DIV[301]/DIV[301]/DIV[301]/DIV[301]/DIV[301]/OL[14]/LI[434]&#39;,&#39;//HTML[0]/BODY[0]/DIV[301]/DIV[301]/DIV[301]/DIV[301]/DIV[301]/OL[14]/LI[435]&#39;],[&#39;B44&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[456]/SPAN[2692]/SPAN[2692]/SMALL[25]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[456]/SPAN[2693]/SPAN[2693]/SMALL[25]&#39;],[&#39;B45&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[462]/SPAN[2707]/SPAN[2707]/SMALL[26]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[462]/SPAN[2708]/SPAN[2708]/SMALL[26]&#39;],[&#39;B46&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[467]/SPAN[2730]/SPAN[2730]/SMALL[29]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[468]/SPAN[2734]/CITE[19]/SPAN[2734]/A[2916]/SPAN[2734]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[469]/SPAN[2740]/SPAN[2740]/CITE[20]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[469]/SPAN[2740]/SPAN[2740]/CITE[20]&#39;],[&#39;B47&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[471]/SPAN[2750]/SPAN[2750]/SMALL[31]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[472]/SPAN[2753]/SPAN[2753]/A[2933]/CITE[21]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[472]/SPAN[2754]/SPAN[2754]/SMALL[32]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[472]/SPAN[2755]/SPAN[2755]/SMALL[32]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[473]/SPAN[2759]/SPAN[2759]/A[2935]/CITE[22]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[473]/SPAN[2759]/SPAN[2759]/SMALL[33]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[473]/SPAN[2760]/SPAN[2760]/SMALL[33]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[474]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[475]/SPAN[2765]/SPAN[2765]/CITE[23]&#39;],[&#39;B48&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[477]/SPAN[2775]/SPAN[2775]/SMALL[36]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[478]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[479]/SPAN[2781]/SPAN[2781]/A[2949]/CITE[24]&#39;],[&#39;B49&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[481]/SPAN[2794]/SPAN[2794]/SMALL[38]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[481]/SPAN[2795]/SPAN[2795]/SMALL[38]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[482]/SPAN[2798]/SPAN[2798]/CITE[26]&#39;],[&#39;B50&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[484]/SPAN[2807]/SPAN[2807]/SMALL[41]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[485]/SPAN[2811]/SPAN[2811]/A[2970]/CITE[29]&#39;],[&#39;B51&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[487]/SPAN[2825]/SPAN[2825]/SMALL[43]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[488]/SPAN[2828]/SPAN[2828]/CITE[31]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[488]/SPAN[2828]/SPAN[2828]/CITE[31]&#39;],[&#39;B52&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[489]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[490]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[491]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[492]/SPAN[2842]/SPAN[2842]/CITE[32]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[492]/SPAN[2842]/SPAN[2842]/CITE[32]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[492]/SPAN[2842]/SPAN[2842]/SMALL[45]&#39;],[&#39;B53&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[493]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[494]/SPAN[2850]/SPAN[2850]/CITE[33]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[494]/SPAN[2850]/SPAN[2850]/CITE[33]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[494]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[495]/SPAN[2854]/SPAN[2854]/CITE[34]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[495]&#39;],[&#39;B54&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[498]/SPAN[2868]/SPAN[2868]/SMALL[48]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[498]/SPAN[2869]/SPAN[2869]/SMALL[48]&#39;],[&#39;B55&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[501]/SPAN[2881]/SPAN[2881]/SMALL[51]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[501]/SPAN[2882]/SPAN[2882]/SMALL[51]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[502]/SPAN[2886]/SPAN[2886]/A[3012]/CITE[37]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[502]/SPAN[2887]/SPAN[2887]/SMALL[52]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[502]/SPAN[2888]/SPAN[2888]/SMALL[52]&#39;],[&#39;B56&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[512]/SPAN[2924]/SPAN[2924]/SMALL[60]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[512]/SPAN[2925]/SPAN[2925]/SMALL[60]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[513]/SPAN[2929]/SPAN[2929]/SMALL[61]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[514]/SPAN[2932]/SPAN[2932]/A[3036]/CITE[38]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[514]/SPAN[2933]/SPAN[2933]/SMALL[62]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[514]/SPAN[2934]/SPAN[2934]/SMALL[62]&#39;],[&#39;B57&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[516]/SPAN[2942]/SPAN[2942]/SMALL[64]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[517]/SPAN[2945]/SPAN[2945]/A[3043]/CITE[39]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[517]/SPAN[2946]/SPAN[2946]/SMALL[65]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[517]/SPAN[2947]/SPAN[2947]/SMALL[65]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[518]/SPAN[2951]/SPAN[2951]/SMALL[66]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[519]/SPAN[2955]/CITE[40]/SPAN[2955]/A[3047]/SPAN[2955]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[519]/SPAN[2958]/CITE[40]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[520]/SPAN[2962]/CITE[41]/SPAN[2962]/A[3054]/SPAN[2962]&#39;],[&#39;B58&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[522]/SPAN[2973]/SPAN[2973]/SMALL[68]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[523]/SPAN[2976]/SPAN[2976]/A[3066]/CITE[42]&#39;],[&#39;B59&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[523]/SPAN[2978]/SPAN[2978]/SMALL[69]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[524]/SPAN[2981]/SPAN[2981]/A[3068]/CITE[43]&#39;],[&#39;B60&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[524]/SPAN[2982]/SPAN[2982]/SMALL[70]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[525]/SPAN[2985]/SPAN[2985]/CITE[44]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[525]/SPAN[2985]/SPAN[2985]/CITE[44]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[525]/SPAN[2985]/SPAN[2985]/SMALL[71]&#39;],[&#39;B61&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[527]/SPAN[2996]/SPAN[2996]/SMALL[73]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[527]/SPAN[2997]/SPAN[2997]/SMALL[73]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[528]/SPAN[3001]/SPAN[3001]/SMALL[74]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[528]/SPAN[3002]/SPAN[3002]/SMALL[74]&#39;],[&#39;B62&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[530]/SPAN[3010]/SPAN[3010]/SMALL[76]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[530]/SPAN[3011]/SPAN[3011]/SMALL[76]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[530]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[531]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[532]/SPAN[3016]/SPAN[3016]/A[3090]/CITE[46]&#39;],[&#39;B63&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[532]/SPAN[3017]/SPAN[3017]/SMALL[77]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[533]/SPAN[3020]/SPAN[3020]/A[3093]/CITE[47]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[533]/SPAN[3021]/SPAN[3021]/SMALL[78]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[533]/SPAN[3022]/SPAN[3022]/SMALL[78]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[533]&#39;],[&#39;B64&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[534]/SPAN[3026]/SPAN[3026]/SMALL[79]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[535]/SPAN[3029]/SPAN[3029]/A[3098]/CITE[49]&#39;],[&#39;B65&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[535]/SPAN[3031]/SPAN[3031]/SMALL[80]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[536]/SPAN[3034]/SPAN[3034]/A[3100]/CITE[50]&#39;],[&#39;B66&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[540]/SPAN[3052]/SPAN[3052]/SMALL[85]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[541]/SPAN[3055]/SPAN[3055]/CITE[51]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[541]/SPAN[3055]/SPAN[3055]/CITE[51]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[541]/SPAN[3055]/SPAN[3055]/SMALL[86]&#39;],[&#39;B67&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[542]/SPAN[3061]/SPAN[3061]/CITE[52]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[542]/SPAN[3061]/SPAN[3061]/SMALL[87]&#39;],[&#39;B68&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[543]/SPAN[3067]/SPAN[3067]/SMALL[88]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[544]/SPAN[3070]/SPAN[3070]/A[3120]/CITE[53]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[544]/SPAN[3071]/SPAN[3071]/SMALL[89]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[544]/SPAN[3072]/SPAN[3072]/SMALL[89]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[544]&#39;],[&#39;B69&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[548]/SPAN[3085]/SPAN[3085]/SMALL[91]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[548]/SPAN[3086]/SPAN[3086]/SMALL[91]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[549]/SPAN[3089]/SPAN[3089]/CITE[55]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[549]/SPAN[3089]/SPAN[3089]/CITE[55]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[549]/SPAN[3089]/SPAN[3089]/SMALL[92]&#39;],[&#39;B70&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[550]/SPAN[3095]/SPAN[3095]/SMALL[93]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[551]/SPAN[3098]/CITE[57]/SPAN[3098]/A[3138]&#39;],[&#39;B71&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[553]/SPAN[3109]/SPAN[3109]/SMALL[95]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[553]/SPAN[3110]/SPAN[3110]/SMALL[95]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[554]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[555]/SPAN[3116]/SPAN[3116]/SMALL[96]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[556]/UL[36]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[557]/UL[36]/LI[557]/SPAN[3119]/SPAN[3119]/SMALL[97]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[557]/UL[36]/LI[557]/SPAN[3120]/SPAN[3120]/SMALL[97]&#39;],[&#39;B72&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[560]/SPAN[3125]/SPAN[3125]/SMALL[98]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[560]/SPAN[3126]/SPAN[3126]/SMALL[98]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[562]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[563]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[564]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[565]&#39;],[&#39;B73&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[570]/SPAN[3149]/SPAN[3149]/SMALL[99]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[570]/SPAN[3150]/SPAN[3150]/SMALL[99]&#39;],[&#39;B74&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[574]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[575]/SPAN[3164]/CITE[59]/SPAN[3164]/A[3197]/SPAN[3164]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[576]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[577]/SPAN[3172]/SPAN[3172]/A[3205]/CITE[60]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[577]/SPAN[3173]/SPAN[3173]/SMALL[100]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[577]/SPAN[3174]/SPAN[3174]/SMALL[100]&#39;],[&#39;B75&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[581]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[582]&#39;],[&#39;B76&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[597]/SPAN[3234]/SPAN[3234]/SMALL[109]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[598]/SPAN[3238]/SPAN[3238]/A[3251]/CITE[61]&#39;],[&#39;B77&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[600]/SPAN[3247]/SPAN[3247]/SMALL[112]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[601]/SPAN[3250]/SPAN[3250]/A[3257]/CITE[62]&#39;],[&#39;B78&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[601]/SPAN[3252]/SPAN[3252]/SMALL[113]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[601]&#39;],[&#39;B79&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[602]/SPAN[3256]/SPAN[3256]/SMALL[114]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[602]&#39;],[&#39;B80&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[603]/SPAN[3260]/SPAN[3260]/SMALL[115]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[604]/SPAN[3263]/SPAN[3263]/A[3263]/CITE[65]&#39;],[&#39;B81&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[606]/SPAN[3272]/SPAN[3272]/SMALL[118]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[606]/SPAN[3273]/SPAN[3273]/SMALL[118]&#39;],[&#39;B82&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[608]/SPAN[3284]/SPAN[3284]/SMALL[120]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[608]/SPAN[3285]/SPAN[3285]/SMALL[120]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[609]/SPAN[3289]/SPAN[3289]/SMALL[121]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[609]/SPAN[3290]/SPAN[3290]/SMALL[121]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[610]/SPAN[3294]/SPAN[3294]/SMALL[122]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[610]/SPAN[3295]/SPAN[3295]/SMALL[122]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[611]/SPAN[3299]/SPAN[3299]/SMALL[123]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[611]/SPAN[3300]/SPAN[3300]/SMALL[123]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[612]/SPAN[3304]/SPAN[3304]/A[3281]/CITE[66]&#39;],[&#39;B83&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[612]/SPAN[3307]/SPAN[3307]/SMALL[124]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[612]/SPAN[3308]/SPAN[3308]/SMALL[124]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[613]/SPAN[3311]/SPAN[3311]/CITE[68]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[613]/SPAN[3311]/SPAN[3311]/CITE[68]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[613]/SPAN[3311]/SPAN[3311]/SMALL[125]&#39;],[&#39;B84&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[613]/SPAN[3315]/SPAN[3315]/SMALL[126]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[613]/SPAN[3316]/SPAN[3316]/SMALL[126]&#39;],[&#39;B85&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[615]/SPAN[3324]/SPAN[3324]/SMALL[127]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[615]&#39;],[&#39;B86&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[618]/SPAN[3332]/SPAN[3332]/SMALL[128]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[618]/SPAN[3333]/SPAN[3333]/SMALL[128]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[619]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[620]/SPAN[3338]/SPAN[3338]/A[3301]/CITE[72]&#39;],[&#39;B87&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[620]/SPAN[3340]/SPAN[3340]/SMALL[129]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[621]/SPAN[3343]/SPAN[3343]/CITE[73]/A[3303]&#39;],[&#39;B88&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[624]/SPAN[3353]/SPAN[3353]/SMALL[130]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[625]/SPAN[3356]/SPAN[3356]/A[3311]/CITE[74]&#39;],[&#39;B89&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[626]/SPAN[3363]/SPAN[3363]/SMALL[132]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[626]/SPAN[3364]/SPAN[3364]/SMALL[132]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[627]/SPAN[3368]/SPAN[3368]/SMALL[133]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[627]/SPAN[3369]/SPAN[3369]/SMALL[133]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[627]&#39;],[&#39;B90&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[628]/SPAN[3373]/SPAN[3373]/SMALL[134]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[629]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[630]/SPAN[3379]/SPAN[3379]/SMALL[135]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[630]/SPAN[3380]/SPAN[3380]/SMALL[135]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[631]/SPAN[3384]/CITE[76]/SPAN[3384]/A[3326]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[632]/SPAN[3392]/SPAN[3392]/SMALL[136]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[632]/SPAN[3393]/SPAN[3393]/SMALL[136]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[633]/SPAN[3397]/SPAN[3397]/A[3337]/CITE[77]&#39;],[&#39;B91&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[633]/SPAN[3398]/SPAN[3398]/SMALL[137]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[634]/SPAN[3402]/SPAN[3402]/A[3339]/CITE[78]&#39;],[&#39;B92&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[636]/SPAN[3412]/SPAN[3412]/SMALL[140]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[636]/SPAN[3413]/SPAN[3413]/SMALL[140]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[637]/SPAN[3416]/SPAN[3416]/A[3345]/CITE[79]&#39;],[&#39;B93&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[637]/SPAN[3417]/SPAN[3417]/SMALL[141]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[638]/SPAN[3421]/SPAN[3421]/A[3347]/CITE[80]&#39;],[&#39;B94&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[638]/SPAN[3422]/SPAN[3422]/SMALL[142]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[639]/SPAN[3426]/SPAN[3426]/A[3349]/CITE[81]&#39;],[&#39;B95&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[640]/SPAN[3433]/SPAN[3433]/SMALL[144]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[640]/SPAN[3434]/SPAN[3434]/SMALL[144]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[641]/SPAN[3437]/SPAN[3437]/A[3353]/CITE[82]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[641]/SPAN[3438]/SPAN[3438]/SMALL[145]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[641]/SPAN[3439]/SPAN[3439]/SMALL[145]&#39;],[&#39;B96&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[646]/SPAN[3454]/SPAN[3454]/SMALL[148]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[646]/SPAN[3455]/SPAN[3455]/SMALL[148]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[647]/SPAN[3458]/SPAN[3458]/SMALL[149]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[647]/SPAN[3459]/SPAN[3459]/SMALL[149]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[648]/SPAN[3462]/SPAN[3462]/A[3368]/CITE[84]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[648]/SPAN[3462]/SPAN[3462]/SMALL[150]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[648]/SPAN[3463]/SPAN[3463]/SMALL[150]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[649]/SPAN[3467]/SPAN[3467]/SMALL[151]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[649]&#39;],[&#39;B97&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[650]/SPAN[3472]/SPAN[3472]/SMALL[152]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[651]/SPAN[3475]/SPAN[3475]/CITE[86]&#39;],[&#39;B98&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[652]/SPAN[3479]/SPAN[3479]/CITE[87]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[652]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[653]/SPAN[3484]/SPAN[3484]/A[3377]/CITE[88]&#39;],[&#39;B99&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[653]/SPAN[3485]/SPAN[3485]/SMALL[153]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[654]/SPAN[3489]/SPAN[3489]/A[3379]/CITE[89]&#39;],[&#39;B100&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[655]/SPAN[3495]/SPAN[3495]/SMALL[155]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[656]/SPAN[3499]/SPAN[3499]/A[3383]/CITE[90]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[656]/SPAN[3499]/SPAN[3499]/SMALL[156]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[656]/SPAN[3500]/SPAN[3500]/SMALL[156]&#39;],[&#39;B101&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[658]/SPAN[3506]/SPAN[3506]/SMALL[157]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[659]/SPAN[3509]/SPAN[3509]/A[3389]/CITE[92]&#39;],[&#39;B102&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[659]/SPAN[3510]/SPAN[3510]/SMALL[158]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[660]/SPAN[3514]/CITE[93]/SPAN[3514]/A[3391]/SPAN[3514]&#39;],[&#39;B103&#39;,[&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[661]/SPAN[3521]/SPAN[3521]/SMALL[159]&#39;,&#39;//HTML[0]/BODY[0]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/DIV[305]/OL[16]/LI[662]/SPAN[3525]/CITE[94]/SPAN[3525]/A[3400]/SPAN[3525]&#39;],[&#39;B104&#39;,[&#39;//HTML[0]/BODY[0]/DIV[306]/DIV[306]/DIV[306]/DIV[306]/P[201]&#39;,&#39;//HTML[0]/BODY[0]/DIV[306]/DIV[306]/DIV[306]/DIV[306]/UL[37]/LI[663]&#39;],[&#39;B105&#39;,[&#39;//HTML[0]/BODY[0]/DIV[309]/DIV[309]/DIV[309]/DIV[309]/DIV[309]&#39;,&#39;//HTML[0]/BODY[0]/DIV[310]/DIV[310]/DIV[310]/H3[44]&#39;],[&#39;B106&#39;,[&#39;//HTML[0]/BODY[0]/DIV[315]/DIV[315]/DIV[315]/DIV[315]/TABLE[10]/TBODY[10]/TR[54]/TD[101]/SPAN[3602]/SMALL[166]&#39;,&#39;//HTML[0]/BODY[0]/DIV[315]/DIV[315]/DIV[315]/DIV[315]/TABLE[10]/TBODY[10]/TR[55]/TD[102]&#39;],[&#39;B107&#39;,[&#39;//HTML[0]/BODY[0]/DIV[323]/DIV[323]/DIV[323]/DIV[323]/TABLE[13]/TBODY[13]/TR[74]/TH[53]&#39;,&#39;//HTML[0]/BODY[0]/DIV[323]/DIV[323]/DIV[323]/DIV[323]/TABLE[13]/TBODY[13]/TR[75]/TD[134]&#39;,&#39;//HTML[0]/BODY[0]/DIV[323]/DIV[323]/DIV[323]/DIV[323]/TABLE[13]/TBODY[13]/TR[75]/TD[135]&#39;,&#39;//HTML[0]/BODY[0]/DIV[323]/DIV[323]/DIV[323]/DIV[323]/TABLE[13]/TBODY[13]/TR[76]/TD[137]&#39;],[&#39;B108&#39;,[&#39;//HTML[0]/BODY[0]/DIV[329]/DIV[329]/DIV[329]/DIV[329]/TABLE[16]/TBODY[16]/TR[82]/TH[56]&#39;,&#39;//HTML[0]/BODY[0]/DIV[329]/DIV[329]/DIV[329]/DIV[329]/TABLE[16]/TBODY[16]/TR[83]/TD[143]&#39;],[&#39;B109&#39;,[&#39;//HTML[0]/BODY[0]/DIV[331]/DIV[331]/DIV[331]/DIV[331]/TABLE[17]/TBODY[17]/TR[84]/TH[57]&#39;,&#39;//HTML[0]/BODY[0]/DIV[331]/DIV[331]/DIV[331]/DIV[331]/TABLE[17]/TBODY[17]/TR[85]/TD[145]&#39;],[&#39;B110&#39;,[&#39;//HTML[0]/BODY[0]/DIV[333]/DIV[333]/DIV[333]/DIV[333]/TABLE[18]/TBODY[18]/TR[86]/TH[58]&#39;,&#39;//HTML[0]/BODY[0]/DIV[333]/DIV[333]/DIV[333]/DIV[333]/TABLE[18]/TBODY[18]/TR[87]/TD[147]&#39;],[&#39;B111&#39;,[&#39;//HTML[0]/BODY[0]/DIV[336]/DIV[336]/DIV[336]/DIV[336]/TABLE[19]/TBODY[19]/TR[93]/TD[159]&#39;,&#39;//HTML[0]/BODY[0]/DIV[336]/DIV[336]/DIV[336]/DIV[336]/TABLE[19]/TBODY[19]/TR[94]/TD[160]&#39;],[&#39;B112&#39;,[&#39;//HTML[0]/BODY[0]/DIV[338]/DIV[338]/DIV[338]/DIV[338]/TABLE[20]/TBODY[20]/TR[96]/TD[163]&#39;,&#39;//HTML[0]/BODY[0]/DIV[338]/DIV[338]/DIV[338]/DIV[338]/TABLE[20]/TBODY[20]/TR[97]/TD[165]&#39;,&#39;//HTML[0]/BODY[0]/DIV[338]/DIV[338]/DIV[338]/DIV[338]/TABLE[20]/TBODY[20]/TR[97]/TD[166]&#39;,&#39;//HTML[0]/BODY[0]/DIV[338]/DIV[338]/DIV[338]/DIV[338]/TABLE[20]/TBODY[20]/TR[98]/TD[167]&#39;],[&#39;B113&#39;,[&#39;//HTML[0]/BODY[0]/DIV[343]/DIV[343]/DIV[343]/DIV[343]/DIV[343]/DIV[343]/BR[21]&#39;,&#39;//HTML[0]/BODY[0]/DIV[343]/DIV[343]/DIV[343]/DIV[343]/DIV[343]/DIV[343]&#39;,&#39;//HTML[0]/BODY[0]/DIV[344]/DIV[344]/DIV[344]/DIV[344]/DIV[344]/DIV[344]/CENTER[1]&#39;],[&#39;B114&#39;,[&#39;//HTML[0]/BODY[0]/DIV[375]/DIV[375]/DIV[375]/DIV[375]/UL[51]/LI[969]&#39;,&#39;//HTML[0]/BODY[0]/DIV[376]/UL[52]/LI[970]/BR[22]&#39;,&#39;//HTML[0]/BODY[0]/DIV[376]/UL[52]/LI[971]/SPAN[4558]/BR[23]&#39;,&#39;//HTML[0]/BODY[0]/DIV[376]/UL[52]/LI[971]/BR[24]&#39;],undefined];</td>
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
      <li>&copy; 2016 <span title="0.22334s from github-fe-c5e6852.cp1-iad.github.net">GitHub</span>, Inc.</li>
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

