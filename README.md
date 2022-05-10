# jankowy-stories
Here is a repo used in article for building expo typescript npm package integrated with jest and storybook.

Dependencies installation:

```bash
npm i
```

## Run storybook / expo app

To run as an expo project you need to change 'main' field in 'package.json' from:
``` javascript
"main": "./package/index.js",
```
to:
``` javascript
"main": "node_modules/expo/AppEntry.js",
```

After that you can run Storybook UI by running command:
```bash
npm start
```

## Build package
For package you need an entry point in package.json file
``` javascript
"main": "./package/index.js",
```
Next you should increase the version in the 'version' field in package.json:
``` javascript
"version": 1.1.0 ==> "version": 1.1.1
```
You can do this manually or with running command with clean git directory:
```bash
npm version [patch|minor|patch]
```
Next you can build package running following command:
```bash
npm run build
```

To check if everything is built well and package will contain proper files structure, you can imitate publish process with command:
```bash
npm publish --dry-run
```

## Publish package
To publish the package, you need to be logged in npm on your machine. You can accomplish it by running:
```bash
npm login
```

Now you should be able to  publish the package:
```bash
npm publish
```
