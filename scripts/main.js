(function () {

    'use strict'

    $.getJSON('AQX.json')
     .done(onDone)
     .fail(onFail)


    function onDone(data, status, xhr) {
        debugger
    }

    function onFail(xhr, errorType, err) {
        debugger
    }

})()
