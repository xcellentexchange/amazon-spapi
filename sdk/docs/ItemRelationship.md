# SellingPartnerApiForCatalogItems.ItemRelationship

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**childAsins** | **[String]** | Identifiers (ASINs) of the related items that are children of this item. | [optional] 
**parentAsins** | **[String]** | Identifiers (ASINs) of the related items that are parents of this item. | [optional] 
**variationTheme** | [**ItemVariationTheme**](ItemVariationTheme.md) | For \"VARIATION\" relationships, variation theme indicating the combination of Amazon item catalog attributes that define the variation family. | [optional] 
**type** | **String** | Type of relationship. | 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `VARIATION` (value: `"VARIATION"`)

* `PACKAGE_HIERARCHY` (value: `"PACKAGE_HIERARCHY"`)




