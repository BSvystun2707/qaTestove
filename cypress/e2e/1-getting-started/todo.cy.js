/// <reference types="cypress" />

describe('template spec', () => {
    it('User is redirected to the "Courses" page after clicking in the respected hyperlink on the top bar', () => {
      cy.visit('https://beetroot.academy/')
      cy.wait(1000);
      cy.contains('div', 'Онлайн-курси').click();
      cy.wait(500);
      cy.get('h1[class="hero-title main"]').should('contain.text', 'Онлайн-курси ІТ-професій');
    })
  
    it('User is redirected to the english page', () => {
      cy.visit('https://beetroot.academy/')
      cy.wait(1000);
      cy.get('#w-dropdown-toggle-3 > .menu-arrow').click({force: true} );
      cy.contains('a', 'English').click({force: true});
    })
  })
  