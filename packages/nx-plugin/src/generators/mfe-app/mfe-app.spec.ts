process.env['NODE_ENV'] = 'test';

import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree } from '@nx/devkit';
import { mfeAppGenerator } from './mfe-app.js';
import { MfeAppGeneratorSchema } from './schema.js';

// Increase test timeout to handle virtual tree generation
jest.setTimeout(30000);

describe('mfe-app generator', () => {
  let tree: Tree;
  const options: MfeAppGeneratorSchema = { name: 'test-mfe', port: 4200 };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should generate MFE app files and configuration successfully', async () => {
    await mfeAppGenerator(tree, options);

    // Assert that template files were injected into the virtual tree
    expect(tree.exists('apps/test-mfe/src/app/app.component.ts')).toBeTruthy();
    expect(tree.exists('apps/test-mfe/module-federation.config.ts')).toBeTruthy();
  });
});