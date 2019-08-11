package simplilearn.com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ControllerCategory {
    private WebDriver driver;

    @FindBy(css = ".clearfix")
    public WebElement popupProducSelected;

    public ControllerCategory(WebDriver _driver) {
        this.driver = _driver;
        PageFactory.initElements(_driver,this);
    }

}
