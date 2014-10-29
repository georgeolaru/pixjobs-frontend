(function ($, undefined) {

    var $button         = $('.apply-modal'),
        duration        = 900,
        newText         = navigator.appVersion.indexOf("Mac") != -1 ? 'Alt + CMD + U ?' : 'Ctrl + U ?',
        isTouchDevice   = 'ontouchstart' in document.documentElement;

    function stopEvent(ev) {
        ev.preventDefault();
        ev.stopPropagation();
    }

    if (isTouchDevice) {
        return;
    }

    $button.click(stopEvent);
    $button.one('click', firstClick);

    function firstClick() {
        $button.addClass('apply-modal--loading');
        setTimeout(function () {
            $button.removeClass('apply-modal--loading');
            $button.one('click', secondClick);
        }, duration);
    }

    function secondClick() {
        $button.addClass('apply-modal--loading');
        setTimeout(function () {
            $button.text(newText);
        }, duration);
    }
})(jQuery);
