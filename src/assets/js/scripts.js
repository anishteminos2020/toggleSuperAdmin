    (function($) {
    "use strict";

    // Add active state to sidbar nav links
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
        $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
            if (this.href === path) {
                $(this).addClass("active");
            }
        });

    // Add active state to sidbar nav links
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
        $("#layoutSidenav_nav .sb-sidenav .collapse ").each(function() {
            if (this.href === path) {
                $(this).addClass("active");
            }
        });    

    // Toggle the side navigation
    $("#sidebarToggle").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });
})(jQuery);

//-----Price Range slider-----

$(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 10,
      max: 300,
      values: [ 50, 100 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
});


//-----Data Range slider-----

$(function() {
    $( "#data-slider-range" ).slider({
      range: true,
      min: 10,
      max: 300,
      values: [ 50, 100 ],
      slide: function( event, ui ) {
        $( "#data-amount" ).val( ui.values[ 0 ] + " Gb -" + ui.values[ 1 ] +"  Gb" );
      }
    });
    $( "#data-amount" ).val( $( "#slider-range" ).slider( "values", 0 ) + " Gb -" +
       + $( "#slider-range" ).slider( "values", 1 )  + " Gb" );
});


/* Inventory - dependent form field local and romaing */
 
$(function(){
    $("#single-inventory #region-field-roaming").hide();

    $("#single-inventory input:radio[name=type]").change(function(){
        if($(this).attr("value") == "local") {
            $("#single-inventory #country-field-local").show();
            $("#single-inventory #region-field-roaming").hide();
        }
        if($(this).attr("value") == "roaming") {
            $("#single-inventory #country-field-local").hide();
            $("#single-inventory #region-field-roaming").show();
        }

    });
});


$(function(){
    $("#bulk-inventory #region-field-roaming").hide();
    $("a#roaming-template").hide();

    $("#bulk-inventory input:radio[name=type]").change(function(){
        if($(this).attr("value") == "local") {
            $("#bulk-inventory #country-field-local").show();
            $("#bulk-inventory #region-field-roaming").hide();
             $("#bulk-extra-col").show();
              $("a#local-template").show();
            $("a#roaming-template").hide();
        }
        if($(this).attr("value") == "roaming") {
            $("#bulk-inventory #country-field-local").show();
            $("#bulk-inventory #region-field-roaming").show();
            $("#bulk-extra-col").hide();
            $("a#local-template").hide();
            $("a#roaming-template").show();
        }

    });
});

/* Order Managemt - dependent form field local and romaing */
 
$(function(){
    $("#order-management #region-field-roaming").hide();

    $("#order-management input:radio[name=type]").change(function(){
        if($(this).attr("value") == "local") {
            $("#order-management #country-field-local").show();
            $("#order-management #region-field-roaming").hide();
        }
        if($(this).attr("value") == "roaming") {
            $("#order-management #country-field-local").hide();
            $("#order-management #region-field-roaming").show();
        }
    });
});

/* Create New Plan - dependent form field local and romaing */
 
$(function(){
    $("#create-plan #region-field-roaming").hide();

    $("#create-plan input:radio[name=type]").change(function(){
        if($(this).attr("value") == "local") {
            $("#create-plan #country-field-local").show();
            $("#create-plan #region-field-roaming").hide();
        }
        if($(this).attr("value") == "roaming") {
            $("#create-plan #country-field-local").hide();
            $("#create-plan #region-field-roaming").show();
        }
    });
});

 $(function () {
            $('#txtDate').datepicker({
                format: "dd-mm-yyyy"
            });
        }); 




$(document).ready(function() {
    $('#datatable').DataTable({
         "fixedHeader": true,
        "scrollY": true,
        "scrollX": true,

    });
     $("#filter-btn").click(function(){
        $("#dropdown-contentfilter").toggleClass("d-block");
    });
});

