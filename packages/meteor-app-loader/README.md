# Show loading spinner while application is downloading

## Install

`meteor add webdeb:app-loader`

## How it works

Very Simple. It automatically injects the needed html and CSS to the page, before any other scripts are going to be downloaded.
After meteor has started on the client side, it automatically fades out the loading spinner and removes it from the DOM. Thats it.

It is using only HTML (SVG) and CSS for the spinner animation.

## Futher work

- make configurable
- add more loaders and spinners

## Contribution

Feel free to fork and hack ;)
