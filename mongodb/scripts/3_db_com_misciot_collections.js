//
db = db.getSiblingDB('DB_COM_MISCIOT');

//
db.createCollection('ProvisioningMessages');
db.ProvisioningMessages.insertMany(
  [
    {
      codeResponse: "3",
      codeSP: "907",
      descriptionResponse: "Iccid already in use",
      nameSP: "provisioning"
    },
    {
      codeResponse: "1",
      codeSP: "900",
      descriptionResponse: "Missing Required Parameters",
      nameSP: "provisioning"
    },
    {
      codeResponse: "0",
      codeSP: "0",
      descriptionResponse: "success",
      nameSP: "changePlan"
    },
    {
      codeResponse: "9999",
      codeSP: "900",
      descriptionResponse: "Missing Required Parameters",
      nameSP: "getDownloadProfileStatus"
    },
    {
      codeResponse: "9999",
      codeSP: "903",
      descriptionResponse: "Error getting the subscriber data",
      nameSP: "getDownloadProfileStatus"
    },
    {
      codeResponse: "9999",
      codeSP: "907",
      descriptionResponse: "Creation failed",
      nameSP: "getDownloadProfileStatus"
    },
    {
      codeResponse: "0",
      codeSP: "903",
      descriptionResponse: "success",
      nameSP: "unProvisioning"
    },
    {
      codeResponse: "1",
      codeSP: "-5",
      descriptionResponse: "unProvisioning failed",
      nameSP: "unProvisioning"
    },
    {
      codeResponse: "1",
      codeSP: "906",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "deleteUser"
    },
    {
      codeResponse: "1",
      codeSP: "906",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "queryUser"
    },
    {
      codeResponse: "3",
      codeSP: "908",
      descriptionResponse: "buyProduct failed: invalid product",
      nameSP: "buyProduct"
    },
    {
      codeResponse: "0",
      codeSP: "999",
      descriptionResponse: "success",
      nameSP: "changeSim"
    },
    {
      codeResponse: "0",
      codeSP: "0",
      descriptionResponse: "success",
      nameSP: "getProduct"
    },
    {
      codeResponse: "0",
      codeSP: "999",
      descriptionResponse: "success",
      nameSP: "changePlan"
    },
    {
      codeResponse: "10009999",
      codeSP: "-17",
      descriptionResponse: "Change plan failed",
      nameSP: "changePlan"
    },
    {
      codeResponse: "1",
      codeSP: "900",
      descriptionResponse: "Missing Required Parameters",
      nameSP: "updateUser"
    },
    {
      codeResponse: "6",
      codeSP: "904",
      descriptionResponse: "User not found",
      nameSP: "deleteUser"
    },
    {
      codeResponse: "0",
      codeSP: "903",
      descriptionResponse: "success",
      nameSP: "queryUser"
    },
    {
      codeResponse: "0",
      codeSP: "999",
      descriptionResponse: "success",
      nameSP: "queryUser"
    },
    {
      codeResponse: "1",
      codeSP: "902",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "buyProduct"
    },
    {
      codeResponse: "1",
      codeSP: "900",
      descriptionResponse: "Missing Required Parameters",
      nameSP: "changeSim"
    },
    {
      codeResponse: "1",
      codeSP: "904",
      descriptionResponse: "getProducts failed",
      nameSP: "getProduct"
    },
    {
      codeResponse: "0",
      codeSP: "0",
      descriptionResponse: "success",
      nameSP: "cancelProduct"
    },
    {
      codeResponse: "0",
      codeSP: "0",
      descriptionResponse: "success",
      nameSP: "provisioning"
    },
    {
      codeResponse: "10009999",
      codeSP: "907",
      descriptionResponse: "Change plan failed",
      nameSP: "changePlan"
    },
    {
      codeResponse: "9999",
      codeSP: "906",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "getDownloadProfileStatus"
    },
    {
      codeResponse: "1",
      codeSP: "905",
      descriptionResponse: "Line is already cancelled",
      nameSP: "unProvisioning"
    },
    {
      codeResponse: "1",
      codeSP: "-10",
      descriptionResponse: "unProvisioning failed",
      nameSP: "unProvisioning"
    },
    {
      codeResponse: "0",
      codeSP: "999",
      descriptionResponse: "success",
      nameSP: "createUser"
    },
    {
      codeResponse: "1",
      codeSP: "907",
      descriptionResponse: "User creation failed",
      nameSP: "createUser"
    },
    {
      codeResponse: "0",
      codeSP: "0",
      descriptionResponse: "success",
      nameSP: "buyProduct"
    },
    {
      codeResponse: "1",
      codeSP: "902",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "provisioning"
    },
    {
      codeResponse: "1",
      codeSP: "904",
      descriptionResponse: "unProvisioning failed",
      nameSP: "unProvisioning"
    },
    {
      codeResponse: "0",
      codeSP: "0",
      descriptionResponse: "success",
      nameSP: "deleteUser"
    },
    {
      codeResponse: "0",
      codeSP: "903",
      descriptionResponse: "success",
      nameSP: "deleteUser"
    },
    {
      codeResponse: "1",
      codeSP: "902",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "queryUser"
    },
    {
      codeResponse: "0",
      codeSP: "0",
      descriptionResponse: "success",
      nameSP: "buyProduct"
    },
    {
      codeResponse: "0",
      codeSP: "999",
      descriptionResponse: "cancelProduct failed",
      nameSP: "cancelProduct"
    },
    {
      codeResponse: "9999",
      codeSP: "908",
      descriptionResponse: "Change plan failed",
      nameSP: "changePlan"
    },
    {
      codeResponse: "0",
      codeSP: "0",
      descriptionResponse: "success",
      nameSP: "planList"
    },
    {
      codeResponse: "1",
      codeSP: "906",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "provisioning"
    },
    {
      codeResponse: "9999",
      codeSP: "900",
      descriptionResponse: "Required Parameters: Invalid Value",
      nameSP: "planList"
    },
    {
      codeResponse: "9999",
      codeSP: "902",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "planList"
    },
    {
      codeResponse: "10009999",
      codeSP: "-7",
      descriptionResponse: "Change plan failed",
      nameSP: "changePlan"
    },
    {
      codeResponse: "9999",
      codeSP: "901",
      descriptionResponse: "Required Parameters: Invalid Value",
      nameSP: "getDownloadProfileStatus"
    },
    {
      codeResponse: "9999",
      codeSP: "904",
      descriptionResponse: "Error getting the subscriber data",
      nameSP: "getDownloadProfileStatus"
    },
    {
      codeResponse: "0",
      codeSP: "999",
      descriptionResponse: "success",
      nameSP: "unProvisioning"
    },
    {
      codeResponse: "1",
      codeSP: "-13",
      descriptionResponse: "unProvisioning failed",
      nameSP: "unProvisioning"
    },
    {
      codeResponse: "1",
      codeSP: "901",
      descriptionResponse: "Required Parameters: Invalid Value",
      nameSP: "cancelProduct"
    },
    {
      codeResponse: "0",
      codeSP: "0",
      descriptionResponse: "success",
      nameSP: "cancelProduct"
    },
    {
      codeResponse: "9999",
      codeSP: "902",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "planList"
    },
    {
      codeResponse: "9999",
      codeSP: "901",
      descriptionResponse: "Required Parameters: Invalid Value",
      nameSP: "changePlan"
    },
    {
      codeResponse: "0",
      codeSP: "903",
      descriptionResponse: "success",
      nameSP: "changePlan"
    },
    {
      codeResponse: "1",
      codeSP: "904",
      descriptionResponse: "buyProduct failed",
      nameSP: "buyProduct"
    },
    {
      codeResponse: "1",
      codeSP: "902",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "getProduct"
    },
    {
      codeResponse: "1",
      codeSP: "903",
      descriptionResponse: "getProducts failed",
      nameSP: "getProduct"
    },
    {
      codeResponse: "0",
      codeSP: "0",
      descriptionResponse: "success",
      nameSP: "getProduct"
    },
    {
      codeResponse: "1",
      codeSP: "901",
      descriptionResponse: "Required Parameters: Invalid Value",
      nameSP: "provisioning"
    },
    {
      codeResponse: "9999",
      codeSP: "906",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "planList"
    },
    {
      codeResponse: "10009999",
      codeSP: "-15",
      descriptionResponse: "Change plan failed",
      nameSP: "changePlan"
    },
    {
      codeResponse: "0",
      codeSP: "0",
      descriptionResponse: "success",
      nameSP: "getDownloadProfileStatus"
    },
    {
      codeResponse: "1",
      codeSP: "906",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "unProvisioning"
    },
    {
      codeResponse: "1",
      codeSP: "900",
      descriptionResponse: "Missing Required Parameters",
      nameSP: "createUser"
    },
    {
      codeResponse: "0",
      codeSP: "0",
      descriptionResponse: "success",
      nameSP: "createUser"
    },
    {
      codeResponse: "0",
      codeSP: "0",
      descriptionResponse: "success",
      nameSP: "updateUser"
    },
    {
      codeResponse: "1",
      codeSP: "902",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "deleteUser"
    },
    {
      codeResponse: "0",
      codeSP: "0",
      descriptionResponse: "success",
      nameSP: "queryUser"
    },
    {
      codeResponse: "0",
      codeSP: "0",
      descriptionResponse: "success",
      nameSP: "getDownloadProfileStatus"
    },
    {
      codeResponse: "1",
      codeSP: "-1",
      descriptionResponse: "unProvisioning failed",
      nameSP: "unProvisioning"
    },
    {
      codeResponse: "1",
      codeSP: "-4",
      descriptionResponse: "unProvisioning failed",
      nameSP: "unProvisioning"
    },
    {
      codeResponse: "1",
      codeSP: "901",
      descriptionResponse: "Required Parameters: Invalid Value",
      nameSP: "createUser"
    },
    {
      codeResponse: "1",
      codeSP: "901",
      descriptionResponse: "Required Parameters: Invalid Value",
      nameSP: "buyProduct"
    },
    {
      codeResponse: "0",
      codeSP: "1",
      descriptionResponse: "success",
      nameSP: "changeSim"
    },
    {
      codeResponse: "1",
      codeSP: "902",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "changeSim"
    },
    {
      codeResponse: "1",
      codeSP: "901",
      descriptionResponse: "Required Parameters: Invalid Value",
      nameSP: "getProduct"
    },
    {
      codeResponse: "1",
      codeSP: "902",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "cancelProduct"
    },
    {
      codeResponse: "1111",
      codeSP: "111",
      descriptionResponse: "Test Insert",
      nameSP: "testInput"
    },
    {
      codeResponse: "1",
      codeSP: "900",
      descriptionResponse: "Missing Required Parameters",
      nameSP: "unProvisioning"
    },
    {
      codeResponse: "1",
      codeSP: "-11",
      descriptionResponse: "unProvisioning failed",
      nameSP: "unProvisioning"
    },
    {
      codeResponse: "1",
      codeSP: "901",
      descriptionResponse: "Required Parameters: Invalid Value",
      nameSP: "changeSim"
    },
    {
      codeResponse: "1",
      codeSP: "900",
      descriptionResponse: "Missing Required Parameters",
      nameSP: "getProduct"
    },
    {
      codeResponse: "1",
      codeSP: "906",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "cancelProduct"
    },
    {
      codeResponse: "5",
      codeSP: "905",
      descriptionResponse: "The subscriber already has the planId",
      nameSP: "changePlan"
    },
    {
      codeResponse: "1",
      codeSP: "901",
      descriptionResponse: "Required Parameters: Invalid Value",
      nameSP: "unProvisioning"
    },
    {
      codeResponse: "0",
      codeSP: "0",
      descriptionResponse: "success",
      nameSP: "unProvisioning"
    },
    {
      codeResponse: "1",
      codeSP: "-9",
      descriptionResponse: "unProvisioning failed",
      nameSP: "unProvisioning"
    },
    {
      codeResponse: "1",
      codeSP: "903",
      descriptionResponse: "buyProduct failed",
      nameSP: "buyProduct"
    },
    {
      codeResponse: "0",
      codeSP: "903",
      descriptionResponse: "success",
      nameSP: "provisioning"
    },
    {
      codeResponse: "9999",
      codeSP: "999",
      descriptionResponse: "Error getting the subscriber data",
      nameSP: "getDownloadProfileStatus"
    },
    {
      codeResponse: "1",
      codeSP: "906",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "createUser"
    },
    {
      codeResponse: "0",
      codeSP: "0",
      descriptionResponse: "success",
      nameSP: "createUser"
    },
    {
      codeResponse: "1",
      codeSP: "902",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "updateUser"
    },
    {
      codeResponse: "1",
      codeSP: "906",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "updateUser"
    },
    {
      codeResponse: "3",
      codeSP: "908",
      descriptionResponse: "ICCID/MSISDN do not match",
      nameSP: "changeSim"
    },
    {
      codeResponse: "5",
      codeSP: "-16",
      descriptionResponse: "The subscriber already has the planId",
      nameSP: "changePlan"
    },
    {
      codeResponse: "1",
      codeSP: "-14",
      descriptionResponse: "unProvisioning failed",
      nameSP: "unProvisioning"
    },
    {
      codeResponse: "0",
      codeSP: "0",
      descriptionResponse: "success",
      nameSP: "deleteUser"
    },
    {
      codeResponse: "1",
      codeSP: "906",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "changeSim"
    },
    {
      codeResponse: "1",
      codeSP: "999",
      descriptionResponse: "getProducts failed",
      nameSP: "getProduct"
    },
    {
      codeResponse: "8000",
      codeSP: "8000",
      descriptionResponse: "Prueba de Test Micro",
      nameSP: "testmicro"
    },
    {
      codeResponse: "0",
      codeSP: "0",
      descriptionResponse: "success",
      nameSP: "provisioning"
    },
    {
      codeResponse: "9999",
      codeSP: "999",
      descriptionResponse: "Error getting plans for enterpriseId: {0} and providerId: {1}",
      nameSP: "planList"
    },
    {
      codeResponse: "9999",
      codeSP: "902",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "changePlan"
    },
    {
      codeResponse: "10009999",
      codeSP: "-1",
      descriptionResponse: "Change plan failed",
      nameSP: "changePlan"
    },
    {
      codeResponse: "0",
      codeSP: "0",
      descriptionResponse: "success",
      nameSP: "updateUser"
    },
    {
      codeResponse: "1",
      codeSP: "900",
      descriptionResponse: "Missing Required Parameters",
      nameSP: "deleteUser"
    },
    {
      codeResponse: "0",
      codeSP: "0",
      descriptionResponse: "success",
      nameSP: "queryUser"
    },
    {
      codeResponse: "1",
      codeSP: "900",
      descriptionResponse: "Missing Required Parameters",
      nameSP: "buyProduct"
    },
    {
      codeResponse: "1",
      codeSP: "906",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "buyProduct"
    },
    {
      codeResponse: "0",
      codeSP: "0",
      descriptionResponse: "success",
      nameSP: "changeSim"
    },
    {
      codeResponse: "1",
      codeSP: "906",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "getProduct"
    },
    {
      codeResponse: "2",
      codeSP: "907",
      descriptionResponse: "No products available",
      nameSP: "getProduct"
    },
    {
      codeResponse: "0",
      codeSP: "999",
      descriptionResponse: "success",
      nameSP: "provisioning"
    },
    {
      codeResponse: "9999",
      codeSP: "901",
      descriptionResponse: "Missing Required Parameters",
      nameSP: "planList"
    },
    {
      codeResponse: "9999",
      codeSP: "906",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "changePlan"
    },
    {
      codeResponse: "0",
      codeSP: "903",
      descriptionResponse: "success",
      nameSP: "createUser"
    },
    {
      codeResponse: "0",
      codeSP: "999",
      descriptionResponse: "success",
      nameSP: "updateUser"
    },
    {
      codeResponse: "1",
      codeSP: "907",
      descriptionResponse: "User delete failed",
      nameSP: "deleteUser"
    },
    {
      codeResponse: "0",
      codeSP: "903",
      descriptionResponse: "success",
      nameSP: "changeSim"
    },
    {
      codeResponse: "1",
      codeSP: "900",
      descriptionResponse: "Missing Required Parameters",
      nameSP: "cancelProduct"
    },
    {
      codeResponse: "9999",
      codeSP: "904",
      descriptionResponse: "Error getting plans for enterpriseId: {0} and providerId: {1}",
      nameSP: "planList"
    },
    {
      codeResponse: "9999",
      codeSP: "902",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "getDownloadProfileStatus"
    },
    {
      codeResponse: "1",
      codeSP: "-8",
      descriptionResponse: "unProvisioning failed",
      nameSP: "unProvisioning"
    },
    {
      codeResponse: "1",
      codeSP: "902",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "createUser"
    },
    {
      codeResponse: "1",
      codeSP: "901",
      descriptionResponse: "Required Parameters: Invalid Value",
      nameSP: "updateUser"
    },
    {
      codeResponse: "0",
      codeSP: "903",
      descriptionResponse: "success",
      nameSP: "updateUser"
    },
    {
      codeResponse: "6",
      codeSP: "904",
      descriptionResponse: "User not found",
      nameSP: "updateUser"
    },
    {
      codeResponse: "0",
      codeSP: "999",
      descriptionResponse: "success",
      nameSP: "deleteUser"
    },
    {
      codeResponse: "1",
      codeSP: "907",
      descriptionResponse: "User query failed",
      nameSP: "queryUser"
    },
    {
      codeResponse: "6",
      codeSP: "904",
      descriptionResponse: "User not found",
      nameSP: "queryUser"
    },
    {
      codeResponse: "1",
      codeSP: "999",
      descriptionResponse: "buyProduct failed",
      nameSP: "buyProduct"
    },
    {
      codeResponse: "2",
      codeSP: "907",
      descriptionResponse: "buyProduct failed: limit exceed",
      nameSP: "buyProduct"
    },
    {
      codeResponse: "1",
      codeSP: "904",
      descriptionResponse: "Creation Failed",
      nameSP: "provisioning"
    },
    {
      codeResponse: "9999",
      codeSP: "900",
      descriptionResponse: "Missing Required Parameters",
      nameSP: "changePlan"
    },
    {
      codeResponse: "1",
      codeSP: "902",
      descriptionResponse: "Parameter Invalid Value",
      nameSP: "unProvisioning"
    },
    {
      codeResponse: "1",
      codeSP: "-12",
      descriptionResponse: "unProvisioning failed",
      nameSP: "unProvisioning"
    },
    {
      codeResponse: "1",
      codeSP: "907",
      descriptionResponse: "User update failed",
      nameSP: "updateUser"
    },
    {
      codeResponse: "1",
      codeSP: "901",
      descriptionResponse: "Required Parameters: Invalid Value",
      nameSP: "deleteUser"
    },
    {
      codeResponse: "1",
      codeSP: "900",
      descriptionResponse: "Missing Required Parameters",
      nameSP: "queryUser"
    },
    {
      codeResponse: "1",
      codeSP: "901",
      descriptionResponse: "Required Parameters: Invalid Value",
      nameSP: "queryUser"
    },
    {
      codeResponse: "1",
      codeSP: "903",
      descriptionResponse: "cancelProduct failed",
      nameSP: "cancelProduct"
    }
  ]
);