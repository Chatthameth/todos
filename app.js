angular.module('ContactApp', [])
.service('contactService' , function() {
  var self = this

  self.contacts = [
    { title: 'เดินไปจ่ายตลาดที่หนองมน'},
    { title: 'คือว่าเรากินส้มตำปูปลาร้าไม่เป็นอะค่ะ'},
    { title: 'ไม่ได้ตอแหลแค่ดัดจริตเฉยๆ'}
  ]

  self.list = function () {
    return self.contacts
  }

  self.add = function (contact) {
    self.contacts.push(contact)
  }
})

.controller('ListContactController',function($scope , contactService ){
$scope.newContact = {
  title: ''
}
$scope.contacts = contactService.list()
})

.controller('AddContactController' , function($scope , contactService){
  $scope.save = function(){
    var contact = {
      title: $scope.title }

    contact.title = $scope.title;

    contactService.add(contact);
    resetForm();


  }

    function resetForm(){
      $scope.title = '';

    }

});
