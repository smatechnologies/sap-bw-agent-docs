---
sidebar_label: 'MSGIN'
title: MSGIN
description: "Use the MSGIN directory to deliver external OpCon events to the SAP BW Agent for processing by the SAM."
tags:
  - Reference
  - System Administrator
  - Automation Engineer
  - Agents
---

# MSGIN

## What is it?

MSGIN is a directory the SAP BW Agent watches for external OpCon events. Any external program or application can drop an ASCII text file into this directory; the agent reads the file, sends the contents to the SAM for processing, and then deletes the file.

**Location:** `\<Configuration Directory>\SAP BW LSAM\MSGIN\` on the agent host.

:::note
The Configuration Directory is set during installation. For more information, refer to [File Locations](https://help.smatechnologies.com/opcon/core/file-locations) in the **Concepts** online help.
:::

## What goes in an MSGIN file

Each file must contain:

- A valid OpCon event command
- A User Login ID
- An external event password

If the SAM receives an invalid event, it discards the event and writes the message **Invalid Event** to the **SAM Critical.log** file.

## Place a message in the MSGIN directory

To deliver an external event through MSGIN, complete the following steps:

1. Open an ASCII text editor (for example, Notepad) on the Windows host.
2. Enter the event text:

    ```console
    $JOB:RELEASE,[[$DATE]],ProdSched,ProdJob,BatchUser,EventPassword
    ```

    Note the following requirements:

    - The User Login ID and external event password go at the end of the event. The event password is **not** the same as the database password used to log in to the Enterprise Manager. Refer to [External Events](https://help.smatechnologies.com/opcon/core/events/defining#external-events) in the **OpCon Events** online help.
    - The user must have the correct function privileges in OpCon for the SAM to perform the command.
    - Allowable tokens are `$DATE`, `$TIME`, and `$NOW`. These pull values from the current system date and time.
    - To send multiple events in one file, place each event on its own line.

3. Save the file in **\<Configuration Directory>\\SAP BW LSAM\\MSGIN\\**. The agent reads the file, sends the contents to the SAM, and deletes the file.

## FAQs

**Where do I put MSGIN files?**
In `\<Configuration Directory>\SAP BW LSAM\MSGIN\` on the agent host.

**Can I send more than one event in a single file?**
Yes. Place each event on its own line. The agent reads the file, sends all events to the SAM, and deletes the file.

**Why was my event ignored?**
The SAM discards events with syntactical errors and writes **Invalid Event** to **SAM Critical.log**. Confirm:
- The User Login ID is valid.
- The event password matches the configured external event password.
- The user has the required function privileges in OpCon.

**Which tokens can I use in an event?**
`$DATE`, `$TIME`, and `$NOW`. They pull from the current system date and time.
