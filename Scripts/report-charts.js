
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
    
    // VARIAÇÃO CAPITAL SOCIAL
    jq(function () {
        jq('#variacao-cs').highcharts({
            chart: {
                width: 705,
                height: 300,
                type: 'line'
            },
            title: {
                text: 'capital social: variação',
                x: -20 //center
            },
            xAxis: {
                categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
            },
            yAxis: {
                title: {
                    text: 'capital social'
                },
                plotLines: [{
                    value: 0,
                    width: 1
                }]
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            series: [{
                name: 'anhembi morumbi',
                data: [1, 3, 7, 7, 6, 4, 4, 4.5, 5, 5.6, 6, 6],
                color: '#609AA5'
            }]
        });
    });

    //PALAVRAS

        //PALAVRAS-CHAVE
        jq(function () {
            jq('#palavras-chave').highcharts({
                chart: {
                    width: 705,
                    height: 300
                },
                title: {
                    text: 'Palavras-chave'
                },
                xAxis: {
                    categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
                },
                yAxis: {
                    title: {
                        text: 'citações'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '°C'
                },
                series: [{
                    name: 'palavra1',
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                    color: '#34495E'
                }, {
                    name: 'palavra2',
                    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5],
                    color: '#F39C12'
                }, {
                    name: 'palavra3',
                    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0],
                    color: '#16A085'
                }, {
                    name: 'palavra5',
                    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
                    color: '#7A82CD'
                }]
            });
        });

        //SENTIMENTO POR PALAVRA CHAVE
        jq(function () {
            jq('#sentimento-por-palavras-chave').highcharts({
                chart: {
                    type: 'column',
                    width: 815,
                    height: 300
                },
                title: {
                    text: 'sentimento por palavra-chave'
                },
                xAxis: {
                    categories: ['palavra1', 'palavra2', 'palavra3', 'palavra4', 'palavra5']
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'citações'
                    },
                    stackLabels: {
                        enabled: true,
                        style: {
                            fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                        }
                    }
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.x + '</b><br/>' +
                            this.series.name + ': ' + this.y + '<br/>' +
                            'Total: ' + this.point.stackTotal;
                    }
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        dataLabels: {
                            enabled: true,
                            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                            style: {
                                textShadow: '0 0 3px black, 0 0 3px black'
                            }
                        }
                    }
                },
                series: [{
                    name: 'positivo',
                    data: [5, 3, 4, 7, 2],
                    color: '#27AE60' // good
                }, {
                    name: 'neutro',
                    data: [2, 2, 3, 2, 1],
                    color: '#2980B9' // neutral
                }, {
                    name: 'negativo',
                    data: [3, 4, 4, 2, 5],
                    color: '#C0392B' // bad
                }]
            });
        });

    
    //INDICADORES MEC

            // CAPITAL SOCIAL
            jq(function () {
                jq('#indicadores-cs').highcharts({
                    chart: {
                        type: 'column',
                        height: 300
                    },
                    title: {
                        text: 'Indicadores MEC por Capital Social'
                    },
                    subtitle: {
                        text: 'planetaY'
                    },
                    xAxis: {
                        type: 'category',
                        labels: {
                            rotation: -45,
                            style: {
                                fontSize: '13px',
                                fontFamily: 'Verdana, sans-serif'
                            }
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'capital social'
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    tooltip: {
                        pointFormat: 'capital social: <b>{point.y:.1f}</b>'
                    },
                    series: [{
                        name: 'Population',
                        data: [
                            ['captação', 23.7],
                            ['empregabilidade', 16.1],
                            ['localização', 14.2],
                            ['atuação ética', 14.0],
                            ['corpo docente', 12.5],
                            ['credenciamento no mec', 12.1],
                            ['preço', 11.8],
                            ['qualidade de ensino', 11.7],
                            ['infraestrutura', 11.1],
                            ['relacionamento', 11.1]
                        ],
                        dataLabels: {
                            enabled: true,
                            rotation: -90,
                            color: '#FFFFFF',
                            align: 'right',
                            x: 4,
                            y: 10,
                            style: {
                                fontSize: '13px',
                                fontFamily: 'Verdana, sans-serif',
                                textShadow: '0 0 3px black'
                            }
                        }
                    }]
                });
            });
        
        //DISTRIBUIÇÃO
        jq(function () {
            jq(document).ready(function () {

                // Build the chart
                jq('#indicadores-distribuicao').highcharts({
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        height: 300
                    },
                    title: {
                        text: 'Browser market shares at a specific website, 2014'
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: false
                            },
                            showInLegend: true
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Browser share',
                        data: [
                            ['Firefox',   45.0],
                            ['IE',       26.8],
                            {
                                name: 'Chrome',
                                y: 12.8,
                                sliced: true,
                                selected: true
                            },
                            ['Safari',    8.5],
                            ['Opera',     6.2],
                            ['Others',   0.7]
                        ]
                    }]
                });
            });

        });