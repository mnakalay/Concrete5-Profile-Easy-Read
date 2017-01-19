---
layout: default
---

## Why this bookmarklet
Reading a user's profile on concrete5.org is a bit of a pain in the neck as information is presented mostly as images with extra information only available on hover.

A prospective client looking to assess several developers for instance would have to go to each profile and hover on badges one after another to do so.

That's not productive and frankly it's a pain in the rumpus.

## What it does
This little bookmarklet does 2 things:

  - It modifies the page's styling to make it readable without hovering
  - It adds some print styling to make it easy to print in a readable way

## How does it do it
The script adds some extra styling to the page (screen and print) and add specific classes to certain elements.

**On screen**, the 2 elements affected are **Certifications** and **Badges Won**.

The certification icons and the badges are aligned within a 3 columns grid and their labels are made visible so no more hovering to know what's what.

**When printing**, the same treatment is also applied to **Marketplace Items** and **Showcase Sites**.

Moreover, every non-essential element (footer, header, menu...) is removed.

## Limitations
**This works pretty well on screen in any modern browser.**

The print styling, however, works best in Chrome and, although not perfect, is pretty good.

Chrome has problems respecting page break directives and from time to time you'll have an image split in 2 or an image on one page and its label on the other.

Printing in Firefox just doesn't look so great.

## Disclaimer
I know, I'm using the heck out of !important in the CSS.

I think it is acceptable as concrete5.org profile page has some pretty opiniated styles in place. What's more !important is mostly only used for the print styling and concrete5.org has none so it won't break anything.

I'm also using it a bit for the custom flex grid that lines stuff up and that's not interfering with c5 styling.

## Installation
_Concrete5 Easy Read_ is available as a bookmarklet and can be used in any desktop browser. Simply drag the button below into your browser's bookmarks bar.

Navigate to any user's profile page on concrete5.org and then click the button to add _Easy Read_ to the page.

Instantly the page will be easier to read and ready to print.

<div class="bookmarklet">
  <a href="javascript:void function(){function a(a,b,c,d){if('js'==b){var e=document.createElement('script');e.type='text/javascript'}else if('css'==b){var e=document.createElement('link');e.rel='stylesheet',e.type='text/css'}'undefined'!=typeof e&&(0!=d&&(e.readyState?e.onreadystatechange=function(){'loaded'!=e.readyState&&'complete'!=e.readyState||(e.onreadystatechange=null,d())}:e.onload=function(){d()}),'js'==b?e.src=a:'css'==b&&(e.href=a),document.getElementsByTagName(c)[0].appendChild(e))}a('//rawgit.com/mnakalay/Concrete5-Profile-Easy-Read/master/c5-profile-easy-read.min.css?'+Math.random(),'css','body',function(){a('//rawgit.com/mnakalay/Concrete5-Profile-Easy-Read/master/c5-profile-easy-read.min.js?'+Math.random(),'js','body',!1)})}();" onclick="javascript:void(0)">C5 Profile Easy Read</a>
</div>

_Concrete5 User Profile Easy Read_ is MIT licensed.
