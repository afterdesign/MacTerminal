on run argv
    if (count of argv) is 1 then
        set folderName to "Desktop"
    end if
    
    if folderName is missing value then
        return
    end if
    
    tell application "Hyper"
        if not frontmost then
            activate
            delay (1)
        end if
    
        tell application "System Events"
            keystroke "t" using command down
            delay (1)
            keystroke "cd Desktop"
            keystroke return
            keystroke "clear"
            keystroke return
        end tell
    
    
    end tell


end run