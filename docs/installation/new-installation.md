---
sidebar_label: 'New installation'
title: New installation
description: "Install a new SAP BW Agent on a Windows machine, configure the service startup, and create a matching machine record in OpCon."
tags:
  - Procedural
  - System Administrator
  - Installation
  - Agents
---

# New installation

## What is it?

A fresh installation of the SAP BW Agent on a Windows host has three parts:

1. **Run the installer** to lay down the agent and JORS components.
2. **Configure service startup** for the **SMA OpCon Agent for SAP BW** Windows service.
3. **Create the machine record** in OpCon so the server can communicate with the agent.

## Before you begin

- You meet the [installation prerequisites](prerequisites.md) (SAP 4.6C+, XBP 2.0, an SAP user with `S_XMI_ALL`).
- You have the OpCon installation media available. Refer to [Determine installation media](determine-installation-media.md).
- You can sign in to the Windows host as a Local Administrator.
- You have credentials for OpCon Enterprise Manager.

---

## Step 1 — Install the agent

To install the SAP BW Agent on a Windows system, complete the following steps:

1. Log in to the Windows machine as a Local Administrator.
2. Exit all running applications on the desktop, including OpCon applications.
3. Run **setup.exe** on the root of the OpCon installation media. The **Choose Setup Language** screen displays.
4. Select the desired language and select **Next**. The **Welcome** screen displays.
5. Select **Next**. The **Select Components** screen displays.
6. Select **SMA OpCon Agents** > **SMA OpCon Agent for SAP BW**.
7. Select **Install**. The **Welcome** screen displays.
8. Select **Next**. The **Destination Folder** screen displays.
9. Change the target location for the installation or retain the default location.
10. Select **Next**. The **Configure Instance Name** screen displays.
11. (Optional) Enter a unique instance name to identify the SAP BW Agent.
12. Select **Next**. The **Select Path for File Migration to ProgramData** screen displays.
13. Select **Skip**. The **Select Path for Output Files** screen displays.
14. Change the directory for the output files or retain the default location.
15. Select **Next**. The **Configure Ports** screen displays.
16. Change the values or retain the default values.
17. Select **Next**. The **Setup Type** screen displays.
18. Select the Setup Type:
    - **Complete** — installs the standard set of components.
    - **Custom** — opens the **Custom Setup** screen so you can choose components individually.
19. Select **Next**. The **Ready to Install the Program** screen displays.
20. Select **Install**.
21. Select **Finish** on the **InstallShield Wizard Completed** screen. The agent is installed.

:::note
The installation writes the log file `SMA_OpCon_SAP_BW_LSAM_Install.log` to the Windows directory. Consult this file if you suspect installation problems.
:::

---

## Step 2 — Configure service startup

By default the SAP BW Agent service is set to **Automatic (Delayed Start)** and runs as the local system account. Complete this step only if you need to change those defaults.

:::tip
SMA recommends keeping the **SMA OpCon Agent for SAP BW** service set to **Automatic (Delayed Start)**. This avoids startup conflicts with other services and programs.
:::

To change the service startup settings, complete the following steps:

1. On the application server, go to **Start** > **Control Panel** > **Administrative Tools**.
2. Select the **Administrative Tools** button. The **Administrative Tools** window displays.
3. Select the **Services** button. The **Services** window displays.
4. Select the **SMA OpCon Agent for SAP BW** service. The **SMA OpCon Agent for SAP BW Properties** dialog displays with the **General** tab in focus.
5. Select one of the following **Startup type** values:
    - **Automatic (Delayed Start)** *(recommended)*
    - **Automatic**
    - **Manual**
    - **Disabled**
6. Select the **Log On** tab.
7. Choose how the service should authenticate:

    | Option | When to use it |
    |---|---|
    | **Local System account** | The service does not need access to network resources. Delete the default Domain User shown in the field. |
    | **This account** | The service needs access to network directories. Enter a domain user, the password, and re-enter the password to confirm. |

8. Select the **OK** button. The startup settings are saved.

---

## Step 3 — Create the machine record in OpCon {#machine}

When an SAP BW Agent is installed, create a machine record with a unique machine name and socket number in OpCon. If the machine was previously defined in OpCon, you may skip this step.

To create the machine record in OpCon, complete the following steps:

1. Go to **Start** > **Programs** > **OpConxps** > **Enterprise Manager**. The **OpCon Login** screen displays.
2. In the **Username** field, enter a *case-sensitive User Login ID* (for example, `ocadm`).
3. In the **Password** field, enter the *case-sensitive password*.
4. In the **Profile** list, select the *profile*.
5. Select the **Login** button to log in to the Enterprise Manager.
6. In the Navigation Panel, under the **Administration** topic, select **Machines**. The **Machines** screen displays.
7. Select the **Add** button on the **Machines** toolbar.
8. In the **Name** field, enter the *official host name or alias of the agent machine*.
9. In the **Documentation** field, enter *any relevant documentation*.
10. In the **Machine Type** list, select **SAP BW**.
11. In the **Socket Number** field, set the value to a unique number (for example, `14100`).

    :::note
    The socket number entered here must match `SocketNumberToSAM` in the agent configuration file. Refer to [TCP/IP parameters](../administration/configuration-file.md#tcpip-parameters).
    :::

12. (Optional) In the **IP Address** field, enter the *IPv4 or IPv6 address*.
13. (Optional) In the **Fully Qualified Domain Name** field, enter the *FQDN*.
14. Select the **Save** button on the **Machines** toolbar. The machine record is saved.
15. (Optional) To start communication with the machine immediately:
    1. Right-click the graphic in the **Communication Status** frame.
    2. Select **Start Communication** from the menu.
16. Select the **x** to the right of the **Machines** tab to close the **Machines** screen.

The agent is now installed and registered with OpCon. SAP BW jobs can be added to schedules that target this machine.

---

## FAQs

**Do I need to be a Local Administrator to install the agent?**
Yes. The installer must be run by a Local Administrator on the Windows machine.

**Where does the installer put its log file?**
At `SMA_OpCon_SAP_BW_LSAM_Install.log` in the Windows directory.

**What if I am installing more than one instance on the same machine?**
Use a unique instance name during installation, and configure unique values for `SocketNumberToSAM` and `JORSSocket` in the agent configuration file. Refer to [Multiple instances](multiple-instances.md).

## Next steps

- [SAPBWLSAM.ini configuration file](../administration/configuration-file.md) — review and tune agent settings.
- [Job Output Retrieval System](../advanced-features/jors.md) — enable viewing SAP BW job output from the Enterprise Manager.
