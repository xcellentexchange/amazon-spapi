# AmazonShippingApi.AccessPoint

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessPointId** | [**AccessPointId**](AccessPointId.md) |  | [optional] 
**name** | **String** | Name of entity (store/hub etc) where this access point is located | [optional] 
**timezone** | **String** | Timezone of access point | [optional] 
**type** | [**AccessPointType**](AccessPointType.md) |  | [optional] 
**accessibilityAttributes** | [**AccessibilityAttributes**](AccessibilityAttributes.md) |  | [optional] 
**address** | [**Address**](Address.md) |  | [optional] 
**exceptionOperatingHours** | [**[ExceptionOperatingHours]**](ExceptionOperatingHours.md) |  | [optional] 
**assistanceType** | **String** |  | [optional] 
**score** | **String** | The score of access point, based on proximity to postal code and sorting preference. This can be used to sort access point results on shipper's end. | [optional] 
**standardOperatingHours** | [**DayOfWeekTimeMap**](DayOfWeekTimeMap.md) |  | [optional] 


<a name="AssistanceTypeEnum"></a>
## Enum: AssistanceTypeEnum


* `STAFF_ASSISTED` (value: `"STAFF_ASSISTED"`)

* `SELF_ASSISTED` (value: `"SELF_ASSISTED"`)




