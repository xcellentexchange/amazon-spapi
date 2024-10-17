# SellingPartnerApiForRetailProcurementShipments.VendorShippingApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getShipmentDetails**](VendorShippingApi.md#getShipmentDetails) | **GET** /vendor/shipping/v1/shipments | 
[**submitShipmentConfirmations**](VendorShippingApi.md#submitShipmentConfirmations) | **POST** /vendor/shipping/v1/shipmentConfirmations | 
[**submitShipments**](VendorShippingApi.md#submitShipments) | **POST** /vendor/shipping/v1/shipments | 


<a name="getShipmentDetails"></a>
# **getShipmentDetails**
> GetShipmentDetailsResponse getShipmentDetails(opts)



Returns the Details about Shipment, Carrier Details,  status of the shipment, container details and other details related to shipment based on the filter parameters value that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForRetailProcurementShipments} from 'selling_partner_api_for_retail_procurement_shipments';

let apiInstance = new SellingPartnerApiForRetailProcurementShipments.VendorShippingApi();

let opts = { 
  'limit': 789, // Number | The limit to the number of records returned. Default value is 50 records.
  'sortOrder': "sortOrder_example", // String | Sort in ascending or descending order by purchase order creation date.
  'nextToken': "nextToken_example", // String | Used for pagination when there are more shipments than the specified result size limit.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Get Shipment Details that became available after this timestamp will be included in the result. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Get Shipment Details that became available before this timestamp will be included in the result. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
  'shipmentConfirmedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Get Shipment Details by passing Shipment confirmed create Date Before. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
  'shipmentConfirmedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Get Shipment Details by passing Shipment confirmed create Date After. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
  'packageLabelCreatedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Get Shipment Details by passing Package label create Date by buyer. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
  'packageLabelCreatedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Get Shipment Details by passing Package label create Date After by buyer. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
  'shippedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Get Shipment Details by passing Shipped Date Before. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
  'shippedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Get Shipment Details by passing Shipped Date After. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
  'estimatedDeliveryBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Get Shipment Details by passing Estimated Delivery Date Before. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
  'estimatedDeliveryAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Get Shipment Details by passing Estimated Delivery Date Before. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
  'shipmentDeliveryBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Get Shipment Details by passing Shipment Delivery Date Before. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
  'shipmentDeliveryAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Get Shipment Details by passing Shipment Delivery Date After. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
  'requestedPickUpBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Get Shipment Details by passing Before Requested pickup date. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
  'requestedPickUpAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Get Shipment Details by passing After Requested pickup date. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
  'scheduledPickUpBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Get Shipment Details by passing Before scheduled pickup date. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
  'scheduledPickUpAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Get Shipment Details by passing After Scheduled pickup date. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
  'currentShipmentStatus': "currentShipmentStatus_example", // String | Get Shipment Details by passing Current shipment status.
  'vendorShipmentIdentifier': "vendorShipmentIdentifier_example", // String | Get Shipment Details by passing Vendor Shipment ID
  'buyerReferenceNumber': "buyerReferenceNumber_example", // String | Get Shipment Details by passing buyer Reference ID
  'buyerWarehouseCode': "buyerWarehouseCode_example", // String | Get Shipping Details based on buyer warehouse code. This value should be same as 'shipToParty.partyId' in the Shipment.
  'sellerWarehouseCode': "sellerWarehouseCode_example" // String | Get Shipping Details based on vendor warehouse code. This value should be same as 'sellingParty.partyId' in the Shipment.
};
apiInstance.getShipmentDetails(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The limit to the number of records returned. Default value is 50 records. | [optional] 
 **sortOrder** | **String**| Sort in ascending or descending order by purchase order creation date. | [optional] 
 **nextToken** | **String**| Used for pagination when there are more shipments than the specified result size limit. | [optional] 
 **createdAfter** | **Date**| Get Shipment Details that became available after this timestamp will be included in the result. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. | [optional] 
 **createdBefore** | **Date**| Get Shipment Details that became available before this timestamp will be included in the result. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. | [optional] 
 **shipmentConfirmedBefore** | **Date**| Get Shipment Details by passing Shipment confirmed create Date Before. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. | [optional] 
 **shipmentConfirmedAfter** | **Date**| Get Shipment Details by passing Shipment confirmed create Date After. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. | [optional] 
 **packageLabelCreatedBefore** | **Date**| Get Shipment Details by passing Package label create Date by buyer. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. | [optional] 
 **packageLabelCreatedAfter** | **Date**| Get Shipment Details by passing Package label create Date After by buyer. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. | [optional] 
 **shippedBefore** | **Date**| Get Shipment Details by passing Shipped Date Before. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. | [optional] 
 **shippedAfter** | **Date**| Get Shipment Details by passing Shipped Date After. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. | [optional] 
 **estimatedDeliveryBefore** | **Date**| Get Shipment Details by passing Estimated Delivery Date Before. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. | [optional] 
 **estimatedDeliveryAfter** | **Date**| Get Shipment Details by passing Estimated Delivery Date Before. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. | [optional] 
 **shipmentDeliveryBefore** | **Date**| Get Shipment Details by passing Shipment Delivery Date Before. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. | [optional] 
 **shipmentDeliveryAfter** | **Date**| Get Shipment Details by passing Shipment Delivery Date After. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. | [optional] 
 **requestedPickUpBefore** | **Date**| Get Shipment Details by passing Before Requested pickup date. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. | [optional] 
 **requestedPickUpAfter** | **Date**| Get Shipment Details by passing After Requested pickup date. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. | [optional] 
 **scheduledPickUpBefore** | **Date**| Get Shipment Details by passing Before scheduled pickup date. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. | [optional] 
 **scheduledPickUpAfter** | **Date**| Get Shipment Details by passing After Scheduled pickup date. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. | [optional] 
 **currentShipmentStatus** | **String**| Get Shipment Details by passing Current shipment status. | [optional] 
 **vendorShipmentIdentifier** | **String**| Get Shipment Details by passing Vendor Shipment ID | [optional] 
 **buyerReferenceNumber** | **String**| Get Shipment Details by passing buyer Reference ID | [optional] 
 **buyerWarehouseCode** | **String**| Get Shipping Details based on buyer warehouse code. This value should be same as 'shipToParty.partyId' in the Shipment. | [optional] 
 **sellerWarehouseCode** | **String**| Get Shipping Details based on vendor warehouse code. This value should be same as 'sellingParty.partyId' in the Shipment. | [optional] 

### Return type

[**GetShipmentDetailsResponse**](GetShipmentDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="submitShipmentConfirmations"></a>
# **submitShipmentConfirmations**
> SubmitShipmentConfirmationsResponse submitShipmentConfirmations(body)



Submits one or more shipment confirmations for vendor orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForRetailProcurementShipments} from 'selling_partner_api_for_retail_procurement_shipments';

let apiInstance = new SellingPartnerApiForRetailProcurementShipments.VendorShippingApi();

let body = new SellingPartnerApiForRetailProcurementShipments.SubmitShipmentConfirmationsRequest(); // SubmitShipmentConfirmationsRequest | A request to submit shipment confirmation.

apiInstance.submitShipmentConfirmations(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SubmitShipmentConfirmationsRequest**](SubmitShipmentConfirmationsRequest.md)| A request to submit shipment confirmation. | 

### Return type

[**SubmitShipmentConfirmationsResponse**](SubmitShipmentConfirmationsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="submitShipments"></a>
# **submitShipments**
> SubmitShipmentConfirmationsResponse submitShipments(body)



Submits one or more shipment request for vendor Orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForRetailProcurementShipments} from 'selling_partner_api_for_retail_procurement_shipments';

let apiInstance = new SellingPartnerApiForRetailProcurementShipments.VendorShippingApi();

let body = new SellingPartnerApiForRetailProcurementShipments.SubmitShipments(); // SubmitShipments | A request to submit shipment request.

apiInstance.submitShipments(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SubmitShipments**](SubmitShipments.md)| A request to submit shipment request. | 

### Return type

[**SubmitShipmentConfirmationsResponse**](SubmitShipmentConfirmationsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

