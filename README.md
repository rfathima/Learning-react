#Learning react

/*
git:
git init
git add .
git commit -m "episode-01"
git remote add origin https://github.com/rfathima/Learning-react.git 
git push origin main
*/
/*
npm - package manager - its a repository
package.json is a configuration of npm , 
using this below command we can config npm in our project, and it will generete the package.json file
--------------->npm init
Important depencency(package) in our project is bundler
bundler - All html,css,js needs to budle together (minified and compress before going to production)
types of bundler (webpack, parser, vite, parcel, esbuild, rollup
here using parcel
#parcel
-Dev Build
-Local server
-HMR = Hot Module Replacement (if u change anything in u r code it will change automatically in browser)
- caching and faster builds
-Image optimization
-Minification
-Building
-compressing
-consistent hashing
-code splitting
-Different bundling support older browsers
-Diagnostic
-Error handling
-HTTPS
-Tree shaking  - remove unsed code
-Diff dev and production bundles
-dev build(npx parcel index.html) production build (npx parcel build index.html)
- parcel also take care of browser list
"browserslist": [
    "last 2 versions"
  ]
.cache or parcel-cache and dist folder we can able to regenerate . so we can put inside .gitignore
File watching algorithm - written in c++
--------------->npm install -D parcel
-D stands for developer version
^2.12.0
diff b/w ^(caret) and ~(tilde)
^ - compatible to the version - if tomorrow 2.12.0 released it will update automaticaly (so always use this) minor version only upgrate , if 3.0.0 means its won't upgrade. because it will create lot many changes in your project , site may break
~ - approximately equalent to the version - will update you to all future patch version, without incrementing the minor version.
npm install -D parcel - It will install package-lock.json + node_modules
node_modules is a collection of dependancies(packages) huge file ( because its a transitive dependency which means we denpend parcel , parcel depend there own dependency and .......)
package-lock.json
-----------------
this file contains exact version of the dependencies/bundler(parcel) version, and lock over it!
question: how many package.json in our project - most of them says 1, answer: Each dependencies having own package.json
.gitignore
----------
This much big node module file we unable to put inside git, so here we can ignore
/node_modules
If you have package-lock and package.json we no need to save nodemodule in git,
because we can regenerate with the help of package-lock and package.json (example we can delete the nodemodule folder and npm install)
for me npx parcel index.html throws an error so in package.json i changed  "start": "Parcel index.html"
i refer the link: https://wesbos.com/javascript/14-es-modules-and-structuring-larger-apps/81-bundling-and-building-with-parcel#installing-parcel
"scripts": {
    "start": "Parcel index.html"
  },
so i used npm start or npx parcel index.html also working

  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  },
  start is the developement version
  build is the production command
React in our project instaed CDN:
--------------------------------
npm install react
npm install react-dom
once install this react and react-dom we don't want cdn

inside script tag type="module" which means that js file not just a script file inside we are also using import

JSX
---
React.createElement("h1", {id:'heading'}, "Learning React"); ---> its very difficult to the user perpective
so facebook developers introduce JSX
JSx- is a JS syntax to create react element easier
JSX - is not a part of react, JSX is different react is different. we can write react without JSX also
But JSX make developers life easy so we are using JSX
In React JSX (HTML+JS) will merge together in one file
also JSX is not a HTML code its "like HTML syntax"
//JSX is a HTML like syntax or xml like syntax , its not HTML inside js
//JSX (transpiled before it reaches the JS Engine) - Parcel - Babel do the transpailed job (parcel already have the babel inside it)
Babel is not created by fackbook, babel is a compiler.

//JSX => React.createElement =>ReactElement-JS object => HTMLElement(render)
const jsxHeading = <h1 id="heading">Learning React using JSX react</h1> ---> if its one line no need () close and open brace, if its a multiple line we need () mandatory

//This is called React element
const jsxHeading = (
  <h1 id="heading" tabIndex="5">
  Learning React using JSX react
  </h1>
);


In react everything component
React component 2 types
1. class based component - older code type
2. functional component - new code
 
react functional code is called just a normal js function
*react function name start with capital letter otherwise its throw an error
//React Component
const HeadingComponent = () => (
    <div id="container">
        <h1 className="heading">Learning React Functional Component</h1>
    </div>
);
//Functional component redering in React
root.render(<HeadingComponent />);

//component coposesion (composing component one another)
which means component inside component example-> <Title /> component we can inside another component
//React Component
const Title = () => (
    <div id="container">
        <h1 className="heading">Call one component inside another component</h1>
    </div>
);
//React Component
const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1 className="heading">Learning React Functional Component</h1>
    </div>
);

//js element we can call it as with {}
const element = <span>React Element</span>

{element}

css in react js file:
---------------------
method 1: (2 carlybraces needed)
<div className="" style={{display:none}}>

methode 2: seperate js object we can create and we can call
const styleCard = {
    backgroundColor: "#f0f0f0",
};
<div className="" style={styleCard}>

props(properties -parcing pros to a component - just a argument to the function) for dynamic data:
----------------------
const RestaurantCard = (props) => {
    //this also same
    //const RestaurantCard = ({resName, cusine}) => {
    console.log(props);

This below properties we pass like arguments and use  it like props.resName
    <RestaurantCard
                resName="Magna Foods"
                cusine="Biriyani,North Indian, Asian" 
                starts="4.4"
                munites="38 munites"
                />

Config driven UI:
-----------------
the data is coming from backend, depence upon the data, UI should change

map
---
whenever use map need to use key property, index property not suggested

bracket pair colorization toggler
prettier- code formatter
ESLint
Better Comments


/*
*Headers
*--logo
*--Nav Items
*Body
* - search 
* - RestaurantContainer
*    - RestaurantCard
*       -Img
*       -Name of res, Star Rating, cuisine, delery tie
*Footer
* - Copyright
* - Links 
* - Address 
* - Contact
*/
# export: 2types
# named export:
export const component (export const CDN_URL = "pathname")
import component from "path"

# default export : 
export default Componentname (export default Header;)
import component from "path"

# React Hooks
(Normal JS utility function)
-useState() - Superpowerful  State Variable in react
-useEffect() - 
