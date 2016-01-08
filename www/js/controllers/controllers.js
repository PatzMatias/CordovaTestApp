'use strict';

// $(function(){

  var contactsList = [];
  var contactsDummy = [
        { "name": "Patrick", "number": "123"  },
        { "name": "Norman", "number": "456" },
        { "name": "Bal Inquiry", "number": "222" }
      ];

  angular.module('App.Controllers', [])
    .controller('MainCtrl', ['$scope', function($scope) {
        $scope.title = "Home";
        
        if(contactsList.length === 0) {
          getContacts();
        }

    }])
  	.controller('MessageSendCtrl', ['$scope', function($scope) {
    	$scope.title = "Write Message";
  	}])

  	.controller('ContactsCtrl', ['$scope', function($scope) {
    	$scope.title = "Contacts";
      $scope.contacts = contactsList;

  	}]);

function getContacts(){
    if(typeof ContactFindOptions == 'function') {
        var options = new ContactFindOptions();
        options.multiple = true;
        options.filter = "";
        var fields = ["displayName", "name", "phoneNumbers"];

            navigator.contacts.find(
              fields,
              function(contacts) { //On Success

                    var arr = [];
                    for (var i = 0; i < contacts.length; i++) {
                      var contactName = contacts[i].name.formatted;
                      var numbers = contacts[i].phoneNumbers;
                      var contactNumber = contacts[i].phoneNumbers[0].value;

                      if(contactName && numbers)
                        arr.push({ "name": contactName, "number": contactNumber});

                    }
                    sorting(arr, 'name');
                    contactsList = arr;

              },

              function(error) {
                alert(error);
                sorting( contactsDummy, 'name');
                contactsList = contactsDummy;
              },

              options
            );
    } else {
      console.log("ContactFindOptions() not found.");
      sorting( contactsDummy, 'name');
      contactsList = contactsDummy;

    }

}

function sorting(json_object, key_to_sort_by) {
    function sortByKey(a, b) {
        var x = a[key_to_sort_by];
        var y = b[key_to_sort_by];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    }
    json_object.sort(sortByKey);
}