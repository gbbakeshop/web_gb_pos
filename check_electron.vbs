Set objWMIService = GetObject("winmgmts:\\.\root\cimv2")
Set colItems = objWMIService.ExecQuery("Select * From Win32_Process Where Name = 'electron.exe'")

If colItems.Count > 0 Then
    WScript.Echo "Electron is already running. Closing existing instance..."
    For Each objItem In colItems
        objItem.Terminate
    Next
    WScript.Sleep 2000  ' Wait for 2 seconds to allow Electron to close
End If
