$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/my_first.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "      As a user I should able to login into my app",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "I login with valid credential",
  "description": "",
  "id": "login;i-login-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to \"http://the-internet.herokuapp.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter \"tomsmith\" into input field having id \"username\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"SuperSecretPassword!\" into input field having id \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on element having class \"radius\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should get logged-in",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I close browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://the-internet.herokuapp.com/login",
      "offset": 15
    }
  ],
  "location": "PredefinedStepDefinitions.navigate_to(String)"
});
formatter.result({
  "duration": 11920151352,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 9
    },
    {
      "val": "id",
      "offset": 43
    },
    {
      "val": "username",
      "offset": 47
    }
  ],
  "location": "PredefinedStepDefinitions.enter_text(String,String,String)"
});
formatter.result({
  "duration": 146029599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SuperSecretPassword!",
      "offset": 9
    },
    {
      "val": "id",
      "offset": 55
    },
    {
      "val": "password",
      "offset": 59
    }
  ],
  "location": "PredefinedStepDefinitions.enter_text(String,String,String)"
});
formatter.result({
  "duration": 196810337,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "class",
      "offset": 26
    },
    {
      "val": "radius",
      "offset": 33
    }
  ],
  "location": "PredefinedStepDefinitions.click(String,String)"
});
formatter.result({
  "duration": 3286777554,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "PredefinedStepDefinitions.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "Close browser",
  "description": "",
  "id": "login;close-browser",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I navigate to \"http://the-internet.herokuapp.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I close browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://the-internet.herokuapp.com/login",
      "offset": 15
    }
  ],
  "location": "PredefinedStepDefinitions.navigate_to(String)"
});
formatter.result({
  "duration": 1850349477,
  "status": "passed"
});
formatter.match({
  "location": "PredefinedStepDefinitions.close_browser()"
});
formatter.result({
  "duration": 188021000,
  "status": "passed"
});
});