(function () {

    'use strict'

    new Vue({
        el: "#app",

        data: {
            data: []
        },

        methods: {
            onDone: function (data, status, xhr) {
                this.data = data
            },

            onFail: function (xhr, errorType, err) {
                // on fail...
            },
        },

        computed: {
            grouped_data: function () {
                let data = {}

                for (var i = this.data.length - 1; i >= 0; i--) {
                    let obj = this.data[i]

                    if (data[obj.County] === undefined) {
                        data[obj.County] = [obj]
                    }

                    data[obj.County].push(obj)
                }

                return data
            }
        },

        ready: function () {
            $.getJSON('AQX.json')
             .done(this.onDone)
             .fail(this.onFail)
        }
    })

})()
