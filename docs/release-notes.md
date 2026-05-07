---
sidebar_label: 'Release notes'
title: SAP BW Agent release notes
description: "Version history and change details for the SAP BW Agent, including new features, improvements, and bug fixes."
tags:
  - Reference
  - System Administrator
  - Agents
---

# SAP BW Agent release notes

## 22

### 22.1.0

2025 July

### What's new

:eight_spoked_asterisk: **INTPLT-614**: Enhanced the agent to ignore empty processes created in a process chain. Skipped status for processes is now handled when determining job completion.

### Why this matters

Empty and skipped processes in an SAP BW process chain no longer cause OpCon job completion to be reported incorrectly. Operations teams see job status that matches the actual chain outcome instead of false failures or hung jobs.

## 20

### 20.2.0

2022 June

:white_check_mark: Now prevents the agent from logging incorrect configuration information.

:white_check_mark: Fixed an issue in SAPBW agent where a change in the SAP schema definition file after an SAPBW system upgrade caused run time errors when starting SAPBW jobs and required a manual delete of the old schema file before restarting the agent. Now, the schema file is automatically created by the agent on startup, resulting in no schema errors when starting a job.

:white_check_mark: Fixed an issue in SAPBW agent where the logging component sometimes timed out waiting to gain access to the log and the agent stopped responding.

:white_check_mark: Fixed an issue where an upgrade of the SAP system to version 2021+ required new versions of the libraries to connect to the system from the agent.

### 20.0.0

2020 September

:white_check_mark: Fixed a performance issue in SAPBW agent where under significant load the jobs took much longer to report finished on the OpCon side.

## 19

### 19.1.0

2019 December

:eight_spoked_asterisk: As of Release 19.1.0, the SAP BW proxy service is no longer installed with the SAM.

:::warning
You need to upgrade to the latest version of the SAP BW agent to continue using this functionality.
:::

## Older versions

<details>
<summary>See all</summary>
<br />

### 18

#### 18.2.0

2018 September

:eight_spoked_asterisk: Added support in the SAP BW agent to re-attempt job start in case of failure during the job start attempt. Additionally, updated the INI file with two new Process Options parameters, JobStartRetryAttempts and JobStartRetryInterval, to support this feature.

:white_check_mark: Fixed an issue where if the connection to SAP became hung when attempting to start an SAP BW job, the agent re-attempted the job start, eventually causing the job to run multiple times on the SAP system. The agent has been updated to not re-attempt job start if the connection becomes hung and to instead fail with the new Exit Code 70008 (Job Start Failed due to hung SAP connection).

#### 18.1.2

2018 September

:white_check_mark: Fixed an issue where if the connection to SAP became hung when attempting to start an SAP BW job, the agent re-attempted the job start, eventually causing the job to run multiple times on the SAP system. The agent has been updated to not re-attempt job start if the connection becomes hung and to instead fail with the new Exit Code 70008 (Job Start Failed due to hung SAP connection).

:white_check_mark: Added support in the SAP BW agent to re-attempt job start in case of failure during the job start attempt. Additionally, updated the INI file with two new Process Options parameters, JobStartRetryAttempts and JobStartRetryInterval, to support this feature.

#### 18.1.0

2018 June

:white_check_mark: Fixed an issue with the SAP BW agent where an SAP BI OpCon job started a BI process chain and returned a status of 'success' even before the process chain was actually completed in SAP BI.

### 17

#### 17.1.0

2017 September

:white_check_mark: Fixed an issue where the SAP BW machine lost communication after a job was submitted.

:white_check_mark: Fixed an issue where the reporting of child process statuses to OpCon would take a long time, causing delays in SAP workflows.

### 16

#### 16.1.0

2016 September

:eight_spoked_asterisk: As of 16.1, the SAP BW agent is now a 64-bit version that is installed as a new product, and it does not upgrade the 32-bit version. Customers can uninstall the existing 32-bit version before installing the new 64-bit version, or install the 64-bit version to a new location and the existing 32-bit version is not affected.

:eight_spoked_asterisk: Added two new fields to the Advanced Machine Properties for all SAP machines. The R3Name and Group fields allow users to define connection information to the SAP load balancing server.

:white_check_mark: Fixed an issue where the SAP BW agent would crash while attempting to start inactive Process Chains.

#### 16.0.0

2016 June

:eight_spoked_asterisk: Updated the INI file with two new SAP System Settings parameters, R3Name and Group, to support SAP server groups.

</details>
