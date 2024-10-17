# SellingPartnerApiForDirectFulfillmentShipping.StatusUpdateDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trackingNumber** | **String** | This is required to be provided for every package and should match with the trackingNumber sent for the shipment confirmation. | 
**statusCode** | **String** | The shipment status code for the package that provides transportation information for Amazon tracking systems and the final customer. For more information, refer to the [Additional Fields Explanation](https://developer-docs.amazon.com/sp-api/docs/vendor-direct-fulfillment-shipping-api-use-case-guide#additional-fields-explanation). | 
**reasonCode** | **String** | Provides a reason code for the package status that provides additional information about the transportation status. For more information, refer to the [Additional Fields Explanation](https://developer-docs.amazon.com/sp-api/docs/vendor-direct-fulfillment-shipping-api-use-case-guide#additional-fields-explanation). | 
**statusDateTime** | **Date** | The date and time when the shipment status was updated. This field is expected to be in ISO-8601 date/time format, with UTC time zone or UTC offset. For example, 2020-07-16T23:00:00Z or 2020-07-16T23:00:00+01:00. | 
**statusLocationAddress** | [**Address**](Address.md) |  | 
**shipmentSchedule** | [**ShipmentSchedule**](ShipmentSchedule.md) |  | [optional] 


