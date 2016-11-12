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

    var gotoDirectory = 'cd ' + argv.join(' ');
    var currentTerminalSession = Terminal.currentWindow.currentSession;
    SystemEvents.keystroke(
        gotoDirectory,
        {using: ""}
    );
    SystemEvents.keystroke(
        "return",
        {using: ""}
    );

    SystemEvents.keystroke(
        "clear",
        {using: ""}
    );

    SystemEvents.keystroke(
        "return",
        {using: ""}
    );


    // currentTerminalSession.write({text: gotoDirectory});
    // currentTerminalSession.write({text: 'clear'});
}
