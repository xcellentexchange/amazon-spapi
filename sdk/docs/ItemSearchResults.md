# SellingPartnerApiForListingsItems.ItemSearchResults

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**numberOfResults** | **Number** | The total number of selling partner listings items found for the search criteria (only results up to the page count limit will be returned per request regardless of the number found).  Note: The maximum number of items (SKUs) that can be returned and paged through is 1000. | 
**pagination** | [**Pagination**](Pagination.md) | If available, the `nextToken` and/or `previousToken` values required to return paginated results. | [optional] 
**items** | [**[Item]**](Item.md) | A list of listings items. | 


