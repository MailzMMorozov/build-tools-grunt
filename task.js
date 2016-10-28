// ----1----
// write concat task to have results:
// create different targets

// dist/bar.js
console.log('barA');
console.log('barB');
console.log('bazB');
console.log('bazC');

// dist/foobar.js
console.log('fooA');
console.log('fooB');
console.log('fooC');
console.log('barA');
console.log('barB');

// dist/all.js
console.log('fooA');
console.log('fooC');
console.log('barA');
console.log('barB');
console.log('bazB');
console.log('bazC');

// ----2----
// uglify all file into {package.name}.min.js in folder "build"
// add banner with version number

// ----3----
// add jshint task to check all src files except "b"

// ----4----
// configure default task to run all previous tasks,
// order of tasks matters!
