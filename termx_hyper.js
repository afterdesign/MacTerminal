/* global Application, delay */

function run(argv) {

    if (argv.length === 0) {
        return;
    }

    var Terminal = Application('Hyper');
    var SystemEvents = Application('System Events');

    if(! Terminal.frontmost()) {
        Terminal.activate();
        delay(1);
    }

    SystemEvents.keystroke(
        "t",
        {using: "command down"}
    );
    delay(1)

    var gotoDirectory = 'cd ' + "Desktop";

    SystemEvents.keystroke(
        gotoDirectory
    );

    SystemEvents.keyCode(36);
    SystemEvents.keystroke(
        "clear"
    );

    SystemEvents.keyCode(36);
