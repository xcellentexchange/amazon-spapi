# SellingPartnerApiForRetailProcurementPayments.AllowanceDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of the allowance applied. | 
**description** | **String** | Description of the allowance. | [optional] 
**allowanceAmount** | [**Money**](Money.md) | Total monetary amount related to this allowance. | 
**taxDetails** | [**[TaxDetails]**](TaxDetails.md) | Tax amount details applied on this allowance. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `discount` (value: `"Discount"`)

* `discountIncentive` (value: `"DiscountIncentive"`)

* `defective` (value: `"Defective"`)

* `promotional` (value: `"Promotional"`)

* `unsaleableMerchandise` (value: `"UnsaleableMerchandise"`)

* `special` (value: `"Special"`)




