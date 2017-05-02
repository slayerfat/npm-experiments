# npm-experiments

Uses [this documentation.](https://docs.npmjs.com/misc/developers)

inspired by [this article.](https://medium.com/@jdaudier/how-to-create-and-publish-your-first-node-js-module-444e7585b738)

The feature branches have some experiments on:
- [x] Basic Typescript
- [ ] Basic ES5 Javascript
- [ ] Basic ES6 Javascript

## This branch setup

The main entry is inside the src folder as main.ts

This process is done in the package.json prepublish script which just calls the compiler.

Thx to tsconfig.json the typescript compiler will output the files into the lib folder.

## Local testing without publish

### With npm link

```bash
cd path/to/package
npm link # should install a global symlink
cd path/to/consumer/
npm link packageName # will create a symlink locally
```

### With npm pack

`npm pack` then `tar -tf packagename-version.tgz`

after than u can:
```bash
cd path/to/consumer/
npm install ../path/to/package/packagename-version.tgz
```
