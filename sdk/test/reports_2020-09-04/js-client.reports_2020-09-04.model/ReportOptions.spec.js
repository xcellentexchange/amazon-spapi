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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../../src/reports_2020-09-04/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/reports_2020-09-04/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForReports);
  }
}(this, function(expect, SellingPartnerApiForReports) {
  'use strict';

  var instance;

  describe('reports_2020-09-04', function() {
    describe('ReportOptions', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForReports.ReportOptions();
      });

      it('should create an instance of ReportOptions', function() {
        // TODO: update the code to test ReportOptions
        expect(instance).to.be.a(SellingPartnerApiForReports.ReportOptions);
      });

    });
  });

}));
