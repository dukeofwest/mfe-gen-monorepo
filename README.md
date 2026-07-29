# 🚀 Enterprise Angular 21 Microfrontend Engine (`mfe-gen-monorepo`)

[![CI & Quality Gates](https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME/actions/workflows/ci.yml/badge.svg)](https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME/actions)
[![Angular](https://img.shields.io/badge/Angular-v21-dd0031.svg?style=flat&logo=angular)](https://angular.io/)
[![Nx Monorepo](https://img.shields.io/badge/Nx-Monorepo-14a1c0.svg?style=flat&logo=nx)](https://nx.dev/)
[![Accessibility](https://img.shields.io/badge/A11y-WCAG%202.1%20AA-blue.svg)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

An enterprise-grade Nx Monorepo architecture demonstrating **Zoneless Angular 21**, **Module Federation microfrontend orchestration**, **AI-assisted developer tooling via Claude Code Skills**, and **automated WCAG 2.1 AA accessibility quality gates** (`jest-axe` & `cypress-axe`).

---

## 🏛️ Architecture Overview

```text
                      ┌─────────────────────────┐
                      │   Claude Code / AI      │
                      │ (.claude/skills/mfe-scaffold)
                      └────────────┬────────────┘
                                   │ Scaffolds via
                                   ▼
                      ┌─────────────────────────┐
                      │   @mfe-gen/nx-plugin    │
                      │   (Nx Plugin Generator) │
                      └────────────┬────────────┘
                                   │ Generates Remote
                                   ▼
 ┌──────────────────────────────────────────────────────────────────┐
 │                      Nx Monorepo Workspace                       │
 │                                                                  │
 │  ┌───────────────────────┐          ┌─────────────────────────┐  │
 │  │     apps/shell        │ ◄─────── │   apps/analytics-mfe    │  │
 │  │  (Host Application)   │ Module   │   (Remote MFE App)      │  │
 │  └───────────────────────┘ Fed.     └────────────┬────────────┘  │
 └──────────────────────────────────────────────────│───────────────┘
                                                    │ Audited by
                                                    ▼
                                       ┌─────────────────────────┐
                                       │  Automated Quality Gate │
                                       │  jest-axe + cypress-axe │
                                       └─────────────────────────┘
```

---

## 🌟 Key Features

* **⚡ Angular 21 Zoneless & Reactive Signals:** Built using native fine-grained reactivity (`signal()`, `computed()`) without Zone.js runtime overhead.
* **🧩 Custom Nx Plugin Generator (`@mfe-gen/nx-plugin`):** Automated microfrontend factory that generates production-ready remote applications with standard Module Federation setups and pre-baked testing.
* **🤖 AI-Integrated Tooling (Claude Code Skills):** Features embedded workspace instructions (`CLAUDE.md`) and declarative scaffolding skills (`.claude/skills/mfe-scaffold`) for natural language application generation.
* **♿ Automated WCAG 2.1 AA Compliance:** Quality gates baked into both Unit/Component tests (`jest-axe`) and End-to-End browser runs (`cypress-axe`).
* **🛡️ Zero-Warning CI/CD Pipeline:** Fully automated GitHub Actions workflow enforcing strict type checking, unit/integration testing, accessibility validation, and production builds with remote caching support.

---

## 🛠️ Monorepo Project Structure

```text
├── apps/
│   ├── analytics-mfe/          # Generated Angular 21 Remote MFE App
│   │   ├── src/app/            # Zoneless Signal-based component with landmark tags
│   │   ├── module-federation.config.ts # Remote entry point export definition
│   │   └── jest.config.cts     # Unit tests integrated with jest-axe
│   └── analytics-mfe-e2e/      # Cypress E2E suite integrated with cypress-axe
│
├── packages/
│   └── nx-plugin/              # Custom Nx Generator Plugin (@mfe-gen/nx-plugin)
│       └── src/generators/mfe-app/
│           ├── mfe-app.ts      # Scaffolding orchestration logic
│           └── files/          # Templated WCAG-compliant remote app files
│
├── .claude/
│   └── skills/mfe-scaffold/    # Declarative Claude Code generator skills
├── .github/workflows/ci.yml    # Continuous Integration pipeline script
└── CLAUDE.md                   # AI Assistant architectural guidelines & standard rules
```

---

## 🚀 Quick Start & Usage

### 1. Prerequisites & Installation

Ensure Node.js v22+ is installed:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
cd mfe-gen-monorepo
npm install
```

### 2. Scaffold a New Microfrontend Remote App

Run the custom Nx generator command directly:

```bash
npx nx generate @mfe-gen/nx-plugin:mfe-app order-mfe --port=4203
```

This automatically generates:

- Standalone, Zoneless Angular 21 component with WCAG 2.1 AA accessible semantics.
- `jest-axe` automated accessibility unit test assertions.
- Exposed Module Federation remote configuration.

### 3. Run Quality Gates & Tests

Execute full monorepo testing, accessibility validation, and build checks:

```bash
# Run Unit & jest-axe Accessibility Tests across all projects
npx nx run-many -t test --coverage

# Build all applications for production
npx nx run-many -t build --prod
```

---

## 🚦 Continuous Integration (GitHub Actions)

The repository uses GitHub Actions to enforce non-breaking quality gates on every commit or PR:

| Quality Gate | Tooling | Target |
|---|---|---|
| Typecheck | `tsc --noEmit` | Workspace packages & apps |
| Unit & A11y Audit | Jest + jest-axe | Automated WCAG AA component validation |
| Production Build | Nx Esbuild / Angular Compiler | Zero-warning production artifacts |
| Caching | Nx Cloud / Local Cache | Optimized pipeline performance |

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
