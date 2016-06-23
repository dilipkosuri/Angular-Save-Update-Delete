'use strict';

function MainController($scope, SharedService, ngDialog) {

  $scope.account_type_selected = "Savings";
  $scope.sharedService = SharedService;
  $scope.savingsMain = [];
  $scope.checkingsMain = [];
  $scope.addToCheckingsAccounts = {};
  $scope.addToSavingsAccounts = {};


  $scope.setAccountType = function (type) {
    if (type === "allAccounts") {
      $scope.showSavings = true;
      $scope.showCheckings = true;
    } else if (type === "savingsAccounts") {
      $scope.showSavings = true;
      $scope.showCheckings = false;
    } else if (type === "checkingAccounts") {
      $scope.showSavings = false;
      $scope.showCheckings = true;
    }
    $scope.account_type_selected = type;
  };

  $scope.$watch('savingsMain', function ($scope) {
    return $scope.savingsMain;
  });

  $scope.selectedAccountType = function (showAccount) {
    console.log(showAccount);
    if (showAccount === "Savings") {
      $scope.sharedService.accountType = "Savings";
    } else {
      $scope.sharedService.accountType = "Checkings";
    }
  };


  $scope.saveAccounts = function () {
    if ($scope.sharedService.accountType === "Savings") {
      $scope.addToSavingsAccounts = {
        "account_type": $scope.sharedService.accountType,
        "amount": $scope.sharedService.amount,
        "date": $scope.sharedService.date,
        "maturity": $scope.sharedService.maturity
      };
      $scope.showSavings = true;

      $scope.savingsMain.push($scope.addToSavingsAccounts);
    } else {
      $scope.addToCheckingsAccounts = {
        "account_type": $scope.sharedService.accountType,
        "amount": $scope.sharedService.amount,
        "bic": $scope.sharedService.BIC,
        "iban": $scope.sharedService.IBAN
      };
      $scope.showCheckings = true;
      $scope.checkingsMain.push($scope.addToCheckingsAccounts);

    }
    ngDialog.close();

  };

  $scope.deleteDataFromSharedService = function (accountType, item) {
    if (accountType === "Savings") {
      $scope.savingsMain = _.without($scope.savingsMain, _.findWhere($scope.savingsMain, { date: item }));
    } else if (accountType === "Checkings") {
      $scope.checkingsMain = _.without($scope.checkingsMain, _.findWhere($scope.checkingsMain, { bic: item }));
    }
  };

  $scope.closeDialog = function () {
    ngDialog.close();
  };

  $scope.accountTypeModel = [];


  $scope.prop = {
    "type": "select",
    "name": "account_type",
    "value": $scope.sharedService.accountType,
    "accountTypeData": ["Savings", "Checkings"]
  };

}