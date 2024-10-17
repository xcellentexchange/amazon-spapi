# SellingPartnerApiForVendorDirectFulfillmentSandboxTestData.VendorDFSandboxtransactionstatusApi

All URIs are relative to *https://sandbox.sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrderScenarios**](VendorDFSandboxtransactionstatusApi.md#getOrderScenarios) | **GET** /vendor/directFulfillment/sandbox/2021-10-28/transactions/{transactionId} | 


<a name="getOrderScenarios"></a>
# **getOrderScenarios**
> TransactionStatus getOrderScenarios(transactionId)



Retrieves the transaction status identified by the specified `transactionId`, and returns the requested test order data if the transaction is successful.

### Example
```javascript
import {SellingPartnerApiForVendorDirectFulfillmentSandboxTestData} from 'selling_partner_api_for_vendor_direct_fulfillment_sandbox_test_data';

let apiInstance = new SellingPartnerApiForVendorDirectFulfillmentSandboxTestData.VendorDFSandboxtransactionstatusApi();

let transactionId = "transactionId_example"; // String | The transaction identifier returned in the response for the `generateOrderScenarios` operation.

apiInstance.getOrderScenarios(transactionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **String**| The transaction identifier returned in the response for the `generateOrderScenarios` operation. | 

### Return type

[**TransactionStatus**](TransactionStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

