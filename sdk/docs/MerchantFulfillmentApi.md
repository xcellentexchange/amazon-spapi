# SellingPartnerApiForMerchantFulfillment.MerchantFulfillmentApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelShipment**](MerchantFulfillmentApi.md#cancelShipment) | **DELETE** /mfn/v0/shipments/{shipmentId} | 
[**createShipment**](MerchantFulfillmentApi.md#createShipment) | **POST** /mfn/v0/shipments | 
[**getAdditionalSellerInputs**](MerchantFulfillmentApi.md#getAdditionalSellerInputs) | **POST** /mfn/v0/additionalSellerInputs | 
[**getEligibleShipmentServices**](MerchantFulfillmentApi.md#getEligibleShipmentServices) | **POST** /mfn/v0/eligibleShippingServices | 
[**getShipment**](MerchantFulfillmentApi.md#getShipment) | **GET** /mfn/v0/shipments/{shipmentId} | 


<a name="cancelShipment"></a>
# **cancelShipment**
> CancelShipmentResponse cancelShipment(shipmentId)



Cancel the shipment indicated by the specified shipment identifier.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForMerchantFulfillment} from 'selling_partner_api_for_merchant_fulfillment';

let apiInstance = new SellingPartnerApiForMerchantFulfillment.MerchantFulfillmentApi();

let shipmentId = "shipmentId_example"; // String | The Amazon-defined shipment identifier for the shipment to cancel.

apiInstance.cancelShipment(shipmentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **String**| The Amazon-defined shipment identifier for the shipment to cancel. | 

### Return type

[**CancelShipmentResponse**](CancelShipmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createShipment"></a>
# **createShipment**
> CreateShipmentResponse createShipment(body)



Create a shipment with the information provided.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForMerchantFulfillment} from 'selling_partner_api_for_merchant_fulfillment';

let apiInstance = new SellingPartnerApiForMerchantFulfillment.MerchantFulfillmentApi();

let body = new SellingPartnerApiForMerchantFulfillment.CreateShipmentRequest(); // CreateShipmentRequest | Request schema for CreateShipment operation.

apiInstance.createShipment(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateShipmentRequest**](CreateShipmentRequest.md)| Request schema for CreateShipment operation. | 

### Return type

[**CreateShipmentResponse**](CreateShipmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAdditionalSellerInputs"></a>
# **getAdditionalSellerInputs**
> GetAdditionalSellerInputsResponse getAdditionalSellerInputs(body)



Gets a list of additional seller inputs required for a ship method. This is generally used for international shipping.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForMerchantFulfillment} from 'selling_partner_api_for_merchant_fulfillment';

let apiInstance = new SellingPartnerApiForMerchantFulfillment.MerchantFulfillmentApi();

let body = new SellingPartnerApiForMerchantFulfillment.GetAdditionalSellerInputsRequest(); // GetAdditionalSellerInputsRequest | Request schema for GetAdditionalSellerInputs operation.

apiInstance.getAdditionalSellerInputs(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GetAdditionalSellerInputsRequest**](GetAdditionalSellerInputsRequest.md)| Request schema for GetAdditionalSellerInputs operation. | 

### Return type

[**GetAdditionalSellerInputsResponse**](GetAdditionalSellerInputsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEligibleShipmentServices"></a>
# **getEligibleShipmentServices**
> GetEligibleShipmentServicesResponse getEligibleShipmentServices(body)



Returns a list of shipping service offers that satisfy the specified shipment request details.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForMerchantFulfillment} from 'selling_partner_api_for_merchant_fulfillment';

let apiInstance = new SellingPartnerApiForMerchantFulfillment.MerchantFulfillmentApi();

let body = new SellingPartnerApiForMerchantFulfillment.GetEligibleShipmentServicesRequest(); // GetEligibleShipmentServicesRequest | Request schema for GetEligibleShipmentServices operation.

apiInstance.getEligibleShipmentServices(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GetEligibleShipmentServicesRequest**](GetEligibleShipmentServicesRequest.md)| Request schema for GetEligibleShipmentServices operation. | 

### Return type

[**GetEligibleShipmentServicesResponse**](GetEligibleShipmentServicesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getShipment"></a>
# **getShipment**
> GetShipmentResponse getShipment(shipmentId)



Returns the shipment information for an existing shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForMerchantFulfillment} from 'selling_partner_api_for_merchant_fulfillment';

let apiInstance = new SellingPartnerApiForMerchantFulfillment.MerchantFulfillmentApi();

let shipmentId = "shipmentId_example"; // String | The Amazon-defined shipment identifier for the shipment.

apiInstance.getShipment(shipmentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **String**| The Amazon-defined shipment identifier for the shipment. | 

### Return type

[**GetShipmentResponse**](GetShipmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

