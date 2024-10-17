# SellingPartnerApiForDirectFulfillmentShipping.VendorShippingLabelsApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createShippingLabels**](VendorShippingLabelsApi.md#createShippingLabels) | **POST** /vendor/directFulfillment/shipping/2021-12-28/shippingLabels/{purchaseOrderNumber} | 
[**getShippingLabel**](VendorShippingLabelsApi.md#getShippingLabel) | **GET** /vendor/directFulfillment/shipping/2021-12-28/shippingLabels/{purchaseOrderNumber} | 
[**getShippingLabels**](VendorShippingLabelsApi.md#getShippingLabels) | **GET** /vendor/directFulfillment/shipping/2021-12-28/shippingLabels | 
[**submitShippingLabelRequest**](VendorShippingLabelsApi.md#submitShippingLabelRequest) | **POST** /vendor/directFulfillment/shipping/2021-12-28/shippingLabels | 


<a name="createShippingLabels"></a>
# **createShippingLabels**
> ShippingLabel createShippingLabels(purchaseOrderNumber, body)



Creates shipping labels for a purchase order and returns the labels.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForDirectFulfillmentShipping} from 'selling_partner_api_for_direct_fulfillment_shipping';

let apiInstance = new SellingPartnerApiForDirectFulfillmentShipping.VendorShippingLabelsApi();

let purchaseOrderNumber = "purchaseOrderNumber_example"; // String | The purchase order number for which you want to return the shipping labels. It should be the same purchaseOrderNumber as received in the order.

let body = new SellingPartnerApiForDirectFulfillmentShipping.CreateShippingLabelsRequest(); // CreateShippingLabelsRequest | The request payload that contains parameters for creating shipping labels.

apiInstance.createShippingLabels(purchaseOrderNumber, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **purchaseOrderNumber** | **String**| The purchase order number for which you want to return the shipping labels. It should be the same purchaseOrderNumber as received in the order. | 
 **body** | [**CreateShippingLabelsRequest**](CreateShippingLabelsRequest.md)| The request payload that contains parameters for creating shipping labels. | 

### Return type

[**ShippingLabel**](ShippingLabel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getShippingLabel"></a>
# **getShippingLabel**
> ShippingLabel getShippingLabel(purchaseOrderNumber)



Returns a shipping label for the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForDirectFulfillmentShipping} from 'selling_partner_api_for_direct_fulfillment_shipping';

let apiInstance = new SellingPartnerApiForDirectFulfillmentShipping.VendorShippingLabelsApi();

let purchaseOrderNumber = "purchaseOrderNumber_example"; // String | The purchase order number for which you want to return the shipping label. Should be the same `purchaseOrderNumber` as received in the order.

apiInstance.getShippingLabel(purchaseOrderNumber).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **purchaseOrderNumber** | **String**| The purchase order number for which you want to return the shipping label. Should be the same `purchaseOrderNumber` as received in the order. | 

### Return type

[**ShippingLabel**](ShippingLabel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getShippingLabels"></a>
# **getShippingLabels**
> ShippingLabelList getShippingLabels(createdAfter, createdBefore, opts)



Returns a list of shipping labels created during the time frame that you specify. You define that time frame using the createdAfter and createdBefore parameters. You must use both of these parameters. The date range to search must not be more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForDirectFulfillmentShipping} from 'selling_partner_api_for_direct_fulfillment_shipping';

let apiInstance = new SellingPartnerApiForDirectFulfillmentShipping.VendorShippingLabelsApi();

let createdAfter = new Date("2013-10-20T19:20:30+01:00"); // Date | Shipping labels that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.

let createdBefore = new Date("2013-10-20T19:20:30+01:00"); // Date | Shipping labels that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.

let opts = { 
  'shipFromPartyId': "shipFromPartyId_example", // String | The vendor warehouseId for order fulfillment. If not specified, the result will contain orders for all warehouses.
  'limit': 56, // Number | The limit to the number of records returned.
  'sortOrder': "ASC", // String | Sort ASC or DESC by order creation date.
  'nextToken': "nextToken_example" // String | Used for pagination when there are more ship labels than the specified result size limit. The token value is returned in the previous API call.
};
apiInstance.getShippingLabels(createdAfter, createdBefore, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createdAfter** | **Date**| Shipping labels that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format. | 
 **createdBefore** | **Date**| Shipping labels that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format. | 
 **shipFromPartyId** | **String**| The vendor warehouseId for order fulfillment. If not specified, the result will contain orders for all warehouses. | [optional] 
 **limit** | **Number**| The limit to the number of records returned. | [optional] 
 **sortOrder** | **String**| Sort ASC or DESC by order creation date. | [optional] [default to ASC]
 **nextToken** | **String**| Used for pagination when there are more ship labels than the specified result size limit. The token value is returned in the previous API call. | [optional] 

### Return type

[**ShippingLabelList**](ShippingLabelList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="submitShippingLabelRequest"></a>
# **submitShippingLabelRequest**
> TransactionReference submitShippingLabelRequest(body)



Creates a shipping label for a purchase order and returns a transactionId for reference.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForDirectFulfillmentShipping} from 'selling_partner_api_for_direct_fulfillment_shipping';

let apiInstance = new SellingPartnerApiForDirectFulfillmentShipping.VendorShippingLabelsApi();

let body = new SellingPartnerApiForDirectFulfillmentShipping.SubmitShippingLabelsRequest(); // SubmitShippingLabelsRequest | Request body that contains the shipping labels data.

apiInstance.submitShippingLabelRequest(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SubmitShippingLabelsRequest**](SubmitShippingLabelsRequest.md)| Request body that contains the shipping labels data. | 

### Return type

[**TransactionReference**](TransactionReference.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

