$([IPython.events]).on('app_initialized.NotebookApp', function(){
    // console.log(performance.now().toString());
    // $("#header").html($("<h1>").text(performance.now().toString()));
});

// autosave every 30 seconds;
$([IPython.events]).on("notebook_loaded.Notebook", function () {
    IPython.notebook.set_autosave_interval(30000);
});

// when doing presentations, I hode the header and toolbar
$([IPython.events]).on("app_initialized.NotebookApp", function () {
    // load the gist and toc extensions
    // console.log(performance.now().toString());
    IPython.load_extensions("gist", "toc");
    
    // hide cell toolbar select, I never use it
    // $('#ctb_select').hide().prev().hide();
    // $('div#header').hide();
    // $('div#maintoolbar').hide();
    IPython.CodeCell.options_default.cm_config.autoCloseBrackets = false;

    // autoscroll is my greatest shame:
    IPython.OutputArea.auto_scroll_threshold = 30;

    // ctrl-2/3 to toggle Python 2/3
    IPython.keyboard_manager.command_shortcuts.add_shortcut('ctrl-2', function (event) {
        $("#kernel-python2").find("a").click();
        return false;
    });
    IPython.keyboard_manager.command_shortcuts.add_shortcut('ctrl-3', function (event) {
        $("#kernel-python3").find("a").click();
        return false;
    });
});

