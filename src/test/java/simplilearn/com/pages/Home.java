import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Home {

@FindBy(id = "#search_query_top")
public WebElement searchTextField;

@FindBy(css = "#searchbox button[type='submit']")
public WebElement searchButton;


}
