// use `path.join()` over `+` to keep Windows users happy
const path = require('path')

// find a file relative to the call site, useful for CLI applications
// and reading files passed in by the user
path.join(process.cwd(), 'my-dynamic-file')
// or
path.resolve('my-dynamic-file')

// find a file relative to the file, useful for referencing files that are
// distributed with the package
path.join(__dirname, 'my-package-file')