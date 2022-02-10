# Jekyll 

This project was done with Jekyll.

## TODO

* Registration form :
	* Send form with AJAX
	* Fill university with AJAX calls
* Replace few full paths to jekyll-assets paths
* Optimize compression css / js + img + one file ...

Advices: (source: https://www.aerobatic.com/blog/jekyll-assets-bootstrap)

* GZip compression
* Far future Cache-Control header set to public, max-age=31557600 (1 year)
* Consolidated multiple css and js files into these two bundled downloads
* Eliminated unnecessary Bootstrap CSS and JavaScript components reducing download sizes
* Served off a global CDN (CloudFront)

## Install

* Check if you have all the requirements : https://jekyllrb.com/docs/installation/
* Install Jekyll and Bundler : 'gem install jekyll bundler'
* Install the plugins 'gem install jekyll-assets uglifier jekyll-admin'
* Install Imagemagick http://imagemagick.org/script/index.php 
	* Mac: 'brew install ImageMagick' if you have Homebrew
	* Windows: Executable (.exe) in http://imagemagick.org/script/binary-releases.php#windows
	* Unix: http://imagemagick.org/script/binary-releases.php#unix
* Install the Imagemagick plugin 'gem install mini_magick'

## How to add a school in the school list

* Add the .png or .jpg file in assets/img/ecoles folder
* Add in the data list in _data/ecoles.yml
* That's it !

## Run

* Make sure that all required gem packages are installed : 'bundle install'

### Run local server

* Execute : 'bundle exec jekyll serve'
* The website is available at 'http://localhost:4000'

### Build the final website

* Execute : 'bundle exec jekyll build'
* The website is generated in the folder '_site'
