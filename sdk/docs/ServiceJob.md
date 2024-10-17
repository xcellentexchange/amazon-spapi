# SellingPartnerApiForServices.ServiceJob

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createTime** | **Date** | The date and time of the creation of the job in ISO 8601 format. | [optional] 
**serviceJobId** | [**ServiceJobId**](ServiceJobId.md) | The service job identifier. | [optional] 
**serviceJobStatus** | **String** | The status of the service job. | [optional] 
**scopeOfWork** | [**ScopeOfWork**](ScopeOfWork.md) | The scope of work for the order. | [optional] 
**seller** | [**Seller**](Seller.md) | Information about the seller of the service job. | [optional] 
**serviceJobProvider** | [**ServiceJobProvider**](ServiceJobProvider.md) | Information about the service job provider. | [optional] 
**preferredAppointmentTimes** | [**[AppointmentTime]**](AppointmentTime.md) | A list of appointment windows preferred by the buyer. Included only if the buyer selected appointment windows when creating the order. | [optional] 
**appointments** | [**[Appointment]**](Appointment.md) | A list of appointments. | [optional] 
**serviceOrderId** | [**OrderId**](OrderId.md) | The Amazon-defined identifier for an order placed by the buyer in 3-7-7 format. | [optional] 
**marketplaceId** | **String** | The marketplace identifier. | [optional] 
**storeId** | **String** | The Amazon-defined identifier for the region scope. | [optional] 
**buyer** | [**Buyer**](Buyer.md) | Information about the buyer. | [optional] 
**associatedItems** | [**[AssociatedItem]**](AssociatedItem.md) | A list of items associated with the service job. | [optional] 
**serviceLocation** | [**ServiceLocation**](ServiceLocation.md) | Information about the location of the service job. | [optional] 


<a name="ServiceJobStatusEnum"></a>
## Enum: ServiceJobStatusEnum


* `NOT_SERVICED` (value: `"NOT_SERVICED"`)

* `CANCELLED` (value: `"CANCELLED"`)

* `COMPLETED` (value: `"COMPLETED"`)

* `PENDING_SCHEDULE` (value: `"PENDING_SCHEDULE"`)

* `NOT_FULFILLABLE` (value: `"NOT_FULFILLABLE"`)

* `HOLD` (value: `"HOLD"`)

* `PAYMENT_DECLINED` (value: `"PAYMENT_DECLINED"`)




