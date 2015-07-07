// autosave every 30 seconds;
require(['notebook/js/cell', 'codemirror/keymap/sublime'], function (cell) {
    cell.Cell.options_default.cm_config.keyMap = 'sublime';
});

require(['jquery', 'base/js/namespace'], function ($) {

$([IPython.events]).on("notebook_loaded.Notebook", function () {
    IPython.notebook.default_cell_type = 'above';
    IPython.notebook.minimum_autosave_interval = 30000;
});

$([IPython.events]).on("app_initialized.NotebookApp", function () {
    // load the gist and toc extensions
    if (IPython.load_extensions) {
        IPython.load_extensions("gist", "toc");
    }
    
    // I have special CSS that only applies to the notebook
    $('body').addClass('notebook-body');
    
    // hide cell toolbar and cell type select, I never use it
    $('#cell_type').hide();
    $('#ctb_select').hide().prev().hide();
    // when doing presentations, I hide the header and toolbar
    // $('div#header').hide();
    // $('div#maintoolbar').hide();
    IPython.CodeCell.options_default.cm_config.autoCloseBrackets = false;

    // autoscroll is my greatest shame:
    IPython.OutputArea.auto_scroll_threshold = 0;
});
});