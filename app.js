angular.module('ContactApp', [])
.service('contactService' , function() {
  var self = this

  self.contacts = [
    { title: 'ข้าวกระเพราผัดกะหรี่เป็ดใส่ไข่ดาวไม่สุก พิเศษ โต๊ะ 9'},
    { title: 'ฮันนี่โทส, วัฟเฟิลช็อคโกแลตกล้วย, โกโก้ปั่น, ช็อคลาวา, น้ำเปล่า'},
    { title: 'ส้มตำปูปลาร้า, หมูน้ำตก, ลาบหมู, ต้มกระดูกอ่อน, ข้าวเหนียว, ขนมจีน '}
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
    if($scope.title != '' && $scope.title != null){
    var contact = {
      title: $scope.title
    }
    contact.title = $scope.title;
    contactService.add(contact);
    resetForm();
    }
    else{
      resetForm()
    }
  }
    function resetForm(){
      $scope.title = '';
    }
});
