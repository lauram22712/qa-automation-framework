QA Automation Framework — WebdriverIO + Cucumber + TypeScript
Framework de automatización de tests end-to-end para aplicaciones web, construido con WebdriverIO, Cucumber (BDD) y TypeScript, siguiendo el patrón Page Object Model (POM).

Este proyecto usa SauceDemo como sitio de práctica, pero la arquitectura está pensada para adaptarse a cualquier aplicación web cambiando solo los selectores de los Page Objects.

Stack
WebdriverIO v8 — motor de automatización de navegador
Cucumber — escritura de escenarios en Gherkin (BDD), legible para perfiles no técnicos
TypeScript — tipado estático para reducir errores en tiempo de escritura
Allure Reporter — reportes visuales de ejecución con capturas de pantalla en fallos
Arquitectura

test/
├── features/              # Escenarios en Gherkin (.feature)
│   ├── login.feature       # @regression, con @smoke en el caso feliz
│   ├── cart.feature        # @regression
│   └── checkout.feature    # @regression, con @smoke en el caso feliz
├── step-definitions/      # Implementación de cada step en TypeScript
│   ├── login.steps.ts
│   ├── cart.steps.ts
│   └── checkout.steps.ts
└── pageobjects/            # Un archivo por pantalla de la aplicación
    ├── base.page.ts         # Métodos comunes (esperas, clicks seguros, etc.)
    ├── login.page.ts
    ├── inventory.page.ts
    └── checkout.page.ts

.github/workflows/
└── e2e-tests.yml           # Pipeline de CI: corre los tests en cada push/PR

¿Por qué Page Object Model?
Mantenibilidad: si cambia un selector en la UI, se actualiza en un solo lugar (el Page Object), no en cada test.
Legibilidad: los steps de Cucumber describen qué hace el usuario, no cómo interactúa con el DOM.
Reutilización: los mismos Page Objects se usan en múltiples escenarios (login se reutiliza en el feature de carrito, por ejemplo).
Todos los Page Objects extienden de BasePage, que centraliza esperas explícitas (waitForDisplayed, waitForClickable) para evitar tests inestables (flaky tests).

Cómo correr los tests
npm install
npm test                # corre toda la suite
npm run test:smoke      # solo escenarios @smoke (caso feliz de cada flujo)
npm run test:regression # toda la suite de regresión

Los reportes de Allure se generan en allure-results/.

Integración continua
El workflow .github/workflows/e2e-tests.yml corre la suite completa en cada push o pull request a main, en modo headless. Publica como artefactos el reporte de Allure y las capturas de pantalla de cualquier step que falle, para poder debuggear directamente desde la pestaña "Actions" de GitHub sin correr nada localmente.

Próximos pasos (roadmap del proyecto)
Agregar hooks (Before/After) para limpieza de estado entre escenarios
Sumar un job de reporte de Allure publicado como GitHub Pages
Agregar tests de casos negativos adicionales (productos sin stock, sesión expirada)
Data-driven testing: mover usuarios y datos de prueba a un archivo JSON separado en test/data/
Proyecto de práctica desarrollado para demostrar experiencia en automatización de tests web con WebdriverIO, Cucumber, TypeScript y Page Object Model.
