---
title: Installation overview
sidebar_label: 'Overview'
description: "Where to start when installing or upgrading the SAP BW Agent — prerequisites, supported delivery media, fresh installs, upgrades, silent installs, and multiple-instance deployments."
tags:
  - Conceptual
  - System Administrator
  - Installation
  - Upgrade
  - Agents
---

# Installation overview

## What is it?

This section walks through everything needed to deploy the SAP BW Agent on a Windows host: confirming SAP and security prerequisites, choosing how to deliver the installation files, running a new installation, upgrading an existing installation, running an unattended (silent) install, and adding additional agent instances on the same machine.

## When would you use this section?

- Before installing the agent for the first time, to confirm that the SAP system, XBP version, and SAP user account meet the requirements.
- When standing up a new SAP BW Agent on a Windows server.
- When upgrading an existing agent — particularly when crossing the 16.1 (32-bit to 64-bit) or 19.1.0 (SAP BW proxy moved to the agent) boundaries.
- When installing additional agent instances on a host that already runs an SAP BW Agent.

## In this section

- **[Prerequisites](prerequisites.md)** — SAP release level, XBP 2.0 verification, and the `S_XMI_ALL` user privilege.
- **[Installation media](determine-installation-media.md)** — How to deliver the installation files (USB, FTP, DVD-ROM, or ISO) and where to run setup from.
- **[New installation](new-installation.md)** — Install the agent, configure service startup, and create the OpCon machine record.
- **[Upgrade](upgrade-installation.md)** — Stop the services, delete tracking files, install the new version, and restart communication. Includes the 32-bit-to-64-bit migration notes.
- **[Silent mode](silent-mode.md)** — Where to find the unattended installation procedure shared across OpCon agents.
- **[Multiple instances](multiple-instances.md)** — Install or upgrade additional agent instances on the same host, either through the installer or as a manual deployment.

## FAQs

**Where do I start if I'm installing the agent for the first time?**
Begin with [Prerequisites](prerequisites.md), then [Installation media](determine-installation-media.md), then [New installation](new-installation.md).

**I'm upgrading from a release older than 19.1.0. Anything I need to know?**
Yes. Starting with Release 19.1.0, the SAP BW proxy functionality lives in the agent rather than on the OpCon server. You must upgrade the agent to 19.1.0 (or later) when you upgrade your OpCon server. Refer to [Upgrade installation](upgrade-installation.md).

**Can I run more than one SAP BW Agent on the same host?**
Yes. Refer to [Multiple instances](multiple-instances.md) for both the installer-based and manual approaches.
