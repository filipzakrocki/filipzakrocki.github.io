// Menu #topNav links

$('#logo').on('click', function() {
    $('.menus').addClass('inactive');
    $('#main').removeClass('inactive').addClass('active');
    $('.nav-link').removeClass('highlight-link');
    
});

$('#aboutLink').on('click', function() {
    $('.menus').addClass('inactive');
    $('#about').removeClass('inactive').addClass('active');
    $('.nav-link').removeClass('highlight-link');
    $(this).toggleClass('highlight-link');
});

$('#projectsLink').on('click', function() {
    $('.menus').addClass('inactive');
    $('#projects').removeClass('inactive').addClass('active');
    $('.nav-link').removeClass('highlight-link');
    $(this).toggleClass('highlight-link');
});

//$('#contactMeLink').on('click', function() {
//    $('.menus').addClass('inactive');
//    $('#contactMe').removeClass('inactive').addClass('active');
//    $('.nav-link').removeClass('highlight-link');
//    $(this).toggleClass('highlight-link');
//});