package simplilearn.com.steps;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import simplilearn.com.constants.Constants;
import simplilearn.com.pages.SearchController;

import java.util.concurrent.TimeUnit;

import static simplilearn.com.utils.Base.browser;

public class Manufacturer {

    public SearchController search;

    @Before
    public void setUp() {
        browser = new ChromeDriver();
        browser.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
    }

    @Given("^I am at the search results page$")
    public void iAmAtTheSearchResultsPage() {
        browser.get(Constants.BASE_URL+Constants.SEARCH_PAGE);
    }

    @When("^I choose the \"([^\"]*)\" needed$")
    public void iChooseTheNeeded(String _manufacturer) throws Throwable {
        search = new SearchController(browser);
        search.selectManufacturer(_manufacturer);
    }

    @Then("^I should see the heading of manufacturer's product list$")
    public void iShouldSeeTheHeadingOfManufacturerSProductList() {
        Assert.assertTrue(search.manufacturerHeading.isDisplayed());
    }
//    @After
//    public void close(){
//        browser.close();
//    }
}
