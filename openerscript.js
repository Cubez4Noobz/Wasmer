var username = prompt("Enter the username:");
if (username == "isawnothing") {
    var password = prompt("Enter the password:");
    if (password == "1234567890987654321") {
        window.location.href = "home.html";
    }
}
else {
    alert("Incorrect username or password, page now closing.");
    window.close();
}