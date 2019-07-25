"build": "lerna exec -- babel src -d dist --ignore test.js",

https://github.com/nareshbhatia/react-mobx-mui-ts-monorepo

https://github.com/nareshbhatia/lerna-workspaces-concepts

https://michalzalecki.com/solve-code-sharing-and-setup-project-with-lerna-and-monorepo/

/package.json

"workspaces": [
"packages/*"
],
"scripts": {
"test": "jest",
"del-dist": "lerna exec --parallel -- del-cli dist",
"prebuild": "yarn del-dist",
"build": "lerna exec -- react-scripts build",
"start-navigator": "cd packages/navigator && react-scripts start"
},
