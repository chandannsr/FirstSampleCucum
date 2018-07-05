package com.stepdefinitions.helloworld;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
	@Given("^I Install Eclipse$")
	public void i_Install_Eclipse() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("Eclipse installed");
	}

	@Given("^I Logged in to eclipse$")
	public void i_Logged_in_to_eclipse() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("I logged into Eclipse");
	}

	@When("^I Write program to print hello world$")
	public void i_Write_program_to_print_hello_world() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	 System.out.println("I Write program to print hello world");
	}

	@Then("^I Verify hello world is print$")
	public void i_Verify_hello_world_is_print() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("I verified");
	}


}
