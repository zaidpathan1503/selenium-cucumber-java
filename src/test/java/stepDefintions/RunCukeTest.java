package stepDefintions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = { "html:target/cucumberHtmlReport" },
		// pretty:target/cucumber-json-report.json
		features = "classpath:features/my_first.feature", glue = { "info.seleniumcucumber.stepdefinitions" })

public class RunCukeTest {
}
