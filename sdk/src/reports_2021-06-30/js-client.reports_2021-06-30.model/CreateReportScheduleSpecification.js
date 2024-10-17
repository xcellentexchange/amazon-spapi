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

import {ApiClient} from '../ApiClient.js';
import {ReportOptions} from './ReportOptions.js';

/**
 * The CreateReportScheduleSpecification model module.
 * @module reports_2021-06-30/js-client.reports_2021-06-30.model/CreateReportScheduleSpecification
 * @version 2021-06-30
 */
export class CreateReportScheduleSpecification {
  /**
   * Constructs a new <code>CreateReportScheduleSpecification</code>.
   * Information required to create the report schedule.
   * @alias module:reports_2021-06-30/js-client.reports_2021-06-30.model/CreateReportScheduleSpecification
   * @class
   * @param reportType {String} The report type. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information.
   * @param marketplaceIds {Array.<String>} A list of marketplace identifiers for the report schedule.
   * @param period {module:reports_2021-06-30/js-client.reports_2021-06-30.model/CreateReportScheduleSpecification.PeriodEnum} One of a set of predefined <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> periods that specifies how often a report should be created.
   */
  constructor(reportType, marketplaceIds, period) {
    this.reportType = reportType;
    this.marketplaceIds = marketplaceIds;
    this.period = period;
  }

  /**
   * Constructs a <code>CreateReportScheduleSpecification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:reports_2021-06-30/js-client.reports_2021-06-30.model/CreateReportScheduleSpecification} obj Optional instance to populate.
   * @return {module:reports_2021-06-30/js-client.reports_2021-06-30.model/CreateReportScheduleSpecification} The populated <code>CreateReportScheduleSpecification</code> instance.
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
      obj = obj || new CreateReportScheduleSpecification();
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
 * The report type. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information.
 * @member {String} reportType
 */
CreateReportScheduleSpecification.prototype.reportType = undefined;

/**
 * A list of marketplace identifiers for the report schedule.
 * @member {Array.<String>} marketplaceIds
 */
CreateReportScheduleSpecification.prototype.marketplaceIds = undefined;

/**
 * @member {module:reports_2021-06-30/js-client.reports_2021-06-30.model/ReportOptions} reportOptions
 */
CreateReportScheduleSpecification.prototype.reportOptions = undefined;

/**
 * Allowed values for the <code>period</code> property.
 * @enum {String}
 * @readonly
 */
CreateReportScheduleSpecification.PeriodEnum = {
  /**
   * value: "PT5M"
   * @const
   */
  pT5M: "PT5M",

  /**
   * value: "PT15M"
   * @const
   */
  pT15M: "PT15M",

  /**
   * value: "PT30M"
   * @const
   */
  pT30M: "PT30M",

  /**
   * value: "PT1H"
   * @const
   */
  pT1H: "PT1H",

  /**
   * value: "PT2H"
   * @const
   */
  pT2H: "PT2H",

  /**
   * value: "PT4H"
   * @const
   */
  pT4H: "PT4H",

  /**
   * value: "PT8H"
   * @const
   */
  pT8H: "PT8H",

  /**
   * value: "PT12H"
   * @const
   */
  pT12H: "PT12H",

  /**
   * value: "P1D"
   * @const
   */
  p1D: "P1D",

  /**
   * value: "P2D"
   * @const
   */
  p2D: "P2D",

  /**
   * value: "P3D"
   * @const
   */
  p3D: "P3D",

  /**
   * value: "PT84H"
   * @const
   */
  pT84H: "PT84H",

  /**
   * value: "P7D"
   * @const
   */
  p7D: "P7D",

  /**
   * value: "P14D"
   * @const
   */
  p14D: "P14D",

  /**
   * value: "P15D"
   * @const
   */
  p15D: "P15D",

  /**
   * value: "P18D"
   * @const
   */
  p18D: "P18D",

  /**
   * value: "P30D"
   * @const
   */
  p30D: "P30D",

  /**
   * value: "P1M"
   * @const
   */
  p1M: "P1M"
};

/**
 * One of a set of predefined <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> periods that specifies how often a report should be created.
 * @member {module:reports_2021-06-30/js-client.reports_2021-06-30.model/CreateReportScheduleSpecification.PeriodEnum} period
 */
CreateReportScheduleSpecification.prototype.period = undefined;

/**
 * The date and time when the schedule will create its next report, in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date time format.
 * @member {Date} nextReportCreationTime
 */
CreateReportScheduleSpecification.prototype.nextReportCreationTime = undefined;


