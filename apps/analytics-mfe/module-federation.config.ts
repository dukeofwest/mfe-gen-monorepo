import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'analytics-mfe',
  exposes: {
    './Module': './apps/analytics-mfe/src/app/app.component.ts',
  },
};

export default config;
