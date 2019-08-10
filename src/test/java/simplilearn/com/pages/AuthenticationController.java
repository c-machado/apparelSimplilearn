package simplilearn.com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AuthenticationController {

    private WebDriver driver;

    @FindBy(id = "email_create")
    public WebElement emailToShowRegister;

    @FindBy(css = ".SubmitCreate")
    public WebElement registerUserCta;

    @FindBy(css = ".logout")
    public WebElement logoutCta;


    public AuthenticationController(WebDriver _driver) {
        this.driver = _driver;
        PageFactory.initElements(_driver,this);
    }

    public void enterEmail(String _email) {
        emailToShowRegister.sendKeys(_email);
    }

    public void clickCreateAccountButton() {
        registerUserCta.click();
    }

    public void clickToLogout() {
        logoutCta.click();
    }
}
