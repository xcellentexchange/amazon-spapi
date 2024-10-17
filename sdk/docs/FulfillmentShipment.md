# SellingPartnerApisForFulfillmentOutbound.FulfillmentShipment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amazonShipmentId** | **String** | A shipment identifier assigned by Amazon. | 
**fulfillmentCenterId** | **String** | An identifier for the fulfillment center that the shipment will be sent from. | 
**fulfillmentShipmentStatus** | **String** | The current status of the shipment. | 
**shippingDate** | [**Timestamp**](Timestamp.md) | The meaning of the `shippingDate` value depends on the current status of the shipment. If the current value of `FulfillmentShipmentStatus` is:  * Pending - `shippingDate` represents the estimated time that the shipment will leave the Amazon fulfillment center.  * Shipped - `shippingDate` represents the date that the shipment left the Amazon fulfillment center. If a shipment includes more than one package, `shippingDate` applies to all of the packages in the shipment. If the value of `FulfillmentShipmentStatus` is `CancelledByFulfiller` or `CancelledBySeller`, `shippingDate` is not returned. The value must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. | [optional] 
**estimatedArrivalDate** | [**Timestamp**](Timestamp.md) | The estimated arrival date and time of the shipment. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. Note that this value can change over time. If a shipment includes more than one package, `estimatedArrivalDate` applies to all of the packages in the shipment. If the shipment has been cancelled, `estimatedArrivalDate` is not returned. | [optional] 
**shippingNotes** | **[String]** | Provides additional insight into shipment timeline. Primairly used to communicate that actual delivery dates aren't available. | [optional] 
**fulfillmentShipmentItem** | [**FulfillmentShipmentItemList**](FulfillmentShipmentItemList.md) |  | 
**fulfillmentShipmentPackage** | [**FulfillmentShipmentPackageList**](FulfillmentShipmentPackageList.md) |  | [optional] 


<a name="FulfillmentShipmentStatusEnum"></a>
## Enum: FulfillmentShipmentStatusEnum


* `PENDING` (value: `"PENDING"`)

* `SHIPPED` (value: `"SHIPPED"`)

* `CANCELLED_BY_FULFILLER` (value: `"CANCELLED_BY_FULFILLER"`)

* `CANCELLED_BY_SELLER` (value: `"CANCELLED_BY_SELLER"`)




