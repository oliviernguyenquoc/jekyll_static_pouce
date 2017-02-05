# Jekyll 

This project was done with Jekyll.

## TODO

* Registration form :
	* Send form with AJAX
* Replace few full paths to jekyll-assets paths
* Optimize compression css / js + one file ...

Advices: (source: https://www.aerobatic.com/blog/jekyll-assets-bootstrap)

* GZip compression
* Far future Cache-Control header set to public, max-age=31557600 (1 year)
* Consolidated multiple css and js files into these two bundled downloads
* Eliminated unnecessary Bootstrap CSS and JavaScript components reducing download sizes
* Served off a global CDN (CloudFront)
* TODO list with comment: "// TODO"
	* Change path in JS to prod database server

## Install

* Check if you have all the requirements : https://jekyllrb.com/docs/installation/
* Install Jekyll : 'gem install jekyll'
* Copy paste the project
* Execute 'gem install jekyll-assets uglifier jekyll-admin'

* Install Imagemagick http://imagemagick.org/script/index.php 
	* Mac: 'brew install ImageMagick' if you have Homebrew
	* Windows: Executable (.exe) in http://imagemagick.org/script/binary-releases.php#windows
	* Unix: http://imagemagick.org/script/binary-releases.php#unix
* Execute 'gem install mini_magic'

# How to add a school in the school list

* Add the .png or .jpg file in assets/img/ecoles folder
* Add in the data list in _data/ecoles.yml
* That's it !