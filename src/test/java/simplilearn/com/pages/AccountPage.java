package simplilearn.com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AccountPage {

    @FindBy(css = ".info-account")
    public WebElement confirmationMsg;


}
