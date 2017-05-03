'use strict';

/**
 * This function handles opening new window on click on social share buttons
 */
function socialSharingPopup() {
    $('.js-socialsharing-link').click(function() {
        var url = $(this).attr('href'),
            title = 'Share Page',
            wLeft = window.screenLeft ? window.screenLeft : window.screenX,
            wTop = window.screenTop ? window.screenTop : window.screenY,
            w = 600,
            h = 600,
            left = wLeft + (window.innerWidth / 2) - (w / 2),
            top = wTop + (window.innerHeight / 2) - (h / 2);

        return window.open(url, title, ', width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
    });
}

function initializeEvents() {
    socialSharingPopup();
}

module.exports = {
    init: function () {
        initializeEvents();
    }
};
