package simplilearn.com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Login {

    //http://automationpractice.com/index.php?controller=my-account
    @FindBy(id = "#email")
    public WebElement email;

    @FindBy(id = "#passwd")
    public WebElement password;

    @FindBy(id = "#SubmitLogin")
    public WebElement loginCta;

}
