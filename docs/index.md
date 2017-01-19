---
layout: default
---

## If you don't like to read
Just want to grab the bookmarklet? Here it is!

Drag the button below to your browser's bookmarks bar, [go to a user's public profile on concrete5.org](https://www.concrete5.org/profile/-/view/75201/) and click on the button.

<div class="bookmarklet">
  <a href="javascript:void function(){function a(a,b,c,d){if('js'==b){var e=document.createElement('script');e.type='text/javascript'}else if('css'==b){var e=document.createElement('link');e.rel='stylesheet',e.type='text/css'}'undefined'!=typeof e&&(0!=d&&(e.readyState?e.onreadystatechange=function(){'loaded'!=e.readyState&&'complete'!=e.readyState||(e.onreadystatechange=null,d())}:e.onload=function(){d()}),'js'==b?e.src=a:'css'==b&&(e.href=a),document.getElementsByTagName(c)[0].appendChild(e))}a('//rawgit.com/mnakalay/Concrete5-Profile-Easy-Read/master/c5-profile-easy-read.min.css?'+Math.random(),'css','body',function(){a('//rawgit.com/mnakalay/Concrete5-Profile-Easy-Read/master/c5-profile-easy-read.min.js?'+Math.random(),'js','body',!1)})}();" onclick="javascript:void(0)" ICON="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACdUlEQVQ4jXWTP0xTURjFf+WPvJaChZQAUbAlwdCQNG3D+jpoIovVpTLQRIMaJoMsmpgwEGZJkDjYqBsMCgzqpuggC1ETRQMNaAKlsNCXx3uvhXfbSJ4D4UEBz/bd7/vOOffcXEdvb6/FMQghkCQJIYR9JknS8TEAyv63rOkGkiQxMzNDINCBphtoulFCeoJACEEg0MHk5CSes7X4/T4AWlsvANB38xZer/d0Ak03EIWi3fD7fWSzCgDr62nCoSDxnjgNDd4SF2VCCDTdYHDwPtevxfj+4ycAoWCYfD4PQDar2C5WV9dst0IIykShSM7Q6eqKcKMnTnotDUBnsBNNN2wlOSqzralkMpnDKxeKlC2lFslsbjD6eJQ6Tz0AH2ZnaWpqtMlSqRSBjgAf339CVTVEoUg2myW9lqb8797esMvl4svXb9y508fK8jJj40/I53JsbW0xPz/Pysof2i+28yyZRNd0dE1HURWMnIHDXVtjHSQbCYUJBDoIBcNcvnLJdgQw/XqaB48elryAaQoqDopqp5vl5d+8ePncXtzWVADqPPV0BjsxTcHd232EgmGGR0YwTQHu2hrL1+a3GpubrWQyaR0gmUxavja/JcuyJcuy5WvzW1Ovpuz+wU7FUUv1Ryy/efsO0xSoqoaiKjwdGyfeEwcgGo3uqwPlZ6qqhl0uF5WVFTgcEIvF9vOIhNHUbVpbWxgaGiIWuwpAIpFgMbWEp9bDrrl7GGK10w3AwMA9+vv7OQ2JRIKFhV92rajKSYIdM08kFKa7uxs5KgMw93mOiYkJMpsbtJw7j6pqpQTV1W6czsPvapqCnZ18ifrxGQBFUfgH/AMoc9OGI5EAAAAASUVORK5CYII="><span class="bk-icon">&target;&nbsp;</span>C5 Profile Easy Read<span class="bk-icon right">&nbsp;&target;</span></a>
</div>

But seriously, if you read on you'll know what you're doing :)

## Why this bookmarklet
Reading a user's public profile on concrete5.org is a bit of a pain in the neck as information is presented mostly as images with extra information only available on hover.

A prospective client looking to assess several developers, for instance, would have to go to each profile and hover on badges one after another to do so.

That's not productive and frankly it's a pain in the rumpuss.

## What it does
This little bookmarklet does 2 things:

  - It modifies a user's public profile styling to make it readable without hovering
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

## Admission of guilt
I know, I'm using the heck out of !important in the CSS.

I think it is acceptable as concrete5.org profile page has some pretty opiniated styles in place. What's more !important is mostly only used for the print styling and concrete5.org has none so it won't break anything.

I'm also using it a bit for the custom flex grid that lines stuff up and that's not interfering with c5 styling.

