package simplilearn.com.steps;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import simplilearn.com.pages.ControllerCategory;
import simplilearn.com.pages.ControllerOrder;

import java.util.concurrent.TimeUnit;

import static simplilearn.com.utils.Base.browser;

public class Purchase {

    public ControllerCategory controllerCategory;
    public ControllerOrder controllerOrder;

    @Before
    public void setUp() {
        browser = new ChromeDriver();
        browser.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
    }

    @When("^I filter by \"([^\"]*)\"$")
    public void iFilterBy(String _category) {
        browser.findElement(By.cssSelector("#block_top_menu > ul > li > a[title='" + _category + "']")).click();
    }

    @And("^I add a product to the cart$")
    public void iAddAProductToTheCart() {
        WebElement firstProduct = browser.findElements(By.cssSelector(".product_img_link")).get(0);
        Actions actions = new Actions(browser);
        actions.moveToElement(firstProduct).perform();
        browser.findElement(By.cssSelector(".button.ajax_add_to_cart_button")).click();
       // browser.findElement(By.cssSelector(".btn [title='Proceed to checkout']")).click();
    }

    @And("^I should be able to place the order$")
    public void iShouldBeAbleToPlaceTheOrder() {
        controllerCategory = new ControllerCategory(browser);
        Actions actions = new Actions(browser);
        actions.moveToElement(controllerCategory.popupProducSelected).perform();
        browser.findElement(By.cssSelector(".clearfix .btn[title='Proceed to checkout']")).click();
    }

    @And("^I should be able to confirm the summary order$")
    public void iShouldBeAbleToConfirmTheSummaryOrder() {
        controllerOrder = new ControllerOrder(browser);
        controllerOrder.clickToConfirmSummaryOrder();
    }

    @And("^I should be able to confirm the address order$")
    public void iShouldBeAbleToConfirmTheAddressOrder() {
        //controllerOrder = new ControllerOrder(browser);
        controllerOrder.clickToConfirmAddressOrder();
    }

    @And("^I should be able to confirm the shipping order$")
    public void iShouldBeAbleToConfirmTheShippingOrder() {
        //controllerOrder = new ControllerOrder(browser);
        controllerOrder.clickTermsAndConditions();
        controllerOrder.clickToConfirmShippingOrder();
    }

    @And("^I should be able to confirm the payment method$")
    public void iShouldBeAbleToConfirmThePaymentMethod() {
        controllerOrder.clickPaymentMethod();
    }

    @Then("^I should be able to confirm the final order$")
    public void iShouldBeAbleToConfirmTheFinalOrder() {
        controllerOrder.clickToConfirmOrder();
    }
    @And("^I should see a notification message$")
    public void iShouldSeeANotificationMessage() {
        Assert.assertTrue(controllerOrder.confirmationAlert.isDisplayed());
    }
}
