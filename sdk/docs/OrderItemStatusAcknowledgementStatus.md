# SellingPartnerApiForRetailProcurementOrders.OrderItemStatusAcknowledgementStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirmationStatus** | **String** | Confirmation status of line item. | [optional] 
**acceptedQuantity** | [**ItemQuantity**](ItemQuantity.md) | Item quantities accepted by vendor to be shipped. | [optional] 
**rejectedQuantity** | [**ItemQuantity**](ItemQuantity.md) | Item quantities rejected by vendor. | [optional] 
**acknowledgementStatusDetails** | [**[AcknowledgementStatusDetails]**](AcknowledgementStatusDetails.md) | Details of item quantity confirmed. | [optional] 


<a name="ConfirmationStatusEnum"></a>
## Enum: ConfirmationStatusEnum


* `ACCEPTED` (value: `"ACCEPTED"`)

* `PARTIALLY_ACCEPTED` (value: `"PARTIALLY_ACCEPTED"`)

* `REJECTED` (value: `"REJECTED"`)

* `UNCONFIRMED` (value: `"UNCONFIRMED"`)




