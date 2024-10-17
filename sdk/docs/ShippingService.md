# SellingPartnerApiForMerchantFulfillment.ShippingService

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shippingServiceName** | **String** | A plain text representation of a carrier's shipping service. For example, \"UPS Ground\" or \"FedEx Standard Overnight\".  | 
**carrierName** | **String** | The name of the carrier. | 
**shippingServiceId** | [**ShippingServiceIdentifier**](ShippingServiceIdentifier.md) |  | 
**shippingServiceOfferId** | **String** | An Amazon-defined shipping service offer identifier. | 
**shipDate** | [**Timestamp**](Timestamp.md) | The date that the carrier will ship the package. | 
**earliestEstimatedDeliveryDate** | [**Timestamp**](Timestamp.md) | The earliest date by which the shipment will be delivered. | [optional] 
**latestEstimatedDeliveryDate** | [**Timestamp**](Timestamp.md) | The latest date by which the shipment will be delivered. | [optional] 
**rate** | [**CurrencyAmount**](CurrencyAmount.md) | The amount that the carrier will charge for the shipment. | 
**shippingServiceOptions** | [**ShippingServiceOptions**](ShippingServiceOptions.md) | Extra services offered by the carrier. | 
**availableShippingServiceOptions** | [**AvailableShippingServiceOptions**](AvailableShippingServiceOptions.md) |  | [optional] 
**availableLabelFormats** | [**LabelFormatList**](LabelFormatList.md) |  | [optional] 
**availableFormatOptionsForLabel** | [**AvailableFormatOptionsForLabelList**](AvailableFormatOptionsForLabelList.md) |  | [optional] 
**requiresAdditionalSellerInputs** | **Boolean** | When true, additional seller inputs are required. | 
**benefits** | [**Benefits**](Benefits.md) |  | [optional] 


