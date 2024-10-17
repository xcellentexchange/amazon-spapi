# SellingPartnerApisForFulfillmentOutbound.FulfillmentPreviewShipment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**earliestShipDate** | [**Timestamp**](Timestamp.md) | The earliest date that the shipment is expected to be sent from the fulfillment center. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. | [optional] 
**latestShipDate** | [**Timestamp**](Timestamp.md) | The latest date that the shipment is expected to be sent from the fulfillment center. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. | [optional] 
**earliestArrivalDate** | [**Timestamp**](Timestamp.md) | The earliest date that the shipment is expected to arrive at its destination. | [optional] 
**latestArrivalDate** | [**Timestamp**](Timestamp.md) | The latest date that the shipment is expected to arrive at its destination. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. | [optional] 
**shippingNotes** | **[String]** | Provides additional insight into the shipment timeline when exact delivery dates are not able to be precomputed. | [optional] 
**fulfillmentPreviewItems** | [**FulfillmentPreviewItemList**](FulfillmentPreviewItemList.md) | Information about the items in the shipment. | 


