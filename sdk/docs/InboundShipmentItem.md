# SellingPartnerApiForFulfillmentInbound.InboundShipmentItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipmentId** | **String** | A shipment identifier originally returned by the createInboundShipmentPlan operation. | [optional] 
**sellerSKU** | **String** | The seller SKU of the item. | 
**fulfillmentNetworkSKU** | **String** | Amazon's fulfillment network SKU of the item. | [optional] 
**quantityShipped** | [**Quantity**](Quantity.md) | The item quantity that you are shipping. | 
**quantityReceived** | [**Quantity**](Quantity.md) | The item quantity that has been received at an Amazon fulfillment center. | [optional] 
**quantityInCase** | [**Quantity**](Quantity.md) | The item quantity in each case, for case-packed items. Note that QuantityInCase multiplied by the number of boxes in the inbound shipment equals QuantityShipped. Also note that all of the boxes of an inbound shipment must either be case packed or individually packed. For that reason, when you submit the createInboundShipment or the updateInboundShipment operation, the value of QuantityInCase must be provided for every item in the shipment or for none of the items in the shipment. | [optional] 
**releaseDate** | [**DateStringType**](DateStringType.md) | The date that a pre-order item will be available for sale. | [optional] 
**prepDetailsList** | [**PrepDetailsList**](PrepDetailsList.md) |  | [optional] 


