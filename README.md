# News Layout Website

A simple website, hosted on [GitHub Pages](https://nbaldzhiev.github.io/news-site/), to practice HTML, CSS, and vanilla JavaScript, and a bit more complex layouts. The website's sole purpose is to practice FE development.

## Description

This project is used to practice more complex layouts and it tries to replicate the layout of the Bulgarian edition of 
[Radio Free liberty](https://www.svobodnaevropa.bg/). Since pretty much all News APIs are paid, I had to use two different APIs for the images and titles:
* For the images, [Pexesl](https://www.pexels.com/api/) is used;
* For the titles, the Pexels API only returns the name of the photographer, no photo desriptions, but the photographers' names are too short and it doesn't look
good in the layout. So, I, unfortunately, had to use an API with [Kanye West quotes](https://kanye.rest/). Unfortunately because I wanted to use something more
meaningful and I tried some random facts APIs as they provide sentences of good length, similar to news articles titles, but these APIs turned out to be too slow.
So, I found this API with quotes by the rapper and just used it.

The website allows for inputing a given topic or phrase and loading images based on that topic. For example, entering "beer" in the input would
load all img elements with beer photographs.

The website is somewhat responsive with a single breakpoint at max-width 768px to allow for better rendering on smartphones.
The CSS code is very chaotic, but, again, this is just a purely educational project.

## Important about Pexels API

The Pexels API is not completely free and it has a limit of 500 requests a month per API key. So, at some point, this website can actually not load any
images which would mean that the montly requests limit has been reached.
