---
sidebar_label: 'Machine messages'
title: Machine messages
description: "How the SAP BW Agent reports job completion information through OpCon machine messages and the LSAM-specific exit codes."
tags:
  - Reference
  - System Administrator
  - Operations Staff
  - Agents
---

# Machine messages

## What is it?

In the **Operation Daily List** screen, OpCon shows a 20-character message to the right of each job's status. The SAP BW Agent populates this message with information about the SAP BW process chain. This page explains the format of that message and lists the agent-specific exit codes you may see when a job fails.

## Message format by job status

| Job status | Message format | Notes |
|---|---|---|
| Running | SAP BW Process Chain ID (truncated to 20 characters) | The full 25-character Chain ID is shown on the **Job Information** screen, **Configuration** tab, **Operations Related Information** tab. |
| Finish OK | `0-<Partial Process Chain ID>` | Leading `0` indicates success. |
| Failed (chain did not start) | `<LSAM Exit Code> - <SAM job number>` | The agent could not start the process chain. |
| Failed (chain started, then failed) | `<LSAM Exit Code> - <SAP Process Chain ID>` | The agent started the chain, then it failed. |

:::note
For more detailed alphanumeric error messages, see the **Detailed Job Messages** parameter on the **Job Information** screen, **Configuration** tab, **Operations Related Information** tab. Refer to [Job Information](https://help.smatechnologies.com/opcon/core/Files/UI/Enterprise-Manager/Job-Information) in the **Enterprise Manager** online help.
:::

## SAP BW Agent exit codes

If the **LSAM Exit Code** in a failed-job message is not in the table below, it is a Windows error code. For Windows error codes, refer to [Windows System Errors](https://help.smatechnologies.com/opcon/core/Files/Concepts/Windows-System-Errors) in the **Concepts** online help.

| Exit Code | Description |
|---|---|
| `70001` | Error trying to start the BW Process Chain. |
| `70002` | Error retrieving the log for the BW Process Chain. |

## FAQs

**A job failed. Where do I look first?**
Start with the machine message in the **Operation Daily List**.

- If the LSAM Exit Code is `70001` or `70002`, see the table above.
- Otherwise, the LSAM Exit Code is a Windows error code. Refer to **Windows System Errors**.

**Where do I see the full Process Chain ID?**
The 20-character machine message only shows part of it. The full 25-character Chain ID is on the **Job Information** screen, **Configuration** tab, **Operations Related Information** tab.

**Where do I see detailed alphanumeric error messages?**
On the **Job Information** screen, **Configuration** tab, **Operations Related Information** tab, in the **Detailed Job Messages** parameter.
