require([
    "jquery",
    "base/js/namespace",
    "base/js/events",
    ], function ($, IPython) {
        
        var load = function () {
            if (!IPython.events) {
                // interim fix: wait for events to exist
                setTimeout(load, 100);
                return;
            }
            var events = $([IPython.events]);
            // load the gist and toc extensions
            IPython.load_extensions("gist", "toc", "celltags");
            
            events.on("app_initialized.NotebookApp", function () {
                IPython.CodeCell.options_default.cm_config.lineWrapping = true;
                // autoscroll is my greatest shame:
                IPython.OutputArea.auto_scroll_threshold = 0;
            
                // hide cell toolbar select, I never use it
                $('#ctb_select').hide().prev().hide();
            
                // when doing presentations, I hide the header and toolbar
                // $('div#header').hide();
                // $('div#maintoolbar').hide();
            });
        
            events.on("notebook_loaded.Notebook", function () {
                // autosave every 30 seconds;
                IPython.notebook.minimum_autosave_interval = 30000;
            });
        }
        load();
    }
);
