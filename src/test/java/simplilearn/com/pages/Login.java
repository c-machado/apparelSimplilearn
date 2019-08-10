package simplilearn.com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Login {

    private WebDriver driver;

    @FindBy(id = "email")
    public WebElement email;

    @FindBy(id = "passwd")
    public WebElement password;

    @FindBy(id = "SubmitLogin")
    public WebElement loginCta;

    public Login(WebDriver _driver) {
        this.driver = driver;
        PageFactory.initElements(_driver,this);
    }

    public void enterUserName(String _userName) {
        email.sendKeys(_userName);
    }

    public void enterPassword(String _passWord) {
        password.sendKeys(_passWord);
    }

    public void clickToLogin() {
        loginCta.click();
    }



}
