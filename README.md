# Concrete5 User Profile Easy Read
A simple Bookmarklet to make user profiles on concrete5.org easier to read

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
