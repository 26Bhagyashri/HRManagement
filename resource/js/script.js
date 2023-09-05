var API_ENDPOINT = "https://a3gl8jr0q7.execute-api.eu-north-1.amazonaws.com/HRM/";

// AJAX POST REQUEST
// document.getElementById("send").onclick = function(){
  function function1(){
  var inputData = {
    "email": $('#email2').val(),
    "empFirstName": $('#firstName').val(),
    "empLastName": $('#lastName').val(),
    "empDepartment": $('#department').val(),
    "empDesignation": $('#designation').val(),
    "empNumber": $('#number').val(),
    "empUrl": $('#website').val(),
    "empOccupation": $('#occupation').val(),
    "empPassword": $('#password').val(),
    "empRpassword": $('#password2').val(),
    "empTelephone": $('#telephone').val(),
    "empDetail": $('#textarea').val(),
  };
  
  $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data:  JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
          document.getElementById("send").innerHTML = "Profile Saved!";
        },
        error: function () {
            alert("error");
        }
    });
}

// AJAX GET REQUEST
document.getElementById("refresh").onclick = function(){  
  $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
          $('#employeeProfile tr').slice(1).remove();
          jQuery.each(response, function(i,data) {          
            $("#employeeProfile").append("<tr> \
                <td>" + data['email'] + "</td> \
                <td>" + data['empFirstName'] + "</td> \
                <td>" + data['empLastName'] + "</td> \
                <td>" + data['empDepartment'] + "</td> \
                <td>" + data['empDesignation'] + "</td> \
                <td>" + data['empNumber'] + "</td> \
                <td>" + data['empUrl'] + "</td> \
                <td>" + data['empOccupation'] + "</td> \
                <td>" + data['empPassword'] + "</td> \
                <td>" + data['empRpassword'] + "</td> \
                <td>" + data['empTelephone'] + "</td> \
                <td>" + data['empDetail'] + "</td> \
                </tr>");
          });
        },
        error: function () {
            alert("error");
        }
    });
}
