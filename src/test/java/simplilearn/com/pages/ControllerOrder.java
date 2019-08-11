package simplilearn.com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ControllerOrder {

    private WebDriver driver;

    @FindBy(css = "a.standard-checkout")
    public WebElement placeOrderSummaryCta;

    @FindBy(css = "button[name='processAddress']")
    public WebElement placeOrderAddressCta;

    @FindBy(css = "button[name='processCarrier']")
    public WebElement placeOrderShippingCta;

    @FindBy(css = "input[type='checkbox']")
    public WebElement termsAndConditions;

    @FindBy(css = ".cheque")
    public WebElement paymentMethod;

    @FindBy(css = "button[type='submit']")
    public WebElement confirmOrderCta;

    @FindBy(css = ".alert-success")
    public WebElement confirmationAlert;

    public ControllerOrder(WebDriver _driver) {
        this.driver = _driver;
        PageFactory.initElements(_driver,this);
    }

    public void clickToConfirmSummaryOrder(){
        placeOrderSummaryCta.click();
    }

    public void clickToConfirmAddressOrder(){
        placeOrderAddressCta.click();
    }

    public void clickToConfirmShippingOrder(){
        placeOrderShippingCta.click();
    }

    public void clickTermsAndConditions(){
        termsAndConditions.click();
    }

    public void clickPaymentMethod(){
        paymentMethod.click();
    }

    public void clickToConfirmOrder(){
        confirmOrderCta.click();
    }

}
