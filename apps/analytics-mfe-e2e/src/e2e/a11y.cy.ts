import 'cypress-axe';

describe('Analytics MFE Accessibility Audit (WCAG 2.1 AA)', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  it('should pass automated WCAG 2.1 AA accessibility checks on mount', () => {
    // Audit the root element for violations
    cy.checkA11y('mfe-analytics-mfe-root', {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag21aa']
      }
    });
  });

  it('should maintain accessibility compliance during state updates', () => {
    cy.get('button[aria-label="Increment counter value"]').click();
    cy.get('#counter-value').should('contain', '1');
    cy.checkA11y('mfe-analytics-mfe-root');
  });
});