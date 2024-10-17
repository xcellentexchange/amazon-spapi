# SellingPartnerApiForRetailProcurementShipments.ImportDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**methodOfPayment** | **String** | This is used for import purchase orders only. If the recipient requests, this field will contain the shipment method of payment. | [optional] 
**sealNumber** | **String** | The container's seal number. | [optional] 
**route** | [**Route**](Route.md) | The route and stop details for this shipment. | [optional] 
**importContainers** | **String** | Types and numbers of container(s) for import purchase orders. Can be a comma-separated list if shipment has multiple containers. | [optional] 
**billableWeight** | [**Weight**](Weight.md) | Billable weight of the direct imports shipment. | [optional] 
**estimatedShipByDate** | **Date** | Date on which the shipment is expected to be shipped. This value should not be in the past and not more than 60 days out in the future. | [optional] 
**handlingInstructions** | **String** | Identification of the instructions on how specified item/carton/pallet should be handled. | [optional] 


<a name="MethodOfPaymentEnum"></a>
## Enum: MethodOfPaymentEnum


* `paidByBuyer` (value: `"PaidByBuyer"`)

* `collectOnDelivery` (value: `"CollectOnDelivery"`)

* `definedByBuyerAndSeller` (value: `"DefinedByBuyerAndSeller"`)

* `fOBPortOfCall` (value: `"FOBPortOfCall"`)

* `prepaidBySeller` (value: `"PrepaidBySeller"`)

* `paidBySeller` (value: `"PaidBySeller"`)




<a name="HandlingInstructionsEnum"></a>
## Enum: HandlingInstructionsEnum


* `oversized` (value: `"Oversized"`)

* `fragile` (value: `"Fragile"`)

* `food` (value: `"Food"`)

* `handleWithCare` (value: `"HandleWithCare"`)




