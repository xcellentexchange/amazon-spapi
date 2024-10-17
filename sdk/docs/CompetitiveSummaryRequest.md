# SellingPartnerApiForPricing.CompetitiveSummaryRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asin** | [**Asin**](Asin.md) | The Amazon identifier for the item. | 
**marketplaceId** | [**MarketplaceId**](MarketplaceId.md) | A marketplace identifier. | 
**includedData** | [**[CompetitiveSummaryIncludedData]**](CompetitiveSummaryIncludedData.md) | The list of requested competitive pricing data for the product. | 
**lowestPricedOffersInputs** | [**[LowestPricedOffersInput]**](LowestPricedOffersInput.md) | The list of `lowestPricedOffersInput` parameters used to build the `lowestPricedOffers` in the response. This attribute is valid only if `lowestPricedOffers` is requested in `includedData`. | [optional] 
**method** | [**HttpMethod**](HttpMethod.md) | HTTP method type | 
**uri** | [**HttpUri**](HttpUri.md) | The URI associated with the individual APIs being called as part of the batch request. For `getCompetitiveSummary`, this should be `/products/pricing/2022-05-01/items/competitiveSummary`. | 


