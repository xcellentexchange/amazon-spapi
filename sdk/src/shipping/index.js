/*
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.   **Note:** If you are new to the Amazon Shipping API, refer to the latest version of <a href=\"https://developer-docs.amazon.com/amazon-shipping/docs/shipping-api-v2-reference\">Amazon Shipping API (v2)</a> on the <a href=\"https://developer-docs.amazon.com/amazon-shipping/\">Amazon Shipping Developer Documentation</a> site.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.29
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from './ApiClient.js';
import {AcceptedRate} from './js-client.shipping.model/AcceptedRate.js';
import {Account} from './js-client.shipping.model/Account.js';
import {AccountId} from './js-client.shipping.model/AccountId.js';
import {Address} from './js-client.shipping.model/Address.js';
import {CancelShipmentResponse} from './js-client.shipping.model/CancelShipmentResponse.js';
import {City} from './js-client.shipping.model/City.js';
import {ClientReferenceId} from './js-client.shipping.model/ClientReferenceId.js';
import {Container} from './js-client.shipping.model/Container.js';
import {ContainerItem} from './js-client.shipping.model/ContainerItem.js';
import {ContainerList} from './js-client.shipping.model/ContainerList.js';
import {ContainerReferenceId} from './js-client.shipping.model/ContainerReferenceId.js';
import {ContainerSpecification} from './js-client.shipping.model/ContainerSpecification.js';
import {ContainerSpecificationList} from './js-client.shipping.model/ContainerSpecificationList.js';
import {CountryCode} from './js-client.shipping.model/CountryCode.js';
import {CreateShipmentRequest} from './js-client.shipping.model/CreateShipmentRequest.js';
import {CreateShipmentResponse} from './js-client.shipping.model/CreateShipmentResponse.js';
import {CreateShipmentResult} from './js-client.shipping.model/CreateShipmentResult.js';
import {Currency} from './js-client.shipping.model/Currency.js';
import {Dimensions} from './js-client.shipping.model/Dimensions.js';
import {Error} from './js-client.shipping.model/Error.js';
import {ErrorList} from './js-client.shipping.model/ErrorList.js';
import {Event} from './js-client.shipping.model/Event.js';
import {EventCode} from './js-client.shipping.model/EventCode.js';
import {EventList} from './js-client.shipping.model/EventList.js';
import {GetAccountResponse} from './js-client.shipping.model/GetAccountResponse.js';
import {GetRatesRequest} from './js-client.shipping.model/GetRatesRequest.js';
import {GetRatesResponse} from './js-client.shipping.model/GetRatesResponse.js';
import {GetRatesResult} from './js-client.shipping.model/GetRatesResult.js';
import {GetShipmentResponse} from './js-client.shipping.model/GetShipmentResponse.js';
import {GetTrackingInformationResponse} from './js-client.shipping.model/GetTrackingInformationResponse.js';
import {Label} from './js-client.shipping.model/Label.js';
import {LabelResult} from './js-client.shipping.model/LabelResult.js';
import {LabelResultList} from './js-client.shipping.model/LabelResultList.js';
import {LabelSpecification} from './js-client.shipping.model/LabelSpecification.js';
import {LabelStream} from './js-client.shipping.model/LabelStream.js';
import {Location} from './js-client.shipping.model/Location.js';
import {Party} from './js-client.shipping.model/Party.js';
import {PostalCode} from './js-client.shipping.model/PostalCode.js';
import {PromisedDeliveryDate} from './js-client.shipping.model/PromisedDeliveryDate.js';
import {PurchaseLabelsRequest} from './js-client.shipping.model/PurchaseLabelsRequest.js';
import {PurchaseLabelsResponse} from './js-client.shipping.model/PurchaseLabelsResponse.js';
import {PurchaseLabelsResult} from './js-client.shipping.model/PurchaseLabelsResult.js';
import {PurchaseShipmentRequest} from './js-client.shipping.model/PurchaseShipmentRequest.js';
import {PurchaseShipmentResponse} from './js-client.shipping.model/PurchaseShipmentResponse.js';
import {PurchaseShipmentResult} from './js-client.shipping.model/PurchaseShipmentResult.js';
import {Rate} from './js-client.shipping.model/Rate.js';
import {RateId} from './js-client.shipping.model/RateId.js';
import {RateList} from './js-client.shipping.model/RateList.js';
import {RetrieveShippingLabelRequest} from './js-client.shipping.model/RetrieveShippingLabelRequest.js';
import {RetrieveShippingLabelResponse} from './js-client.shipping.model/RetrieveShippingLabelResponse.js';
import {RetrieveShippingLabelResult} from './js-client.shipping.model/RetrieveShippingLabelResult.js';
import {ServiceRate} from './js-client.shipping.model/ServiceRate.js';
import {ServiceRateList} from './js-client.shipping.model/ServiceRateList.js';
import {ServiceType} from './js-client.shipping.model/ServiceType.js';
import {ServiceTypeList} from './js-client.shipping.model/ServiceTypeList.js';
import {Shipment} from './js-client.shipping.model/Shipment.js';
import {ShipmentId} from './js-client.shipping.model/ShipmentId.js';
import {ShippingPromiseSet} from './js-client.shipping.model/ShippingPromiseSet.js';
import {StateOrRegion} from './js-client.shipping.model/StateOrRegion.js';
import {TimeRange} from './js-client.shipping.model/TimeRange.js';
import {TrackingId} from './js-client.shipping.model/TrackingId.js';
import {TrackingInformation} from './js-client.shipping.model/TrackingInformation.js';
import {TrackingSummary} from './js-client.shipping.model/TrackingSummary.js';
import {Weight} from './js-client.shipping.model/Weight.js';
import {ShippingApi} from './js-client.shipping.api/ShippingApi.js';


/**
* Provides_programmatic_access_to_Amazon_Shipping_APIs__Note_If_you_are_new_to_the_Amazon_Shipping_API_refer_to_the_latest_version_of_a_hrefhttpsdeveloper_docs_amazon_comamazon_shippingdocsshipping_api_v2_referenceAmazon_Shipping_API__v2a_on_the_a_hrefhttpsdeveloper_docs_amazon_comamazon_shippingAmazon_Shipping_Developer_Documentationa_site_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SellingPartnerApiForShipping = require('shipping/index'); // See note below*.
* var xxxSvc = new SellingPartnerApiForShipping.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SellingPartnerApiForShipping.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['shipping/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SellingPartnerApiForShipping.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SellingPartnerApiForShipping.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module shipping/index
* @version v1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:shipping/ApiClient}
     */
    ApiClient,

    /**
     * The AcceptedRate model constructor.
     * @property {module:shipping/js-client.shipping.model/AcceptedRate}
     */
    AcceptedRate,

    /**
     * The Account model constructor.
     * @property {module:shipping/js-client.shipping.model/Account}
     */
    Account,

    /**
     * The AccountId model constructor.
     * @property {module:shipping/js-client.shipping.model/AccountId}
     */
    AccountId,

    /**
     * The Address model constructor.
     * @property {module:shipping/js-client.shipping.model/Address}
     */
    Address,

    /**
     * The CancelShipmentResponse model constructor.
     * @property {module:shipping/js-client.shipping.model/CancelShipmentResponse}
     */
    CancelShipmentResponse,

    /**
     * The City model constructor.
     * @property {module:shipping/js-client.shipping.model/City}
     */
    City,

    /**
     * The ClientReferenceId model constructor.
     * @property {module:shipping/js-client.shipping.model/ClientReferenceId}
     */
    ClientReferenceId,

    /**
     * The Container model constructor.
     * @property {module:shipping/js-client.shipping.model/Container}
     */
    Container,

    /**
     * The ContainerItem model constructor.
     * @property {module:shipping/js-client.shipping.model/ContainerItem}
     */
    ContainerItem,

    /**
     * The ContainerList model constructor.
     * @property {module:shipping/js-client.shipping.model/ContainerList}
     */
    ContainerList,

    /**
     * The ContainerReferenceId model constructor.
     * @property {module:shipping/js-client.shipping.model/ContainerReferenceId}
     */
    ContainerReferenceId,

    /**
     * The ContainerSpecification model constructor.
     * @property {module:shipping/js-client.shipping.model/ContainerSpecification}
     */
    ContainerSpecification,

    /**
     * The ContainerSpecificationList model constructor.
     * @property {module:shipping/js-client.shipping.model/ContainerSpecificationList}
     */
    ContainerSpecificationList,

    /**
     * The CountryCode model constructor.
     * @property {module:shipping/js-client.shipping.model/CountryCode}
     */
    CountryCode,

    /**
     * The CreateShipmentRequest model constructor.
     * @property {module:shipping/js-client.shipping.model/CreateShipmentRequest}
     */
    CreateShipmentRequest,

    /**
     * The CreateShipmentResponse model constructor.
     * @property {module:shipping/js-client.shipping.model/CreateShipmentResponse}
     */
    CreateShipmentResponse,

    /**
     * The CreateShipmentResult model constructor.
     * @property {module:shipping/js-client.shipping.model/CreateShipmentResult}
     */
    CreateShipmentResult,

    /**
     * The Currency model constructor.
     * @property {module:shipping/js-client.shipping.model/Currency}
     */
    Currency,

    /**
     * The Dimensions model constructor.
     * @property {module:shipping/js-client.shipping.model/Dimensions}
     */
    Dimensions,

    /**
     * The Error model constructor.
     * @property {module:shipping/js-client.shipping.model/Error}
     */
    Error,

    /**
     * The ErrorList model constructor.
     * @property {module:shipping/js-client.shipping.model/ErrorList}
     */
    ErrorList,

    /**
     * The Event model constructor.
     * @property {module:shipping/js-client.shipping.model/Event}
     */
    Event,

    /**
     * The EventCode model constructor.
     * @property {module:shipping/js-client.shipping.model/EventCode}
     */
    EventCode,

    /**
     * The EventList model constructor.
     * @property {module:shipping/js-client.shipping.model/EventList}
     */
    EventList,

    /**
     * The GetAccountResponse model constructor.
     * @property {module:shipping/js-client.shipping.model/GetAccountResponse}
     */
    GetAccountResponse,

    /**
     * The GetRatesRequest model constructor.
     * @property {module:shipping/js-client.shipping.model/GetRatesRequest}
     */
    GetRatesRequest,

    /**
     * The GetRatesResponse model constructor.
     * @property {module:shipping/js-client.shipping.model/GetRatesResponse}
     */
    GetRatesResponse,

    /**
     * The GetRatesResult model constructor.
     * @property {module:shipping/js-client.shipping.model/GetRatesResult}
     */
    GetRatesResult,

    /**
     * The GetShipmentResponse model constructor.
     * @property {module:shipping/js-client.shipping.model/GetShipmentResponse}
     */
    GetShipmentResponse,

    /**
     * The GetTrackingInformationResponse model constructor.
     * @property {module:shipping/js-client.shipping.model/GetTrackingInformationResponse}
     */
    GetTrackingInformationResponse,

    /**
     * The Label model constructor.
     * @property {module:shipping/js-client.shipping.model/Label}
     */
    Label,

    /**
     * The LabelResult model constructor.
     * @property {module:shipping/js-client.shipping.model/LabelResult}
     */
    LabelResult,

    /**
     * The LabelResultList model constructor.
     * @property {module:shipping/js-client.shipping.model/LabelResultList}
     */
    LabelResultList,

    /**
     * The LabelSpecification model constructor.
     * @property {module:shipping/js-client.shipping.model/LabelSpecification}
     */
    LabelSpecification,

    /**
     * The LabelStream model constructor.
     * @property {module:shipping/js-client.shipping.model/LabelStream}
     */
    LabelStream,

    /**
     * The Location model constructor.
     * @property {module:shipping/js-client.shipping.model/Location}
     */
    Location,

    /**
     * The Party model constructor.
     * @property {module:shipping/js-client.shipping.model/Party}
     */
    Party,

    /**
     * The PostalCode model constructor.
     * @property {module:shipping/js-client.shipping.model/PostalCode}
     */
    PostalCode,

    /**
     * The PromisedDeliveryDate model constructor.
     * @property {module:shipping/js-client.shipping.model/PromisedDeliveryDate}
     */
    PromisedDeliveryDate,

    /**
     * The PurchaseLabelsRequest model constructor.
     * @property {module:shipping/js-client.shipping.model/PurchaseLabelsRequest}
     */
    PurchaseLabelsRequest,

    /**
     * The PurchaseLabelsResponse model constructor.
     * @property {module:shipping/js-client.shipping.model/PurchaseLabelsResponse}
     */
    PurchaseLabelsResponse,

    /**
     * The PurchaseLabelsResult model constructor.
     * @property {module:shipping/js-client.shipping.model/PurchaseLabelsResult}
     */
    PurchaseLabelsResult,

    /**
     * The PurchaseShipmentRequest model constructor.
     * @property {module:shipping/js-client.shipping.model/PurchaseShipmentRequest}
     */
    PurchaseShipmentRequest,

    /**
     * The PurchaseShipmentResponse model constructor.
     * @property {module:shipping/js-client.shipping.model/PurchaseShipmentResponse}
     */
    PurchaseShipmentResponse,

    /**
     * The PurchaseShipmentResult model constructor.
     * @property {module:shipping/js-client.shipping.model/PurchaseShipmentResult}
     */
    PurchaseShipmentResult,

    /**
     * The Rate model constructor.
     * @property {module:shipping/js-client.shipping.model/Rate}
     */
    Rate,

    /**
     * The RateId model constructor.
     * @property {module:shipping/js-client.shipping.model/RateId}
     */
    RateId,

    /**
     * The RateList model constructor.
     * @property {module:shipping/js-client.shipping.model/RateList}
     */
    RateList,

    /**
     * The RetrieveShippingLabelRequest model constructor.
     * @property {module:shipping/js-client.shipping.model/RetrieveShippingLabelRequest}
     */
    RetrieveShippingLabelRequest,

    /**
     * The RetrieveShippingLabelResponse model constructor.
     * @property {module:shipping/js-client.shipping.model/RetrieveShippingLabelResponse}
     */
    RetrieveShippingLabelResponse,

    /**
     * The RetrieveShippingLabelResult model constructor.
     * @property {module:shipping/js-client.shipping.model/RetrieveShippingLabelResult}
     */
    RetrieveShippingLabelResult,

    /**
     * The ServiceRate model constructor.
     * @property {module:shipping/js-client.shipping.model/ServiceRate}
     */
    ServiceRate,

    /**
     * The ServiceRateList model constructor.
     * @property {module:shipping/js-client.shipping.model/ServiceRateList}
     */
    ServiceRateList,

    /**
     * The ServiceType model constructor.
     * @property {module:shipping/js-client.shipping.model/ServiceType}
     */
    ServiceType,

    /**
     * The ServiceTypeList model constructor.
     * @property {module:shipping/js-client.shipping.model/ServiceTypeList}
     */
    ServiceTypeList,

    /**
     * The Shipment model constructor.
     * @property {module:shipping/js-client.shipping.model/Shipment}
     */
    Shipment,

    /**
     * The ShipmentId model constructor.
     * @property {module:shipping/js-client.shipping.model/ShipmentId}
     */
    ShipmentId,

    /**
     * The ShippingPromiseSet model constructor.
     * @property {module:shipping/js-client.shipping.model/ShippingPromiseSet}
     */
    ShippingPromiseSet,

    /**
     * The StateOrRegion model constructor.
     * @property {module:shipping/js-client.shipping.model/StateOrRegion}
     */
    StateOrRegion,

    /**
     * The TimeRange model constructor.
     * @property {module:shipping/js-client.shipping.model/TimeRange}
     */
    TimeRange,

    /**
     * The TrackingId model constructor.
     * @property {module:shipping/js-client.shipping.model/TrackingId}
     */
    TrackingId,

    /**
     * The TrackingInformation model constructor.
     * @property {module:shipping/js-client.shipping.model/TrackingInformation}
     */
    TrackingInformation,

    /**
     * The TrackingSummary model constructor.
     * @property {module:shipping/js-client.shipping.model/TrackingSummary}
     */
    TrackingSummary,

    /**
     * The Weight model constructor.
     * @property {module:shipping/js-client.shipping.model/Weight}
     */
    Weight,

    /**
    * The ShippingApi service constructor.
    * @property {module:shipping/js-client.shipping.api/ShippingApi}
    */
    ShippingApi
};