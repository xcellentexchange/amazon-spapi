/*
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.
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
import {AcknowledgementStatus} from './js-client.vendorDirectFulfillmentOrdersV1.model/AcknowledgementStatus.js';
import {Address} from './js-client.vendorDirectFulfillmentOrdersV1.model/Address.js';
import {Decimal} from './js-client.vendorDirectFulfillmentOrdersV1.model/Decimal.js';
import {Error} from './js-client.vendorDirectFulfillmentOrdersV1.model/Error.js';
import {ErrorList} from './js-client.vendorDirectFulfillmentOrdersV1.model/ErrorList.js';
import {GetOrderResponse} from './js-client.vendorDirectFulfillmentOrdersV1.model/GetOrderResponse.js';
import {GetOrdersResponse} from './js-client.vendorDirectFulfillmentOrdersV1.model/GetOrdersResponse.js';
import {GiftDetails} from './js-client.vendorDirectFulfillmentOrdersV1.model/GiftDetails.js';
import {ItemQuantity} from './js-client.vendorDirectFulfillmentOrdersV1.model/ItemQuantity.js';
import {Money} from './js-client.vendorDirectFulfillmentOrdersV1.model/Money.js';
import {Order} from './js-client.vendorDirectFulfillmentOrdersV1.model/Order.js';
import {OrderAcknowledgementItem} from './js-client.vendorDirectFulfillmentOrdersV1.model/OrderAcknowledgementItem.js';
import {OrderDetails} from './js-client.vendorDirectFulfillmentOrdersV1.model/OrderDetails.js';
import {OrderDetailsTaxTotal} from './js-client.vendorDirectFulfillmentOrdersV1.model/OrderDetailsTaxTotal.js';
import {OrderItem} from './js-client.vendorDirectFulfillmentOrdersV1.model/OrderItem.js';
import {OrderItemAcknowledgement} from './js-client.vendorDirectFulfillmentOrdersV1.model/OrderItemAcknowledgement.js';
import {OrderItemTaxDetails} from './js-client.vendorDirectFulfillmentOrdersV1.model/OrderItemTaxDetails.js';
import {OrderList} from './js-client.vendorDirectFulfillmentOrdersV1.model/OrderList.js';
import {Pagination} from './js-client.vendorDirectFulfillmentOrdersV1.model/Pagination.js';
import {PartyIdentification} from './js-client.vendorDirectFulfillmentOrdersV1.model/PartyIdentification.js';
import {ScheduledDeliveryShipment} from './js-client.vendorDirectFulfillmentOrdersV1.model/ScheduledDeliveryShipment.js';
import {ShipmentDates} from './js-client.vendorDirectFulfillmentOrdersV1.model/ShipmentDates.js';
import {ShipmentDetails} from './js-client.vendorDirectFulfillmentOrdersV1.model/ShipmentDetails.js';
import {SubmitAcknowledgementRequest} from './js-client.vendorDirectFulfillmentOrdersV1.model/SubmitAcknowledgementRequest.js';
import {SubmitAcknowledgementResponse} from './js-client.vendorDirectFulfillmentOrdersV1.model/SubmitAcknowledgementResponse.js';
import {TaxDetails} from './js-client.vendorDirectFulfillmentOrdersV1.model/TaxDetails.js';
import {TaxLineItem} from './js-client.vendorDirectFulfillmentOrdersV1.model/TaxLineItem.js';
import {TaxRegistrationDetails} from './js-client.vendorDirectFulfillmentOrdersV1.model/TaxRegistrationDetails.js';
import {TransactionId} from './js-client.vendorDirectFulfillmentOrdersV1.model/TransactionId.js';
import {VendorOrdersApi} from './js-client.vendorDirectFulfillmentOrdersV1.api/VendorOrdersApi.js';


/**
* The_Selling_Partner_API_for_Direct_Fulfillment_Orders_provides_programmatic_access_to_a_direct_fulfillment_vendors_order_data_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SellingPartnerApiForDirectFulfillmentOrders = require('vendorDirectFulfillmentOrdersV1/index'); // See note below*.
* var xxxSvc = new SellingPartnerApiForDirectFulfillmentOrders.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SellingPartnerApiForDirectFulfillmentOrders.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['vendorDirectFulfillmentOrdersV1/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SellingPartnerApiForDirectFulfillmentOrders.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SellingPartnerApiForDirectFulfillmentOrders.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module vendorDirectFulfillmentOrdersV1/index
* @version v1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/ApiClient}
     */
    ApiClient,

    /**
     * The AcknowledgementStatus model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/AcknowledgementStatus}
     */
    AcknowledgementStatus,

    /**
     * The Address model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/Address}
     */
    Address,

    /**
     * The Decimal model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/Decimal}
     */
    Decimal,

    /**
     * The Error model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/Error}
     */
    Error,

    /**
     * The ErrorList model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/ErrorList}
     */
    ErrorList,

    /**
     * The GetOrderResponse model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/GetOrderResponse}
     */
    GetOrderResponse,

    /**
     * The GetOrdersResponse model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/GetOrdersResponse}
     */
    GetOrdersResponse,

    /**
     * The GiftDetails model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/GiftDetails}
     */
    GiftDetails,

    /**
     * The ItemQuantity model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/ItemQuantity}
     */
    ItemQuantity,

    /**
     * The Money model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/Money}
     */
    Money,

    /**
     * The Order model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/Order}
     */
    Order,

    /**
     * The OrderAcknowledgementItem model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/OrderAcknowledgementItem}
     */
    OrderAcknowledgementItem,

    /**
     * The OrderDetails model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/OrderDetails}
     */
    OrderDetails,

    /**
     * The OrderDetailsTaxTotal model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/OrderDetailsTaxTotal}
     */
    OrderDetailsTaxTotal,

    /**
     * The OrderItem model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/OrderItem}
     */
    OrderItem,

    /**
     * The OrderItemAcknowledgement model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/OrderItemAcknowledgement}
     */
    OrderItemAcknowledgement,

    /**
     * The OrderItemTaxDetails model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/OrderItemTaxDetails}
     */
    OrderItemTaxDetails,

    /**
     * The OrderList model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/OrderList}
     */
    OrderList,

    /**
     * The Pagination model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/Pagination}
     */
    Pagination,

    /**
     * The PartyIdentification model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/PartyIdentification}
     */
    PartyIdentification,

    /**
     * The ScheduledDeliveryShipment model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/ScheduledDeliveryShipment}
     */
    ScheduledDeliveryShipment,

    /**
     * The ShipmentDates model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/ShipmentDates}
     */
    ShipmentDates,

    /**
     * The ShipmentDetails model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/ShipmentDetails}
     */
    ShipmentDetails,

    /**
     * The SubmitAcknowledgementRequest model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/SubmitAcknowledgementRequest}
     */
    SubmitAcknowledgementRequest,

    /**
     * The SubmitAcknowledgementResponse model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/SubmitAcknowledgementResponse}
     */
    SubmitAcknowledgementResponse,

    /**
     * The TaxDetails model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/TaxDetails}
     */
    TaxDetails,

    /**
     * The TaxLineItem model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/TaxLineItem}
     */
    TaxLineItem,

    /**
     * The TaxRegistrationDetails model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/TaxRegistrationDetails}
     */
    TaxRegistrationDetails,

    /**
     * The TransactionId model constructor.
     * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/TransactionId}
     */
    TransactionId,

    /**
    * The VendorOrdersApi service constructor.
    * @property {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.api/VendorOrdersApi}
    */
    VendorOrdersApi
};
