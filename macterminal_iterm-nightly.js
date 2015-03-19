/* global Application, delay */

function run(argv) {

    if (argv.length === 0) {
        console.log("missing path");
        return;
    }

    var Terminal = Application('iTerm');
    var SystemEvents = Application('System Events');

    SystemEvents.keystroke(
        "t",
        {using: "command down"}
    );

    var gotoDirectory = 'cd ' + argv.join(' ');
    var currentTerminalSession = Terminal.currentWindow.currentSession;
    currentTerminalSession.write({text: gotoDirectory});
    currentTerminalSession.write({text: 'clear'});
    Terminal.activate();
}
