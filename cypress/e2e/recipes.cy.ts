describe("Successful journeys:", () => {
  context("", () => {
    it("Fetch random recipe on first load.", () => {
      cy.intercept(
        "https://www.themealdb.com/api/json/v1/1/random.php",
        (req) => {
          req.continue((res) => {
            expect(res.statusCode).equal(200);
          });
        }
      ).as("random");
      cy.visit("/");
      cy.wait("@random");
    });
    it(`Select a Cuisine/Country based recipe:
      - Open Sidenav.
      - Toggle 'Cuisine' dropdown.
      - Select first option.
      - Assert that recipes dialog opens.
      - Click on first recipe.
      - Assert sidenav and modal are closed upon selecting recipe.
      - Verify that selected recipe is displayed on screen.`, () => {
      cy.intercept("https://www.themealdb.com/api/json/v1/1/search.php?s=*").as(
        "search"
      );
      cy.visit("/");
      cy.getByDataTest("sidenav-button").wait(500).click();
      cy.getByDataTest("sidenav").should("be.visible");
      cy.getByDataTest("dropdown-cuisines")
        .should("be.visible")
        .click()
        .wait(500);
      cy.getByDataTest("dropdown-cuisines-item").first().click().wait(500);
      cy.getByDataTest("recipes-dialog-item").first().click().wait(500);
      cy.wait("@search").then((interception) => {
        cy.wait(500);
        cy.getByDataTest("recipe-title").then(($el) => {
          const text = $el.text();
          expect(interception.request.query.s == text).to.eq(true);
        });
      });
    });
  });
});
