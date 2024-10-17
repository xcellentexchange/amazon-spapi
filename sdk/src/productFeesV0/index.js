/*
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
 *
 * OpenAPI spec version: v0
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
import {Error} from './js-client.productFeesV0.model/Error.js';
import {ErrorList} from './js-client.productFeesV0.model/ErrorList.js';
import {FeeDetail} from './js-client.productFeesV0.model/FeeDetail.js';
import {FeeDetailList} from './js-client.productFeesV0.model/FeeDetailList.js';
import {FeesEstimate} from './js-client.productFeesV0.model/FeesEstimate.js';
import {FeesEstimateByIdRequest} from './js-client.productFeesV0.model/FeesEstimateByIdRequest.js';
import {FeesEstimateError} from './js-client.productFeesV0.model/FeesEstimateError.js';
import {FeesEstimateErrorDetail} from './js-client.productFeesV0.model/FeesEstimateErrorDetail.js';
import {FeesEstimateIdentifier} from './js-client.productFeesV0.model/FeesEstimateIdentifier.js';
import {FeesEstimateRequest} from './js-client.productFeesV0.model/FeesEstimateRequest.js';
import {FeesEstimateResult} from './js-client.productFeesV0.model/FeesEstimateResult.js';
import {GetMyFeesEstimateRequest} from './js-client.productFeesV0.model/GetMyFeesEstimateRequest.js';
import {GetMyFeesEstimateResponse} from './js-client.productFeesV0.model/GetMyFeesEstimateResponse.js';
import {GetMyFeesEstimateResult} from './js-client.productFeesV0.model/GetMyFeesEstimateResult.js';
import {GetMyFeesEstimatesErrorList} from './js-client.productFeesV0.model/GetMyFeesEstimatesErrorList.js';
import {GetMyFeesEstimatesRequest} from './js-client.productFeesV0.model/GetMyFeesEstimatesRequest.js';
import {GetMyFeesEstimatesResponse} from './js-client.productFeesV0.model/GetMyFeesEstimatesResponse.js';
import {IdType} from './js-client.productFeesV0.model/IdType.js';
import {IncludedFeeDetail} from './js-client.productFeesV0.model/IncludedFeeDetail.js';
import {IncludedFeeDetailList} from './js-client.productFeesV0.model/IncludedFeeDetailList.js';
import {MoneyType} from './js-client.productFeesV0.model/MoneyType.js';
import {OptionalFulfillmentProgram} from './js-client.productFeesV0.model/OptionalFulfillmentProgram.js';
import {Points} from './js-client.productFeesV0.model/Points.js';
import {PriceToEstimateFees} from './js-client.productFeesV0.model/PriceToEstimateFees.js';
import {FeesApi} from './js-client.productFeesV0.api/FeesApi.js';


/**
* The_Selling_Partner_API_for_Product_Fees_lets_you_programmatically_retrieve_estimated_fees_for_a_product__You_can_then_account_for_those_fees_in_your_pricing_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SellingPartnerApiForProductFees = require('productFeesV0/index'); // See note below*.
* var xxxSvc = new SellingPartnerApiForProductFees.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SellingPartnerApiForProductFees.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['productFeesV0/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SellingPartnerApiForProductFees.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SellingPartnerApiForProductFees.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module productFeesV0/index
* @version v0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:productFeesV0/ApiClient}
     */
    ApiClient,

    /**
     * The Error model constructor.
     * @property {module:productFeesV0/js-client.productFeesV0.model/Error}
     */
    Error,

    /**
     * The ErrorList model constructor.
     * @property {module:productFeesV0/js-client.productFeesV0.model/ErrorList}
     */
    ErrorList,

    /**
     * The FeeDetail model constructor.
     * @property {module:productFeesV0/js-client.productFeesV0.model/FeeDetail}
     */
    FeeDetail,

    /**
     * The FeeDetailList model constructor.
     * @property {module:productFeesV0/js-client.productFeesV0.model/FeeDetailList}
     */
    FeeDetailList,

    /**
     * The FeesEstimate model constructor.
     * @property {module:productFeesV0/js-client.productFeesV0.model/FeesEstimate}
     */
    FeesEstimate,

    /**
     * The FeesEstimateByIdRequest model constructor.
     * @property {module:productFeesV0/js-client.productFeesV0.model/FeesEstimateByIdRequest}
     */
    FeesEstimateByIdRequest,

    /**
     * The FeesEstimateError model constructor.
     * @property {module:productFeesV0/js-client.productFeesV0.model/FeesEstimateError}
     */
    FeesEstimateError,

    /**
     * The FeesEstimateErrorDetail model constructor.
     * @property {module:productFeesV0/js-client.productFeesV0.model/FeesEstimateErrorDetail}
     */
    FeesEstimateErrorDetail,

    /**
     * The FeesEstimateIdentifier model constructor.
     * @property {module:productFeesV0/js-client.productFeesV0.model/FeesEstimateIdentifier}
     */
    FeesEstimateIdentifier,

    /**
     * The FeesEstimateRequest model constructor.
     * @property {module:productFeesV0/js-client.productFeesV0.model/FeesEstimateRequest}
     */
    FeesEstimateRequest,

    /**
     * The FeesEstimateResult model constructor.
     * @property {module:productFeesV0/js-client.productFeesV0.model/FeesEstimateResult}
     */
    FeesEstimateResult,

    /**
     * The GetMyFeesEstimateRequest model constructor.
     * @property {module:productFeesV0/js-client.productFeesV0.model/GetMyFeesEstimateRequest}
     */
    GetMyFeesEstimateRequest,

    /**
     * The GetMyFeesEstimateResponse model constructor.
     * @property {module:productFeesV0/js-client.productFeesV0.model/GetMyFeesEstimateResponse}
     */
    GetMyFeesEstimateResponse,

    /**
     * The GetMyFeesEstimateResult model constructor.
     * @property {module:productFeesV0/js-client.productFeesV0.model/GetMyFeesEstimateResult}
     */
    GetMyFeesEstimateResult,

    /**
     * The GetMyFeesEstimatesErrorList model constructor.
     * @property {module:productFeesV0/js-client.productFeesV0.model/GetMyFeesEstimatesErrorList}
     */
    GetMyFeesEstimatesErrorList,

    /**
     * The GetMyFeesEstimatesRequest model constructor.
     * @property {module:productFeesV0/js-client.productFeesV0.model/GetMyFeesEstimatesRequest}
     */
    GetMyFeesEstimatesRequest,

    /**
     * The GetMyFeesEstimatesResponse model constructor.
     * @property {module:productFeesV0/js-client.productFeesV0.model/GetMyFeesEstimatesResponse}
     */
    GetMyFeesEstimatesResponse,

    /**
     * The IdType model constructor.
     * @property {module:productFeesV0/js-client.productFeesV0.model/IdType}
     */
    IdType,

    /**
     * The IncludedFeeDetail model constructor.
     * @property {module:productFeesV0/js-client.productFeesV0.model/IncludedFeeDetail}
     */
    IncludedFeeDetail,

    /**
     * The IncludedFeeDetailList model constructor.
     * @property {module:productFeesV0/js-client.productFeesV0.model/IncludedFeeDetailList}
     */
    IncludedFeeDetailList,

    /**
     * The MoneyType model constructor.
     * @property {module:productFeesV0/js-client.productFeesV0.model/MoneyType}
     */
    MoneyType,

    /**
     * The OptionalFulfillmentProgram model constructor.
     * @property {module:productFeesV0/js-client.productFeesV0.model/OptionalFulfillmentProgram}
     */
    OptionalFulfillmentProgram,

    /**
     * The Points model constructor.
     * @property {module:productFeesV0/js-client.productFeesV0.model/Points}
     */
    Points,

    /**
     * The PriceToEstimateFees model constructor.
     * @property {module:productFeesV0/js-client.productFeesV0.model/PriceToEstimateFees}
     */
    PriceToEstimateFees,

    /**
    * The FeesApi service constructor.
    * @property {module:productFeesV0/js-client.productFeesV0.api/FeesApi}
    */
    FeesApi
};
