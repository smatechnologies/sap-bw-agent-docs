---
title: Advanced features overview
sidebar_label: 'Overview'
description: "Optional capabilities of the SAP BW Agent — restarting failed chains at the failed step, retrieving job output through JORS, log management, the kill command, and the MSGIN external event directory."
tags:
  - Conceptual
  - System Administrator
  - Operations Staff
  - Automation Engineer
  - Agents
---

# Advanced features overview

## What is it?

This section covers optional SAP BW Agent capabilities used beyond a basic install-and-run deployment: targeted recovery of failed process chains, retrieving SAP BW job output in the Enterprise Manager, agent and JORS logging, forcibly ending stuck Windows processes, and accepting external events through the MSGIN directory.

## When would you use this section?

- When a process chain failed partway through and you only want to re-run from the failed step.
- When operations staff need to view SAP BW job logs and spool listings from the Enterprise Manager.
- When you need to understand log file locations, naming conventions, and retention.
- When a Windows process related to an SAP BW job will not stop through normal means.
- When an external program needs to deliver OpCon events through a file drop instead of an API call.

## In this section

- **[Restart on step](restart-on-step.md)** — Restart a failed process chain at the point of failure instead of from the beginning.
- **[Job Output Retrieval System](jors.md)** — Configure JORS so SAP BW job output can be viewed from the OpCon Enterprise Manager.
- **[Logging](logging.md)** — Where the agent and JORS write logs, how rotation and archiving work, and how retention is controlled.
- **[Kill command](kill-command.md)** — Use `kill.exe` to forcibly end a Windows process.
- **[MSGIN](msgin.md)** — Drop a text file into the MSGIN directory to deliver an OpCon event for the SAM to process.

## FAQs

**A chain failed halfway. Do I have to re-run all of it?**
No. Use [Restart on step](restart-on-step.md) to resume from the failed step. Use **Restart** if you intend to re-run the chain from the beginning.

**Why can't I see SAP BW job output in the Enterprise Manager?**
The JORS Socket in the agent configuration must match the JORS Port Number for the agent machine in the Enterprise Manager. Refer to [Job Output Retrieval System](jors.md).

**Where are the agent's log files?**
At **\<Output Directory>\\SAP BW LSAM\\Log\\**, with archives in the **Archives** subfolder organized by day. Refer to [Logging](logging.md).
