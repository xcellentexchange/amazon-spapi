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
    describe('CreateReportSpecification', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForReports.CreateReportSpecification();
      });

      it('should create an instance of CreateReportSpecification', function() {
        // TODO: update the code to test CreateReportSpecification
        expect(instance).to.be.a(SellingPartnerApiForReports.CreateReportSpecification);
      });

      it('should have the property reportOptions (base name: "reportOptions")', function() {
        // TODO: update the code to test the property reportOptions
        expect(instance).to.have.property('reportOptions');
        // expect(instance.reportOptions).to.be(expectedValueLiteral);
      });

      it('should have the property reportType (base name: "reportType")', function() {
        // TODO: update the code to test the property reportType
        expect(instance).to.have.property('reportType');
        // expect(instance.reportType).to.be(expectedValueLiteral);
      });

      it('should have the property dataStartTime (base name: "dataStartTime")', function() {
        // TODO: update the code to test the property dataStartTime
        expect(instance).to.have.property('dataStartTime');
        // expect(instance.dataStartTime).to.be(expectedValueLiteral);
      });

      it('should have the property dataEndTime (base name: "dataEndTime")', function() {
        // TODO: update the code to test the property dataEndTime
        expect(instance).to.have.property('dataEndTime');
        // expect(instance.dataEndTime).to.be(expectedValueLiteral);
      });

      it('should have the property marketplaceIds (base name: "marketplaceIds")', function() {
        // TODO: update the code to test the property marketplaceIds
        expect(instance).to.have.property('marketplaceIds');
        // expect(instance.marketplaceIds).to.be(expectedValueLiteral);
      });

    });
  });

}));
