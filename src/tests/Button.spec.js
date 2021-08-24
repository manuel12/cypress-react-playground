import React from 'react'
import {mount} from '@cypress/react'

import Button from "../components/Button"

describe("Button component test cases", () => {

  it('Render the button using cypress', () => {
    mount(<Button />)

    cy.get('data-cy=button]').should('have.text', "Click me")
  })

  
})