Feature: Product Interactions

  Scenario Outline: User adds a product to the cart from the product catalogue page
    Given the user navigates to the home page
    And the user searches for "<productName>"
    When the user adds the product "<productName>" to the cart
    And the user clicks cart button
    Then the product "<productName>" should be in the cart

    Examples:
      | productName         |
      | Fusion Backpack     |
      | Affirm Water Bottle |
