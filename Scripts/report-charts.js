
//CAPITAL SOCIAL

    //COMPARATIVOS

        //ULTIMAS 24H
        jq('#comparativo-a').highcharts({

            chart: {
                backgroundColor: 'transparent',
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false,
                height: 210
            },

            title: {
                text: 'capital social - últimas 24h'
            },

            pane: {
                startAngle: -90,
                endAngle: 90,
            },

            // the value axis
            yAxis: {
                min: 0,
                max: 10,

                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: 'inside',
                minorTickColor: '#666',
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                marginTop: 0,
                spacingTop: 0,
                spacingBottom: 0,

                tickInterval: 5,
                tickWidth: 2,
                tickPosition: 'inside',
                tickLength: 10,
                tickColor: '#666',
                labels: {
                    step: 1,
                    rotation: 'auto'
                },
                plotBands: [{
                    from: 0,
                    to: 3,
                    color: '#C0392B' // good
                }, {
                    from: 3,
                    to: 7,
                    color: '#2980B9' // neutral
                }, {
                    from: 7,
                    to: 10,
                    color: '#27AE60' // bad
                }]
            },

            series: [{
                name: 'cs',
                data: [7.5]
            }]

        });

        //ULTIMOS 7 DIAS
        jq('#comparativo-b').highcharts({

            chart: {
                backgroundColor: 'transparent',
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false,
                height: 180,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                marginTop: 0,
                spacingTop: 0,
                spacingBottom: 0
            },

            title: {
                text: 'capital social - últimos 7 dias'
            },

            pane: {
                startAngle: -90,
                endAngle: 90,
            },

            // the value axis
            yAxis: {
                min: 0,
                max: 10,

                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: 'inside',
                minorTickColor: '#666',

                tickInterval: 5,
                tickWidth: 2,
                tickPosition: 'inside',
                tickLength: 10,
                tickColor: '#666',
                plotBands: [{
                    from: 0,
                    to: 3,
                    color: '#C0392B' // good
                }, {
                    from: 3,
                    to: 7,
                    color: '#2980B9' // neutral
                }, {
                    from: 7,
                    to: 10,
                    color: '#27AE60' // bad
                }]
            },

            series: [{
                name: 'cs',
                data: [2.5],
            }]

        });

        //ULTIMOS 30 DIAS
        jq('#comparativo-c').highcharts({

            chart: {
                backgroundColor: 'transparent',
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false,
                height: 180,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                marginTop: 0,
                spacingTop: 0,
                spacingBottom: 0
            },

            title: {
                text: 'capital social - últimos 7 dias'
            },

            pane: {
                startAngle: -90,
                endAngle: 90,
            },

            // the value axis
            yAxis: {
                min: 0,
                max: 10,

                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: 'inside',
                minorTickColor: '#666',

                tickInterval: 5,
                tickWidth: 2,
                tickPosition: 'inside',
                tickLength: 10,
                tickColor: '#666',
                plotBands: [{
                    from: 0,
                    to: 3,
                    color: '#C0392B' // good
                }, {
                    from: 3,
                    to: 7,
                    color: '#2980B9' // neutral
                }, {
                    from: 7,
                    to: 10,
                    color: '#27AE60' // bad
                }]
            },

            series: [{
                name: 'cs',
                data: [2.5],
            }]

        });


        //CAPITAL SOCIAL Y
        jq('#comparativo-d').highcharts({

            chart: {
                backgroundColor: 'transparent',
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false,
                height: 180,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                marginTop: 0,
                spacingTop: 0,
                spacingBottom: 0
            },

            title: {
                text: 'capital social - últimos 7 dias'
            },

            pane: {
                startAngle: -90,
                endAngle: 90,
            },

            // the value axis
            yAxis: {
                min: 0,
                max: 10,

                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: 'inside',
                minorTickColor: '#666',

                tickInterval: 5,
                tickWidth: 2,
                tickPosition: 'inside',
                tickLength: 10,
                tickColor: '#666',
                plotBands: [{
                    from: 0,
                    to: 3,
                    color: '#C0392B' // good
                }, {
                    from: 3,
                    to: 7,
                    color: '#2980B9' // neutral
                }, {
                    from: 7,
                    to: 10,
                    color: '#27AE60' // bad
                }]
            },

            series: [{
                name: 'cs',
                data: [2.5],
            }]

        });