## Installation
_Concrete5 Easy Read_ is available as a bookmarklet and can be used in any desktop browser. Simply drag the button below into your browser's bookmarks bar.

Navigate to any user's public profile page on concrete5.org and then click the button to add _Easy Read_ to the page.

Instantly the page will be easier to read and ready to print.

<div class="bookmarklet">
  <a href="javascript:void function(){function a(a,b,c,d){if('js'==b){var e=document.createElement('script');e.type='text/javascript'}else if('css'==b){var e=document.createElement('link');e.rel='stylesheet',e.type='text/css'}'undefined'!=typeof e&&(0!=d&&(e.readyState?e.onreadystatechange=function(){'loaded'!=e.readyState&&'complete'!=e.readyState||(e.onreadystatechange=null,d())}:e.onload=function(){d()}),'js'==b?e.src=a:'css'==b&&(e.href=a),document.getElementsByTagName(c)[0].appendChild(e))}a('//rawgit.com/mnakalay/Concrete5-Profile-Easy-Read/master/c5-profile-easy-read.min.css?'+Math.random(),'css','body',function(){a('//rawgit.com/mnakalay/Concrete5-Profile-Easy-Read/master/c5-profile-easy-read.min.js?'+Math.random(),'js','body',!1)})}();" onclick="javascript:void(0)" ICON="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACdUlEQVQ4jXWTP0xTURjFf+WPvJaChZQAUbAlwdCQNG3D+jpoIovVpTLQRIMaJoMsmpgwEGZJkDjYqBsMCgzqpuggC1ETRQMNaAKlsNCXx3uvhXfbSJ4D4UEBz/bd7/vOOffcXEdvb6/FMQghkCQJIYR9JknS8TEAyv63rOkGkiQxMzNDINCBphtoulFCeoJACEEg0MHk5CSes7X4/T4AWlsvANB38xZer/d0Ak03EIWi3fD7fWSzCgDr62nCoSDxnjgNDd4SF2VCCDTdYHDwPtevxfj+4ycAoWCYfD4PQDar2C5WV9dst0IIykShSM7Q6eqKcKMnTnotDUBnsBNNN2wlOSqzralkMpnDKxeKlC2lFslsbjD6eJQ6Tz0AH2ZnaWpqtMlSqRSBjgAf339CVTVEoUg2myW9lqb8797esMvl4svXb9y508fK8jJj40/I53JsbW0xPz/Pysof2i+28yyZRNd0dE1HURWMnIHDXVtjHSQbCYUJBDoIBcNcvnLJdgQw/XqaB48elryAaQoqDopqp5vl5d+8ePncXtzWVADqPPV0BjsxTcHd232EgmGGR0YwTQHu2hrL1+a3GpubrWQyaR0gmUxavja/JcuyJcuy5WvzW1Ovpuz+wU7FUUv1Ryy/efsO0xSoqoaiKjwdGyfeEwcgGo3uqwPlZ6qqhl0uF5WVFTgcEIvF9vOIhNHUbVpbWxgaGiIWuwpAIpFgMbWEp9bDrrl7GGK10w3AwMA9+vv7OQ2JRIKFhV92rajKSYIdM08kFKa7uxs5KgMw93mOiYkJMpsbtJw7j6pqpQTV1W6czsPvapqCnZ18ifrxGQBFUfgH/AMoc9OGI5EAAAAASUVORK5CYII="><span class="bk-icon">&target;&nbsp;</span>C5 Profile Easy Read<span class="bk-icon right">&nbsp;&target;</span></a>
</div>

You can [try it on my profile (mnakalay)](https://www.concrete5.org/profile/-/view/75201/) if you want :)

## Encouragement & Enhancement
If you like and use it and want to let me know about it, that would be lovely. You can go to my [Concrete5 profile (username: mnakalay)](https://www.concrete5.org/profile/-/view/75201/) and tell me about it by Private Message. I'd be utterly stocked if you did.

If you think you can improve on it, especially the printing stylesheet, please submit a pull request, and a thousand thanks in advance.

## Disclaimer
This script won't break anything anywhere. It was built to help quickly assess a user's public profile on concrete5.org and nothing more.

It's not going to make you coffee, make you rich or poor, or do anything in the way of World Peace.

Use it any way you see fit and please don't hate me. Whatever it is I am not responsible.

## License
_Concrete5 User Profile Easy Read_ is MIT licensed. Enjoy!
