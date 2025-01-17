# SellingPartnerApiForPricing.OfferType

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offerType** | [**OfferCustomerType**](OfferCustomerType.md) | Indicates the type of customer that the offer is valid for. | [optional] 
**buyingPrice** | [**PriceType**](PriceType.md) | Contains pricing information that includes promotions and contains the shipping cost. | 
**regularPrice** | [**MoneyType**](MoneyType.md) | The current price excluding any promotions that apply to the product. Excludes the shipping cost. | 
**businessPrice** | [**MoneyType**](MoneyType.md) | The current listing price for Business buyers. | [optional] 
**quantityDiscountPrices** | [**[QuantityDiscountPriceType]**](QuantityDiscountPriceType.md) |  | [optional] 
**fulfillmentChannel** | **String** | The fulfillment channel for the offer listing. Possible values:  * Amazon - Fulfilled by Amazon. * Merchant - Fulfilled by the seller. | 
**itemCondition** | **String** | The item condition for the offer listing. Possible values: New, Used, Collectible, Refurbished, or Club. | 
**itemSubCondition** | **String** | The item subcondition for the offer listing. Possible values: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other. | 
**sellerSKU** | **String** | The seller stock keeping unit (SKU) of the item. | 


