$(document).ready(function() {
    $('#taskForm').submit(function(event) {
        event.preventDefault();

        let taskText = $('#taskInput').val();
        if (taskText) {
            let li = $('<li></li>').text(taskText);
            $('#taskList').append(li);

            $('#taskInput').val('');
        }
    });

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});