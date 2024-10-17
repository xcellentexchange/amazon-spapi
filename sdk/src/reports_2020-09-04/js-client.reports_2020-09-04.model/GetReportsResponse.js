/*
 * Selling Partner API for Reports
 * Effective **June 27, 2024**, the Selling Partner API for Reports v2020-09-04 will no longer be available and all calls to it will fail. Integrations that rely on the Reports API must migrate to [Reports v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference) to avoid service disruption.
 *
 * OpenAPI spec version: 2020-09-04
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.29
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {ErrorList} from './ErrorList.js';
import {ReportList} from './ReportList.js';

/**
 * The GetReportsResponse model module.
 * @module reports_2020-09-04/js-client.reports_2020-09-04.model/GetReportsResponse
 * @version 2020-09-04
 */
export class GetReportsResponse {
  /**
   * Constructs a new <code>GetReportsResponse</code>.
   * The response for the getReports operation.
   * @alias module:reports_2020-09-04/js-client.reports_2020-09-04.model/GetReportsResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetReportsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:reports_2020-09-04/js-client.reports_2020-09-04.model/GetReportsResponse} obj Optional instance to populate.
   * @return {module:reports_2020-09-04/js-client.reports_2020-09-04.model/GetReportsResponse} The populated <code>GetReportsResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      switch(typeof data) {
        case 'string':
          obj = String(data);
          break;
        case 'number':
          obj = Number(data);
          break;
        case 'boolean':
          obj = Boolean(data);
          break;
      }
      obj = obj || new GetReportsResponse();
      if (data.hasOwnProperty('payload'))
        obj.payload = ReportList.constructFromObject(data['payload']);
      if (data.hasOwnProperty('nextToken'))
        obj.nextToken = ApiClient.convertToType(data['nextToken'], 'String');
      if (data.hasOwnProperty('errors'))
        obj.errors = ErrorList.constructFromObject(data['errors']);
    }
    return obj;
  }
}

/**
 * The payload for the getReports operation.
 * @member {module:reports_2020-09-04/js-client.reports_2020-09-04.model/ReportList} payload
 */
GetReportsResponse.prototype.payload = undefined;

/**
 * Returned when the number of results exceeds pageSize. To get the next page of results, call getReports with this token as the only parameter.
 * @member {String} nextToken
 */
GetReportsResponse.prototype.nextToken = undefined;

/**
 * @member {module:reports_2020-09-04/js-client.reports_2020-09-04.model/ErrorList} errors
 */
GetReportsResponse.prototype.errors = undefined;


