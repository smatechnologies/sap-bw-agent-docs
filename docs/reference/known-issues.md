---
sidebar_label: 'Known issues'
title: Known issues
description: "Known SAP BW Agent issues and the recommended workarounds, including the infopackage timeout that can cause OpCon jobs to report failure when the process chain succeeded."
tags:
  - Reference
  - System Administrator
  - Operations Staff
  - Agents
---

# Known issues

## What is it?

This page lists known issues with the SAP BW Agent and the recommended workarounds. Use it as a quick reference when an OpCon job's status does not match what you observe in SAP BW.

## OpCon job fails when the process chain succeeds

| Symptom | Cause | Workaround |
|---|---|---|
| OpCon job shows a failure even though the SAP BW process chain finished successfully. | The infopackage timeout in SAP Business Warehouse is too low. | Have the SAP Business Warehouse administrator set the infopackage timeout value to **30 minutes**. |

## FAQs

**Why does my OpCon job fail when SAP shows the chain finished successfully?**
The infopackage timeout in SAP Business Warehouse may be too low. Setting it to 30 minutes is the recommended starting point.

**Who should change the SAP infopackage timeout?**
The SAP Business Warehouse administrator. The setting is configured in SAP, not in OpCon or the SAP BW Agent.
