import {
  Tree,
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  installPackagesTask
} from '@nx/devkit';
import { applicationGenerator } from '@nx/angular/generators';
import { MfeAppGeneratorSchema } from './schema';

export async function mfeAppGenerator(
  tree: Tree,
  options: MfeAppGeneratorSchema
) {
  const normalizedNames = names(options.name);
  const appProjectRoot = `apps/${normalizedNames.fileName}`;

  // 1. Generate standard Angular 21 Application via @nx/angular
  await applicationGenerator(tree, {
    name: normalizedNames.fileName,
    style: 'scss',
    routing: true,
    standalone: true,
    inlineStyle: true,
    inlineTemplate: true,
    directory: appProjectRoot,
    unitTestRunner: 'jest',
    e2eTestRunner: 'cypress',
    zoneless: true
  });

  // 2. Inject template files (Accessibility standards & Module Federation config)
  generateFiles(
    tree,
    joinPathFragments(__dirname, 'files'),
    appProjectRoot,
    {
      ...options,
      ...normalizedNames,
      tmpl: ''
    }
  );

  await formatFiles(tree);

  return () => {
    installPackagesTask(tree);
  };
}

export default mfeAppGenerator;