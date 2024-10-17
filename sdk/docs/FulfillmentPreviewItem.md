# SellingPartnerApisForFulfillmentOutbound.FulfillmentPreviewItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sellerSku** | **String** | The seller SKU of the item. | 
**quantity** | [**Quantity**](Quantity.md) | The item quantity. | 
**sellerFulfillmentOrderItemId** | **String** | A fulfillment order item identifier that the seller created with a call to the `createFulfillmentOrder` operation. | 
**estimatedShippingWeight** | [**Weight**](Weight.md) | The estimated shipping weight of the item quantity for a single item, as identified by `sellerSku`, in a shipment. | [optional] 
**shippingWeightCalculationMethod** | **String** | The method used to calculate the estimated shipping weight. | [optional] 


<a name="ShippingWeightCalculationMethodEnum"></a>
## Enum: ShippingWeightCalculationMethodEnum


* `_package` (value: `"Package"`)

* `dimensional` (value: `"Dimensional"`)




