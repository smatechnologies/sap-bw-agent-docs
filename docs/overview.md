---
title: SAP BW Agent
sidebar_label: 'SAP BW Agent'
description: "Introduction to the SAP BW Agent — what it does, when to use it, and how it fits into an OpCon environment."
tags:
  - Conceptual
  - System Administrator
  - Automation Engineer
  - Agents
  - Getting Started
---

# SAP BW Agent

## What is it?

The SAP BW Agent is an OpCon agent that schedules SAP BW process chains from an OpCon schedule. It connects OpCon to an SAP Business Warehouse system so SAP BW jobs run, are monitored, and report back alongside the rest of your enterprise workload.

**Current version:** 22.1.0

## When would you use it?

- You need to start SAP BW process chains from an OpCon schedule and wait for them to finish before downstream jobs run.
- You want SAP BW job output — job logs and spool listings — available in the OpCon Enterprise Manager.
- You need to coordinate SAP BW work with non-SAP jobs (file transfers, scripts, database tasks) in one dependency graph.

## Why would you use it?

- **Centralized scheduling.** Manage SAP BW process chains and the rest of your automation from one place.
- **Visibility into SAP BW jobs.** Monitor chain progress, retrieve job output, and react to failures using OpCon's standard operations tools.
- **Reliable cross-system dependencies.** Chain SAP BW jobs to file transfers, database steps, and other agents — no custom integration required.

## Where to start

| You want to... | Start here |
|---|---|
| Install the agent for the first time | [Installation prerequisites](installation/prerequisites.md) |
| Upgrade an existing agent | [Upgrade installation](installation/upgrade-installation.md) |
| Tune agent behavior or rotate SAP credentials | [SAPBWLSAM.ini configuration file](administration/configuration-file.md) |
| Diagnose a failed SAP BW job | [Machine messages](reference/machine-messages.md) |
| See what changed in this release | [Release notes](release-notes.md) |

## Glossary

> **Agent** — The machine and software component on which OpCon runs jobs. The SAP BW Agent is the SAP BW–specific implementation.
>
> **LSAM** — Local SAP Agent Module. Internal product term that appears in service names, file names, and configuration parameters (such as `SAPBWLSAM.ini`). Customer-facing references use **agent**.
>
> **Process chain** — An SAP BW construct that defines a sequence of processes within an SAP BW system. The SAP BW Agent starts and monitors process chains as OpCon jobs.
>
> **JORS** — Job Output Retrieval System. Component that lets the OpCon Enterprise Manager view SAP BW job logs and spool listings.
