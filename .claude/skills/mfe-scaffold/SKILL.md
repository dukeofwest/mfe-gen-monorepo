---
name: mfe-scaffold
description: Scaffolds an accessible, tested Angular Microfrontend remote module inside the Nx monorepo.
disable-model-invocation: false
---

# MFE Scaffolding Skill

When generating or assisting with a new Microfrontend module:

## 1. Structural Standards
- Ensure all components are Angular Standalone components.
- Use `inject()` function for dependency injection instead of constructor injection.
- Prefer Angular Signals (`signal()`, `computed()`) for local reactive state.

## 2. Accessibility Standard Requirements (WCAG 2.1 AA)
- Wrap root templates in landmark elements (`<main role="main">`, `<header>`, `<nav>`).
- Ensure all interactive elements (buttons, inputs) have accessible labels (`aria-label`, `aria-labelledby`).
- Add keyboard event listeners (`(keydown.enter)` / `(keydown.space)`) for custom interactive controls.

## 3. Automated Test Generation
- Include a `jest-axe` test block in `.spec.ts` files:
  ```ts
  it('should have no accessibility violations', async () => {
    const { container } = render(AppComponent);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should pass accessibility checks on mount', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y();
  });
  ```