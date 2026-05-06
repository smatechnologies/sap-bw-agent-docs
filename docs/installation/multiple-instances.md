---
sidebar_label: 'Multiple instances'
title: Additional SAP BW Agent instances
description: "Install and upgrade additional SAP BW Agent instances on the same Windows machine, both through the installer and as a manual deployment."
tags:
  - Procedural
  - System Administrator
  - Installation
  - Upgrade
  - Agents
---

# Additional SAP BW Agent instances

## What is it?

You can run multiple SAP BW Agent instances on a single Windows host when you need to connect to more than one SAP BW system from the same machine. This page covers two paths:

- **Installer-based** *(recommended)* — Run the installer again. The installer transforms automatically to install another instance.
- **Manual deployment** — Supported for environments that already use this method. Higher maintenance overhead than the installer-based path.

## What must be unique across instances

Every instance on the same host requires a unique value for each of these:

- `ShortServiceName`
- `DisplayServiceName`
- `SocketNumberToSAM`
- `JORSSocket`
- The OpCon machine name and the **Socket Number** in the OpCon machine record

---

## Installer-based: install an additional instance

To install an additional agent instance using the installer, complete the following steps:

1. Repeat the installation procedure in [Install the SAP BW agent](new-installation.md#machine). The installation package transforms automatically to install a new instance.
2. Define a new machine record in OpCon with a unique name and port number. Refer to [Step 3 — Create the machine record in OpCon](new-installation.md#machine).

The installer-based path is the recommended method for new deployments.

---

## Manual deployment

If you have previously installed additional agents to unique directories, you can continue using this method. SMA supports it; however, it requires more maintenance overhead than the installer-based path.

### Step 1 — Create the directory

To create the directory for an additional agent, complete the following steps:

1. Right-click the **Start** button on the application server.
2. Select **Explore** from the menu.
3. Browse to **OpConxps \<Target Directory>** in the explorer window.
4. Go to **File** > **New** > **Folder**.
5. Name the folder **SAP BW LSAM \<custom directory>** (for example, `SAPBWLSAM14200`).
6. Browse to **OpConxps \<Configuration Directory>**.
7. Go to **File** > **New** > **Folder**.
8. Name the new directory the same as the new program file directory (for example, `SAPBWLSAM14200`).

### Step 2 — Copy required files

To copy the agent files into the new directory, complete the following steps:

1. Browse to the first agent's **\<Target Directory>**.
2. Go to **Edit** > **Select All**.
3. Go to **Edit** > **Copy**.
4. Browse to the new agent's **\<Target Directory>**.
5. Go to **Edit** > **Paste**.
6. Browse to the first agent's **\<Configuration Directory>**.
7. Go to **Edit** > **Select All**, then go to **Edit** > **Copy**.
8. Browse to the new agent's **\<Configuration Directory>**.
9. Go to **Edit** > **Paste**.

### Step 3 — Modify the new agent's configuration file

To configure the new agent, complete the following steps:

1. Browse to **\<Configuration Directory>\\\<custom directory>\\**.
2. Find the **SAPBWLSAM.ini** file.
3. Right-click the file and select **Open With**.
4. Select an ASCII text editor (for example, Notepad).
5. Make any necessary modifications. For details on each setting, refer to the [SAP BW Agent configuration file](../administration/configuration-file.md).
6. Define a unique **ShortServiceName** in the **General Settings** section.
7. Define a unique **DisplayServiceName**.
8. Define a unique **SocketNumberToSAM** in the **TCP/IP Parameters** section.
9. Define a unique **JORSSocket** in the **JORS Settings** section.
10. Configure the connection information for the SAP BW system. Refer to [SAP System Settings](../administration/configuration-file.md#sap-system-settings).
11. Go to **File** > **Save**.
12. Close the editor.

### Step 4 — Register and start the new service

To register the new agent as a Windows service and start it, complete the following steps:

1. Select **Start**.
2. Enter `cmd` in the search field to open a command window.
3. Change the directory to the new agent's directory.
4. Enter the following command:

    ```console
    regsvc.cmd -install
    ```

5. Close the command window.
6. Go to **Start** > **Administrative Tools** > **Server Manager**.
7. Expand (+) the **Configuration** option.
8. Select **Services**.
9. In the **Services** list, select the new Display Service Name for the agent.
10. Go to **Action** > **Start**.
11. Confirm the service's **Status** is **Started**.

### Step 5 — Create the machine record in OpCon

When an SAP BW Agent is installed, create a machine record with a unique machine name and socket number in OpCon. If the machine was previously defined in OpCon, you may skip this step.

To create the machine record, complete the following steps:

1. Go to **Start** > **Programs** > **OpConxps** > **Enterprise Manager**. The **OpCon Login** screen displays.
2. In the **Username** field, enter a *case-sensitive User Login ID* (for example, `ocadm`).
3. In the **Password** field, enter the *case-sensitive password*.
4. In the **Profile** list, select the *profile*.
5. Select the **Login** button.
6. In the Navigation Panel, under **Administration**, select **Machines**.
7. Select the **Add** button on the **Machines** toolbar.
8. In the **Name** field, enter the *official host name or alias*.
9. In the **Documentation** field, enter any relevant documentation.
10. In the **Machine Type** list, select **SAP BW**.
11. In the **Socket Number** field, set the value to a unique number (for example, `14200`).
12. (Optional) In the **IP Address** field, enter the *IPv4* or *IPv6 address*.
13. (Optional) In the **Fully Qualified Domain Name** field, enter the *FQDN*.
14. Select the **Save** button.
15. Select **Open Advanced Settings Panel** under **Advanced Settings**. The **Advanced Machine Properties** window displays.
16. Select the **SAP BW Settings** tab.
17. Configure the **Client ID** for the SAPQueryProcessor connection.
18. Select **Update**.
19. Configure the **Gateway** with the full connection string for the SAPQueryProcessor.
20. Select **Update**.
21. Configure the **System Number** for the SAPQueryProcessor connection.
22. Select **Update**.
23. (Optional) Set **RFC Trace** to On if SAP RFC tracing for the SAPQueryProcessor messages should be enabled.
24. Select **Update**.
25. Select **Save**. The machine record is saved.
26. (Optional) To start communication with the machine, right-click the graphic in the **Communication Status** frame.
27. Select the **x** to the right of the **Machines** tab to close the **Machines** screen.

---

## Upgrade additional instances

### Installer-based upgrade

If you installed multiple instances from a distribution prior to 15.0, complete the [Upgrade installation](upgrade-installation.md) procedure for each instance. The installation package transforms automatically.

### Manual upgrade of an additional instance

A manual upgrade is required for each additional agent that was manually installed to a unique directory. After upgrading the first SAP BW Agent from the DVD installation, complete the steps in this section for each additional agent.

#### Check for running jobs

To confirm there are no running jobs before the manual upgrade, complete the following steps:

1. In the Navigation Panel, under **Operation**, select **Machines Status**.
2. Confirm the number of running jobs is **0** for the SAP BW machine.
3. If running jobs exist, contact the OpCon administrator to determine whether to:
   - Wait for the processes to end **- or -**
   - Kill the processes on the SAP BW side. Refer to [Kill command](../advanced-features/kill-command.md).
4. Repeat step 3 until **Running Jobs** shows **0/\<max>**.
5. Right-click the machine and select **Stop Communication** from the menu.

#### Stop the additional service

To stop the agent service for an additional instance, complete the following steps:

1. On the application server, go to **Start** > **Administrative Tools** > **Server Manager**.
2. Expand (**+**) the **Configuration** option.
3. Select the **Services** button.
4. In the **Services** list, select the additional Display Service Name for the agent.
5. Go to **Action** > **Stop**.
6. Confirm the service's **Status** is **Stopped**.

#### Stop the JORS service

To stop the JORS service for an additional instance, complete the following steps:

1. In the **Services** list, select the JORS service.
2. Go to **Action** > **Stop**.
3. Confirm the service's **Status** is **Stopped**.
4. Close the **Services** window.
5. Repeat this procedure for each instance of the agent on the machine.

#### Copy upgrade files

To copy the upgrade files into the additional agent directory, complete the following steps:

1. Browse to the first SAP BW Agent's directory.
2. Go to **Edit** > **Select All**, then **Edit** > **Copy**.
3. Browse to the additional SAP BW Agent directory.
4. Go to **Edit** > **Paste**.

#### Confirm the configuration settings

To merge configuration changes into the additional agent, complete the following steps:

1. Browse to **\<Configuration Directory>\\SAP BW LSAM\\**.
2. Find the **SAPBWLSAM.ini** file.
3. Right-click the file and select **Open With**.
4. Select an ASCII text editor (for example, Notepad).
5. Find the **NewSAPBWLSAM.ini** file in the additional agent directory's **\<Configuration Directory>**.
6. Right-click the file and select **Open With**.
7. Select an ASCII text editor.
8. Compare the **NewSAPBWLSAM.ini** with **SAPBWLSAM.ini**. Copy any new settings from the new version into your existing file. Refer to the [SAP BW Agent configuration file](../administration/configuration-file.md) for setting details.

#### Restart the service

To restart the agent service for an additional instance, complete the following steps:

1. On the application server, go to **Start** > **Administrative Tools** > **Server Manager**.
2. Expand (**+**) the **Configuration** option.
3. Select the **Services** button.
4. In the **Services** list, select the new Display Service Name for the agent.
5. Go to **Action** > **Start**.
6. Confirm the service's **Status** is **Started**.

#### Start communication with the agent

To restart communication with the agent, complete the following steps:

1. In the Navigation Panel, under **Operation**, select **Machines Status**.
2. Right-click the machine and select **Start Communication** from the menu. Communication with the agent resumes.

---

## FAQs

**Why would I run more than one SAP BW Agent on the same machine?**
To connect to more than one SAP BW system, or to isolate workloads from different SAP environments on a shared host.

**Should I use the installer or the manual approach?**
Use the installer for new deployments. The manual approach is supported for environments that already use it but adds maintenance overhead.

**Which fields must be unique across instances?**
`ShortServiceName`, `DisplayServiceName`, `SocketNumberToSAM`, `JORSSocket`, and the OpCon machine name and socket number.
