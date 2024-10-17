# SellingPartnerApiForServices.FixedSlotCapacityQuery

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacityTypes** | [**[CapacityType]**](CapacityType.md) | An array of capacity types which are being requested. Default value is `[SCHEDULED_CAPACITY]`. | [optional] 
**slotDuration** | **Number** | Size in which slots are being requested. This value should be a multiple of 5 and fall in the range: 5 <= `slotDuration` <= 360. | [optional] 
**startDateTime** | **Date** | Start date time from which the capacity slots are being requested in ISO 8601 format. | 
**endDateTime** | **Date** | End date time up to which the capacity slots are being requested in ISO 8601 format. | 


