package simplilearn.com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Home {

    private WebDriver driver;

    @FindBy(id = "search_query_top")
    public WebElement searchTextField;

    @FindBy(css = "#searchbox button[type='submit']")
    public WebElement searchButton;

    @FindBy(css =".login")
    public WebElement signInCta;

    public Home(WebDriver _driver) {
        this.driver = _driver;
        PageFactory.initElements(_driver,this);
    }

    public void clickLoginButton() {
        signInCta.click();
    }

    public void enterSearchFilter(String _filter){
        searchTextField.sendKeys(_filter);
    }

    public void clickSearchButton() {
        searchButton.click();
    }


}
