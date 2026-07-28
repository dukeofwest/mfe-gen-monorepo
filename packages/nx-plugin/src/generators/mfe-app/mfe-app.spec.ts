import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { mfeAppGenerator } from './mfe-app';
import { MfeAppGeneratorSchema } from './schema';

describe('mfe-app generator', () => {
  let tree: Tree;
  const options: MfeAppGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await mfeAppGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
