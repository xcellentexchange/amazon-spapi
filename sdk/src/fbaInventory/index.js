/*
 * Selling Partner API for FBA Inventory
 * The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon's fulfillment network.
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
import {AddInventoryRequest} from './js-client.fbaInventory.model/AddInventoryRequest.js';
import {AddInventoryResponse} from './js-client.fbaInventory.model/AddInventoryResponse.js';
import {CreateInventoryItemRequest} from './js-client.fbaInventory.model/CreateInventoryItemRequest.js';
import {CreateInventoryItemResponse} from './js-client.fbaInventory.model/CreateInventoryItemResponse.js';
import {DeleteInventoryItemResponse} from './js-client.fbaInventory.model/DeleteInventoryItemResponse.js';
import {Error} from './js-client.fbaInventory.model/Error.js';
import {ErrorList} from './js-client.fbaInventory.model/ErrorList.js';
import {GetInventorySummariesResponse} from './js-client.fbaInventory.model/GetInventorySummariesResponse.js';
import {GetInventorySummariesResult} from './js-client.fbaInventory.model/GetInventorySummariesResult.js';
import {Granularity} from './js-client.fbaInventory.model/Granularity.js';
import {InventoryDetails} from './js-client.fbaInventory.model/InventoryDetails.js';
import {InventoryItem} from './js-client.fbaInventory.model/InventoryItem.js';
import {InventoryItems} from './js-client.fbaInventory.model/InventoryItems.js';
import {InventorySummaries} from './js-client.fbaInventory.model/InventorySummaries.js';
import {InventorySummary} from './js-client.fbaInventory.model/InventorySummary.js';
import {Pagination} from './js-client.fbaInventory.model/Pagination.js';
import {ResearchingQuantity} from './js-client.fbaInventory.model/ResearchingQuantity.js';
import {ResearchingQuantityEntry} from './js-client.fbaInventory.model/ResearchingQuantityEntry.js';
import {ReservedQuantity} from './js-client.fbaInventory.model/ReservedQuantity.js';
import {UnfulfillableQuantity} from './js-client.fbaInventory.model/UnfulfillableQuantity.js';
import {FbaInventoryApi} from './js-client.fbaInventory.api/FbaInventoryApi.js';


/**
* The_Selling_Partner_API_for_FBA_Inventory_lets_you_programmatically_retrieve_information_about_inventory_in_Amazons_fulfillment_network_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SellingPartnerApiForFbaInventory = require('fbaInventory/index'); // See note below*.
* var xxxSvc = new SellingPartnerApiForFbaInventory.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SellingPartnerApiForFbaInventory.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['fbaInventory/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SellingPartnerApiForFbaInventory.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SellingPartnerApiForFbaInventory.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module fbaInventory/index
* @version v1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:fbaInventory/ApiClient}
     */
    ApiClient,

    /**
     * The AddInventoryRequest model constructor.
     * @property {module:fbaInventory/js-client.fbaInventory.model/AddInventoryRequest}
     */
    AddInventoryRequest,

    /**
     * The AddInventoryResponse model constructor.
     * @property {module:fbaInventory/js-client.fbaInventory.model/AddInventoryResponse}
     */
    AddInventoryResponse,

    /**
     * The CreateInventoryItemRequest model constructor.
     * @property {module:fbaInventory/js-client.fbaInventory.model/CreateInventoryItemRequest}
     */
    CreateInventoryItemRequest,

    /**
     * The CreateInventoryItemResponse model constructor.
     * @property {module:fbaInventory/js-client.fbaInventory.model/CreateInventoryItemResponse}
     */
    CreateInventoryItemResponse,

    /**
     * The DeleteInventoryItemResponse model constructor.
     * @property {module:fbaInventory/js-client.fbaInventory.model/DeleteInventoryItemResponse}
     */
    DeleteInventoryItemResponse,

    /**
     * The Error model constructor.
     * @property {module:fbaInventory/js-client.fbaInventory.model/Error}
     */
    Error,

    /**
     * The ErrorList model constructor.
     * @property {module:fbaInventory/js-client.fbaInventory.model/ErrorList}
     */
    ErrorList,

    /**
     * The GetInventorySummariesResponse model constructor.
     * @property {module:fbaInventory/js-client.fbaInventory.model/GetInventorySummariesResponse}
     */
    GetInventorySummariesResponse,

    /**
     * The GetInventorySummariesResult model constructor.
     * @property {module:fbaInventory/js-client.fbaInventory.model/GetInventorySummariesResult}
     */
    GetInventorySummariesResult,

    /**
     * The Granularity model constructor.
     * @property {module:fbaInventory/js-client.fbaInventory.model/Granularity}
     */
    Granularity,

    /**
     * The InventoryDetails model constructor.
     * @property {module:fbaInventory/js-client.fbaInventory.model/InventoryDetails}
     */
    InventoryDetails,

    /**
     * The InventoryItem model constructor.
     * @property {module:fbaInventory/js-client.fbaInventory.model/InventoryItem}
     */
    InventoryItem,

    /**
     * The InventoryItems model constructor.
     * @property {module:fbaInventory/js-client.fbaInventory.model/InventoryItems}
     */
    InventoryItems,

    /**
     * The InventorySummaries model constructor.
     * @property {module:fbaInventory/js-client.fbaInventory.model/InventorySummaries}
     */
    InventorySummaries,

    /**
     * The InventorySummary model constructor.
     * @property {module:fbaInventory/js-client.fbaInventory.model/InventorySummary}
     */
    InventorySummary,

    /**
     * The Pagination model constructor.
     * @property {module:fbaInventory/js-client.fbaInventory.model/Pagination}
     */
    Pagination,

    /**
     * The ResearchingQuantity model constructor.
     * @property {module:fbaInventory/js-client.fbaInventory.model/ResearchingQuantity}
     */
    ResearchingQuantity,

    /**
     * The ResearchingQuantityEntry model constructor.
     * @property {module:fbaInventory/js-client.fbaInventory.model/ResearchingQuantityEntry}
     */
    ResearchingQuantityEntry,

    /**
     * The ReservedQuantity model constructor.
     * @property {module:fbaInventory/js-client.fbaInventory.model/ReservedQuantity}
     */
    ReservedQuantity,

    /**
     * The UnfulfillableQuantity model constructor.
     * @property {module:fbaInventory/js-client.fbaInventory.model/UnfulfillableQuantity}
     */
    UnfulfillableQuantity,

    /**
    * The FbaInventoryApi service constructor.
    * @property {module:fbaInventory/js-client.fbaInventory.api/FbaInventoryApi}
    */
    FbaInventoryApi
};
