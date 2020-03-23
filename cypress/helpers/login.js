export class Login {
    
    loginToOrg(){
        cy.viewport(1440,900)

        // Run below once locally to authenticate org: 
        // sfdx force:auth:web:login -a <replace_with_org_alias> -r https://test.salesforce.com
        
        cy
        .exec('sfdx force:org:display -u <replace_with_org_alias> --json | sed -E "s/[[:cntrl:]]\[[0-9]{1,3}m//g"')
        .then((response) => {
            let result = JSON.parse(response.stdout).result;
            let sessionId = result.accessToken;
            let instanceUrl = result.instanceUrl;    

            cy.request(`${instanceUrl}/secur/frontdoor.jsp?sid=${sessionId}`)
            cy.visit(`${instanceUrl}/lightning/page/home`)
        })        

        // Resolved Issues:
        // https://github.com/cypress-io/cypress/issues/692
        // https://github.com/cypress-io/cypress/issues/2367
    }
}