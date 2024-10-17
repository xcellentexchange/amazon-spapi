# SellingPartnerApiForDirectFulfillmentPayments.TaxDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taxType** | **String** | Type of the tax applied. | 
**taxRate** | [**Decimal**](Decimal.md) | Tax percentage applied. Percentage must be expressed in decimal. | [optional] 
**taxAmount** | [**Money**](Money.md) | Total tax amount applied on invoice total or an item total. | 
**taxableAmount** | [**Money**](Money.md) | This field will contain the invoice amount that is taxable at the rate specified in the tax rate field. | [optional] 


<a name="TaxTypeEnum"></a>
## Enum: TaxTypeEnum


* `CGST` (value: `"CGST"`)

* `SGST` (value: `"SGST"`)

* `CESS` (value: `"CESS"`)

* `UTGST` (value: `"UTGST"`)

* `IGST` (value: `"IGST"`)

* `mwSt_` (value: `"MwSt."`)

* `PST` (value: `"PST"`)

* `TVA` (value: `"TVA"`)

* `VAT` (value: `"VAT"`)

* `GST` (value: `"GST"`)

* `ST` (value: `"ST"`)

* `consumption` (value: `"Consumption"`)

* `mutuallyDefined` (value: `"MutuallyDefined"`)

* `domesticVAT` (value: `"DomesticVAT"`)




