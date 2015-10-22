var multiparty = require('multiparty');
var form = new multiparty.Form();


form.on('error', function(err) {
  console.log('Error parsing form: ' + err.stack);
});

// Parts are emitted when parsing the form
form.on('part', function(part) {
  // You *must* act on the part by reading it
  // NOTE: if you want to ignore it, just call "part.resume()"

  if (!part.filename) {
    // filename is not defined when this is a field and not a file
    console.log('got field named ' + part.name);
    console.log(part.name + ': ' + part.value );

    // ignore field's content
    part.resume();
  }

  if (part.filename) {
    // filename is defined when this is a file
    count++;
    console.log('got file named ' + part.name);
    // ignore file's content here
    part.resume();
  }

  part.on('error', function(err) {
    // decide what to do
  });
});

// Close emitted after form parsed
form.on('close', function() {
  console.log('Upload completed!');
  //res.setHeader('text/plain');
  //res.end('Received ' + count + ' files');
});

module.exports = form;
