---
title: Administration overview
sidebar_label: 'Overview'
description: "Day-to-day administration of the SAP BW Agent — configuration file settings and starting and stopping the agent and JORS services."
tags:
  - Conceptual
  - System Administrator
  - Agents
  - System Configuration
---

# Administration overview

## What is it?

This section covers ongoing administration of the SAP BW Agent: the SAPBWLSAM.ini configuration file that controls service identification, networking, logging, the SAP system connection, and the JORS component, and the procedures for starting and stopping the agent and JORS services through the Windows Service Control Manager.

## When would you use this section?

- When tuning agent behavior — concurrency, polling interval, log retention, or trace level.
- When changing the SAP system connection or rotating the SAP user credentials.
- When applying configuration changes that require restarting the agent service.
- During installs, upgrades, or maintenance windows that require the agent to be offline.

## In this section

- **[Configuration file](configuration-file.md)** — Reference for every setting in `SAPBWLSAM.ini`, including General Settings, TCP/IP Parameters, Debug Options, Process Options, Process Creation Options, SAP System Settings, and JORS Settings. Also covers encrypting the SAP user name and password.
- **[Managing the agent](manage-lsam.md)** — Procedures for starting and stopping the **SMA OpCon Agent for SAP BW** and **SMA OpCon JORS for SAP BW** services.

## FAQs

**Where is the agent's main configuration file?**
At **\<Configuration Directory>\\SAP BW LSAM\\SAPBWLSAM.ini**, where the Configuration Directory was set during installation.

**Which configuration changes require a service restart?**
Settings whose **Dynamic** column is **N** in the [configuration file reference](configuration-file.md). Settings marked **Y** are picked up without restarting the service.

**Which startup type should the agent service use?**
Automatic (Delayed Start). This avoids potential issues at startup time while other services and programs initialize.
