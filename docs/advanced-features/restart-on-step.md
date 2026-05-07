---
sidebar_label: 'Restart on step'
title: Restart chain on failed step
description: "Restart a failed SAP BW process chain at the point of failure instead of restarting from the beginning."
tags:
  - Procedural
  - Automation Engineer
  - Operations Staff
  - Agents
---

# Restart chain on failed step

## What is it?

The **Restart On Step** option resumes a failed SAP BW process chain at the failure point instead of running the entire chain again. Use it when earlier steps have already completed successfully and re-running them would be expensive or time-consuming.

## Restart vs. Restart On Step

| Option | Effect |
|---|---|
| **Restart** | Re-runs the chain from the beginning. |
| **Restart On Step** | Resumes the chain at the failed step. |

## How to restart at the failed step

To resume a failed process chain at the failed step, complete the following steps:

1. Right-click the failed SAP BW job. The context menu displays.
2. Select **Restart On Step**. A pop-up displays the Chain ID of the previously run BW chain that failed.
3. Select the Chain ID.
4. Select the **Restart On Step** button. The chain restarts at the point of failure.
5. Wait for the usual job status updates until the job finishes and the JobLog and Spool List are retrieved.

:::note
To re-run the chain from the beginning instead, select **Restart** rather than **Restart On Step** when you right-click.
:::

## FAQs

**When should I use Restart On Step instead of Restart?**
Use **Restart On Step** when earlier steps in the chain already completed successfully and you only want to re-run from the failure point.

**Where does the Chain ID come from?**
The pop-up displays the Chain ID of the previously run BW chain that failed. Selecting that Chain ID and selecting **Restart On Step** resumes the chain at the point of failure.
