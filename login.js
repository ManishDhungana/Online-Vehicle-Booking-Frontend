$(document).ready(function () {
  "use srict";

  var userAttr = $(".user").attr("placeholder"),  
      passAttr = $(".pass").attr("placeholder");

  // Remove User Placeholder On Foucs
  $(".user").on("focus", function () {
    $(this).attr("placeholder"," ");
    $(this).css({"text-align":"left"});
  });
  // Add User Placeholder On Blur
  $(".user").on("blur", function () {
    $(this).attr("placeholder",userAttr);
    $(this).css({"text-align":"center"});
  });

  // Remove Pass Placeholder On Foucs
  $(".pass").on("focus", function () {
    $(this).attr("placeholder"," ");
    $(this).css({"text-align":"left"});
  });
  
  // Add Pass Placeholder On Blur
  $(".pass").on("blur", function () {
    $(this).attr("placeholder",passAttr);
    $(this).css({"text-align":"center"});
  });
  
  // Check If User Input Empty Or Not
  $(".user").on("blur", function () {
    var  userVal = $(".user").val();
    
    // If User Input Empty Add Class Error & Remove Class Succses
    if (userVal === "") {
      $(".fa-user").animate({
        fontSize: '0' });
      $(".user").removeClass("succses");
      $(".user").addClass("error");
    } else {
      // If User Input Not Empty Add Class Succses & Remove Class Error
      $(".fa-user").animate({
        fontSize: '18px' });
      $(".user").removeClass("error");
      $(".user").addClass("succses");
    }
  });

  $(".pass").on("blur", function () {
    var  passVal = $(".pass").val();
    // If User Input Empty Add Class Error & Remove Class Succses
    if (passVal === "") {
      $(".fa-user").animate({
        fontSize: '0' });
      $(".pass").removeClass("succses");
      $(".pass").addClass("error");
    } else {
      // If User Input Not Empty Add Class Succses & Remove Class Error
      $(".fa-pass").animate({
        fontSize: '18px' });
      $(".pass").removeClass("error");
      $(".pass").addClass("succses");
    }
  });
});