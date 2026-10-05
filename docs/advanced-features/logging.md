---
sidebar_label: 'Logging'
title: Logging
description: "Where the SAP BW Agent and JORS services write their logs, how archives are organized, and how log retention is controlled."
tags:
  - Reference
  - System Administrator
  - Operations Staff
  - Agents
---

# Logging

## What is it?

The SAP BW Agent and SAP BW JORS services produce log files that record processing, communication, and configuration events. This page covers what each log contains, where it lives, how the agent rotates and archives logs, and how to control retention.

## Log files at a glance

| File | Written by | Contents |
|---|---|---|
| `SAPBWLSAM.log` | SAP BW Agent service | Processing information, plus full configuration on service start or `.ini` change. |
| `SAPBWLSAMTrace.log` | SAP BW Agent service | Communication trace messages between the agent and SMANetCom. |
| `SAPBWJORS.log` | SAP BW JORS service | JORS processing information. |
| `SMASAPBWProxy.log` | SAP BW Agent service | Activity of the query proxy that runs inside the agent. |

**Default log location:** `\<Output Directory>\SAP BW LSAM\Log\`

:::note
The Output Directory is set during installation. For more information, refer to [File Locations](https://help.smatechnologies.com/opcon/core/file-locations) in the **Concepts** online help.
:::

## How rotation and archiving work

When a log file reaches the configured maximum size (`MaximumLogFileSize`), the agent and JORS services move it into a daily archive folder.

- **Archive root:** `\<Output Directory>\SAP BW LSAM\Log\Archives\`
- **Daily folder name:** `yyyy_mm_dd (Weekday)`. The weekday name is generated using the host's Regional Settings.
- **Archived file name:** `LogName StartTime - StopTime.log` — for example, `SAPBWLSAM 125816 - 135800.log` for the time range 12:58:16 to 13:58:00.

:::info
The weekday in the folder name follows the host's Regional Settings:

```console
2008_01_11 (Friday)
```

If the Regional Settings are set to French:

```console
2008_01_11 (Vendredi)
```
:::

## Retention

By default, the agent and JORS services retain **10 days** of archived logs. Adjust this with `ArchiveDaysToKeep` in `SAPBWLSAM.ini`. For more information, refer to [Debug Options](../administration/configuration-file.md#debug-options).

:::caution
For service logs, the agent and JORS services do not purge an archive folder that contains files other than archived logs. Job output archives are different: the agent deletes each dated folder under `JobOutput\Archives\` once it is older than **ArchiveDaysToKeep**, with everything in it.
:::

## Job-specific log files (JORS)

For each job the agent runs, it creates one job log file in the `JobOutput` folder beside the `Log` folder. There is no spool file.

- **Job log file name:** `<process chain name>#<log ID>.log`. Before the chain starts, the file is named with the SAM job ID and is renamed once the chain has a log ID.
- **Archive root:** `\<Output Directory>\SAP BW LSAM\JobOutput\Archives\`
- **Daily folder name:** `yyyy_mm_dd (Weekday)` — same convention as the agent log archives.

When each job completes, the agent immediately moves the files to the current daily archive folder.

## FAQs

**Where are the live log files?**
At `\<Output Directory>\SAP BW LSAM\Log\`, set during installation.

**How long are archived logs kept?**
By default, 10 days. Change this with `ArchiveDaysToKeep` in [Debug Options](../administration/configuration-file.md#debug-options).

**Why aren't my old archive folders being deleted?**
For service logs, the agent only purges archive folders that contain archived log files. Job output archive folders are deleted with all their contents once they are older than **ArchiveDaysToKeep**.

**Why does the weekday in the archive folder name look wrong?**
The agent uses the host's Regional Settings to generate the weekday name. Adjust the Regional Settings on the agent machine if you need a different language.
