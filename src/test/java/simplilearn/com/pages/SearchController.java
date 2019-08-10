package simplilearn.com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import java.util.ArrayList;
import java.util.List;

public class SearchController {

    private WebDriver driver;

    @FindBy(css = ".product-container a.product-name")
    public List<WebElement> productList;

    public SearchController(WebDriver _driver) {
        this.driver = driver;
        PageFactory.initElements(_driver, this);
    }

    public boolean printResultList(String _filter) {
        int flag = 0;
        for (WebElement productName : productList) {
            System.out.println(productName.getText());
            if(productName.getText().contains(_filter)){
                flag++;
            }
        }
        if(flag>0)
            return false;
        else
            return true;
    }
}
