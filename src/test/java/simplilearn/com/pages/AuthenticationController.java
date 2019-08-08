package simplilearn.com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AuthenticationController {

    private WebDriver driver;

    @FindBy(css = ".form-group #email_create")
    public WebElement emailToShowRegister;

    @FindBy(css = ".submit #SubmitCreate")
    public WebElement registerUserCta;

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
}
