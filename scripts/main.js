(function () {

    'use strict'

    window.app = new Vue({
        el: "#app",

        data: {
            data: [],
            selectedCountryName: null,
            selectedSiteName: null,
            sites: [],
            modalOpened: false,
        },

        methods: {
            onDone: function (data, status, xhr) {
                this.data = data
            },

            onFail: function (xhr, errorType, err) {
                // on fail...
            },

            onSelectCountry: function () {
                this.sites = this.grouped_data[this.selectedCountryName].map(function (data) {
                    return { text: data.SiteName, value: data.SiteName }
                })
                this.selectedSiteName = this.sites[0].text
            },

            reset: function () {
                this.selectedSiteName = null
            },

            openModal: function () {
                this.modalOpened = true
            },

            closeModal: function () {
                this.modalOpened = false
            },
        },

        computed: {
            countries: function () {
                return Object.keys(this.grouped_data).map(function (data) {
                    return { text: data, value: data }
                })
            },

            grouped_data: function () {
                let data = {}
                for (var i = this.data.length - 1; i >= 0; i--) {
                    let obj = this.data[i]
                    if (data[obj.County] === undefined) {
                        data[obj.County] = [obj]
                    } else {
                        data[obj.County].push(obj)
                    }
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
