# AI-Assisted Microfrontend Generator Workspace

## Project Overview
An enterprise-grade Nx monorepo utilizing Angular 21, Module Federation, Zoneless Change Detection, and automated accessibility (a11y) quality gates.

## Core Architecture Principles
1. **Frontend Architecture:**
   - Framework: Angular 21+ (Zoneless by default, Standalone Components, Signals & Signal Forms, RxJS).
   - Microfrontends: @angular-architects/module-federation.
   - Monorepo Tooling: Nx.
   - Code Style: Strict TypeScript (`strict: true`), ESLint, Prettier.

2. **Mandatory Quality Gates:**
   - **Accessibility (a11y):** All generated components must comply with WCAG 2.1 Level AA. Automated checks use `jest-axe` / `vitest-axe` for unit tests and `cypress-axe` for E2E tests.
   - **Unit Testing:** Minimum 80% coverage on new components/services.
   - **State Management:** Angular Signals for state; RxJS for asynchronous event streams.

## Common CLI Commands
- Build workspace: `npx nx run-many -t build`
- Test workspace: `npx nx run-many -t test`
- Lint workspace: `npx nx run-many -t lint`
- Run A11y Audit: `npx nx run-many -t e2e`