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

## Limitations
This works pretty well on screen in any modern browser.
The print styling, however, works best in Chrome and still is not perfect but acceptable.
Chrome has problems respecting page break directives and from time to time you'll have an image split in 2 or an image on one page and its label on the other.
Printing in Firefox just looks not so great.

## Disclaimer
I know, I'm using the heck out of !important.
I think it is acceptable as concrete5.org profile page has some pretty opiniated styling. What's more !important is mostly only used for the print styling and concrete5.org has none so it won't break anything.
I'm also using it a bit for the custom flex grid that lines stuff up and that's not interfering with c5 styling.

just drag the button below to the toolbar

<div class="bookmarklet">
  <a href="javascript:void function(){function a(a,b,c,d){if('js'==b){var e=document.createElement('script');e.type='text/javascript'}else if('css'==b){var e=document.createElement('link');e.rel='stylesheet',e.type='text/css'}'undefined'!=typeof e&&(0!=d&&(e.readyState?e.onreadystatechange=function(){'loaded'!=e.readyState&&'complete'!=e.readyState||(e.onreadystatechange=null,d())}:e.onload=function(){d()}),'js'==b?e.src=a:'css'==b&&(e.href=a),document.getElementsByTagName(c)[0].appendChild(e))}a('//rawgit.com/mnakalay/Concrete5-Profile-Easy-Read/master/c5-profile-easy-read.min.css?'+Math.random(),'css','body',function(){a('//rawgit.com/mnakalay/Concrete5-Profile-Easy-Read/master/c5-profile-easy-read.min.js?'+Math.random(),'js','body',!1)})}();" onclick="javascript:void(0)">C5 Profile Easy Read</a>
</div>


Text can be **bold**, _italic_, or ~~strikethrough~~.

[Link to another page](another-page).

There should be whitespace between paragraphs.

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

# [](#header-1)Header 1

This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

## [](#header-2)Header 2

> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.

### [](#header-3)Header 3

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### [](#header-4)Header 4

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

##### [](#header-5)Header 5

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

###### [](#header-6)Header 6

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### There's a horizontal rule below this.

* * *

### Here is an unordered list:

*   Item foo
*   Item bar
*   Item baz
*   Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

![](https://assets-cdn.github.com/images/icons/emoji/octocat.png)

### Large image

![](https://guides.github.com/activities/hello-world/branching.png)


### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
The final element.
```
