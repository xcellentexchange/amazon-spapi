# SellingPartnerApiForCatalogItems.ItemVendorDetailsByMarketplace

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketplaceId** | **String** | Amazon marketplace identifier. | 
**brandCode** | **String** | Brand code associated with an Amazon catalog item. | [optional] 
**manufacturerCode** | **String** | Manufacturer code associated with an Amazon catalog item. | [optional] 
**manufacturerCodeParent** | **String** | Parent vendor code of the manufacturer code. | [optional] 
**productCategory** | [**ItemVendorDetailsCategory**](ItemVendorDetailsCategory.md) | Product category associated with an Amazon catalog item. | [optional] 
**productGroup** | **String** | Product group associated with an Amazon catalog item. | [optional] 
**productSubcategory** | [**ItemVendorDetailsCategory**](ItemVendorDetailsCategory.md) | Product subcategory associated with an Amazon catalog item. | [optional] 
**replenishmentCategory** | **String** | Replenishment category associated with an Amazon catalog item. | [optional] 


<a name="ReplenishmentCategoryEnum"></a>
## Enum: ReplenishmentCategoryEnum


* `ALLOCATED` (value: `"ALLOCATED"`)

* `BASIC_REPLENISHMENT` (value: `"BASIC_REPLENISHMENT"`)

* `IN_SEASON` (value: `"IN_SEASON"`)

* `LIMITED_REPLENISHMENT` (value: `"LIMITED_REPLENISHMENT"`)

* `MANUFACTURER_OUT_OF_STOCK` (value: `"MANUFACTURER_OUT_OF_STOCK"`)

* `NEW_PRODUCT` (value: `"NEW_PRODUCT"`)

* `NON_REPLENISHABLE` (value: `"NON_REPLENISHABLE"`)

* `NON_STOCKUPABLE` (value: `"NON_STOCKUPABLE"`)

* `OBSOLETE` (value: `"OBSOLETE"`)

* `PLANNED_REPLENISHMENT` (value: `"PLANNED_REPLENISHMENT"`)




