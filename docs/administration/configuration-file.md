---
sidebar_label: 'Configuration file'
---

# SAPBWLSAM.ini configuration file

The SAPBWLSAM.ini is the SAP BW LSAM configuration filename. The location of the SAPBWLSAM.ini file is in the <Configuration Directory\>\\SAP BW LSAM\\ directory.

:::note
The Configuration Directory is based on where you installed your programs. For more information, refer to [File Locations](https://help.smatechnologies.com/opcon/core/latest/Files/Concepts/File%20Locations.htm) in the **Concepts** online help.
:::

The following settings are critical to the operation of the LSAM with OpCon:

- **MaximumNumberOfJobs**: This value determines the maximum number of jobs the LSAM is allowed to process concurrently.
- **SocketNumberToSAM**: This value is used for communication between the LSAM and the SMANetCom; consequently, the value for this setting and the value for the Socket Number on the Machines screen in the Enterprise Manager (EM) must match.
- **JORSSocket**: This value is used for communicating job output information with the Enterprise Manager (EM).

Modify the SAPBWLSAM.ini File

1. Right-click on the **Start** button.
2. Select **Explore** from the menu.
3. Browse to <Configuration Directory\>**\\SAP BW LSAM\\** for the desired SAP BW LSAM instance.
4. Find the **SAPBWLSAM.ini** file.
5. Right-click the file and select **Open With**.
6. Select an ASCII text editor (e.g., Notepad) from the **Choose the program you want use** list box.
7. In the text editor, make any necessary modifications to the .ini file. For complete information on the SAPBWLSAM.ini settings, refer to the related topics.
8. Use menu path: **File \> Save**.
9. **Close ☒** the text editor.

Encrypt the User for the SAP Account

1. Log in to the Enterprise Manager.
2. Use menu path: **EnterpriseManager \> Password Update \> Password encryption tool**.
3. *(Optional)* Mark the **Visible** check box to make the password characters visible in the Password encryption tool.
4. In **Password** field, enter the password.
5. Click **Encrypt**.
6. To copy the encrypted password, click the **Copy to Clipboard** button.
7. Open the **SAPBWLSAM.ini** file.
8. Locate **User** under the **SAP System** settings in the SAPBWLSAM.ini file in the Text editor.
9. Delete the default value for the User name.
10. Paste the encrypted code as the User name.
    - Right-click and select **paste** **- or -**
    - Press **CTRL+V**.

Encrypt the Password for the SAP Account

1. Log in to the Enterprise Manager:
2. Use menu path: **EnterpriseManager \> Password Update \> Password encryption tool**.
3. *(Optional)* Mark the **Visible** check box to make the password characters visible in the Password encryption tool.
4. In **Password** field, enter the password.
5. Click **Encrypt**.
6. To copy the encrypted password, click the **Copy to Clipboard**` button.
7. Open the **SAPBWLSAM.ini** file.
8. Locate **Password** under the **SAP System** settings in the SAPBWLSAM.ini file in the Text editor.
9. Delete the default value for the Password.
10. Paste the encrypted code as the Password.
    - Right-click and select **paste** **- or -**
    - Press **CRTL+V**.

## General Settings

The following table contains the basic settings for the SAP BW LSAM.

|[General Settings]|Default|Dynamic|Required|Description|
|--- |--- |--- |--- |--- |
|DisplaySerivceName|SMA OpCon Agent for SAP BW|N|Y|The service name displayed in the Service Control Manager. The name must be unique for each SAP BW LSAM. Do not change this unless there are more than one LSAM on this physical machine.|
|ShortServiceName|SMA_SAPBWLSAM|N|Y|The hidden, internal (i.e., registry) service name Windows refers to. The name must be unique for each SAP BW LSAM. Do not change this unless there is more than one LSAM on this physical machine.|
|MaximumNumberOfJobs|10|N|Y|Defines the maximum number of jobs the LSAM can simultaneously manage. When setting the MaximumNumberOfJobs, consider the SAP BW LSAM machine's processor speed and memory (RAM) size. No jobs process when this setting is zero. Although the maximum value allowed is 500, typical customer usage ranges from 10 to 30 jobs.|
|JobStatusCheckInterval|30|N|Y|Defines the interval in seconds at which the SAP BW LSAM polls the SAP system for each job's status. Supported values range from 5 to 300.|
|CaptureOutputBeforeJobFin|FALSE|Y|N|This setting determines whether the LSAM should retrieve all  job logs and spool listings from the SAP system before marking the job as finished in OpCon. Set this to TRUE to capture job output before the job is marked finished in OpCon. Set this to FALSE to capture job output after the job is marked finished in OpCon.|

## TCP/IP Parameters

The following table contains the network settings for the SAP BW LSAM.

:::warning
Enter all alphabetic TCP/IP parameter values in uppercase. The SAP BW LSAM service does not start if the values are in lowercase.
:::

|[TCP/IP Parameters]|Default|Dynamic|Required|Description|
|--- |--- |--- |--- |--- |
|SocketNumberToSAM|14100|N|Y|Defines the socket number through which the LSAM and the SMANetCom communicate. This number must match the Machine's socket number defined in the OpCon Enterprise Manager. If there are multiple SAP BW LSAMs installed on one machine, each LSAM must have a unique value. For an up-to-date list of unused ports, please refer to the Internet Assigned Numbers Authority at www.iana.org.|
|QueryListenerPort|14101|N|N|Defines the port on which the SAP BW LSAM listens for proxy requests. Note: Firewall settings will need to allow connections on this port on the SAP BW LSAM.|
|AllowedIPAddress_1|ANY|Y|N|Determines if communication from the SMANetCom to the LSAM is restricted to one or more TCP/IP addresses. If ANY is specified, the LSAM accepts communication from any TCP/IP address. If a specific TCP/IP address is defined (e.g., 126.40.90.231), the LSAM only accepts communication from the specified address. The LSAM refuses a connection if communication is attempted from another address. This definition enhances communication security by refusing communications from other TCP/IP addresses. If multiple SAMs are on a network, this address ensures the LSAM is only accepting messages from the intended SMANetCom. This parameter is case-sensitive.|
|AllowedIPAddress_2||Y|N|Same as Address_1 explanation.|
|AllowedIPAddress_3||Y|N|Same as Address_1 explanation.|
|AllowedIPAddress_4||Y|N|Same as Address_1 explanation.|
|AllowedIPAddress_5||Y|N|Same as Address_1 explanation.|

## Debug Options

The following table contains the log and trace settings for troubleshooting the SAP BW LSAM.

:::warning
Enter all alphabetic debug option parameter values in uppercase. The SAP BW LSAM services do not start if the values are in lowercase.
:::

|[Debug Options]|Default|Dynamic|Required|Description|
|--- |--- |--- |--- |--- |
|MaximumLogFileSize|150000|Y|N|Sets the maximum size in bytes for each LSAM log file. Prevents the accumulation of log messages in a single file. This is a site-specific setting.|
|ArchiveDaystoKeep|10|Y|N|Determine how many archive folders should be retained. Each time it archives a log, the SAP BW LSAM checks for expired archive folders to delete.|
|TraceSAMMessages|ON|N|N|Enables/Disables tracing of messages to and from SMANetCom. The SAPLSAMTrace.log file contains the trace messages. If ON, the LSAM traces messages. If OFF, the LSAM does not trace messages.|
|TraceLevel|0|Y|N|Enables/Disables tracing of any debug messages created by the LSAM. The SAPBWLSAM.log file contains the traced messages. If 0, only the LSAM failure debug messages are traced (minimal log). If 1, additional LSAM debug messages are traced. If 2, detailed LSAM debug messages are traced.|

## Process Options

The following table contains the process creation options for SAP BW
chains.

|[Process Options]|Default|Dynamic|Required|Description|
|--- |--- |--- |--- |--- |
|TreatEmptyProcessStatusFailed|TRUE|Y|N|SAP returns an empty status for some of the processes in a chain which can mean Process has failed or is never going to start (ignore). Set this to TRUE if empty status should be treated as failed process. Set this to FALSE if empty status should be ignored as that process will not start as part of the chain.|
|UseActualState|FALSE|Y|N|Determines whether to use the ActualState field or the State field in the SAP response to determine the status of the process chain. Set this to TRUE to use the ActualState field in the SAP response. Set this to FALSE to use the State field  in the SAP response.|
|JobStartRetryAttempts|3|Y|N|Defines the number of attempts when the LSAM re-attempts job start after the JobStartRetryInterval in case the initial attempt to start the process chain failed.|
|JobStartRetryInterval|30|Y|N|Defines the interval in seconds at which the SAP BW LSAM re-attmpts job start between JobStartRetryAttempts in case the initial attempt to start the process chain failed.|

## Process Creation Options

The following table contains the process creation options for SAP BW chains.

|[Process Creation Options]|Default|Dynamic|Required|Description|
|--- |--- |--- |--- |--- |
|CaptureJobOutput|TRUE|Y|N|Enables/Disables the creation of job output files for each OpCon job. If set to TRUE, the LSAM saves the output from each started job in a subdirectory (under the MSLSAM directory) called JobOutput. The LSAM saves each job's output to unique files named with the following syntax:"*OpCon job name up to 12 chars*_*unique number*.TXT". View Job Output feature works only if this setting is TRUE.|

## SAP System Settings

The following table contains the LSAM connection information to the SAP system.

|[SAP System]|Default|Dynamic|Required|Description|
|--- |--- |--- |--- |--- |
|Name|SAPSYSTEM|N|Y|The name of the SAP BW machine as defined in the OpCon Enterprise Manager (EM).|
|ClientID|0|N|Y|The Client ID for connecting to the SAP System. Valid values are three-digit numbers ranging from 000 to 999.|
|Gateway|/H/127.0.0.1/H/test801|N|Y|Defines the full connection string for SAP system. If connecting to an SAP machine within a network, a standard TCP/IP address is acceptable. If connecting through an ISDN line or some other mechanism, a complete router connection string is required. The following is a router connection string: /H/127.0.0.1/H/cpce801. cpce801 is the SAP machine name. 127.0.0.1 is the TCP/IP address of the SAP machine.|
|SystemNumber|0|N|Y|The System number for connecting to SAP system. Valid values are two-digit numbers ranging from 00 to 99.|
|R3Name||N|N|When an MSHOST is defined for the Gateway setting, the value for the R3Name is required to define the SAP R/3 instance name.|
|Group||N|N|Optionally defines the name of the SAP server group for a load balancing connection when an MSHOST is defined for the Gateway setting.|
|RFCTrace|0|N|Y|Enables/Disables SAP RFC tracing. If 0, SAP RFC tracing does not occur. If 1, SAP RFC tracing occurs.|
|User||N|Y|Sets the User for connecting to the SAP system. The LSAM requires a user with the S_XMI_ALL privilege. To encrypt the User name, follow the procedure in Encrypt the User for the SAP Account.|
|Password||N|Y|Sets the password for the User connecting to the SAP system. To encrypt the Password, follow the procedure in Encrypt the Password for the SAP Account.|
|Version|3.0|N|N|Describes the version of XBP interface used for interacting with the SAP system. Valid values are 2.0 or 3.0.|

## JORS Settings

The following table contains the network settings for the SAP BW JORS component.

| [JORS Settings] | Default | Dynamic | Required | Description |
|---|---|---|---|---|---|
| JORSSocket | 14110 | N | Y | Defines the socket number used for communicating job output information with the Enterprise Manager (EM). This number must match the Machine's JORS Port Number defined in the OpCon Enterprise Manager. If there are multiple SAP BW LSAMs installed on one machine, each LSAM requires a unique JORS socket number.

:::note
The JORSSocket needs to be set in both the LSAM ini file and the advanced machine settings in the EM. For more information on modifying the JORSSocket number, refer to the Configuring Advanced Machine Parameters and Properties in the Enterprise Manager online help.
:::
