package runner.chantest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "feature", glue = "com.stepdefinitions.helloworld", dryRun=false, monochrome=true,
		plugin= {"pretty","json:jsonresults/cucumber_json.json","html:html-reports/htmlcucumber_.html"})
public class RunnerClass {

}
