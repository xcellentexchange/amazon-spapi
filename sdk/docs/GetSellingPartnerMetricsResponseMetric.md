# SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notDeliveredDueToOOS** | **Number** | The percentage of items that were not shipped out of the total shipped units over a period of time due to being out of stock. Applicable only for the `PERFORMANCE` `timePeriodType`. | [optional] 
**totalSubscriptionsRevenue** | **Number** | The revenue generated from subscriptions over a period of time. Applicable for both the `PERFORMANCE` and `FORECAST` `timePeriodType`. | [optional] 
**shippedSubscriptionUnits** | **Number** | The number of units shipped to the subscribers over a period of time. Applicable for both the `PERFORMANCE` and `FORECAST` `timePeriodType`. | [optional] 
**activeSubscriptions** | **Number** | The number of active subscriptions present at the end of the period. Applicable only for the `PERFORMANCE` `timePeriodType`. | [optional] 
**subscriberAverageRevenue** | **Number** | The average revenue per subscriber of the program over a period of past 12 months for sellers and 6 months for vendors. Applicable only for the `PERFORMANCE` `timePeriodType`. | [optional] 
**nonSubscriberAverageRevenue** | **Number** | The average revenue per non-subscriber of the program over a period of past 12 months for sellers and 6 months for vendors. Applicable only for the `PERFORMANCE` `timePeriodType`. | [optional] 
**lostRevenueDueToOOS** | **Number** | The revenue that would have been generated had there not been out of stock. Applicable only for the PERFORMANCE timePeriodType. | [optional] 
**subscriberAverageReorders** | **Number** | The average reorders per subscriber of the program over a period of 12 months. Applicable only for the PERFORMANCE timePeriodType. | [optional] 
**nonSubscriberAverageReorders** | **Number** | The average reorders per non-subscriber of the program over a period of past 12 months. Applicable only for the PERFORMANCE timePeriodType. | [optional] 
**couponsRevenuePenetration** | **Number** | The percentage of revenue from ASINs with coupons out of total revenue from all ASINs. Applicable only for the PERFORMANCE timePeriodType. | [optional] 
**timeInterval** | [**TimeInterval**](TimeInterval.md) | A time interval used to compute metrics. | [optional] 
**currencyCode** | **String** | The currency code in ISO 4217 format. | [optional] 


