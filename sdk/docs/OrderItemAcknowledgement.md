# SellingPartnerApiForRetailProcurementOrders.OrderItemAcknowledgement

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledgementCode** | **String** | This indicates the acknowledgement code. | 
**acknowledgedQuantity** | [**ItemQuantity**](ItemQuantity.md) | Details of quantity acknowledged with the above acknowledgement code. | 
**scheduledShipDate** | **Date** | Estimated ship date per line item. Must be in ISO-8601 date/time format. | [optional] 
**scheduledDeliveryDate** | **Date** | Estimated delivery date per line item. Must be in ISO-8601 date/time format. | [optional] 
**rejectionReason** | **String** | Indicates the reason for rejection. | [optional] 


<a name="AcknowledgementCodeEnum"></a>
## Enum: AcknowledgementCodeEnum


* `accepted` (value: `"Accepted"`)

* `backordered` (value: `"Backordered"`)

* `rejected` (value: `"Rejected"`)




<a name="RejectionReasonEnum"></a>
## Enum: RejectionReasonEnum


* `temporarilyUnavailable` (value: `"TemporarilyUnavailable"`)

* `invalidProductIdentifier` (value: `"InvalidProductIdentifier"`)

* `obsoleteProduct` (value: `"ObsoleteProduct"`)




