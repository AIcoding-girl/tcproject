$('.admin-date').html(currentDate());

$('#user-message').keypress(function (event) {
    var usernameInput = $('#username-input').val();
    var dateSent = todaysDate();
    var messageText = $(this).val();
    if (event.keyCode == 13) {

        var newParagraph = $('<p>')
        $('#user-message-sent').append(newParagraph);
        $('#user-message-sent').append(usernameInput + " " + dateSent + '<p>' + messageText + '</p>');

        $('#username-input').val('');
        $(this).val('');
    }
    function todaysDate() {
        var newDate = new Date();
        var currentTime = newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds();
        var currentDate = newDate.toLocaleDateString('en-GB');
        return currentDate + " " + currentTime;
    }

    $(this).val();
});

function currentDate() {
    var newDate = new Date();
    var todayDate = newDate.toLocaleDateString('en-GB');
    return todayDate;
}