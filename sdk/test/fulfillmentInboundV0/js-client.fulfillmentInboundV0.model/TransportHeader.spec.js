/*
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../../src/fulfillmentInboundV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/fulfillmentInboundV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForFulfillmentInbound);
  }
}(this, function(expect, SellingPartnerApiForFulfillmentInbound) {
  'use strict';

  var instance;

  describe('fulfillmentInboundV0', function() {
    describe('TransportHeader', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForFulfillmentInbound.TransportHeader();
      });

      it('should create an instance of TransportHeader', function() {
        // TODO: update the code to test TransportHeader
        expect(instance).to.be.a(SellingPartnerApiForFulfillmentInbound.TransportHeader);
      });

      it('should have the property sellerId (base name: "SellerId")', function() {
        // TODO: update the code to test the property sellerId
        expect(instance).to.have.property('sellerId');
        // expect(instance.sellerId).to.be(expectedValueLiteral);
      });

      it('should have the property shipmentId (base name: "ShipmentId")', function() {
        // TODO: update the code to test the property shipmentId
        expect(instance).to.have.property('shipmentId');
        // expect(instance.shipmentId).to.be(expectedValueLiteral);
      });

      it('should have the property isPartnered (base name: "IsPartnered")', function() {
        // TODO: update the code to test the property isPartnered
        expect(instance).to.have.property('isPartnered');
        // expect(instance.isPartnered).to.be(expectedValueLiteral);
      });

      it('should have the property shipmentType (base name: "ShipmentType")', function() {
        // TODO: update the code to test the property shipmentType
        expect(instance).to.have.property('shipmentType');
        // expect(instance.shipmentType).to.be(expectedValueLiteral);
      });

    });
  });

}));
