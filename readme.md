* angular-directive-testing

**  author
 - sre, 13 Jul, 2013

** How to test a directive in anjularjs.

*** State
- Test a directive
- The directive is registered to a 'controller:'
- The controller contains complex business logic that is NOT to be tested. (ie. http request, user logic)
- The directive performs dom manipulation that is to be tested.


*** Issues.
- How do you stub/override the controller in a directive during testing.
