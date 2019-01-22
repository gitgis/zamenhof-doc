---
title: "Styleguide"
date: 2019-01-21
type: "docs"
---

# Zamenhof docs styleguide

Zamenhof docs give you following functionalities 

## 1. Magnified image with colored (white) background

When clicking an image, it should be possible to magnify the image.
This should not apply to every images. Only the ones with the specific tag

Example: https://stripe.com/docs/dashboard

Screencast: https://www.screencast.com/t/FucjGHUIFZXm

### Example

{{% lightbox %}}
![Kitten](https://placekitten.com/g/1600/800)
{{% /lightbox %}}

### Markdown

{{< highlight markdown "linenos=table" >}}
{{%/* lightbox */%}}
![Kitten](https://placekitten.com/g/1600/800)
{{%/* /lightbox */%}}
{{< /highlight >}}

## 2. Titles URL links
Description: It should be possible to get a #url for every titles.
 
Example: https://stripe.com/docs/dashboard

Screencast: https://www.screencast.com/t/4kaHQ3wwVz 

## 3. Menu titles in the left pane
Description: We need category separators in the menu sections. The font color should be: #939da3

Example: https://www.screencast.com/t/jmeyEb5mmF

#### Usage

Within _index.md of section add a "separator" parameter

{{< highlight markdown "linenos=table" >}}
---
title: "subcat"
type: "docs"
separator: "Category 1"
---

# DDD some header
{{< /highlight >}}

## 4. Video files
Description: We need video files.
 
Example: https://stripe.com/docs/multiple-accounts


### Example

#### Wistia:

{{% wistia-video wistia_id="vw66q2y4g6" %}}
![Test lesson video](video.png)
{{% /wistia-video %}}

#### Vimeo:

{{< vimeo 146022717 >}}

#### Youtube:

{{< youtube w7Ft2ymGmfc >}}

### Markdown

{{< highlight markdown "linenos=table" >}}

{{%/* wistia-video wistia_id="vw66q2y4g6" */%}}
![Test lesson video](video.png)
{{%/* /wistia-video */%}}

{{</* vimeo 146022717 */>}}
{{</* youtube w7Ft2ymGmfc */>}}
{{< /highlight >}}

## 5. Tables
Description: our documentation have a lot of tables.
 
Example:
 
* small: https://stripe.com/docs/terminal/testing 
* large: https://stripe.com/docs/reporting 
* with dark rows: https://stripe.com/docs/dashboard/teams

[See external mmark file](../tables) 

## 6. Bullet points
Description: Different types of bullet points.

Example: 

* Colored: https://stripe.com/docs/multiple-accounts 
* Colored: https://stripe.com/docs/error-codes 
* Normal: https://stripe.com/docs/security 
* Normal, categories / sub-categories: https://stripe.com/docs/libraries#ruby 
* Large text results: https://stripe.com/docs/reporting/quickbooks   
* 1, 2, 3, 4...: https://stripe.com/docs/reporting/quickbooks 

## 7. Steps
Description: Partially colored (#13b57c) titles (#13b57c) 

* Example 1: https://stripe.com/docs/development
* Example 2: https://stripe.com/docs/webhooks/signatures 

## 8. Marks in titles
Description: Check aside “Testing Stripe Issuing” for “Invite only”

Example: https://stripe.com/docs/issuing/testing 

## 9. Separators
Description: We need a line separator

Example: https://stripe.com/docs/terminal
 
Screenshot: https://www.screencast.com/t/GsjKAxny 

### Example

Just put 3 dashes

---

between texts


### Markdown

{{< highlight markdown "linenos=table" >}}
Just put 3 dashes

---

between texts
{{< /highlight >}}

## 10. Colored codes
Description: In our codes area, would it be possible to add text with different colors?

Example: https://stripe.com/docs/issuing/testing  

Screenshot: https://www.screencast.com/t/vYAAFqip9pu 

## 11. Next step(s) section
Description: We need a footer with the similar layout. This layout will not apply to every pages.

Example: https://stripe.com/docs/issuing/authorizations 

Screenshot:  https://www.screencast.com/t/FtURUz0vW0dn 

## 12. Slides
Description: just embed the following slides: embed code

<iframe class="docs-embed" data-width="960" data-height="569" 
frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"
src="https://docs.google.com/presentation/d/e/2PACX-1vQScsr0Ioy776vlMx0BiZ2pVrtTMbEJ4E0rlqKKQnp5oC6jCQW0FHbMJV30hDR0rm7-Rdx9jntCN0YR/embed?start=false&loop=false&delayms=60000" 
></iframe>


### Markdown
{{< highlight markdown "linenos=table" >}}
// To keep slides size and aspect properly use following HTML attributes:

// class="docs-embed"
// data-width="960"
// data-height="569"

// do not use width= and height= 

<iframe class="docs-embed" data-width="960" data-height="569" 
frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"
src="https://docs.google.com/presentation/d/e/2PACX-1vQScsr0Ioy776vlMx0BiZ2pVrtTMbEJ4E0rlqKKQnp5oC6jCQW0FHbMJV30hDR0rm7-Rdx9jntCN0YR/embed?start=false&loop=false&delayms=60000" 
></iframe>

{{< /highlight >}}

## 13. Small icons (Fontawesome) in text
Description: We would like to be able to add small icons in text. Check for the “api” image in the example. 

Example: https://stripe.com/docs/orders

Screenshot: https://www.screencast.com/t/ZwiqbIYuktt

All available icons [here](https://fontawesome.com/icons?d=gallery)

### Example 

<i class="fas fa-angle-down"></i>
<i class="fas fa-angle-up"></i> 
<i class="fas fa-external-link-alt"></i>

### Markdown
{{< highlight markdown "linenos=table" >}}
<i class="fas fa-angle-down"></i>
<i class="fas fa-angle-up"></i> 
<i class="fas fa-external-link-alt"></i>
{{< /highlight >}}

## 14. Footer
Description: We need a simple footer (again, some pages might be ommitted) with the following  text. 

The “Edit this page” is a link to the page on Github.
  
Check the functionality for the “Was this page helpful?” on Stripe. It looks like Stripe is using their own system. I will check for something easy to install (or we will just drop that feature). 

Questions?

We're always happy to help with any questions you might have! Search our documentation, contact support, or you can also chat live with our staff on Slack.
Was this page helpful? Yes | No
Edit this page

Example: https://stripe.com/docs/orders
 
Screenshot: https://www.screencast.com/t/dAscvUdl 
