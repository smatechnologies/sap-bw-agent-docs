---
sidebar_label: 'Upgrade'
title: Upgrade installation
description: "Upgrade an existing SAP BW Agent installation, including the migration from 32-bit to 64-bit and the post-19.1.0 SAP BW proxy change."
tags:
  - Procedural
  - System Administrator
  - Upgrade
  - Agents
---

# Upgrade installation

## What is it?

This page covers the steps to upgrade an existing SAP BW Agent. Two release boundaries require special attention:

- **Release 16.1** — The agent moved from 32-bit to 64-bit. To upgrade in place, uninstall the 32-bit version before installing the 64-bit version. Alternatively, install the 64-bit version to a new location and the 32-bit installation is not affected.
- **Release 19.1.0** — The SAP BW proxy moved from the OpCon server into the agent. You must upgrade the agent to 19.1.0 (or later) when you upgrade your OpCon server.

:::danger
Customers who run an SAP BW Agent must upgrade their agents to 19.1.0 (when installing OpCon 19.1.0) so that the SAP BW proxy functionality remains available.
:::

## Before you begin

- You have downtime scheduled for the agent and any jobs that target it.
- You know the **Log on as** setting for each agent service. If any service runs as a domain user with a password, you have that password available. Note this for every instance if multiple agents are installed on the host.
- You can sign in to the Windows host as a Local Administrator and to OpCon Enterprise Manager.

:::caution
Before proceeding, check the **Log on as** setting in each service's properties. If a service logs on as a domain user, ensure you have the password before starting the upgrade.
:::

## Upgrade workflow at a glance

