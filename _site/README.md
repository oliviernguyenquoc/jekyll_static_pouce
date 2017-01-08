# Jekyll 

This project was done with Jekyll.

## TODO

* Registration form :
	* Send form with AJAX
	* Fill university with AJAX calls
* Pre-registration form
* Replace few full paths to jekyll-assets paths
* Add for loop for school logos & add class = responsive-img valign (size and valign)
* Optimize compression css / js + img + one file ...

Advices: (source: https://www.aerobatic.com/blog/jekyll-assets-bootstrap)

* GZip compression
* Far future Cache-Control header set to public, max-age=31557600 (1 year)
* Consolidated multiple css and js files into these two bundled downloads
* Eliminated unnecessary Bootstrap CSS and JavaScript components reducing download sizes
* Served off a global CDN (CloudFront)

## Install

* Check if you have all the requirements : https://jekyllrb.com/docs/installation/
* Install Jekyll : 'gem install jekyll'
* Copy paste the project
* Execute 'gem install jekyll-assets uglifier jekyll-admin'

# How to add a school in the school list

* Add the .png or .jpg file in assets/img/ecoles folder
* Add in the data list in _data/ecoles.yml
* That's it !