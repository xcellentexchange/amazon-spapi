/*
 * Selling Partner API for Reports
 * The Selling Partner API for Reports lets you retrieve and manage a variety of reports that can help selling partners manage their businesses.
 *
 * OpenAPI spec version: 2021-06-30
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
import {CreateReportResponse} from './js-client.reports_2021-06-30.model/CreateReportResponse.js';
import {CreateReportScheduleResponse} from './js-client.reports_2021-06-30.model/CreateReportScheduleResponse.js';
import {CreateReportScheduleSpecification} from './js-client.reports_2021-06-30.model/CreateReportScheduleSpecification.js';
import {CreateReportSpecification} from './js-client.reports_2021-06-30.model/CreateReportSpecification.js';
import {Error} from './js-client.reports_2021-06-30.model/Error.js';
import {ErrorList} from './js-client.reports_2021-06-30.model/ErrorList.js';
import {GetReportsResponse} from './js-client.reports_2021-06-30.model/GetReportsResponse.js';
import {Report} from './js-client.reports_2021-06-30.model/Report.js';
import {ReportDocument} from './js-client.reports_2021-06-30.model/ReportDocument.js';
import {ReportList} from './js-client.reports_2021-06-30.model/ReportList.js';
import {ReportOptions} from './js-client.reports_2021-06-30.model/ReportOptions.js';
import {ReportSchedule} from './js-client.reports_2021-06-30.model/ReportSchedule.js';
import {ReportScheduleList} from './js-client.reports_2021-06-30.model/ReportScheduleList.js';
import {ReportsApi} from './js-client.reports_2021-06-30.api/ReportsApi.js';


/**
* The_Selling_Partner_API_for_Reports_lets_you_retrieve_and_manage_a_variety_of_reports_that_can_help_selling_partners_manage_their_businesses_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SellingPartnerApiForReports = require('reports_2021-06-30/index'); // See note below*.
* var xxxSvc = new SellingPartnerApiForReports.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SellingPartnerApiForReports.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['reports_2021-06-30/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SellingPartnerApiForReports.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SellingPartnerApiForReports.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module reports_2021-06-30/index
* @version 2021-06-30
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:reports_2021-06-30/ApiClient}
     */
    ApiClient,

    /**
     * The CreateReportResponse model constructor.
     * @property {module:reports_2021-06-30/js-client.reports_2021-06-30.model/CreateReportResponse}
     */
    CreateReportResponse,

    /**
     * The CreateReportScheduleResponse model constructor.
     * @property {module:reports_2021-06-30/js-client.reports_2021-06-30.model/CreateReportScheduleResponse}
     */
    CreateReportScheduleResponse,

    /**
     * The CreateReportScheduleSpecification model constructor.
     * @property {module:reports_2021-06-30/js-client.reports_2021-06-30.model/CreateReportScheduleSpecification}
     */
    CreateReportScheduleSpecification,

    /**
     * The CreateReportSpecification model constructor.
     * @property {module:reports_2021-06-30/js-client.reports_2021-06-30.model/CreateReportSpecification}
     */
    CreateReportSpecification,

    /**
     * The Error model constructor.
     * @property {module:reports_2021-06-30/js-client.reports_2021-06-30.model/Error}
     */
    Error,

    /**
     * The ErrorList model constructor.
     * @property {module:reports_2021-06-30/js-client.reports_2021-06-30.model/ErrorList}
     */
    ErrorList,

    /**
     * The GetReportsResponse model constructor.
     * @property {module:reports_2021-06-30/js-client.reports_2021-06-30.model/GetReportsResponse}
     */
    GetReportsResponse,

    /**
     * The Report model constructor.
     * @property {module:reports_2021-06-30/js-client.reports_2021-06-30.model/Report}
     */
    Report,

    /**
     * The ReportDocument model constructor.
     * @property {module:reports_2021-06-30/js-client.reports_2021-06-30.model/ReportDocument}
     */
    ReportDocument,

    /**
     * The ReportList model constructor.
     * @property {module:reports_2021-06-30/js-client.reports_2021-06-30.model/ReportList}
     */
    ReportList,

    /**
     * The ReportOptions model constructor.
     * @property {module:reports_2021-06-30/js-client.reports_2021-06-30.model/ReportOptions}
     */
    ReportOptions,

    /**
     * The ReportSchedule model constructor.
     * @property {module:reports_2021-06-30/js-client.reports_2021-06-30.model/ReportSchedule}
     */
    ReportSchedule,

    /**
     * The ReportScheduleList model constructor.
     * @property {module:reports_2021-06-30/js-client.reports_2021-06-30.model/ReportScheduleList}
     */
    ReportScheduleList,

    /**
    * The ReportsApi service constructor.
    * @property {module:reports_2021-06-30/js-client.reports_2021-06-30.api/ReportsApi}
    */
    ReportsApi
};