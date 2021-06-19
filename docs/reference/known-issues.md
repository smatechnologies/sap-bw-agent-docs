# Known issues

## OpCon Job can fail when Process Chain succeeds

If the timeout parameter in the SAP Business Warehouse infopackage is not set at a high enough value, OpCon Jobs may indicate failure even when the Process Chain succeeds. To resolve this issue, SMA recommends the SAP Business Warehouse administrator set the timeout value to 30 minutes.
