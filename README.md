# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### To deploy the environment

```
winget install Schniz.fnm
```

relaunch terminal

```
fnm env
```

copy the output of `fnm env` into the terminal, run them, then relaunch terminal

```
fnm use --install-if-missing 20
```

```
npm install
```

```
npm install jquery
```

```
npm install react-icons --save
```

### Test

```
npx docusaurus start
```

### Deploy

```
setx GIT_USER your_github_username
```

```
npm run deploy
```

