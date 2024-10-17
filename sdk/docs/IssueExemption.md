# SellingPartnerApiForListingsItems.IssueExemption

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | This field indicates the current exemption status for the listed enforcement actions. It can take values such as `EXEMPT`, signifying permanent exemption, `EXEMPT_UNTIL_EXPIRY_DATE` indicating temporary exemption until a specified date, or `NOT_EXEMPT` signifying no exemptions, and enforcement actions were already applied. | 
**expiryDate** | **Date** | This field represents the timestamp, following the ISO 8601 format, which specifies the date when temporary exemptions, if applicable, will expire, and Amazon will begin enforcing the listed actions. | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `EXEMPT` (value: `"EXEMPT"`)

* `EXEMPT_UNTIL_EXPIRY_DATE` (value: `"EXEMPT_UNTIL_EXPIRY_DATE"`)

* `NOT_EXEMPT` (value: `"NOT_EXEMPT"`)




