# SellingPartnerApiForReplenishment.ListOfferMetricsResponseOffer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asin** | **String** | The Amazon Standard Identification Number (ASIN). | [optional] 
**notDeliveredDueToOOS** | **Number** | The percentage of items that were not shipped out of the total shipped units over a period of time due to being out of stock. Applicable only for the `PERFORMANCE` `timePeriodType`. | [optional] 
**totalSubscriptionsRevenue** | **Number** | The revenue generated from subscriptions over a period of time. Applicable only for the `PERFORMANCE` `timePeriodType`. | [optional] 
**shippedSubscriptionUnits** | **Number** | The number of units shipped to the subscribers over a period of time. Applicable only for the `PERFORMANCE` `timePeriodType`. | [optional] 
**activeSubscriptions** | **Number** | The number of active subscriptions present at the end of the period. Applicable only for the `PERFORMANCE` `timePeriodType`. | [optional] 
**revenuePenetration** | **Number** | The percentage of total program revenue out of total product revenue. Applicable only for the `PERFORMANCE` `timePeriodType`. | [optional] 
**lostRevenueDueToOOS** | **Number** | The revenue that would have been generated had there not been out of stock. Applicable only for the PERFORMANCE timePeriodType. | [optional] 
**couponsRevenuePenetration** | **Number** | The percentage of revenue from ASINs with coupons out of total revenue from all ASINs. Applicable only for the PERFORMANCE timePeriodType. | [optional] 
**next30DayTotalSubscriptionsRevenue** | **Number** | The forecasted total subscription revenue for the next 30 days. Applicable only for the `FORECAST` `timePeriodType`. | [optional] 
**next60DayTotalSubscriptionsRevenue** | **Number** | The forecasted total subscription revenue for the next 60 days. Applicable only for the `FORECAST` `timePeriodType`. | [optional] 
**next90DayTotalSubscriptionsRevenue** | **Number** | The forecasted total subscription revenue for the next 90 days. Applicable only for the `FORECAST` `timePeriodType`. | [optional] 
**next30DayShippedSubscriptionUnits** | **Number** | The forecasted shipped subscription units for the next 30 days. Applicable only for the `FORECAST` `timePeriodType`. | [optional] 
**next60DayShippedSubscriptionUnits** | **Number** | The forecasted shipped subscription units for the next 60 days. Applicable only for the `FORECAST` `timePeriodType`. | [optional] 
**next90DayShippedSubscriptionUnits** | **Number** | The forecasted shipped subscription units for the next 90 days. Applicable only for the `FORECAST` `timePeriodType`. | [optional] 
**timeInterval** | [**TimeInterval**](TimeInterval.md) | A time interval used to compute metrics. | [optional] 
**currencyCode** | **String** | The currency code in ISO 4217 format. | [optional] 


