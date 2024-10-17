# SellingPartnerApisForFulfillmentOutbound.FulfillmentShipmentPackage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**packageNumber** | **Number** | Identifies a package in a shipment. | 
**carrierCode** | **String** | Identifies the carrier who will deliver the shipment to the recipient. | 
**trackingNumber** | **String** | The tracking number, if provided, can be used to obtain tracking and delivery information. | [optional] 
**estimatedArrivalDate** | [**Timestamp**](Timestamp.md) | The estimated arrival date and time of the package. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. | [optional] 
**lockerDetails** | [**LockerDetails**](LockerDetails.md) | The locker details, if provided can be used to access locker delivery box. | [optional] 
**deliveryInformation** | [**DeliveryInformation**](DeliveryInformation.md) | The delivery information for the package. This information is available after the package is delivered. | [optional] 


