# SellingPartnerApiForRetailProcurementPayments.TaxDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taxType** | **String** | Type of the tax applied. | 
**taxRate** | [**Decimal**](Decimal.md) | Tax percentage applied. Percentage must be expressed in decimal format. | [optional] 
**taxAmount** | [**Money**](Money.md) | Total tax amount applied on an invoice total or item total. | 
**taxableAmount** | [**Money**](Money.md) | The invoice amount that is taxable at the rate specified in the tax rate field. | [optional] 


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




