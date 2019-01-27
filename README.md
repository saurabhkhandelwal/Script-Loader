# Async-Script-Loader
A Promise based script loader with in built caching

## To Install
``` 
npm i async-script-loader
```

## To Use
``` 
import scriptLoader from '@script-loader'

scriptLoader([ an array of all the scripts to load ], options = { how to load it })

options : {
  "async": boolean,
  "defer": boolean,
}

```

MIT License
Copyright (c) 2019 Saurabh Khandelwal
