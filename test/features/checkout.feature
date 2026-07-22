@regression
Feature: Checkout
  Como usuario con productos en el carrito
  Quiero completar el proceso de compra
  Para finalizar mi pedido

  Background:
    Given el usuario está logueado como "standard_user"
    And el usuario agrega el producto "Sauce Labs Backpack" al carrito

  @smoke
  Scenario: Checkout exitoso con datos válidos
    When el usuario va al carrito y procede al checkout
    And completa el formulario con nombre "Laura", apellido "Muñoz" y código postal "5480000"
    And finaliza la compra
    Then debería ver el mensaje "Thank you for your order!"

  Scenario: Checkout fallido por formulario incompleto
    When el usuario va al carrito y procede al checkout
    And completa el formulario con nombre "" y apellido "" y código postal ""
    Then debería ver un mensaje de error en el checkout