1. [Check for running jobs](#check-for-running-jobs)
2. [Stop the agent service](#stop-the-service)
3. [Stop the JORS service](#stop-the-jors-service)
4. [Delete the tracking files](#delete-the-tracking-files)
5. (Optional) [Remove the previous SAP BW agent](#remove-the-sap-bw-lsam) — required only when upgrading from 32-bit in place
6. [Install the SAP BW agent](#install-the-sap-bw-lsam)
7. (Optional) [Delete the old SAP BW agent directory](#delete-the-old-sap-bw-agent-directory)
8. [Restart the agent service](#restart-the-service)
9. [Start communication with the agent](#start-communication-with-the-agent)

---

## Check for running jobs

To confirm there are no running jobs before the upgrade, complete the following steps:

1. In the Navigation Panel, under the **Operation** topic, select **Machines Status**. The **Machines Status** screen displays.
2. Confirm the number of running jobs is **0** for the SAP BW machine.
3. If running jobs exist, contact the OpCon administrator to determine whether to:
   - Wait for the processes to end **- or -**
   - Kill the processes on the SAP BW side. Refer to [Kill command](../advanced-features/kill-command.md).
4. Repeat step 3 until the **Machines Status** screen indicates **Running Jobs** of **0/\<max>**.
5. Right-click the machine and select **Stop Communication** from the menu. The machine is in a safe state for the upgrade.

## Stop the service

To stop the agent service, complete the following steps:

1. On the application server, go to **Start** > **Administrative Tools** > **Server Manager**.
2. Expand (**+**) the **Configuration** option.
3. Select the **Services** button. The **Services** window displays.
4. In the **Services** list, select **SMA OpCon Agent for SAP BW**.
5. Go to **Action** > **Stop**.
6. Confirm the service's **Status** is **Stopped**.

## Stop the JORS service

To stop the JORS service, complete the following steps:

1. In the **Services** list, select **SMA OpCon JORS for SAP BW**.
2. Go to **Action** > **Stop**.
3. Confirm the service's **Status** is **Stopped**.
4. Close the **Services** window.
5. Repeat this procedure for each instance of the agent on the machine.

## Delete the tracking files

To delete the tracking files, complete the following steps:

1. Right-click the **Start** button.
2. Select **Explore** from the menu.
3. Browse to the agent's directory.
4. Within the agent's directory, browse to **\<Output Directory>\\SAP BW LSAM\\Log\\**.
5. While holding the **Ctrl** key, select the **SAPBW.TRK**, **QMsgToSAM.TRK**, and **QMsgFromSAM.TRK** files.
6. Go to **File** > **Delete**.
7. Select the **OK** button to confirm. The tracking files are removed.
8. Close the **Explorer** window.

## Remove the SAP BW agent {#remove-the-sap-bw-lsam}

:::note
Skip this section if you are not uninstalling an existing 32-bit SAP BW Agent. Proceed to [Install the SAP BW agent](#install-the-sap-bw-lsam).
:::

To remove the previous agent, complete the following steps:

1. Go to **Start** > **Control Panel**. The **Control Panel** window opens.
2. Select **Programs and Features**. The **Programs and Features** window displays.
3. Select the **SMA Agent for SAP BW** program.
4. Choose one of the following options:

    | Situation | What to do |
    |---|---|
    | Only one instance is installed | Select the **Uninstall** button. The program is automatically uninstalled. |
    | Multiple instances are installed | Select the **Change** button and continue with step 5. |

5. Select the **Change** button. The **Welcome** screen displays.
6. Select **Next**. The **Program Maintenance** screen displays.
7. Select the **Remove** option.
8. Select **Next**. The **Remove the Program** screen displays.
9. Select **Remove**. If a reboot is required, follow the prompts.
10. Select **Finish** on the **InstallShield Wizard Completed** screen. The previous agent is removed.

## Install the SAP BW agent {#install-the-sap-bw-lsam}

:::warning
If you are upgrading multi-instance installs from release 5.20, upgrading the base instance automatically removes the additional instances. Run the SAP BW Agent installation again, once for each instance.
:::

To install the SAP BW Agent, complete the following steps:

1. Log in to the Windows host as a Local Administrator.
2. Exit all running applications, including OpCon applications.
3. Run **setup.exe** on the root of the OpCon installation media. The **Choose Setup Language** screen displays.
4. Select the desired language and select **Next**. The **Welcome** screen displays.
5. Select **Next**. The **Select Components** screen displays.
6. Select **SMA OpCon Agents** > **SMA OpCon Agent for SAP BW**.
7. Select **Install**. The **Welcome** screen displays.
8. Select **Next**. The **Destination Folder** screen displays.
9. Change the target location or retain the default.
10. Select **Next**. The **Configure Instance Name** screen displays.
11. (Optional) Enter a unique instance name to identify the SAP BW Agent.
12. Select **Next**. The **Select Path for File Migration to ProgramData** screen displays.
13. Enter or browse to a previous install directory so the installer can migrate any previously installed configuration files into the new location.
14. Select **Next**. The **Select Path for Output Files** screen displays.
15. Change the directory for output files or retain the default.
16. Select **Next**. The **Configure Ports** screen displays.
17. Change the port values or retain the defaults.
18. Select **Next**. The **Setup Type** screen displays.
19. Choose **Complete** or **Custom**:
    - **Custom** opens the **Custom Setup** screen so you can choose components individually.
20. Select **Next**. The **Ready to Install the Program** screen displays.
21. Select **Install**.
22. Select **Finish** on the **InstallShield Wizard Completed** screen. The agent is installed.
23. (Optional) Reconfigure the service **Log on as** settings to match your previous configuration.

:::note
The installation writes `SMA_OpCon_SAP_BW_LSAM_Install.log` to the Windows directory. Consult this file if you suspect installation problems.
:::

## Delete the old SAP BW agent directory

After you have tested the new installation, you can remove the previous installation directory.

To delete the previous installation directory, complete the following steps:

1. Right-click the **Start** button.
2. Select **Explore** from the menu.
3. Browse to the old SAP BW Agent directory.
4. Select the **0** folder.
5. Go to **File** > **Delete**.
6. Select the **OK** button to confirm. The old directory is removed.
7. Close the **Explorer** window.

## Restart the service

To restart the agent service, complete the following steps:

1. On the application server, go to **Start** > **Administrative Tools** > **Server Manager**.
2. Expand (**+**) the **Configuration** option.
3. Select the **Services** button. The **Services** window displays.
4. In the **Services** list, select **SMA OpCon Agent for SAP BW**.
5. Go to **Action** > **Start**.
6. Confirm the service's **Status** is **Started**.

## Start communication with the agent

To restart communication with the agent, complete the following steps:

1. In the Navigation Panel, under the **Operation** topic, select **Machines Status**. The **Machines Status** screen displays.
2. Right-click the machine and select **Start Communication** from the menu. The agent and OpCon are communicating again.

---

## FAQs

**Do I need to back up anything before upgrading?**
Note the **Log on as** setting for each agent service. If services run as a domain user, confirm you have the password.

**What changed in 19.1.0 that affects the upgrade?**
The SAP BW proxy functionality moved from the OpCon server to the agent. Customers running an SAP BW Agent must upgrade to 19.1.0 along with their OpCon server.

**Can I keep the 32-bit agent installed?**
Yes. Install the 64-bit version to a new location and the 32-bit installation is not affected. To upgrade in place, uninstall the 32-bit version first.

**Do I need to delete the tracking files?**
Yes. Removing `SAPBW.TRK`, `QMsgToSAM.TRK`, and `QMsgFromSAM.TRK` ensures the upgraded agent does not pick up stale state from the previous installation.
