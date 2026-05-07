---
sidebar_label: 'Kill command'
title: Kill command
description: "Use the kill.exe command to forcibly end a process on the SAP BW Agent machine."
tags:
  - Reference
  - System Administrator
  - Operations Staff
  - Agents
---

# Kill command

## What is it?

`kill.exe` is SMA's Windows version of the UNIX `kill` command. It forcibly ends a Windows process. Use it as a last resort when an SAP BW–related process will not stop through normal means and is blocking other work.

**Default location:** `\<Target Directory>\OpConxps\SAP BW LSAM\`

:::tip
To make `kill.exe` easier to access from any working directory, copy the file into the Windows or WINNT directory.
:::

## Syntax

```console
kill <pid>
```

| Token | Meaning |
|---|---|
| `kill` | The command. |
| `<pid>` | The process ID of the Windows process to kill. |

To find the process ID, view the processes in the Windows Task Manager.

## FAQs

**When should I use the kill command?**
As a last resort when an SAP BW–related Windows process will not stop through normal means and is blocking other work.

**Where is `kill.exe` by default?**
At `\<Target Directory>\OpConxps\SAP BW LSAM\`, where Target Directory was set during installation.
