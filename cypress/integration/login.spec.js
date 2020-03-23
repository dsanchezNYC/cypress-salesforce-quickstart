/// <reference types="cypress" />

import { Login } from "../helpers/login"
import { HomePage } from "../page-objects/home-page"

describe('Login test', () => {

    const login = new Login
    const hp = new HomePage

    describe('Smoke tests', () =>{

    it('See Home tab after login', () => {
        login.loginToOrg()
        hp.homeTab().should('be.visible')
    })

    })

})