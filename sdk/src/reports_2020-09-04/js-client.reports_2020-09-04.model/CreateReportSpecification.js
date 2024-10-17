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
import {ReportOptions} from './ReportOptions.js';

/**
 * The CreateReportSpecification model module.
 * @module reports_2020-09-04/js-client.reports_2020-09-04.model/CreateReportSpecification
 * @version 2020-09-04
 */
export class CreateReportSpecification {
  /**
   * Constructs a new <code>CreateReportSpecification</code>.
   * @alias module:reports_2020-09-04/js-client.reports_2020-09-04.model/CreateReportSpecification
   * @class
   * @param reportType {String} The report type.
   * @param marketplaceIds {Array.<String>} A list of marketplace identifiers. The report document's contents will contain data for all of the specified marketplaces, unless the report type indicates otherwise.
   */
  constructor(reportType, marketplaceIds) {
    this.reportType = reportType;
    this.marketplaceIds = marketplaceIds;
  }

  /**
   * Constructs a <code>CreateReportSpecification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:reports_2020-09-04/js-client.reports_2020-09-04.model/CreateReportSpecification} obj Optional instance to populate.
   * @return {module:reports_2020-09-04/js-client.reports_2020-09-04.model/CreateReportSpecification} The populated <code>CreateReportSpecification</code> instance.
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
      obj = obj || new CreateReportSpecification();
      if (data.hasOwnProperty('reportOptions'))
        obj.reportOptions = ReportOptions.constructFromObject(data['reportOptions']);
      if (data.hasOwnProperty('reportType'))
        obj.reportType = ApiClient.convertToType(data['reportType'], 'String');
      if (data.hasOwnProperty('dataStartTime'))
        obj.dataStartTime = ApiClient.convertToType(data['dataStartTime'], 'Date');
      if (data.hasOwnProperty('dataEndTime'))
        obj.dataEndTime = ApiClient.convertToType(data['dataEndTime'], 'Date');
      if (data.hasOwnProperty('marketplaceIds'))
        obj.marketplaceIds = ApiClient.convertToType(data['marketplaceIds'], ['String']);
    }
    return obj;
  }
}

/**
 * @member {module:reports_2020-09-04/js-client.reports_2020-09-04.model/ReportOptions} reportOptions
 */
CreateReportSpecification.prototype.reportOptions = undefined;

/**
 * The report type.
 * @member {String} reportType
 */
CreateReportSpecification.prototype.reportType = undefined;

/**
 * The start of a date and time range, in ISO 8601 date time format, used for selecting the data to report. The default is now. The value must be prior to or equal to the current date and time. Not all report types make use of this.
 * @member {Date} dataStartTime
 */
CreateReportSpecification.prototype.dataStartTime = undefined;

/**
 * The end of a date and time range, in ISO 8601 date time format, used for selecting the data to report. The default is now. The value must be prior to or equal to the current date and time. Not all report types make use of this.
 * @member {Date} dataEndTime
 */
CreateReportSpecification.prototype.dataEndTime = undefined;

/**
 * A list of marketplace identifiers. The report document's contents will contain data for all of the specified marketplaces, unless the report type indicates otherwise.
 * @member {Array.<String>} marketplaceIds
 */
CreateReportSpecification.prototype.marketplaceIds = undefined;

