# SellingPartnerApiForListingsItems.Issue

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | An issue code that identifies the type of issue. | 
**message** | **String** | A message that describes the issue. | 
**severity** | **String** | The severity of the issue. | 
**attributeNames** | **[String]** | The names of the attributes associated with the issue, if applicable. | [optional] 
**categories** | **[String]** | List of issue categories.   Possible vales:   * `INVALID_ATTRIBUTE` - Indicating an invalid attribute in the listing.   * `MISSING_ATTRIBUTE` - Highlighting a missing attribute in the listing.   * `INVALID_IMAGE` - Signifying an invalid image in the listing.   * `MISSING_IMAGE` - Noting the absence of an image in the listing.   * `INVALID_PRICE` - Pertaining to issues with the listing's price-related attributes.   * `MISSING_PRICE` - Pointing out the absence of a price attribute in the listing.   * `DUPLICATE` - Identifying listings with potential duplicate problems, such as this ASIN potentially being a duplicate of another ASIN.   * `QUALIFICATION_REQUIRED` - Indicating that the listing requires qualification-related approval. | 
**enforcements** | [**IssueEnforcements**](IssueEnforcements.md) | This field provides information about the enforcement actions taken by Amazon that affect the publishing or status of a listing. It also includes details about any associated exemptions. | [optional] 


<a name="SeverityEnum"></a>
## Enum: SeverityEnum


* `ERROR` (value: `"ERROR"`)

* `WARNING` (value: `"WARNING"`)

* `INFO` (value: `"INFO"`)




