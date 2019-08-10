package simplilearn.com.steps;

import cucumber.api.java.After;
import org.testng.Assert;
import simplilearn.com.pages.*;

import cucumber.api.java.Before;
import org.openqa.selenium.chrome.ChromeDriver;
import simplilearn.com.constants.Constants;
import cucumber.api.java.en.*;

import java.util.concurrent.TimeUnit;

import static simplilearn.com.utils.Base.browser;

public class RegisterUser extends Constants {

    private Register registerPage;
    private Home homePage;
    private AuthenticationController authenticationController;


    @Before
    public void setUp() {
        browser = new ChromeDriver();
        browser.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
    }

    @Given("^I am at home page$")
    public void iAmAtHomePage() {
        browser.get(Constants.BASE_URL);
    }

    @When("^I click to sign in$")
    public void iClickToSignIn() {
        homePage = new Home(browser);
        homePage.clickLoginButton();
    }

    @And("^I fill out a valid \"([^\"]*)\"$")
    public void iFillOutAValid(String _email) {
        authenticationController = new AuthenticationController(browser);
        authenticationController.enterEmail(_email);
    }

    @And("^I click to create account$")
    public void iClickToCreateAccount() {
        authenticationController.clickCreateAccountButton();
    }

    @And("^I fill out the personal info \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"with the correct information$")
    public void iFillOutThePersonalInfoWithTheCorrectInformation(String _title, String _firstName, String _lastName, String _password,
                                                                 String _days, String _months, String _years, String _newsletter, String _offers) {
        registerPage = new Register(browser);
        registerPage.checkTitle(_title);
        registerPage.enterFirstName(_firstName);
        registerPage.enterLastName(_lastName);
        registerPage.enterPassword(_password);
        registerPage.selectBirthdayDate(_days,_months,_years);
        registerPage.checkNewsletter(_newsletter);
        registerPage.checkSpecialOffers(_offers);
    }

    @And("^I fill out the additional info \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\" with the correct information$")
    public void iFillOutTheAdditionalInfoWithTheCorrectInformation(String _company, String _mainAddress, String _secondAddress, String _city, String _state, String _zip, String _country, String _adInfox, String _homePhone, String _mobilePhone,String _aliasAddress) throws Throwable {
        registerPage.enterCompany(_company);
        registerPage.enterMainAddress(_mainAddress);
        registerPage.enterSecondAddress(_secondAddress);
        registerPage.enterCity(_city);
        registerPage.selectState(_state);
        registerPage.enterZip(_zip);
        registerPage.selectCountry(_country);
        registerPage.enterAdditionalInfo(_adInfox);
        registerPage.enterHomePhone(_homePhone);
        registerPage.enterMobilePhone(_mobilePhone);
        registerPage.enterAliasAddres(_aliasAddress);
    }

    @And("^I click on the Register button$")
    public void iClickOnTheRegisterButton() throws InterruptedException {
        registerPage.clickToRegister();
    }

    @Then("^I should be registered$")
    public void iShouldBeRegistered() {
        Assert.assertTrue(browser.getPageSource().contains("Welcome to your account. Here you can manage all of your personal information and orders"));
    }

    @Then("^I should see an error notification$")
    public void iShouldSeeAnErrorNotification() {
        Assert.assertTrue(browser.getPageSource().contains("Country is invalid"));
    }
//    @After
//    public void close(){
//        browser.close();
//    }
}
