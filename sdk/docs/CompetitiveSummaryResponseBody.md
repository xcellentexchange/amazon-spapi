# SellingPartnerApiForPricing.CompetitiveSummaryResponseBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asin** | [**Asin**](Asin.md) | The Amazon identifier for the item. | 
**marketplaceId** | [**MarketplaceId**](MarketplaceId.md) | A marketplace identifier. | 
**featuredBuyingOptions** | [**[FeaturedBuyingOption]**](FeaturedBuyingOption.md) | A list of featured buying options for the given ASIN `marketplaceId` combination. | [optional] 
**lowestPricedOffers** | [**[LowestPricedOffer]**](LowestPricedOffer.md) | A list of the lowest priced offers for the given ASIN `marketplaceId` combination. | [optional] 
**referencePrices** | [**[ReferencePrice]**](ReferencePrice.md) | A list of reference prices for the given ASIN `marketplaceId` combination. | [optional] 
**errors** | [**ErrorList**](ErrorList.md) | A list of errors | [optional] 


