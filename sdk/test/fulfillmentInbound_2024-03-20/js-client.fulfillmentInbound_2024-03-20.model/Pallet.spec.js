/*
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
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
    define(['expect.js', '../../../src/fulfillmentInbound_2024-03-20/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/fulfillmentInbound_2024-03-20/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TheSellingPartnerApiForFbaInboundOperations);
  }
}(this, function(expect, TheSellingPartnerApiForFbaInboundOperations) {
  'use strict';

  var instance;

  describe('fulfillmentInbound_2024-03-20', function() {
    describe('Pallet', function() {
      beforeEach(function() {
        instance = new TheSellingPartnerApiForFbaInboundOperations.Pallet();
      });

      it('should create an instance of Pallet', function() {
        // TODO: update the code to test Pallet
        expect(instance).to.be.a(TheSellingPartnerApiForFbaInboundOperations.Pallet);
      });

      it('should have the property dimensions (base name: "dimensions")', function() {
        // TODO: update the code to test the property dimensions
        expect(instance).to.have.property('dimensions');
        // expect(instance.dimensions).to.be(expectedValueLiteral);
      });

      it('should have the property packageId (base name: "packageId")', function() {
        // TODO: update the code to test the property packageId
        expect(instance).to.have.property('packageId');
        // expect(instance.packageId).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property stackability (base name: "stackability")', function() {
        // TODO: update the code to test the property stackability
        expect(instance).to.have.property('stackability');
        // expect(instance.stackability).to.be(expectedValueLiteral);
      });

      it('should have the property weight (base name: "weight")', function() {
        // TODO: update the code to test the property weight
        expect(instance).to.have.property('weight');
        // expect(instance.weight).to.be(expectedValueLiteral);
      });

    });
  });

}));
