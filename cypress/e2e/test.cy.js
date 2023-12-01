describe('template spec', () => {

  it('Visit home', () => {
    cy.visit('/')
  })


  it('Sign Up a User', () => {
    cy.request({
      method: 'POST', url: Cypress.env("VITE_API_BASEURL")+"/user",
      body: {
        email: 't.gee@hotmail.de',
        passwort: "123",
        name: "huhu",
        place: "berlin",
        postcode: "12203",
        telefon: "1231231233",
        terms: "true"

      }, failOnStatusCode: false
    })
      .then(response => {
        expect(response.status).to.be.gt(299)  // status returned is 404
      })
  })


  it('Login Fail', () => {
    cy.request({
      method: 'POST', url:Cypress.env("VITE_API_BASEURL")+"/login",
      body: {
        email: 't.gee@hotmail.de',
        passwort: "12345"
      }, failOnStatusCode: false
    }).then(response => {
      console.log(response)
      expect(response.body.statuscode).to.be.gt(299)  // status returned is 404
    })
  })

  it('Login a User', () => {
    cy.request({
      method: 'POST', url: Cypress.env("VITE_API_BASEURL")+"/login",
      body: {
        email: 't.gee@hotmail.de',
        passwort: "123"
      }
    }).then(response => {
      Cypress.env('sessionToken', response.body.sessionToken);
      Cypress.env('refreshToken', response.body.refreshToken);
      Cypress.env('userID', response.body.userID);
    })
  })




  it('Update User Fail without Header', () => {
    cy.request({
      method: 'PATCH', url: Cypress.env("VITE_API_BASEURL")+"/user/" + Cypress.env('userID'),
      body: {
        passwort: "123",
        name: "huhu",
        place: "berlin",
        postcode: "12203",
        telefon: "1231231233",
        terms: "true"
      }, failOnStatusCode: false
    }).then(response => {
      expect(response.status).to.be.gt(299)  // status returned is 404
    })
  })


  it('Update User works with Header', () => {
    cy.request({
      method: 'PATCH', url: Cypress.env("VITE_API_BASEURL")+"/user/" + Cypress.env('userID'),
      body: {
        name: "huhu",
        place: "berlin",
        postcode: "12203",
        telefon: "1231231233",
        terms: "true"
      }, headers: {
        Authorization: `Bearer ${Cypress.env('sessionToken')}`
      },

    })
  })

})