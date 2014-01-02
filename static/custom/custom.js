
// load the gist extension

require(["nbextensions/gist"], function (gist_extension) {
    console.log('gist extension loaded');
    gist_extension.load_extension();
});
require(["nbextensions/toc"], function (toc) {
    console.log('Table of Contents extension loaded');
    toc.load_extension();
});

