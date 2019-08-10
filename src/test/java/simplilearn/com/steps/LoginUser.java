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
import simplilearn.com.pages.AuthenticationController;
import simplilearn.com.pages.Login;

import java.util.concurrent.TimeUnit;

import static simplilearn.com.utils.Base.browser;



public class LoginUser {

    public Login login;
    public AuthenticationController controller;

    @Before
    public void setUp() {
        browser = new ChromeDriver();
        browser.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
    }

    @Given("^The login form is displayed in the Apparel Homepage$")
    public void theLoginFormIsDisplayedInTheApparelHomepage() {
        browser.get(Constants.BASE_URL+Constants.CONTROLLER);
    }

    @When("^I fill out the login form with \"([^\"]*)\" and \"([^\"]*)\" information$")
    public void iFillOutTheLoginFormWithAndInformation(String _userName, String _password) {
        login = new Login(browser);
        login.enterUserName(_userName);
        login.enterPassword(_password);
    }

    @And("^I click on the Sign in button in the login form$")
    public void iClickOnTheSignInButtonInTheLoginForm() {
        login.clickToLogin();
    }

    @Then("^I should see the logo off menu at the top's page$")
    public void iShouldSeeTheLogoOffMenuAtTheTopSPage() {
        controller = new AuthenticationController(browser);
        Assert.assertTrue(controller.logoutCta.isDisplayed());
    }

    @Then("^I should see a message error$")
    public void iShouldSeeAMessageError() {
        Assert.assertTrue(browser.getPageSource().contains("Invalid email address."));
    }

    @When("^I click on the log off button$")
    public void iClickOnTheLogOffButton() {
        controller = new AuthenticationController(browser);
        controller.clickToLogout();
    }

    @Then("^I should see a login available$")
    public void iShouldSeeALoginAvailable() {
        Assert.assertTrue(login.loginCta.isDisplayed());
    }

    @When("^I fill out the login form with not valid \"([^\"]*)\" and \"([^\"]*)\" information$")
    public void iFillOutTheLoginFormWithNotValidAndInformation(String _userName, String _password) throws Throwable {
        login = new Login(browser);
        login.enterUserName(_userName);
        login.enterPassword(_password);
    }

    @Given("^I'm logged in the Apparel website with valid \"([^\"]*)\" and \"([^\"]*)\" information$")
    public void iMLoggedInTheApparelWebsiteWithValidAndInformation(String _userName, String _password) throws Throwable {
        browser.get(Constants.BASE_URL+Constants.CONTROLLER);
        login = new Login(browser);
        login.enterUserName(_userName);
        login.enterPassword(_password);
        login.clickToLogin();
    }

//    @After
//    public void close(){
//        browser.close();
//    }
}
