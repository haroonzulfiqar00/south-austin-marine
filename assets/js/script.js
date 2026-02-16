// Navigation Bar Mobile Toggle
$(document).ready(function() {
    // Mobile menu toggle
    $('#navbarToggle').on('click', function() {
        $('#navbarMenu').toggleClass('active');
        $(this).toggleClass('active');
    });

    // Close mobile menu when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.navbar-seager').length) {
            $('#navbarMenu').removeClass('active');
            $('#navbarToggle').removeClass('active');
        }
    });

    // Close mobile menu when clicking on a menu item
    $('.navbar-menu a').on('click', function() {
        if ($(window).width() <= 991) {
            $('#navbarMenu').removeClass('active');
            $('#navbarToggle').removeClass('active');
        }
    });

    // ===================================
    // Inventory Mega Menu Functionality
    // ===================================
    
    // Toggle mega menu on click
    $('#inventoryMenuTrigger').on('click', function(e) {
        if ($(window).width() > 991) {
            e.preventDefault();
            $('#inventoryMegaMenu').toggleClass('active');
            $('#serviceMegaMenu').removeClass('active');
            $('#experiencesMegaMenu').removeClass('active');
            $('#locationDropdown').removeClass('active');
            $('#sideMegaMenu').removeClass('active');
            $('#moreMenuTrigger').removeClass('active');
        }
    });

    // Close mega menu when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#inventoryMenuTrigger').length && 
            !$(e.target).closest('#inventoryMegaMenu').length) {
            $('#inventoryMegaMenu').removeClass('active');
        }
    });

    // Close mega menu when pressing Escape key
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape') {
            $('#inventoryMegaMenu').removeClass('active');
            $('#serviceMegaMenu').removeClass('active');
            $('#experiencesMegaMenu').removeClass('active');
            $('#sideMegaMenu').removeClass('active');
            $('#moreMenuTrigger').removeClass('active');
        }
    });

    // Prevent mega menu from closing when clicking inside it
    $('#inventoryMegaMenu').on('click', function(e) {
        e.stopPropagation();
    });

    // ===================================
    // Service & Storage Mega Menu Functionality
    // ===================================
    
    // Toggle service mega menu on click
    $('#serviceMenuTrigger').on('click', function(e) {
        if ($(window).width() > 991) {
            e.preventDefault();
            $('#serviceMegaMenu').toggleClass('active');
            $('#inventoryMegaMenu').removeClass('active');
            $('#experiencesMegaMenu').removeClass('active');
            $('#locationDropdown').removeClass('active');
            $('#sideMegaMenu').removeClass('active');
            $('#moreMenuTrigger').removeClass('active');
        }
    });

    // Close service mega menu when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#serviceMenuTrigger').length && 
            !$(e.target).closest('#serviceMegaMenu').length) {
            $('#serviceMegaMenu').removeClass('active');
        }
    });

    // Prevent service mega menu from closing when clicking inside it
    $('#serviceMegaMenu').on('click', function(e) {
        e.stopPropagation();
    });

    // ===================================
    // Experiences Mega Menu Functionality
    // ===================================
    
    // Toggle experiences mega menu on click
    $('#experiencesMenuTrigger').on('click', function(e) {
        if ($(window).width() > 991) {
            e.preventDefault();
            $('#experiencesMegaMenu').toggleClass('active');
            $('#inventoryMegaMenu').removeClass('active');
            $('#serviceMegaMenu').removeClass('active');
            $('#locationDropdown').removeClass('active');
            $('#sideMegaMenu').removeClass('active');
            $('#moreMenuTrigger').removeClass('active');
        }
    });

     // Close experiences mega menu when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#experiencesMenuTrigger').length && 
            !$(e.target).closest('#experiencesMegaMenu').length) {
            $('#experiencesMegaMenu').removeClass('active');
        }
    });

    // Prevent experiences mega menu from closing when clicking inside it
    $('#experiencesMegaMenu').on('click', function(e) {
        e.stopPropagation();
    });

    // ===================================
    // Mobile Accordion Toggle
    // ===================================
    $('.mobile-toggle').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation(); // Prevent bubbling to li or a
        
        // Toggle the sub-menu
        $(this).closest('li').find('.mobile-sub-menu').slideToggle(300);
        
        // Toggle the icon rotation
        $(this).toggleClass('active');
    });

    // ===================================
    // Location Dropdown Functionality
    // ===================================

    // Toggle location dropdown
    $('#locationDropdownTrigger').on('click', function(e) {
        e.stopPropagation();
        
        // Close other menus if open
        $('#navbarMenu').removeClass('active'); // Close mobile menu
        $('#navbarToggle').removeClass('active');
        
        // Close mega menus
        $('#inventoryMegaMenu').removeClass('active');
        $('#serviceMegaMenu').removeClass('active');
        $('#experiencesMegaMenu').removeClass('active');
        $('#sideMegaMenu').removeClass('active');
        $('#moreMenuTrigger').removeClass('active');

        $('#locationDropdown').toggleClass('active');
    });

    // Handle location selection
    $('.location-item:not(.selected)').on('click', function() {
        var newLocation = $(this).data('name');
        // Update the header text
        $('#currentLocationName').text(newLocation);
        
        // Close dropdown
        $('#locationDropdown').removeClass('active');
    });
    
    // Close dropdown when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#locationDropdownTrigger').length && 
            !$(e.target).closest('#locationDropdown').length) {
            $('#locationDropdown').removeClass('active');
        }
    });

    // Prevent closing when clicking inside dropdown
    $('#locationDropdown').on('click', function(e) {
        e.stopPropagation();
    });

    // ===================================
    // Side Mega Menu (More Button) Functionality
    // ===================================

    // Toggle side mega menu on click
    $('#moreMenuTrigger').on('click', function(e) {
        e.stopPropagation();
        
        // Close other menus
        $('#navbarMenu').removeClass('active');
        $('#navbarToggle').removeClass('active');
        $('#inventoryMegaMenu').removeClass('active');
        $('#serviceMegaMenu').removeClass('active');
        $('#experiencesMegaMenu').removeClass('active');
        $('#locationDropdown').removeClass('active');
        
        // Toggle side menu and button active state
        $(this).toggleClass('active');
        $('#sideMegaMenu').toggleClass('active');
    });

    // Close side mega menu when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#moreMenuTrigger').length && 
            !$(e.target).closest('#sideMegaMenu').length) {
            $('#sideMegaMenu').removeClass('active');
            $('#moreMenuTrigger').removeClass('active');
        }
    });

    // Prevent closing when clicking inside side mega menu
    $('#sideMegaMenu').on('click', function(e) {
        e.stopPropagation();
    });

    // Close side menu when pressing Escape key
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape') {
            $('#sideMegaMenu').removeClass('active');
            $('#moreMenuTrigger').removeClass('active');
        }
    });
});
