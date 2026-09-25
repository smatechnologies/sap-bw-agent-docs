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
| Starting | `Start Process Chain` | The agent is starting the process chain. |
| Running | `<log ID>:<chain status>` | The first 11 characters of the process chain log ID, then the chain's status, for example `Active`. The full 25-character Chain ID is shown on the **Job Information** screen, **Configuration** tab, **Operations Related Information** tab. |
| Finish OK | `0 - <log ID>` | The process chain finished successfully. |
| Failed (chain ended in error) | `1 - <log ID>` | The process chain ended with a status other than successful. Check the chain's log in SAP BW. |
| Failed (agent error) | `<first 9 characters of the error>-<log ID>` | The agent could not complete an operation. The message starts with an agent exit code from the table below, or with the start of the SAP error text. If the chain did not start, no log ID follows the hyphen. |

:::note
For more detailed alphanumeric error messages, see the **Detailed Job Messages** parameter on the **Job Information** screen, **Configuration** tab, **Operations Related Information** tab. Refer to [Job Information](https://help.smatechnologies.com/opcon/core/Files/UI/Enterprise-Manager/Job-Information) in the **Enterprise Manager** online help.
:::

## SAP BW Agent exit codes

These codes can appear at the start of a failed-job message, followed by `:` and further detail — for example, `70001:01`.

| Exit Code | Description |
|---|---|
| `70001` | Error trying to start or restart the BW Process Chain, including when the agent is not connected to SAP. |
| `70004` | Error checking the process chain's status because the agent is not connected to SAP. |
| `70008` | The SAP system did not respond. |

A failed-job message that does not start with one of these codes starts with the SAP error text. See the **Detailed Job Messages** parameter for the full text.

## FAQs

**A job failed. Where do I look first?**
Start with the machine message in the **Operation Daily List**.

- If the message is `1 - <log ID>`, the process chain ended in error in SAP BW. Check the chain's log in SAP BW.
- If the message starts with `70001`, `70004`, or `70008`, see the table above.
- Otherwise, the message starts with SAP error text. See the **Detailed Job Messages** parameter for the full text.

**Where do I see the full Process Chain ID?**
The 20-character machine message only shows part of it. The full 25-character Chain ID is on the **Job Information** screen, **Configuration** tab, **Operations Related Information** tab.

**Where do I see detailed alphanumeric error messages?**
On the **Job Information** screen, **Configuration** tab, **Operations Related Information** tab, in the **Detailed Job Messages** parameter.
