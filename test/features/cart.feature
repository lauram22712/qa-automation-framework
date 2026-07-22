@regression
Feature: Carrito de compras
  Como usuario logueado
  Quiero agregar productos al carrito
  Para poder comprarlos luego

  Background:
    Given el usuario está logueado como "standard_user"

  Scenario: Agregar un producto al carrito
    When el usuario agrega el producto "Sauce Labs Backpack" al carrito
    Then el contador del carrito debería mostrar "1"

  Scenario: El catálogo muestra productos
    Then debería ver al menos 1 producto en el catálogo
