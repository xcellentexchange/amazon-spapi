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
 * The ReportSchedule model module.
 * @module reports_2020-09-04/js-client.reports_2020-09-04.model/ReportSchedule
 * @version 2020-09-04
 */
export class ReportSchedule {
  /**
   * Constructs a new <code>ReportSchedule</code>.
   * Detailed information about a report schedule.
   * @alias module:reports_2020-09-04/js-client.reports_2020-09-04.model/ReportSchedule
   * @class
   * @param reportScheduleId {String} The identifier for the report schedule. This identifier is unique only in combination with a seller ID.
   * @param reportType {String} The report type.
   * @param period {String} An ISO 8601 period value that indicates how often a report should be created.
   */
  constructor(reportScheduleId, reportType, period) {
    this.reportScheduleId = reportScheduleId;
    this.reportType = reportType;
    this.period = period;
  }

  /**
   * Constructs a <code>ReportSchedule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:reports_2020-09-04/js-client.reports_2020-09-04.model/ReportSchedule} obj Optional instance to populate.
   * @return {module:reports_2020-09-04/js-client.reports_2020-09-04.model/ReportSchedule} The populated <code>ReportSchedule</code> instance.
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
      obj = obj || new ReportSchedule();
      if (data.hasOwnProperty('reportScheduleId'))
        obj.reportScheduleId = ApiClient.convertToType(data['reportScheduleId'], 'String');
      if (data.hasOwnProperty('reportType'))
        obj.reportType = ApiClient.convertToType(data['reportType'], 'String');
      if (data.hasOwnProperty('marketplaceIds'))
        obj.marketplaceIds = ApiClient.convertToType(data['marketplaceIds'], ['String']);
      if (data.hasOwnProperty('reportOptions'))
        obj.reportOptions = ReportOptions.constructFromObject(data['reportOptions']);
      if (data.hasOwnProperty('period'))
        obj.period = ApiClient.convertToType(data['period'], 'String');
      if (data.hasOwnProperty('nextReportCreationTime'))
        obj.nextReportCreationTime = ApiClient.convertToType(data['nextReportCreationTime'], 'Date');
    }
    return obj;
  }
}

/**
 * The identifier for the report schedule. This identifier is unique only in combination with a seller ID.
 * @member {String} reportScheduleId
 */
ReportSchedule.prototype.reportScheduleId = undefined;

/**
 * The report type.
 * @member {String} reportType
 */
ReportSchedule.prototype.reportType = undefined;

/**
 * A list of marketplace identifiers. The report document's contents will contain data for all of the specified marketplaces, unless the report type indicates otherwise.
 * @member {Array.<String>} marketplaceIds
 */
ReportSchedule.prototype.marketplaceIds = undefined;

/**
 * @member {module:reports_2020-09-04/js-client.reports_2020-09-04.model/ReportOptions} reportOptions
 */
ReportSchedule.prototype.reportOptions = undefined;

/**
 * An ISO 8601 period value that indicates how often a report should be created.
 * @member {String} period
 */
ReportSchedule.prototype.period = undefined;

/**
 * The date and time when the schedule will create its next report, in ISO 8601 date time format.
 * @member {Date} nextReportCreationTime
 */
ReportSchedule.prototype.nextReportCreationTime = undefined;

