# SellingPartnerApiForPricing.Offer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sellerId** | **String** | The seller identifier for the offer. | 
**condition** | [**Condition**](Condition.md) | Item Condition. | 
**subCondition** | **String** | The item subcondition for the offer. | [optional] 
**fulfillmentType** | [**FulfillmentType**](FulfillmentType.md) | The fulfillment type for the offer. Possible values are AFN (Amazon Fulfillment Network) and MFN (Merchant Fulfillment Network). | 
**listingPrice** | [**MoneyType**](MoneyType.md) | Offer buying price. Does not include shipping, points, or applicable promotions. | 
**shippingOptions** | [**[ShippingOption]**](ShippingOption.md) | A list of shipping options associated with this offer | [optional] 
**points** | [**Points**](Points.md) | The number of Amazon Points offered with the purchase of an item, and their monetary value. Note that the Points element is only returned in Japan (JP). | [optional] 
**primeDetails** | [**PrimeDetails**](PrimeDetails.md) | Amazon Prime details. | [optional] 


<a name="SubConditionEnum"></a>
## Enum: SubConditionEnum


* `_new` (value: `"New"`)

* `mint` (value: `"Mint"`)

* `veryGood` (value: `"VeryGood"`)

* `good` (value: `"Good"`)

* `acceptable` (value: `"Acceptable"`)

* `poor` (value: `"Poor"`)

* `club` (value: `"Club"`)

* `OEM` (value: `"OEM"`)

* `warranty` (value: `"Warranty"`)

* `refurbishedWarranty` (value: `"RefurbishedWarranty"`)

* `refurbished` (value: `"Refurbished"`)

* `openBox` (value: `"OpenBox"`)

* `other` (value: `"Other"`)




