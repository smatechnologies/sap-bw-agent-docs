# Machine messages

To the right of the OpCon Job Status in the Operation Daily List screen, the SAP BW LSAM populates a 20-character message to communicate numeric job completion information.

- For jobs that are running, the SAP BW LSAM returns the SAP BW Process Chain ID. The 20 character termination description displays part of the Chain ID. The complete 25 characters Chain ID displays in the *Job Information screen\>Configuration Tab\>Operations Related Information Tab*.
- For jobs that Finish OK, the SAP BW LSAM returns information in the following format: 0-< Partial Process Chain ID\>
- For jobs that Failed, the SAP BW LSAM returns information in the following format: <LSAM Exit Code\> - <SAM job number or SAP Process Chain ID\>
  - If the LSAM was unable to start the SAP BW Process Chain before it failed, the message contains the SAM job number.
  - If the LSAM was able to start the SAP BW Process Chain before it failed, the message contains the SAP Process Chain ID.

:::note
The SAP BW LSAM returns more detailed alpha numeric error messages to the Detailed Job Messages parameter in the Job Information screen\>Configuration Tab\>Operations Related Information Tab. For additional information, refer to [Job Information](https://help.smatechnologies.com/opcon/core/Files/UI/Enterprise-Manager/Job-Information) in the **Enterprise Manager** online help.
:::

## SAP BW LSAM-Specific exit conditions

The following is a list of SAP BW LSAM exit conditions for failed jobs. If an exit condition is not in this list, the LSAM Exit Code position of the return status is a Windows error code. For a list of Windows errors, refer to [Windows System Errors](https://help.smatechnologies.com/opcon/core/Files/Concepts/Windows-System-Errors) in the **Concepts** online help.

### SAP BW LSAM exit codes

| Exit Code | Description |
|--- | --- |
| 70001 | Error in trying to start the BW Process Chain |
| 70002 | Error in retrieving the log for BW Process Chain |
