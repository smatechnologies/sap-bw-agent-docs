---
sidebar_label: 'Configuration file'
title: SAPBWLSAM.ini configuration file
description: "Reference for the SAPBWLSAM.ini settings that control SAP BW Agent service behavior, networking, logging, and SAP system connection."
tags:
  - Reference
  - System Administrator
  - Agents
  - System Configuration
---

# SAPBWLSAM.ini configuration file

## What is it?

`SAPBWLSAM.ini` is the SAP BW Agent's configuration file. It controls service identification, networking, logging, the SAP system connection, and the JORS component.

**Location:** `\<Configuration Directory>\SAP BW LSAM\SAPBWLSAM.ini`

:::note
The Configuration Directory is set during installation. For more information, refer to [File Locations](https://help.smatechnologies.com/opcon/core/file-locations) in the **Concepts** online help.
:::

## Critical settings

These three settings control the agent's most important behavior:

| Setting | What it controls |
|---|---|
| `MaximumNumberOfJobs` | Maximum number of jobs the agent can process concurrently. |
| `SocketNumberToSAM` | Communication socket between the agent and SMANetCom. Must match the **Socket Number** on the **Machines** screen in the Enterprise Manager. |
| `JORSSocket` | Socket used to communicate job output information with the Enterprise Manager. |

## How to update the file

To modify the configuration file, complete the following steps:

1. Right-click the **Start** button.
2. Select **Explore** from the menu.
3. Browse to **\<Configuration Directory>\\SAP BW LSAM\\** for the desired SAP BW Agent instance.
4. Find the **SAPBWLSAM.ini** file.
5. Right-click the file and select **Open With**.
6. Select an ASCII text editor (for example, Notepad).
7. Make any necessary modifications. For details on each setting, refer to the parameter tables below.
8. Go to **File** > **Save**.
9. Close the text editor. Settings whose **Dynamic** column is **N** require restarting the agent service to take effect.

## Encrypt the SAP user name

To encrypt the user name for the SAP account, complete the following steps:

1. Log in to the Enterprise Manager.
2. Go to **EnterpriseManager** > **Password Update** > **Password encryption tool**.
3. (Optional) Select the **Visible** option to show password characters as you type.
4. In the **Password** field, enter the password.
5. Select **Encrypt**.
6. Select the **Copy to Clipboard** button.
7. Open the **SAPBWLSAM.ini** file.
8. Locate **User** under the **SAP System** settings.
9. Delete the default value.
10. Paste the encrypted value as the new **User** value (right-click and select **Paste**, or press **Ctrl+V**).

## Encrypt the SAP password

To encrypt the password for the SAP account, complete the following steps:

1. Log in to the Enterprise Manager.
2. Go to **EnterpriseManager** > **Password Update** > **Password encryption tool**.
3. (Optional) Select the **Visible** option.
4. In the **Password** field, enter the password.
5. Select **Encrypt**.
6. Select the **Copy to Clipboard** button.
7. Open the **SAPBWLSAM.ini** file.
8. Locate **Password** under the **SAP System** settings.
9. Delete the default value.
10. Paste the encrypted value as the new **Password** value (right-click and select **Paste**, or press **Ctrl+V**).

---

## Parameter reference

The tables below document each section of `SAPBWLSAM.ini`.

> **Dynamic** = **Y** means the agent picks up changes without a service restart. **Dynamic** = **N** requires restarting the agent service.
>
> **Required** = **Y** means the setting must be present and valid for the agent to function.

### General Settings

| Setting | Default | Dynamic | Required | Description |
|---|---|---|---|---|
| `DisplayServiceName` | `SMA OpCon Agent for SAP BW` | N | Y | The service name displayed in the Service Control Manager. Must be unique for each SAP BW Agent on the same host. |
| `ShortServiceName` | `SMA_SAPBWLSAM` | N | Y | The hidden, internal (registry) service name Windows refers to. Must be unique for each SAP BW Agent on the same host. |
| `MaximumNumberOfJobs` | `10` | N | Y | Maximum number of jobs the agent can manage concurrently. Maximum allowed is 500; typical customer usage is 10–30. Setting to 0 prevents any job processing. Consider the host's CPU and memory when sizing this value. |
| `JobStatusCheckInterval` | `30` | N | Y | Interval in seconds at which the agent polls the SAP system for each job's status. Supported values: 5–300. |
| `CaptureOutputBeforeJobFin` | `FALSE` | Y | N | If **TRUE**, the agent retrieves all job logs and spool listings before marking the job as finished in OpCon. If **FALSE**, the agent captures job output after the job is marked finished. |

### TCP/IP Parameters

:::warning
Enter all alphabetic TCP/IP parameter values in **uppercase**. The SAP BW Agent service does not start if these values are lowercase.
:::

| Setting | Default | Dynamic | Required | Description |
|---|---|---|---|---|
| `SocketNumberToSAM` | `14100` | N | Y | The socket through which the agent and SMANetCom communicate. Must match the machine's socket number defined in OpCon Enterprise Manager. Must be unique across SAP BW Agents on the same host. For an up-to-date list of unused ports, refer to the Internet Assigned Numbers Authority at www.iana.org. |
| `QueryListenerPort` | `14101` | N | N | Port on which the SAP BW Agent listens for proxy requests. Firewall settings must allow inbound connections on this port. |
| `AllowedIPAddress_1` | `ANY` | Y | N | Restricts which TCP/IP addresses can communicate with the agent. **ANY** allows any source address. Setting a specific address (for example, `126.40.90.231`) restricts communication to that address. The agent rejects connections from any other address. Case-sensitive. |
| `AllowedIPAddress_2` |  | Y | N | Same behavior as `AllowedIPAddress_1`. |
| `AllowedIPAddress_3` |  | Y | N | Same behavior as `AllowedIPAddress_1`. |
| `AllowedIPAddress_4` |  | Y | N | Same behavior as `AllowedIPAddress_1`. |
| `AllowedIPAddress_5` |  | Y | N | Same behavior as `AllowedIPAddress_1`. |

### Debug Options

:::warning
Enter all alphabetic debug option parameter values in **uppercase**. The SAP BW Agent services do not start if these values are lowercase.
:::

| Setting | Default | Dynamic | Required | Description |
|---|---|---|---|---|
| `MaximumLogFileSize` | `150000` | Y | N | Maximum size in bytes for each agent log file before it is rotated and archived. Site-specific. |
| `ArchiveDaystoKeep` | `10` | Y | N | Number of archive folders to retain. The agent checks for expired archive folders each time it archives a log. |
| `TraceSAMMessages` | `ON` | N | N | Trace messages exchanged with SMANetCom. **ON** writes traces to `SAPLSAMTrace.log`. **OFF** disables tracing. |
| `TraceLevel` | `0` | Y | N | Verbosity of agent debug messages in `SAPBWLSAM.log`. **0** = failure messages only. **1** = additional debug messages. **2** = detailed debug messages. |

### Process Options

| Setting | Default | Dynamic | Required | Description |
|---|---|---|---|---|
| `TreatEmptyProcessStatusFailed` | `TRUE` | Y | N | SAP returns an empty status for some processes in a chain — this can mean the process failed or that it never starts. **TRUE** treats empty status as a failed process. **FALSE** ignores it (the process will not start as part of the chain). |
| `UseActualState` | `FALSE` | Y | N | **TRUE** uses the `ActualState` field in the SAP response to determine the status of the process chain. **FALSE** uses the `State` field. |
| `JobStartRetryAttempts` | `3` | Y | N | Number of times the agent re-attempts job start after `JobStartRetryInterval` if the initial attempt to start the process chain failed. |
| `JobStartRetryInterval` | `30` | Y | N | Interval in seconds between job start retry attempts. |

### Process Creation Options

| Setting | Default | Dynamic | Required | Description |
|---|---|---|---|---|
| `CaptureJobOutput` | `TRUE` | Y | N | **TRUE** writes each job's output to a unique file in the `MSLSAM\JobOutput` subdirectory using the syntax `<OpCon job name up to 12 chars>_<unique number>.TXT`. The View Job Output feature only works when this is **TRUE**. |

### SAP System Settings {#sap-system-settings}

| Setting | Default | Dynamic | Required | Description |
|---|---|---|---|---|
| `Name` | `SAPSYSTEM` | N | Y | The name of the SAP BW machine as defined in OpCon Enterprise Manager. |
| `ClientID` | `0` | N | Y | The Client ID for connecting to the SAP system. Three-digit number, 000–999. |
| `Gateway` | `/H/127.0.0.1/H/test801` | N | Y | Full connection string for the SAP system. For a direct TCP/IP connection within a network, a standard address is acceptable. For ISDN or other routed connections, use a router string such as `/H/127.0.0.1/H/cpce801` (where `cpce801` is the SAP machine name and `127.0.0.1` is its TCP/IP address). |
| `SystemNumber` | `0` | N | Y | SAP System number. Two-digit number, 00–99. |
| `R3Name` |  | N | N | Required when an MSHOST is defined for `Gateway`. Defines the SAP R/3 instance name. |
| `Group` |  | N | N | Optional. Name of the SAP server group for a load-balanced connection when an MSHOST is defined for `Gateway`. |
| `RFCTrace` | `0` | N | Y | **0** disables SAP RFC tracing. **1** enables it. |
| `User` |  | N | Y | The user for connecting to the SAP system. Must have the `S_XMI_ALL` privilege. To encrypt, refer to [Encrypt the SAP user name](#encrypt-the-sap-user-name). |
| `Password` |  | N | Y | The password for the user connecting to the SAP system. To encrypt, refer to [Encrypt the SAP password](#encrypt-the-sap-password). |
| `Version` | `3.0` | N | N | XBP interface version used to interact with the SAP system. Valid values: `2.0` or `3.0`. |

### JORS Settings {#jors-settings}

| Setting | Default | Dynamic | Required | Description |
|---|---|---|---|---|
| `JORSSocket` | `14110` | N | Y | Socket used to communicate job output information with the Enterprise Manager. Must match the machine's **JORS Port Number** in OpCon Enterprise Manager. Must be unique across SAP BW Agents on the same host. |

:::note
Set `JORSSocket` in **both** the agent .ini file and the advanced machine settings in the Enterprise Manager. Refer to **Configuring Advanced Machine Parameters and Properties** in the Enterprise Manager online help.
:::

---

## FAQs

**Where is the SAPBWLSAM.ini file located?**
At `\<Configuration Directory>\SAP BW LSAM\SAPBWLSAM.ini`, where Configuration Directory was set during installation.

**What does Dynamic mean in the parameter tables?**
**Dynamic = Y** means the agent picks up changes to the parameter without a service restart. **Dynamic = N** means the agent service must be restarted for the change to take effect.

**Why won't my agent service start after I edited the .ini file?**
Confirm that all alphabetic values in the **TCP/IP Parameters** and **Debug Options** sections are uppercase. The service does not start if those values are in lowercase.

**Where do I store the SAP user credentials?**
Encrypt the user name and password using the **Password encryption tool** in the Enterprise Manager, then paste the encrypted values into **User** and **Password** under **SAP System Settings**.

## Glossary

> **SAM** — Schedule Activity Monitor. The OpCon server component that schedules jobs and routes messages between the OpCon server and the agent.
>
> **SMANetCom** — The communication component on the OpCon server side that exchanges messages with agents.
>
> **JORS** — Job Output Retrieval System. Used by the Enterprise Manager to retrieve job output from the agent.
>
> **XBP** — SAP's eXternal Background Processing interface. The SAP BW Agent uses XBP 2.0 (or 3.0) to manage SAP BW jobs.
