# Async-Script-Loader

A Promise based script loader with in built caching. Supports both async and defer loading.


## To Install
``` 
npm i async-script-loader
```

## To Use
``` 
import scriptLoader from '@script-loader'

scriptLoader([ an array of all the scripts to load ], options = { how to load it })
      .then(() => {
        console.log('script has been loaded')
      })
      .catch(err => console.log(err))

``` 
this will return a promise

## Load Options

```

options : {
  "async": boolean,
  "defer": boolean
}

```


## Author

Saurabh khandelwal (https://github.com/saurabhkhandelwal)

## License

MIT License
