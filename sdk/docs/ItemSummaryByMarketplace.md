# SellingPartnerApiForListingsItems.ItemSummaryByMarketplace

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketplaceId** | **String** | A marketplace identifier. Identifies the Amazon marketplace for the listings item. | 
**asin** | **String** | Amazon Standard Identification Number (ASIN) of the listings item. | 
**productType** | **String** | The Amazon product type of the listings item. | 
**conditionType** | **String** | Identifies the condition of the listings item. | [optional] 
**status** | **[String]** | Statuses that apply to the listings item. | 
**fnSku** | **String** | The fulfillment network stock keeping unit is an identifier used by Amazon fulfillment centers to identify each unique item. | [optional] 
**itemName** | **String** | The name or title associated with an Amazon catalog item. | 
**createdDate** | **Date** | The date the listings item was created in ISO 8601 format. | 
**lastUpdatedDate** | **Date** | The date the listings item was last updated in ISO 8601 format. | 
**mainImage** | [**ItemImage**](ItemImage.md) | The main image for the listings item. | [optional] 


<a name="ConditionTypeEnum"></a>
## Enum: ConditionTypeEnum


* `newNew` (value: `"new_new"`)

* `newOpenBox` (value: `"new_open_box"`)

* `newOem` (value: `"new_oem"`)

* `refurbishedRefurbished` (value: `"refurbished_refurbished"`)

* `usedLikeNew` (value: `"used_like_new"`)

* `usedVeryGood` (value: `"used_very_good"`)

* `usedGood` (value: `"used_good"`)

* `usedAcceptable` (value: `"used_acceptable"`)

* `collectibleLikeNew` (value: `"collectible_like_new"`)

* `collectibleVeryGood` (value: `"collectible_very_good"`)

* `collectibleGood` (value: `"collectible_good"`)

* `collectibleAcceptable` (value: `"collectible_acceptable"`)

* `clubClub` (value: `"club_club"`)




<a name="[StatusEnum]"></a>
## Enum: [StatusEnum]


* `BUYABLE` (value: `"BUYABLE"`)

* `DISCOVERABLE` (value: `"DISCOVERABLE"`)




