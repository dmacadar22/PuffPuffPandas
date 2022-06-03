# Puff Puff Pandas React App

## Run Locally
No .env file necessary
Just pull and run
```
npm start
```

## Production set up
Build app 

```
npm run build
```

Install something like [serve](https://www.npmjs.com/package/serve)
And then

```
serve 'build/folder/somewhere'
```
To always run maybe use pm2 and just pre fix it

```
pm2 serve 'build/folder/somewhere'
```