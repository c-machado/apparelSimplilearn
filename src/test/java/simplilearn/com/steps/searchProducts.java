package simplilearn.com.steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import simplilearn.com.constants.Constants;
import simplilearn.com.pages.Home;
import simplilearn.com.pages.SearchController;

import java.util.concurrent.TimeUnit;

import static simplilearn.com.utils.Base.browser;

public class searchProducts {

    public Home home;
    public SearchController search;

    @Before
    public void setUp() {
        browser = new ChromeDriver();
        browser.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
    }
    @Given("^I am at the home page$")
    public void iAmAtPage() {
        browser.get(Constants.BASE_URL);
    }

    @When("^I type \"([^\"]*)\" in the search field$")
    public void iTypeInTheSearchField(String _filter) {
        home = new Home(browser);
        home.enterSearchFilter(_filter);
    }

    @And("^I click on the search button$")
    public void iClickOnTheSearchButton() {
        home.clickSearchButton();
    }


    @And("^I should see results for \"([^\"]*)\"$")
    public void iShouldSeeResultsFor(String _filter) {
       search = new SearchController(browser);
       boolean product = search.validateProductsMatched(_filter);
       Assert.assertTrue(product);
    }

    @Then("^I should see the expected number of results$")
    public void iShouldSeeTheExpectedNumberOfResults() {
        search = new SearchController(browser);
        boolean numberResultProducts = search.getNumberOfResults();
        Assert.assertTrue(numberResultProducts);
    }

    @Then("^I should see zero results$")
    public void iShouldSeeZeroResults() {
        search = new SearchController(browser);
        Assert.assertTrue(search.alertNoResults.isDisplayed());
    }
    @After
    public void close(){
        browser.close();
    }
}
