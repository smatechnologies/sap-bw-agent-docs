---
sidebar_label: 'Managing the agent'
title: Managing the SAP BW Agent
description: "Start and stop the SAP BW Agent and JORS services through the Windows Service Control Manager."
tags:
  - Procedural
  - System Administrator
  - Agents
---

# Managing the SAP BW Agent

## What is it?

This page covers starting and stopping the SAP BW Agent and JORS services through the Windows Service Control Manager. Use these procedures during installation, upgrades, troubleshooting, or any maintenance window that requires the agent to be offline.

The two services that must be managed together:

- **SMA OpCon Agent for SAP BW** — runs the agent process.
- **SMA OpCon JORS for SAP BW** — exposes job output to the OpCon Enterprise Manager.

## Start the agent services

To start the SAP BW Agent and JORS services, complete the following steps:

1. Go to **Start** > **Control Panel**.
2. Select the **Administrative Tools** button.
3. Select the **Services** button. The Service Control Manager opens.
4. In the **Services** list, select **SMA OpCon Agent for SAP BW**.
5. Confirm the **Startup Type** is **Automatic (Delayed Start)**. If it is not, change it:
    - Select **Automatic (Delayed Start)** from the **Startup Type** list.
    - Select **OK**.
6. Go to **Action** > **Start**.
7. Confirm the agent's **Status** is **Started**.
8. In the **Services** list, select **SMA OpCon JORS for SAP BW**.
9. Confirm the **Startup Type** is **Automatic (Delayed Start)**. If it is not, change it:
    - Select **Automatic (Delayed Start)** from the **Startup Type** list.
    - Select **OK**.
10. Go to **Action** > **Start**.
11. Confirm the JORS **Status** is **Started**.
12. Close the **Services** window. The agent and JORS services are running.

## Stop the agent services

To stop the SAP BW Agent and JORS services, complete the following steps:

1. Go to **Start** > **Control Panel**.
2. Select the **Administrative Tools** button.
3. Select the **Services** button. The Service Control Manager opens.
4. In the **Services** list, select **SMA OpCon Agent for SAP BW**.
5. Go to **Action** > **Stop**.
6. Confirm the agent's **Status** is **Stopped**.
7. In the **Services** list, select **SMA OpCon JORS for SAP BW**.
8. Go to **Action** > **Stop**.
9. Confirm the JORS **Status** is **Stopped**.
10. Close the **Services** window. The agent and JORS services are stopped.

## FAQs

**Which startup type should the SAP BW Agent service use?**
**Automatic (Delayed Start)**. This avoids startup conflicts with other services and programs.

**Do I need to stop both the agent and JORS services together?**
For most maintenance tasks, yes. The agent and JORS components work together to start jobs and return job output, so they are typically stopped and started as a pair.
