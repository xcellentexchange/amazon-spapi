/*
 * Selling Partner API for FBA Inbound Eligibilty
 * With the FBA Inbound Eligibility API, you can build applications that let sellers get eligibility previews for items before shipping them to Amazon's fulfillment centers. With this API you can find out if an item is eligible for inbound shipment to Amazon's fulfillment centers in a specific marketplace. You can also find out if an item is eligible for using the manufacturer barcode for FBA inventory tracking. Sellers can use this information to inform their decisions about which items to ship Amazon's fulfillment centers.
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
import {Error} from './js-client.fbaInbound.model/Error.js';
import {ErrorList} from './js-client.fbaInbound.model/ErrorList.js';
import {GetItemEligibilityPreviewResponse} from './js-client.fbaInbound.model/GetItemEligibilityPreviewResponse.js';
import {ItemEligibilityPreview} from './js-client.fbaInbound.model/ItemEligibilityPreview.js';
import {FbaInboundApi} from './js-client.fbaInbound.api/FbaInboundApi.js';


/**
* With_the_FBA_Inbound_Eligibility_API_you_can_build_applications_that_let_sellers_get_eligibility_previews_for_items_before_shipping_them_to_Amazons_fulfillment_centers__With_this_API_you_can_find_out_if_an_item_is_eligible_for_inbound_shipment_to_Amazons_fulfillment_centers_in_a_specific_marketplace__You_can_also_find_out_if_an_item_is_eligible_for_using_the_manufacturer_barcode_for_FBA_inventory_tracking__Sellers_can_use_this_information_to_inform_their_decisions_about_which_items_to_ship_Amazons_fulfillment_centers_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SellingPartnerApiForFbaInboundEligibilty = require('fbaInbound/index'); // See note below*.
* var xxxSvc = new SellingPartnerApiForFbaInboundEligibilty.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SellingPartnerApiForFbaInboundEligibilty.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['fbaInbound/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SellingPartnerApiForFbaInboundEligibilty.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SellingPartnerApiForFbaInboundEligibilty.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module fbaInbound/index
* @version v1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:fbaInbound/ApiClient}
     */
    ApiClient,

    /**
     * The Error model constructor.
     * @property {module:fbaInbound/js-client.fbaInbound.model/Error}
     */
    Error,

    /**
     * The ErrorList model constructor.
     * @property {module:fbaInbound/js-client.fbaInbound.model/ErrorList}
     */
    ErrorList,

    /**
     * The GetItemEligibilityPreviewResponse model constructor.
     * @property {module:fbaInbound/js-client.fbaInbound.model/GetItemEligibilityPreviewResponse}
     */
    GetItemEligibilityPreviewResponse,

    /**
     * The ItemEligibilityPreview model constructor.
     * @property {module:fbaInbound/js-client.fbaInbound.model/ItemEligibilityPreview}
     */
    ItemEligibilityPreview,

    /**
    * The FbaInboundApi service constructor.
    * @property {module:fbaInbound/js-client.fbaInbound.api/FbaInboundApi}
    */
    FbaInboundApi
};