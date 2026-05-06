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

By default, the agent and JORS services retain **10 days** of archived logs. Adjust this with `ArchiveDaystoKeep` in `SAPBWLSAM.ini`. For more information, refer to [Debug Options](../administration/configuration-file.md#debug-options).

:::caution
The agent and JORS services do not purge any archive folder that contains files other than archived logs. If you keep notes or other files in those folders, expired archives are not removed.
:::

## Job-specific log files (JORS)

For each job the agent runs, it creates a job log and job spool file in the `Job Output` folder.

- **Job log file name:** `<SAP JOBID>.log`
- **Job spool file name:** `<SAP JOBID>.spool`
- **Archive root:** `\<Output Directory>\SAP BW LSAM\Job Output\Archives\`
- **Daily folder name:** `yyyy_mm_dd (Weekday)` — same convention as the agent log archives.

When each job completes, the agent immediately moves the files to the current daily archive folder.

## FAQs

**Where are the live log files?**
At `\<Output Directory>\SAP BW LSAM\Log\`, set during installation.

**How long are archived logs kept?**
By default, 10 days. Change this with `ArchiveDaystoKeep` in [Debug Options](../administration/configuration-file.md#debug-options).

**Why aren't my old archive folders being deleted?**
The agent only purges archive folders that contain archived log files. If a folder has any other content, the agent leaves it alone.

**Why does the weekday in the archive folder name look wrong?**
The agent uses the host's Regional Settings to generate the weekday name. Adjust the Regional Settings on the agent machine if you need a different language.
