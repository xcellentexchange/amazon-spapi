# SellingPartnerApiForRetailProcurementPayments.ChargeDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of the charge applied. | 
**description** | **String** | Description of the charge. | [optional] 
**chargeAmount** | [**Money**](Money.md) | Total monetary amount related to this charge. | 
**taxDetails** | [**[TaxDetails]**](TaxDetails.md) | Tax amount details applied on this charge. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `freight` (value: `"Freight"`)

* `packing` (value: `"Packing"`)

* `duty` (value: `"Duty"`)

* `service` (value: `"Service"`)

* `smallOrder` (value: `"SmallOrder"`)

* `insurancePlacementCost` (value: `"InsurancePlacementCost"`)

* `insuranceFee` (value: `"InsuranceFee"`)

* `specialHandlingService` (value: `"SpecialHandlingService"`)

* `collectionAndRecyclingService` (value: `"CollectionAndRecyclingService"`)

* `environmentalProtectionService` (value: `"EnvironmentalProtectionService"`)

* `taxCollectedAtSource` (value: `"TaxCollectedAtSource"`)




