# Logging

The SAP BW LSAM service writes processing information to the SAPBWLSAM.log file and writes communication information to the SAPBWLSAMTrace.log file in the default log folder. Additionally, the SAP BW LSAM service writes all configuration information to the SAPBWLSAM.log file when it starts or when it detects a change to the SAPBWLSAM.ini file.

The SAP BW JORS service writes processing information to the SAPBWJORS.log file in the default log folder.

The most current log files have the names SAPBWLSAM.log, SAPBWLSAMTrace.log, and SAPBWJORS.log. The SAP BW LSAM and SAP BW JORS logs reside in the <Output Directory\>\\SAP BW LSAM\\Log\\ directory.

:::note
The Output Directory was configured during the installation. For more information, refer to [File Locations](https://help.smatechnologies.com/opcon/core/file-locations) in the **Concepts** online help.
:::

When log files reach a user-configured maximum size, the SAP BW LSAM and SAP BW JORS services archive the log files. The <Output Directory\>\\SAP BW LSAM\\Log\\Archives\\ folder is the location of all archived log files. A folder exists in the Archives folder for each day the SAP BW LSAM and SAP BW JORS services process. The folder names use the following naming convention: yyyy_mm_dd (Weekday). The logging mechanism generates the weekday name according to the machine's Regional Settings.

:::info
If the Regional Settings are set to English, an archive folder would have the following name:

```console
2008_01_11 (Friday)
```

If the Regional Settings are set to French, an archive folder would have the following name:

```console
2008_01_11 (Vendredi)
```

:::

As each log file fills up, the SAP BW LSAM and SAP BW JORS services move the log files into the current archive folder and renames them using the following naming convention: LogName StartTime - StopTime.log. For example, an SAP BW LSAM archive file for the time range of 12:58:16 to 13:58:00 would be SAPBWLSAM 125816 - 135800.log.

By default, the SAP BW LSAM and SAP BW JORS services retain 10 days of Archived logs. Configure the SAPBWLSAM.ini file to adjust this setting. For information on the configuration of debug/log settings, refer to [Debug Options](../administration/configuration-file.md/#debug-options).

:::caution
The SAP BW LSAM and SAP BW JORS services do not purge any archive folders if any files other than archived files are present.
:::

## Additional JORS log files

For each job the SAP BW LSAM executes, it creates a job log and job spool file in the Job Output folder. The LSAM names the job log files with the following syntax: <SAP JOBID\>.log. The LSAM names the job spool files with the following syntax: <SAP JOBID\>.spool.

When each job completes, the LSAM immediately archives the files. The <Output Directory\>\\SAP BW LSAM\\Job Output\\Archives\\ folder is the location of all archived log files.

:::note
The Output Directory was configured during the installation. For more information, refer to [File Locations](https://help.smatechnologies.com/opcon/core/file-locations) in the **Concepts** online help.
:::

A folder exists in the Archives folder for each day the SAP BW LSAM and SAP BW JORS services process. The folder names use the following naming convention: yyyy_mm_dd (Weekday). For example, the folder name for `January 11, 2008 would be 2008_01_11 (Friday).
