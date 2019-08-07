package simplilearn.com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Register {

    @FindBy(id = "#email_create")
    public WebElement emailToShowRegister;

    @FindBy(id = "#SubmitCreate")
    public WebElement registerUserCta;

    @FindBy(id = "#id_gender1")
    public WebElement maleGender;

    @FindBy(id = "#id_gender2")
    public WebElement femaleGender;

    @FindBy(id = "#customer_firstname")
    public WebElement firstName;

    @FindBy(id = "#customer_lastname")
    public WebElement lastName;

    @FindBy(id = "#email")
    public WebElement email;

    @FindBy(id = "#passwd")
    public WebElement password;

    @FindBy(id = "#days")
    public WebElement daysOfBirthday;

    @FindBy(id = "#months")
    public WebElement monthOfBirthday;

    @FindBy(id = "#years")
    public WebElement yearOfBirthday;

    @FindBy(id = "#newsletter")
    public WebElement newsletterCheckbox;

    @FindBy(id = "#optin")
    public WebElement specialOffersCheckbox;

    @FindBy(id = "#firstname")
    public WebElement firstNameAdress;

    @FindBy(id = "#lastname")
    public WebElement lastNameAdress;

    @FindBy(id = "#company")
    public WebElement company;

    @FindBy(id = "#address1")
    public WebElement address1;

    @FindBy(id = "#address2")
    public WebElement address2;

    @FindBy(id = "#city")
    public WebElement city;

    @FindBy(id = "#id_state")
    public WebElement idState;

    @FindBy(id = "#postcode")
    public WebElement postcode;

    @FindBy(id = "#id_country")
    public WebElement idCountry;

    @FindBy(id = "#other")
    public WebElement additionalInfox;

    @FindBy(id = "#phone")
    public WebElement phone;

    @FindBy(id = "#phone_mobile")
    public WebElement phone_mobile;

    @FindBy(id = "#alias")
    public WebElement alias;

    @FindBy(id = "#submitAccount")
    public WebElement submitRegisterCta;






















}
