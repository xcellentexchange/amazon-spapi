# SellingPartnerApiForDirectFulfillmentPayments.TaxRegistrationDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taxRegistrationType** | **String** | Tax registration type for the entity. | [optional] 
**taxRegistrationNumber** | **String** | Tax registration number for the entity. For example, VAT ID or Consumption Tax ID. | 
**taxRegistrationAddress** | [**Address**](Address.md) | Address associated with the tax registration number. | [optional] 
**taxRegistrationMessage** | **String** | Tax registration message that can be used for additional tax related details. | [optional] 


<a name="TaxRegistrationTypeEnum"></a>
## Enum: TaxRegistrationTypeEnum


* `VAT` (value: `"VAT"`)

* `GST` (value: `"GST"`)




