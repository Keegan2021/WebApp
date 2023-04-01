$(document).ready(function() {
    console.log("Dropdown script loaded"); // Add this line
    $('.nav_dropdown-toggle').click(function() {
        $('.nav_dropdown-menu').toggle();
    });

    $('.nav_dropdown-item').click(function() {
        var mode = $(this).data('mode');
        $.ajax({
            type: 'POST',
            url: '/set_mode',
            data: {'mode': mode},
            success: function() {
                location.reload(); // Refresh the page to apply the new mode
            }
        });
        $('.nav_dropdown-menu').toggle();
    });
});
