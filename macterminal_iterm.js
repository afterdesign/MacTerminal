/* global Application, delay */

function run(argv) {

    if (argv.length == 0) {
        console.log("missing path");
        return;
    }

    var Terminal = Application('iTerm');
    var SystemEvents = Application('System Events');

    if(! Terminal.frontmost()) {
        Terminal.activate();
        delay(1);
    }

    SystemEvents.keystroke(
        "t",
        {using: "command down"}
    );

    var gotoDirectory = 'cd ' + argv.join(' ');
    if (parseInt(Terminal.version().replace(/\./g,'')) >= 2920150414) {
        // Current iTerm2 - 2.9.20150414 or later 
        var currentTerminalSession = Terminal.currentWindow.currentSession;
    }
    else {
        // Old iTerm2 - Prior to 2.9.20150414 
        var currentTerminalSession = Terminal.currentTerminal().currentSession();
    }
    currentTerminalSession.write({text: gotoDirectory});
    currentTerminalSession.write({text: 'clear'});
}
