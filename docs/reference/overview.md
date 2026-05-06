---
title: Reference overview
sidebar_label: 'Overview'
description: "Reference material for the SAP BW Agent — machine messages, agent-specific exit codes, and known issues with recommended workarounds."
tags:
  - Reference
  - System Administrator
  - Operations Staff
  - Agents
---

# Reference overview

## What is it?

This section contains lookup material for the SAP BW Agent: how the agent reports job completion through OpCon machine messages, the agent-specific exit codes you may see when a job fails, and known issues with their recommended workarounds.

## When would you use this section?

- When a job fails and you need to interpret the machine message or exit code shown in OpCon.
- When SAP shows a process chain finished successfully but OpCon reports the job as failed.
- When you need to confirm whether a behavior is a known issue before opening a support case.

## In this section

- **[Machine messages](machine-messages.md)** — How the SAP BW Agent populates the 20-character machine message in the Operation Daily List, plus the SAP BW Agent–specific exit codes (70001, 70002).
- **[Known issues](known-issues.md)** — Documented issues, including the SAP Business Warehouse infopackage timeout that can cause OpCon jobs to report failure when the process chain succeeded.

## FAQs

**A job failed. Where do I look first?**
Start with the machine message in the Operation Daily List. If the LSAM Exit Code position is 70001 or 70002, refer to [Machine messages](machine-messages.md). Otherwise the LSAM Exit Code position is a Windows error code — refer to the OpCon **Windows System Errors** reference.

**My SAP chain succeeded but OpCon shows a failure. Is that a known issue?**
Yes. Refer to [Known issues](known-issues.md) for the infopackage timeout workaround.
