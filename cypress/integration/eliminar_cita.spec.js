/// <reference types="cypress"/>

describe('Llena los campos de una nueva y cita y luego la elimina', () => {
    it('Llenando la cita', () => {
        cy.visit('/index.html');

        cy.get('[data-cy="mascota-input"]')
          .type('Africa');
        cy.get('[data-cy="propietario-input"]')
          .type('Mauro');
        cy.get('[data-cy="telefono-input"]')
          .type('45454545');
        cy.get('[data-cy="fecha-input"]')
          .type('2021-10-10');
        cy.get('[data-cy="hora-input"]')
          .type('10:30');
        cy.get('[data-cy="sintomas-textarea"]')
          .type('Vacunación');
        cy.get('[data-cy="submit-cita"]')
          .click();
          
        cy.get('[data-cy="citas-heading"]')
          .invoke('text')
          .should('equal', 'Administra tus Citas');

        //Seleccionar la alerta
        cy.get('[data-cy="alerta"]')
          .invoke('text')
          .should('equal', 'Se agregó correctamente')
          
        cy.get('[data-cy="alerta"]')
          .should('have.class', 'alert-success')
    });

    it('Eliminando la cita', () => {
        cy.get('[data-cy="btn-eliminar"]')
          .click();
        cy.get('[data-cy="citas-heading"]')
          .invoke('text')
          .should('equal', 'No hay Citas, comienza creando una')
    })
});