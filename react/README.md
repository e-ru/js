cd /react

yarn

cd packages/apps/navigator

yarn start
yarn test

cd packages/components

yarn test

cd packages/storybook

yarn storybook

https://github.com/react-workspaces/create-react-app
https://github.com/facebook/create-react-app/issues/1333
https://github.com/minheq/monorepo-cra-source-map

```
language: node_js
node_js:
  - "stable"
cache:
  directories:
    - node_modules
matrix:
  include:
    - before_script:
        - "cd react"
        - yarn
        - "cd packages/apps/navigator"
      script:
        - yarn test
        - yarn build
    - before_script:
        - "cd react"
        - yarn
        - "cd packages/components"
      script:
        - yarn test
on:
  branch: master

```
