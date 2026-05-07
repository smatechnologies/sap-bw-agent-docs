---
sidebar_label: 'JORS'
title: Job Output Retrieval System
description: "Configure JORS so that SAP BW job output (job logs and spool listings) can be viewed from the OpCon Enterprise Manager."
tags:
  - Procedural
  - System Administrator
  - Operations Staff
  - Agents
---

# Job Output Retrieval System

## What is it?

The Job Output Retrieval System (JORS) lets users view SAP BW job output — job logs and spool listings — from the OpCon Enterprise Manager (EM). To activate JORS, configure both the agent and the EM.

**Critical setting:** The **JORS Port Number** in the EM must match the `JORSSocket` value in the agent's `SAPBWLSAM.ini`. If these values do not match, the EM cannot connect to the agent for job output.

## Configure the JORS port in the Enterprise Manager

To configure the JORS port in the EM, complete the following steps:

1. Go to **Start** > **Programs** > **OpConxps** > **Enterprise Manager**. The OpCon Login screen displays.
2. In the **Username** field, enter a *case-sensitive User Login ID* (for example, `ocadm`).
3. In the **Password** field, enter the *case-sensitive password*.
4. In the **Profile** list, select the *profile*.
5. Select the **Login** button.
6. In the Navigation Panel, under **Administration**, select **Machines**. The **Machines** screen displays.
7. In the **Select Machine** list, select the *agent machine*.
8. Right-click the graphic in the **Communication Status** frame.
9. Select **Stop Communication** from the menu.
10. Select **Open Advanced Settings Panel** in the **Advanced Settings**. The **Advanced Machine Properties** window displays.
11. Select the **Communication Settings** tab.
12. Select the **JORS Port Number** parameter.
13. In the **Modify Parameter** frame at the bottom of the screen, enter the *same value* used for `JORSSocket` in the agent configuration. Refer to [JORS Settings](../administration/configuration-file.md#jors-settings).
14. Select the **Update** button.
15. Select the **Save** button. The Advanced Settings Panel closes.
16. Right-click the graphic in the **Communication Status** frame.
17. Select **Start Communication** from the menu.
18. Select the **x** to the right of the **Machines** tab to close the **Machines** screen. The JORS port is configured.

## View job output in the Enterprise Manager

To view SAP BW job output in the Enterprise Manager, complete the following steps:

1. In the Navigation Panel, under the **Operation** topic, select **List**.
2. Select the **plus sign (+)** to expand the *date*.
3. Select the **plus sign (+)** to expand the *schedule*.
4. Right-click the desired **job**.
5. Select **View Job Output** from the menu.
6. Wait for JORS to retrieve the list of output files in the **Job Output Retriever** window.
7. Select the **Output File(s)** name to retrieve the output content.
8. (Optional) Select the **Copy To Clipboard** button in the Log Viewer.
9. (Optional) Select the **Open external editor** button to open the file in an external editor (for example, Notepad).
10. Select the **Close** button to close the **Log Viewer** window.
11. Select the **Close** button to close the **Job Output Retriever** window. The job output is closed.

## FAQs

**Why can't I see SAP BW job output in the Enterprise Manager?**
Confirm that `JORSSocket` in the agent configuration matches the **JORS Port Number** for the agent machine in the Enterprise Manager. If the values do not match, the EM cannot connect to the JORS service.

**Does JORS run as a separate service?**
Yes. JORS runs as the **SMA OpCon JORS for SAP BW** service alongside the agent service. Both must be running to view job output through the Enterprise Manager.
