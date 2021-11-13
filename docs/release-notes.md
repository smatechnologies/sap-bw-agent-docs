# Release notes

## SAP BW Agent 20.0.0

2020 September

:white_check_mark: Fixed a performance issue in SAPBW agent where under significant load the jobs took much longer to report finished on the OpCon side.

## SAP BW Agent 19.1.0

2019 December

:eight_spoked_asterisk: As of Release 19.1.0, the SAP BW proxy service will no longer be installed with the SAM.

:::warning
You will need to upgrade to the latest version of the SAP BW LSAM to continue using this functionality.
:::

## Older versions

<details>
<summary>See all</summary>
<br />

#### SAP BW Agent 18.2.0

2018 September

:eight_spoked_asterisk: Added support in the SAP BW LSAM to re-attempt job start in case of failure during the job start attempt. Additionally, updated the INI file with two new Process Options parameters, JobStartRetryAttempts and JobStartRetryInterval, to support this feature.

:white_check_mark: Fixed an issue where if the connection to SAP became hung when attempting to start an SAP BW job, the LSAM re-attempted the job start, eventually causing the job to run multiple times on the SAP system. The LSAM has been updated to not re-attempt job start if the connection becomes hung and to instead fail with the new Exit Code 70008 (Job Start Failed due to hung SAP connection).

#### SAP BW Agent 18.1.2

2018 September

:white_check_mark: Fixed an issue where if the connection to SAP became hung when attempting to start an SAP BW job, the LSAM re-attempted the job start, eventually causing the job to run multiple times on the SAP system. The LSAM has been updated to not re-attempt job start if the connection becomes hung and to instead fail with the new Exit Code 70008 (Job Start Failed due to hung SAP connection).

:white_check_mark: Added support in the SAP BW LSAM to re-attempt job start in case of failure during the job start attempt. Additionally, updated the INI file with two new Process Options parameters, JobStartRetryAttempts and JobStartRetryInterval, to support this feature.

#### SAP BW Agent 18.1.0

2018 June

:white_check_mark: Fixed an issue with the SAP BW LSAM where an SAP BI OpCon job launches a BI process chain and returns a status of 'success' even before the process chain is actually completed in SAP BI.

#### SAP BW Agent 17.1.0

2017 September

:white_check_mark: Fixed an issue where the SAP BW machine lost communication after a job was submitted.

:white_check_mark: Fixed an issue where the reporting of child process statuses to OpCon would take a long time, causing delays in SAP workflows.

#### SAP BW Agent 16.1.0

2016 September

:eight_spoked_asterisk: As of 16.1, the SAP BW LSAM is now a 64-bit version that will be installed as a new product, and it does not upgrade the 32-bit version. Customers can uninstall the existing 32-bit version before installing the new 64-bit version, or install the 64-bit version to a new location and the existing 32-bit version will not be affected.

:eight_spoked_asterisk: Added two new fields to the Advanced Machine Properties for all SAP machines. The R3Name and Group fields allow users to define connection information to the SAP load balancing server.

:white_check_mark: Fixed an issue where the SAP BW LSAM would crash while attempting to start inactive Process Chains.

#### SAP BW Agent 16.0.0

2016 June

:eight_spoked_asterisk: Updated the INI file with two new SAP System Settings parameters, R3Name and Group, to support SAP server groups.

</details>
