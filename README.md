# haggis22

A small library to provide some basic UI-related tools across the rest of my projects.  Includes directives related to HTML forms, along with spinners for AJAX calls, and a basic error-handling service.

## Getting Started

Include the haggis22.js Javascript script file after including Angular.  Link to haggis22.css to set the styles for the AJAX spinner and error message popup.

### Prerequisites

Depends up on AngularJS version 1.x to run. Needs Gulp to rebuild the project if changes are made.

```
npm install gulp
```

### Building

To build the project, download the source from gitub

```
git clone https://github.com/haggis22/haggis22.git
```

Node and npm are required - with them installed you can set up the dev dependencies with a basic install from the package.json

```
npm install
```

The default gulp task will re-build both the haggis22.js and haggis22.css files and put them in the `build` folder.

```
gulp 
```
or
```
gulp default
```


## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details

