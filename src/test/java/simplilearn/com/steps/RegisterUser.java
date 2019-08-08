package simplilearn.com.steps;

import cucumber.api.java.Before;
import org.openqa.selenium.chrome.ChromeDriver;
import simplilearn.com.constants.Constants;
import cucumber.api.PendingException;
import cucumber.api.java.en.*;

import java.util.concurrent.TimeUnit;

import static simplilearn.com.utils.Base.browser;

public class RegisterUser extends Constants {

    @Before
    public void setUp() {
        browser = new ChromeDriver();
        browser.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
    }

    @Given("^I am at home page$")
    public void iAmAtHomePage() {
        browser.get(Constants.BASE_URL);
    }

    @When("^I click to sign in$")
    public void iClickToSignIn() {
    }

    @And("^I choose the create option$")
    public void iChooseTheCreateOption() {
    }

    @And("^I fill out the register form with the correct information$")
    public void iFillOutTheRegisterFormWithTheCorrectInformation() {
        
    }

    @And("^I click on the Register button$")
    public void iClickOnTheRegisterButton() {
        
    }

    @Then("^I should be registered$")
    public void iShouldBeRegistered() {
    }

    @And("^I should see a notification$")
    public void iShouldSeeANotification() {
        
    }

    @And("^I fill out the register form information$")
    public void iFillOutTheRegisterFormInformation() {
        
    }

    @But("^I do not select a \"([^\"]*)\" value$")
    public void iDoNotSelectAValue(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^I do not enter a valid \"([^\"]*)\" value$")
    public void iDoNotEnterAValidValue(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^I should see an error notification$")
    public void iShouldSeeAnErrorNotification() {
    }


}
