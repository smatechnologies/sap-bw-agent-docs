# Restart Chain on Failed Step

SAP BW LSAM provides the capability of restarting a failed process chain at the point of failure instead of restarting from the beginning.

- When you right click on a failed SAP BW job, it gives an option to "Restart On Step."
- When this option is selected a popup screen displays the Chain ID of the previously ran BW Chain which failed.
- To restart the chain on failed step, select this Chain ID and click the "Restart On Step" button.
- This will restart the chain at the point of failure.
- This will be followed by the usual job status updates till job finishes and JobLog and Spool List retrieval.

:::note
If you want to restart the failed chain from the beginning, select the "Restart" option instead of "Restart On Step" when you right click.
:::
