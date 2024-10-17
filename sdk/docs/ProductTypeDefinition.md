# SellingPartnerApiForProductTypeDefinitions.ProductTypeDefinition

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metaSchema** | [**SchemaLink**](SchemaLink.md) | Link to meta-schema describing the vocabulary used by the product type schema. | [optional] 
**schema** | [**SchemaLink**](SchemaLink.md) | Link to schema describing the attributes and requirements for the product type. | 
**requirements** | **String** | Name of the requirements set represented in this product type definition. | 
**requirementsEnforced** | **String** | Identifies if the required attributes for a requirements set are enforced by the product type definition schema. Non-enforced requirements enable structural validation of individual attributes without all of the required attributes being present (such as for partial updates). | 
**propertyGroups** | [**{String: PropertyGroup}**](PropertyGroup.md) | Mapping of property group names to property groups. Property groups represent logical groupings of schema properties that can be used for display or informational purposes. | 
**locale** | **String** | Locale of the display elements contained in the product type definition. | 
**marketplaceIds** | **[String]** | Amazon marketplace identifiers for which the product type definition is applicable. | 
**productType** | **String** | The name of the Amazon product type that this product type definition applies to. | 
**displayName** | **String** | Human-readable and localized description of the Amazon product type. | 
**productTypeVersion** | [**ProductTypeVersion**](ProductTypeVersion.md) | The version details for the Amazon product type. | 


<a name="RequirementsEnum"></a>
## Enum: RequirementsEnum


* `LISTING` (value: `"LISTING"`)

* `LISTING_PRODUCT_ONLY` (value: `"LISTING_PRODUCT_ONLY"`)

* `LISTING_OFFER_ONLY` (value: `"LISTING_OFFER_ONLY"`)




<a name="RequirementsEnforcedEnum"></a>
## Enum: RequirementsEnforcedEnum


* `ENFORCED` (value: `"ENFORCED"`)

* `NOT_ENFORCED` (value: `"NOT_ENFORCED"`)




