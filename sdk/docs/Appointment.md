# SellingPartnerApiForServices.Appointment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appointmentId** | [**AppointmentId**](AppointmentId.md) | The appointment identifier. | [optional] 
**appointmentStatus** | **String** | The status of the appointment. | [optional] 
**appointmentTime** | [**AppointmentTime**](AppointmentTime.md) | The time of the appointment window. | [optional] 
**assignedTechnicians** | [**[Technician]**](Technician.md) | A list of technicians assigned to the service job. | [optional] 
**rescheduledAppointmentId** | [**AppointmentId**](AppointmentId.md) | The identifier of a rescheduled appointment. | [optional] 
**poa** | [**Poa**](Poa.md) | Proof of Appointment (POA) details. | [optional] 


<a name="AppointmentStatusEnum"></a>
## Enum: AppointmentStatusEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `CANCELLED` (value: `"CANCELLED"`)

* `COMPLETED` (value: `"COMPLETED"`)




