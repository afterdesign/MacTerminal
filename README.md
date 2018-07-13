# Sublime Text terminal plugin for macOS

Fully packaged and able to open in a new tab.

Install via [Package Control](http://wbond.net/sublime_packages/package_control), or clone the repo into your packages directory.


## Keybinding
Default keybinding is `ctrl+cmd+t`. To change it go to:

```
Sublime Text -> Preferences -> Package Settings -> termX -> Key Bindings
```
The default keybinding:

```
{ "keys": ["ctrl+super+t"], "command": "open_termx_terminal" }
```

## Settings
To change settings go to:

```
Sublime Text -> Preferences -> Package Settings -> termX -> Settings
```

**The available options:**
   
* `terminal`: Which application to run as your terminal. Available options:
    - `terminal` (the default)
    - `iterm`
    - `hyper`
* `osascript`: The path to osascript. Run `which osascript` in a terminal to find this path on your system. The default: `/usr/bin/osascript`
* `debug`: Print additional info to the Sublime console for debugging issues. The default is: `false`.

### Alternative terminals:

By default this plugin uses the native `Terminal.app`.
You can also use [iTerm2](http://iterm2.com) and (thanks to awesome [@JohnBehnke](https://github.com/JohnBehnke)) [Hyper](http://hyper.is).

### Terminal opening strategy

By default termX opens a new terminal in directory of the current file, however, you can open in the project directory as well via the command palette options.

You can change the default keybinding to open in the project directory via a keybinding arg:

```
{ "keys": ["ctrl+super+t"], "command": "open_termx_terminal", "args" : { "project": true } }
```

Or define a separate keybinding for that functionality:

```
{ "keys": ["ctrl+super+alt+t"], "command": "open_termx_terminal", "args" : { "project": true } }
```

## FAQ

1. Why is "Open in terminal" greyed out?
    
    This happens when there is no opened file.

2. It's not working for me?

    First of all enable `debug` mode. 
    To do this open your settings and add: `"debug": true`

    After this try to open terminal again. If it's not working
    open the Sublime Text console and open new issue with the log
    between ```---termX Debug Start---``` and ```---termX Debug End---```.

    You can always ping me on [twitter](http://twitter.com/afterdeign) or
    simply write an [issue on github](https://github.com/afterdesign/termX/issues).

## Contact

All info about me you can find on my "goto page": [http://malinowski.be](https://malinowski.be) or just ping me on twitter: [@afterdesign](http://twitter.com/afterdesign)

## License

Licensed under the [MIT license](http://opensource.org/licenses/MIT).
