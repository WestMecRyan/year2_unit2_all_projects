| Unix Command             | PowerShell (Full)              | PowerShell (Short)               | Common Flags                        | Notes                                                                   |
| ------------------------ | ------------------------------ | -------------------------------- | ----------------------------------- | ----------------------------------------------------------------------- |
| `cat`                    | `Get-Content`                  | `gc`, `type`                     | `-Path` (`-p`)                      |                                                                         |
| `ls`                     | `Get-ChildItem`                | `gci`, `dir`, `ls`               | `-Recurse` (`-r`), `-Force` (`-fo`) |                                                                         |
| `cp`                     | `Copy-Item`                    | `copy`, `cp`                     | `-Recurse` (`-r`), `-Force` (`-fo`) |                                                                         |
| `mv`                     | `Move-Item`                    | `move`, `mv`                     | `-Force` (`-fo`)                    |                                                                         |
| `rm`                     | `Remove-Item`                  | `del`, `erase`, `rd`, `ri`, `rm` | `-Recurse` (`-r`), `-Force` (`-fo`) |                                                                         |
| `mkdir`                  | `New-Item -ItemType Directory` | `md`, `mkdir`                    | `-Force` (`-fo`)                    |                                                                         |
| `touch`                  | `New-Item -ItemType File`      | `ni`                             | `-Force` (`-fo`)                    |                                                                         |
| `echo`                   | `Write-Output`                 | `echo`, `write`                  |                                     |                                                                         |
| `grep`                   | `Select-String`                | `sls`                            | `-Pattern` (`-p`), `-CaseSensitive` |                                                                         |
| `find`                   | `Get-ChildItem`                | `gci`                            | `-Recurse` (`-r`), `-Filter`        | Used with pipes and `Where-Object` for complex searches                 |
| `pwd`                    | `Get-Location`                 | `gl`, `pwd`                      |                                     |                                                                         |
| `cd`                     | `Set-Location`                 | `cd`, `chdir`, `sl`              |                                     |                                                                         |
| `man`                    | `Get-Help`                     | `help`                           | `-Full`, `-Online`                  |                                                                         |
| `chmod`                  | `Set-Acl`                      |                                  |                                     | More complex in PowerShell, often uses `Get-Acl` and `Set-Acl` together |
| `wget`                   | `Invoke-WebRequest`            | `iwr`, `curl`, `wget`            | `-Uri`, `-OutFile`                  |                                                                         |
| `>` (output redirection) | `Out-File`                     | `>`                              | `-Append`                           | `>` works in PowerShell too                                             |
| `ps`                     | `Get-Process`                  | `ps`, `gps`                      |                                     |                                                                         |
| `kill`                   | `Stop-Process`                 | `kill`, `spps`                   | `-Force` (`-f`)                     |                                                                         |
| `df`                     | `Get-PSDrive`                  | `gdr`                            |                                     | For disk space, often used with `Select-Object`                         |
| `mount`                  | `New-PSDrive`                  |                                  | `-PSProvider`, `-Root`, `-Name`     |                                                                         |
| `exit`                   | `Exit`                         | `exit`                           |                                     |                                                                         |
| `sudo`                   | `Start-Process`                |                                  | `-Verb RunAs`                       | Often used with `-FilePath "powershell"`                                |
| `source`                 | `. ` (dot-space)               |                                  |                                     | Used for script execution in current scope                              |

Notes:

1. PowerShell commands are not case-sensitive, unlike Unix commands.
2. Many PowerShell cmdlets use the format `Verb-Noun`.
3. The `-Force` flag is common in PowerShell for operations that might otherwise prompt for confirmation.
4. PowerShell aliases (short forms) can be viewed or set using `Get-Alias` and `Set-Alias`.
5. Some Unix commands (like `sed`, `awk`) don't have direct equivalents in PowerShell and often require more complex scripting.
