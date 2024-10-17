# SellingPartnerApiForDirectFulfillmentInventoryUpdates.UpdateInventoryApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submitInventoryUpdate**](UpdateInventoryApi.md#submitInventoryUpdate) | **POST** /vendor/directFulfillment/inventory/v1/warehouses/{warehouseId}/items | 


<a name="submitInventoryUpdate"></a>
# **submitInventoryUpdate**
> SubmitInventoryUpdateResponse submitInventoryUpdate(body, warehouseId)



Submits inventory updates for the specified warehouse for either a partial or full feed of inventory items.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that are applied to the operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the *SP-API*](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForDirectFulfillmentInventoryUpdates} from 'selling_partner_api_for_direct_fulfillment_inventory_updates';

let apiInstance = new SellingPartnerApiForDirectFulfillmentInventoryUpdates.UpdateInventoryApi();

let body = new SellingPartnerApiForDirectFulfillmentInventoryUpdates.SubmitInventoryUpdateRequest(); // SubmitInventoryUpdateRequest | The request body that contains the inventory update data to submit.

let warehouseId = "warehouseId_example"; // String | Identifier for the warehouse for which to update inventory.

apiInstance.submitInventoryUpdate(body, warehouseId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SubmitInventoryUpdateRequest**](SubmitInventoryUpdateRequest.md)| The request body that contains the inventory update data to submit. | 
 **warehouseId** | **String**| Identifier for the warehouse for which to update inventory. | 

### Return type

[**SubmitInventoryUpdateResponse**](SubmitInventoryUpdateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

