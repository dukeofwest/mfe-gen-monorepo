# AI-Assisted Microfrontend Generator Workspace

## Project Overview
An enterprise-grade Nx monorepo utilizing Angular 18+, Module Federation, and automated accessibility (a11y) quality gates.

## Core Architecture Principles
1. **Frontend Architecture:**
   - Framework: Angular 18+ (Standalone Components, Signals, RxJS).
   - Microfrontends: @angular-architects/module-federation.
   - Monorepo Tooling: Nx.
   - Code Style: Strict TypeScript (`strict: true`), ESLint, Prettier.

2. **Mandatory Quality Gates:**
   - **Accessibility (a11y):** All generated components must comply with WCAG 2.1 Level AA. Standard automated checks must use `jest-axe` for unit tests and `cypress-axe` for E2E tests.
   - **Unit Testing:** Minimum 80% coverage on new components/services using Jest.
   - **State Management:** Angular Signals for local state; RxJS for asynchronous data flows.

## Common CLI Commands
- Build workspace: `npx nx run-many -t build`
- Test workspace: `npx nx run-many -t test`
- Lint workspace: `npx nx run-many -t lint`
- Run A11y Audit: `npx nx run-many -t e2e`