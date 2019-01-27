const scripts = {}

export default function(files, options = {}) {
  const promiseArray = files.map(file => {
    if (scripts[file]) {
      return scripts[file]
    } else {
      const filePromise = getPromise(file, options)
      scripts[file] = filePromise
      return filePromise
    }
  })
  return Promise.all(promiseArray)
}

function getPromise(file, options) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script")
    script.async = options.async
    script.defer = options.defer
    script.onload = function() {
      resolve()
    }
    script.onerror = function() {
      reject()
    }
    script.src = file
    const body = document.getElementsByTagName("body")[0]
    body.appendChild(script)
  })
}
