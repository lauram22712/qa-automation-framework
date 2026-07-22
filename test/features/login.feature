@regression
Feature: Login
  Como usuario de la tienda
  Quiero poder iniciar sesión con mis credenciales
  Para acceder al catálogo de productos

  Background:
    Given el usuario está en la página de login

  @smoke
  Scenario: Login exitoso con credenciales válidas
    When el usuario ingresa el usuario "standard_user" y contraseña "secret_sauce"
    Then el usuario debería ver la página de productos

  Scenario: Login fallido con credenciales inválidas
    When el usuario ingresa el usuario "usuario_invalido" y contraseña "clave_invalida"
    Then debería ver el mensaje de error "Epic sadface: Username and password do not match any user in this service"

  Scenario Outline: Login fallido con campos vacíos
    When el usuario ingresa el usuario "<usuario>" y contraseña "<clave>"
    Then debería ver un mensaje de error

    Examples:
      | usuario        | clave    |
      |                | secreta  |
      | standard_user  |          |
