package simplilearn.com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import java.util.ArrayList;
import java.util.List;

public class SearchController {

    private WebDriver driver;

    @FindBy(css = ".product-container a.product-name")
    public List<WebElement> productList;

    @FindBy(css = ".heading-counter")
    public WebElement messageNumberOfResults;

    @FindBy(css = "p.alert-warning")
    public WebElement alertNoResults;

    @FindBy(css = "select[name='manufacturer_list']")
    public WebElement manufaturerOption;

    @FindBy(css = "h1.page-heading")
    public WebElement manufacturerHeading;

    @FindBy(id = "search_query_top")
    public WebElement searchField;

    public void selectManufacturer(String _manufacturerFilter){
        Select manufacturer;
        manufacturer = new Select(manufaturerOption);
        manufacturer.selectByValue(_manufacturerFilter);
    }

    public SearchController(WebDriver _driver) {
        this.driver = driver;
        PageFactory.initElements(_driver, this);
    }

    public boolean validateProductsMatched(String _filter) {
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

    public boolean getNumberOfResults(){
        int numberOfResults = Integer.parseInt(messageNumberOfResults.getText().split(" ")[0]);
        int numberProductsGrid = productList.size();
        if(numberOfResults == numberProductsGrid){
            return true;
        }
        else{
            return false;
        }
    }

    public void getResultsFiltered(String _category){
        searchField.sendKeys(_category);

    }
}
