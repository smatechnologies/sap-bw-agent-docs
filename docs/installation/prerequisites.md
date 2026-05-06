---
sidebar_label: 'Prerequisites'
title: Installation prerequisites
description: "SAP system, XBP interface, and security privilege requirements that must be in place before installing the SAP BW Agent."
tags:
  - Reference
  - System Administrator
  - Installation
  - Agents
---

# Installation prerequisites

## What is it?

Confirm these SAP system requirements, the XBP interface version, and the SAP user privilege before installing the SAP BW Agent. Verifying these prerequisites prevents the most common installation and connection failures.

## Quick checklist

- [ ] SAP Release level is **4.6C or higher**
- [ ] **XBP 2.0** (not 1.0) is installed on the SAP system
- [ ] An SAP user with the **S_XMI_ALL** privilege exists for OpCon to use
- [ ] On SAP 4.6C, support packages **SAPKB46C49** and **SAPKB46C52** are applied

## SAP system requirements

- SAP Release level must be 4.6C or higher.
- The agent is certified for XBP 2.0 and does not work with XBP 1.0.
- All SAP notes or patches must be applied to the 4.6C Release, especially support packages SAPKB46C49 and SAPKB46C52.

## Verify XBP 2.0 is installed on SAP

The SAP Basis Administrator may need to perform these steps.

To verify that XBP 2.0 is installed on the SAP system, complete the following steps:

1. Log in to **SAP**.
2. Enter transaction **SE38**.
3. In the **Program** field, enter **INITXPB2**.
4. Select the **Create** button to the right of the program name. The program is created if XBP 2.0 is installed.

## Verify the SAP user has the S_XMI_ALL privilege

The customer must supply OpCon with an XMI account for logging in to SAP and running background jobs. SAP recommends the **S_XMI_ALL** privilege for this account.

To verify the user has the **S_XMI_ALL** privilege, complete the following steps:

1. Log in to **SAP**.
2. Enter transaction **SU01**.
3. Select the account to be used by OpCon.
4. Select the **Profiles** tab. The list of profiles assigned to the user is displayed.
5. Confirm **S_XMI_ALL** is in the list.

## FAQs

**Does the SAP BW Agent work with XBP 1.0?**
No. The agent is certified for XBP 2.0. Confirm XBP 2.0 is installed before proceeding.

**Which SAP user account should the agent use?**
A dedicated XMI account with the **S_XMI_ALL** privilege. Reusing a personal SAP account is not recommended.

**Are SAP support packages required?**
On SAP Release 4.6C, apply support packages SAPKB46C49 and SAPKB46C52, plus any other SAP notes that affect XBP.

## Next step

[Determine installation media](determine-installation-media.md)
