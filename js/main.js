
/*
*       Website YAP Mwerchandise
*       Designed by Risalah Family
*       (+62) 823-2241-7953
*/

$(document).ready( function()
{
    // Load default page
    loadPage("beranda.html");

    // Remove event action on anchor
    $("a").click( function(event)
    {
        event.preventDefault();
    });
    // Remove menu
    $(".right-menu").click( function()
    {
        removeMenu();
    });

    // Burger menu listener
    $(".burger").click(function()
    {
        loadMenu();
    });
    // #root listener
    $("#root").click(function()
    {
        removeMenu();
    });

    $(".goto-top").click( function()
    {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        $(".goto-top").removeClass("goto-top-active");
    });

    // Scroll event
    var winH = $(window).height();
    $(window).on("scroll", function()
    {
        if($(window).scrollTop() >= winH + 200)
        {
            $(".order-btn").addClass("order-btn-active");
        }
        else {
            $(".order-btn").removeClass("order-btn-active");
        }

        if($(window).scrollTop() === 0)
        {            
            $(".goto-top").removeClass("goto-top-active");
        }
        if($(this).scrollTop() >= $(document).height() - winH)
        {
            $(".goto-top").addClass("goto-top-active");
        }
        else {
            $(".goto-top").removeClass("goto-top-active");
        }
    });
});

function loadPage(file)
{
    removeMenu();
    loadAnim();

    $.ajax({
        url: `./pages/${file}`,
        method: "GET",
        cache: false,
        success: function(res)
        {
            removeAnim();
            
            $("#root").html(res);
            $("html, body").scrollTop(0);
        }
    });
}
function loadMenu()
{    
    $(".bgr-1").toggleClass("bgr-1-active");
    $(".bgr-2").toggleClass("bgr-2-active");
    $(".bgr-3").toggleClass("bgr-3-active");
    $(".right-menu").toggleClass("right-menu-active");
    $("nav h1, nav a, #root, footer").toggleClass("menu-active");
    return;
}
function removeMenu()
{    
    $(".bgr-1").removeClass("bgr-1-active");
    $(".bgr-2").removeClass("bgr-2-active");
    $(".bgr-3").removeClass("bgr-3-active");
    $(".right-menu").removeClass("right-menu-active");
    $("nav h1, nav a, #root, footer").removeClass("menu-active");
    return;
}
function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'), 
        sParameterName, i;
    
    for (i = 0; i < sURLVariables.length; i++)
    {
        sParameterName = sURLVariables[i].split('=');
    
        if (sParameterName[0] === sParam)
        {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}
function getOrder( order )
{
    $.ajax({
        url: `./img/kategori/${order}.html`,
        method: "GET",
        cache: false,
        success: function(res)
        {
            $(".by-order").html(res);
        }
    });
}
function loadAnim()
{
    $(".loading").addClass("loading-active");
}
function removeAnim()
{
    $(".loading").removeClass("loading-active");
}