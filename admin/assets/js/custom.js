function GetprofileData() {
    // Call Web API to get a list of Product
    console.log(localStorage.getItem("admin_uuid"), 'hfbg');
    let user = {
        "uuid": "79d354eb-b8ab-4c49-b745-d80c1dd07bc4"
    }

    $.ajax({
        url: 'http://127.0.0.1:8000/admin_profile/79d354eb-b8ab-4c49-b745-d80c1dd07bc4/',
        type: 'GET',
        contentType: "application/json;charset=utf-8",
        crossDomain: true,
        success: function (data) {
            console.log(data);
            $('#profile_image').attr('src', "http://127.0.0.1:8000" + data.data.profile_image);
            $('.headerImage').attr('src', "http://127.0.0.1:8000" + data.data.profile_image)
            $('#HeaderuserName').html(data.data.username);
            $("#email").val(data.data.email);
            $("#name").val(data.data.username);
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
}


$(document).ready(function () {
    GetprofileData();
});

// update Profile 

let profileData = {
    id: 0,
    username: "",
}

function handleException(request, message, error) {
    var msg = "";
    msg += "Code: " + request.status + "\n";
    msg += "Text: " + request.statusText + "\n";
    if (request.responseJSON != null) {
        msg += "Message" + request.responseJSON.Message + "\n";
    }
    alert(msg);
}



function logout() {
    localStorage.removeItem("admin_uuid");
    window.location.href = "../login.html";
}
$(document).ready(function () {
    if (!localStorage.getItem("admin_uuid")) {
        window.location.href = "../login.html";
    }
}); 