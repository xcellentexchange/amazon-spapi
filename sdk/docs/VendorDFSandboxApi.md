# SellingPartnerApiForVendorDirectFulfillmentSandboxTestData.VendorDFSandboxApi

All URIs are relative to *https://sandbox.sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateOrderScenarios**](VendorDFSandboxApi.md#generateOrderScenarios) | **POST** /vendor/directFulfillment/sandbox/2021-10-28/orders | 


<a name="generateOrderScenarios"></a>
# **generateOrderScenarios**
> TransactionReference generateOrderScenarios(body)



Submits a request to generate test order data for Vendor Direct Fulfillment API entities.

### Example
```javascript
import {SellingPartnerApiForVendorDirectFulfillmentSandboxTestData} from 'selling_partner_api_for_vendor_direct_fulfillment_sandbox_test_data';

let apiInstance = new SellingPartnerApiForVendorDirectFulfillmentSandboxTestData.VendorDFSandboxApi();

let body = new SellingPartnerApiForVendorDirectFulfillmentSandboxTestData.GenerateOrderScenarioRequest(); // GenerateOrderScenarioRequest | The request payload that contain parameters to generate test order data scenarios.

apiInstance.generateOrderScenarios(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GenerateOrderScenarioRequest**](GenerateOrderScenarioRequest.md)| The request payload that contain parameters to generate test order data scenarios. | 

### Return type

[**TransactionReference**](TransactionReference.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

