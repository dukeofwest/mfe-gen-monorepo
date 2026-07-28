---
name: mfe-scaffold
description: Scaffolds an accessible, tested Angular 21 Microfrontend remote module inside the Nx monorepo.
disable-model-invocation: false
---

# MFE Scaffolding Skill (Angular 21)

When generating or assisting with a new Microfrontend module:

## 1. Structural Standards (Angular 21)
- Ensure all components are Angular Standalone components with Zoneless change detection enabled (`provideZonelessChangeDetection()`).
- Use `inject()` function for dependency injection.
- Use Angular Signals (`signal()`, `computed()`, `input()`, `output()`) for reactive state.

## 2. Accessibility Standard Requirements (WCAG 2.1 AA)
- Wrap root templates in landmark elements (`<main role="main">`, `<header>`, `<nav>`).
- Ensure all interactive elements have explicit accessible labels (`aria-label`, `aria-labelledby`).
- Support full keyboard navigation.

## 3. Automated Test Generation
- Include a unit testing `axe` check block in `.spec.ts` files.
- Include a `cypress-axe` E2E test block for mounting checks.