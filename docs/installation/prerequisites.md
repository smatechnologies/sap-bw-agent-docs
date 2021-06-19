---
sidebar_label: "Prerequisites"
---

# Installation prerequisites

- SAP Release level has to be 4.6C or higher
- The LSAM is certified for XBP 2.0 and will not work with 1.0. In order to verify XBP 2.0 is installed on SAP:

1. Log into **SAP** (will require the SAP Basis Administrator to verify this information).
2. Enter Transaction **"SE38"**.
3. Enter program name **"INITXPB2"**.
4. Click the **Create** button to the right of the program name.
    - The user must supply OpCon with an XMI account for logging into SAP and running background jobs. This account requires SAP XMI security privilege of "S_XMI_ALL". SAP recommends "S_XMI_ALL". In order to verify if the user has the security privilege "S_XMI_ALL":
5. Log into **SAP** (will require the SAP Basis Administrator to verify this information).
6. Enter transaction **"SU01"**.
7. Select the account to be used by OpCon.
8. Select the **Profiles** tab and verify "S_XMI_ALL" is assigned to the user.
    - After verifying the SAP Release 4.6C or higher has INITXBP2, it is necessary to make sure all SAP notes or patches have been applied to the 4.6C Release, especially support package SAPKB46C49 and SAPKB46C52.
