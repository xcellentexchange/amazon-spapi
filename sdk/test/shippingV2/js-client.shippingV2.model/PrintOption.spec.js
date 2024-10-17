/*
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * OpenAPI spec version: v2
 * Contact: swa-api-core@amazon.com
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
    define(['expect.js', '../../../src/shippingV2/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/shippingV2/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AmazonShippingApi);
  }
}(this, function(expect, AmazonShippingApi) {
  'use strict';

  var instance;

  describe('shippingV2', function() {
    describe('PrintOption', function() {
      beforeEach(function() {
        instance = new AmazonShippingApi.PrintOption();
      });

      it('should create an instance of PrintOption', function() {
        // TODO: update the code to test PrintOption
        expect(instance).to.be.a(AmazonShippingApi.PrintOption);
      });

      it('should have the property supportedDPIs (base name: "supportedDPIs")', function() {
        // TODO: update the code to test the property supportedDPIs
        expect(instance).to.have.property('supportedDPIs');
        // expect(instance.supportedDPIs).to.be(expectedValueLiteral);
      });

      it('should have the property supportedPageLayouts (base name: "supportedPageLayouts")', function() {
        // TODO: update the code to test the property supportedPageLayouts
        expect(instance).to.have.property('supportedPageLayouts');
        // expect(instance.supportedPageLayouts).to.be(expectedValueLiteral);
      });

      it('should have the property supportedFileJoiningOptions (base name: "supportedFileJoiningOptions")', function() {
        // TODO: update the code to test the property supportedFileJoiningOptions
        expect(instance).to.have.property('supportedFileJoiningOptions');
        // expect(instance.supportedFileJoiningOptions).to.be(expectedValueLiteral);
      });

      it('should have the property supportedDocumentDetails (base name: "supportedDocumentDetails")', function() {
        // TODO: update the code to test the property supportedDocumentDetails
        expect(instance).to.have.property('supportedDocumentDetails');
        // expect(instance.supportedDocumentDetails).to.be(expectedValueLiteral);
      });

    });
  });

}));