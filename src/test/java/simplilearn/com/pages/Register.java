package simplilearn.com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class Register {
    private WebDriver driver;

    @FindBy(css = ".account_creation #id_gender1")
    public WebElement maleGender;

    @FindBy(css = ".account_creation #id_gender2")
    public WebElement femaleGender;

    @FindBy(css = ".account_creation #customer_firstname")
    public WebElement firstName;

    @FindBy(css = ".account_creation #customer_lastname")
    public WebElement lastName;

    @FindBy(css = ".account_creation #email")
    public WebElement email;

    @FindBy(css = ".account_creation #passwd")
    public WebElement password;

    @FindBy(css = ".account_creation #days")
    public WebElement daysOfBirthday;

    @FindBy(css = ".account_creation #months")
    public WebElement monthOfBirthday;

    @FindBy(css = ".account_creation #years")
    public WebElement yearOfBirthday;

    @FindBy(css = ".account_creation #newsletter")
    public WebElement newsletterCheckbox;

    @FindBy(css = ".account_creation #optin")
    public WebElement specialOffersCheckbox;

    @FindBy(css = ".account_creation #company")
    public WebElement company;

    @FindBy(css = ".account_creation #address1")
    public WebElement mainAddress;

    @FindBy(css = ".account_creation #address2")
    public WebElement additionalAddress;

    @FindBy(css = ".account_creation #city")
    public WebElement city;

    @FindBy(css = ".account_creation #id_state")
    public WebElement idState;

    @FindBy(css = ".account_creation #postcode")
    public WebElement postcode;

    @FindBy(css = ".account_creation #id_country")
    public WebElement idCountry;

    @FindBy(css = ".account_creation #other")
    public WebElement additionalInfox;

    @FindBy(css = ".account_creation #phone")
    public WebElement phone;

    @FindBy(css = ".account_creation #phone_mobile")
    public WebElement phone_mobile;

    @FindBy(css = ".account_creation #alias")
    public WebElement addressAlias;

    @FindBy(css = ".submit #submitAccount")
    public WebElement submitRegisterCta;

    @FindBy(css = ".inline-infos")
    public WebElement errorMessage;


    public Register(WebDriver _driver) {
        this.driver = driver;
        PageFactory.initElements(_driver,this);
    }


    public void checkTitle(String _title){
        if(_title.equals("Mr"))
            maleGender.click();
        else if(_title.equals("Mrs"))
            femaleGender.click();
    }

    public void enterFirstName(String _firstName) {
        firstName.sendKeys(_firstName);
    }

    public void enterLastName(String _lastName) {
        lastName.sendKeys(_lastName);
    }

    public void enterPassword(String _password) {
        password.sendKeys(_password);
    }

    public void selectBirthdayDate(String _days, String _months, String _years){
        Select days, months, years;
        days = new Select(daysOfBirthday);
        months = new Select(monthOfBirthday);
        years = new Select(yearOfBirthday);
        days.selectByValue(_days);
        months.selectByValue(_months);
        years.selectByValue(_years);
    }

    public void checkNewsletter(String _newsletter){
        if(_newsletter.equals("y")){
            newsletterCheckbox.click();
        }
    }

    public void checkSpecialOffers(String _offers){
        if(_offers.equals("y")){
            specialOffersCheckbox.click();
        }
    }

    public void enterCompany(String _company) {
        company.sendKeys(_company);
    }

    public void enterMainAddress(String _mainAddres) {
        mainAddress.sendKeys(_mainAddres);
    }

    public void enterSecondAddress(String _secondAddres) {
        additionalAddress.sendKeys(_secondAddres);
    }

    public void enterCity(String _city) {
        city.sendKeys(_city);
    }

    /*todo : receive the value instead of the id*/
    public void selectState(String _state) {
        Select state;
        state = new Select(idState);
        state.selectByValue(_state);
    }

    public void enterZip(String _zip) {
        postcode.sendKeys(_zip);
    }

    public void selectCountry(String _country) {
        Select country;
        country = new Select(idCountry);
        if(_country.equals("blank"))
        {
            country.selectByIndex(0);
        }
        else {
            country.selectByValue(_country);
        }
    }

    public void enterAdditionalInfo(String _addtionalInfo) {
        additionalInfox.sendKeys(_addtionalInfo);
    }

    public void enterHomePhone(String _homephone) {
        phone.sendKeys(_homephone);
    }

    public void enterMobilePhone(String _mobilephone) {
        phone_mobile.sendKeys(_mobilephone);
    }

    public void enterAliasAddres(String _mobilephone) {
        addressAlias.sendKeys(_mobilephone);
    }

    public void clickToRegister() {
        //WebDriverWait waitUntilFilterIsApplied = new WebDriverWait(driver, 10);
        //waitUntilFilterIsApplied.until(ExpectedConditions.invisibilityOf(errorMessage));
        submitRegisterCta.click();
    }

}
