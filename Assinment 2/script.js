$(document).ready(function() {

    $('.filter-controls button').on('click', function() {

        let filterValue = $(this).attr('data-filter');

        if (filterValue === 'all') {
            $('.cs-card-group .cs-item').show(400);
        } else {

            $('.cs-card-group .cs-item').not('.' + filterValue).hide(400);
            
            $('.cs-card-group .cs-item').filter('.' + filterValue).show(400);
        }


        $('.filter-controls button').removeClass('active');
        $(this).addClass('active');
    });


});
