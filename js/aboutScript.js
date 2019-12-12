// $(function () {
//     $("#tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
//     $("#tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");
// });

// $('.tabs-header a').click(function (event) {
//     event.preventDefault();
//     $('.tabs-header a').removeClass('active') // to remove 'active' class from default ('active') tab
//     $(this).addClass('active'); // to add 'active' class on clicked tab

//     // to change class also for tabs-body elements; to link them together with tabs-head clicked element

//     // in HTML, tab-body elements get IDs, and also tabs-head elements (data-) related to those IDs, for example, data-tab="tab-1"
//     var tabId = $(this).attr('data-tab');
//     // console.log(tabId)
//     $('.tab').removeClass('active'); // after clicking on certain tabs-head element, all elements of tabs-body disappear
//     $('#' + tabId).addClass('active')
// })