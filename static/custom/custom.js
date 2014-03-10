// load the gist and toc extensions
IPython.load_extensions("gist", "toc");

// autosave every 30 seconds;
$([IPython.events]).on("notebook_loaded.Notebook", function () {
    IPython.notebook.minimum_autosave_interval = 30000;
});
