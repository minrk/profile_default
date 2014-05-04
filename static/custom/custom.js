// load the gist and toc extensions
IPython.load_extensions("gist", "toc");

// autosave every 30 seconds;
$([IPython.events]).on("notebook_loaded.Notebook", function () {
    IPython.notebook.minimum_autosave_interval = 30000;
});

// autoscroll is my greatest shame:
IPython.OutputArea.auto_scroll_threshold = 0;


// when doing presentations, I hode the header and toolbar
$([IPython.events]).on("app_initialized.NotebookApp", function () {
    // hide cell toolbar select, I never use it
    $('#ctb_select').hide().prev().hide();
    // $('div#header').hide();
    // $('div#maintoolbar').hide();
});

if (IPython.CodeCell) {
      IPython.CodeCell.options_default.cm_config.lineWrapping = true;
}
