package steps

import cucumber.api.PendingException


this.metaClass.mixin(cucumber.api.groovy.Hooks)
this.metaClass.mixin(cucumber.api.groovy.EN)

Given(~/^I am at "([^"]*)" page$/) { String arg1 ->
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException()
}