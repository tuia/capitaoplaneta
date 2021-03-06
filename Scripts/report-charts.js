//TEMA
Highcharts.theme = {
    colors: ['#82799F', '#F39C12', '#16A085', '#7A82CD', '#f45b5b', '#90ee7e',
             '#DF5353', '#7798BF', '#ff2266'],
    chart: {
        marginTop: 60
    },
    title: {
        style: {
            color: '#666',
            font: '400 18px "Roboto", sans-serif;'
        }
    },
}
Highcharts.setOptions(Highcharts.theme);

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
                height: 210,
                marginTop: 0
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
                data: [1, 3, 7, 7, 6, 4, 4, 4.5, 5, 5.6, 6, 6]
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
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                }, {
                    name: 'palavra2',
                    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'palavra3',
                    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'palavra4',
                    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
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
                    text: 'palavras-chave por sentimento'
                },
                xAxis: {
                    categories: ['palavra1', 'palavra2', 'palavra3', 'palavra4', 'palavra5']
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: null
                    }
                },
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                    shared: true
                },
                plotOptions: {
                    column: {
                        stacking: 'percent',
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
                }],
            });
        });

    
    //INDICADORES MEC

            // CAPITAL SOCIAL
            jq(function () {
                jq('#indicadores-cs').highcharts({
                    chart: {
                        type: 'bar',
                        height: 300,
                        width: 815,
                        marginTop: 60
                    },
                    title: {
                        text: 'Indicadores MEC por Capital Social'
                    },
                    xAxis: {
                        type: 'categories',
                        title: {
                            text: null
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'capital social'
                        }
                    },
                    plotOptions: {
                        bar: {
                            dataLabels: {
                                enabled: true
                            }
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'top',
                        x: -40,
                        y: 100,
                        floating: true,
                        borderWidth: 1,
                        backgroundColor: 'transparent',
                        shadow: true
                    },
                    tooltip: {
                        pointFormat: 'capital social: <b>{point.y:.1f}</b>'
                    },
                    credits: {
                        enabled: false
                    },
                    series: [{
                        name: 'capital social',
                        data: [
                            ['captação', 3.7],
                            ['empregabilidade', 6.1],
                            ['localização', 4.2],
                            ['atuação ética', 4.0],
                            ['corpo docente', 2.5],
                            ['credenciamento no mec', 2.1],
                            ['preço', 1.8],
                            ['qualidade de ensino', 1.7],
                            ['infraestrutura', 9.1],
                            ['relacionamento', 1.1]
                        ]
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
                        height: 300,
                        width: 815,
                    },
                    title: {
                        text: 'Indicadores mec: distribuição'
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} ',
                                style: {
                                    color: '#666666'
                                }
                            }
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'citações por indicador',
                        data: [
                            ['captação', 3.7],
                            ['empregabilidade', 6.1],
                            ['localização', 4.2],
                            ['atuação ética', 4.0],
                            ['corpo docente', 2.5],
                            ['credenciamento no mec', 2.1],
                            ['preço', 1.8],
                            ['qualidade de ensino', 1.7],
                            ['infraestrutura', 9.1],
                            ['relacionamento', 1.1]
                        ]
                    }]
                });
            });

        });

        //SENTIMENTO
        jq(function () {
            jq('#indicadores-sentimento').highcharts({
                chart: {
                    type: 'column',
                    width: 815,
                    height: 300
                },
                title: {
                    text: 'indicadores por sentimento'
                },
                xAxis: {
                    categories: ['captação', 'empregabilidade', 'localização', 'atuação ética', 'corpo docente', 'credenciamento no mec', 'preço', 'qualidade de ensino', 'infraestrutura', 'relacionamento']
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: null
                    }
                },
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                    shared: true
                },
                plotOptions: {
                    column: {
                        stacking: 'percent'
                    }
                },
                series: [{
                    name: 'positivo',
                    data: [5, 3, 4, 7, 2, 3, 4, 4, 2, 5],
                    color: '#27AE60' // good
                }, {
                    name: 'neutro',
                    data: [2, 2, 3, 2, 1, 5, 3, 4, 7, 2],
                    color: '#2980B9' // neutral
                }, {
                    name: 'negativo',
                    data: [3, 4, 4, 2, 5, 2, 2, 3, 2, 1],
                    color: '#C0392B' // bad
                }],
            });
        });

    // MARCADORES

            // CAPITAL SOCIAL
            jq(function () {
                jq('#marcadores-cs').highcharts({
                    chart: {
                        type: 'bar',
                        height: 300,
                        width: 815
                    },
                    title: {
                        text: 'Marcadores por Capital Social'
                    },
                    xAxis: {
                        type: 'categories',
                        title: {
                            text: null
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'capital social'
                        }
                    },
                    plotOptions: {
                        bar: {
                            dataLabels: {
                                enabled: true
                            }
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'top',
                        x: -40,
                        y: 100,
                        floating: true,
                        borderWidth: 1,
                        backgroundColor: 'transparent',
                        shadow: true
                    },
                    tooltip: {
                        pointFormat: 'capital social: <b>{point.y:.1f}</b>'
                    },
                    credits: {
                        enabled: false
                    },
                    series: [{
                        name: 'capital social',
                        data: [
                            ['IEC', 3.7],
                            ['exemplo', 6.1],
                            ['favoritos', 4.2],
                            ['lido', 4.0],
                            ['não lido', 2.5]
                        ]
                    }]
                });
            });

            //SENTIMENTO
            jq(function () {
                jq('#marcadores-sentimento').highcharts({
                    chart: {
                        type: 'column',
                        width: 815,
                        height: 300
                    },
                    title: {
                        text: 'indicadores por sentimento'
                    },
                    xAxis: {
                        categories: ['IEC', 'favoritos', 'lido', 'a responder', '2014']
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: null
                        }
                    },
                    tooltip: {
                        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                        shared: true
                    },
                    plotOptions: {
                        column: {
                            stacking: 'percent'
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
                    }],
                });
            });

    //MIDIAS

        // EVOLUCAO 
        jq(function () {
            jq('#midias-evolucao').highcharts({
                chart: {
                    width: 611,
                    height: 350
                },
                title: {
                    text: 'Mídicas: evolução'
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
                    name: 'facebook',
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                }, {
                    name: 'twitter',
                    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'linkedin',
                    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'blog',
                    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                }, {
                    name: 'instagram',
                    data: [-5.2, 1, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'youtube',
                    data: [-3, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'google +',
                    data: [-8, 1.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'reclame aqui',
                    data: [-9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'flickr',
                    data: [-6.7, -4.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'pinterest',
                    data: [-3.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'foursquare',
                    data: [-9.2, 6.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }]
            });
        });


        //DISTRIBUIÇÃO
        jq(function () {
            jq(document).ready(function () {

                // Build the chart
                jq('#midias-distribuicao').highcharts({
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        height: 300,
                        width: 815,
                    },
                    title: {
                        text: 'Mídias: distribuição'
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} ',
                                style: {
                                    color: '#666666'
                                }
                            }
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'citações por midia',
                        data: [
                            ['facebook', 3.7],
                            ['twitter', 6.1],
                            ['linkedin', 4.2],
                            ['blog', 4.0],
                            ['instagram', 2.5],
                            ['youtube', 2.1],
                            ['google +', 1.8],
                            ['reclame aqui', 1.7],
                            ['flickr', 9.1],
                            ['pinterest', 0.6],
                            ['foursquare', 0.5]
                        ]
                    }]
                });
            });

        });



    // RELEVÂNCIA DAS MÍDIAS 

        // POR MíDIA
        jq(function () {
            jq('#relevancia-das-midias-por-midia').highcharts({
                    chart: {
                    type: 'column',
                    height: 300
                },
                title: {
                    text: 'Relevância das mídias por mídia'
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
                        text: 'Population (millions)'
                    }
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>'
                },
                series: [{
                    name: 'Population',
                    data: [
                        ['Shanghai', 23.7],
                        ['Lagos', 16.1],
                        ['Instanbul', 14.2],
                        ['Karachi', 14.0],
                        ['Mumbai', 12.5],
                        ['Moscow', 12.1],
                        ['São Paulo', 11.8],
                        ['Beijing', 11.7],
                        ['Guangzhou', 11.1],
                        ['Delhi', 11.1],
                        ['Shenzhen', 10.5],
                        ['Seoul', 10.4],
                        ['Jakarta', 10.0],
                        ['Kinshasa', 9.3],
                        ['Tianjin', 9.3],
                        ['Tokyo', 9.0],
                        ['Cairo', 8.9],
                        ['Dhaka', 8.9],
                        ['Mexico City', 8.9],
                        ['Lima', 8.9]
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


        // VARIAÇÃO
        jq(function () {
            jq('#relevancia-das-midias-evolucao').highcharts({
                chart: {
                    width: 705,
                    height: 300
                },
                title: {
                    text: 'Relevância das mídias: evolução'
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
                    valueSuffix: '%'
                },
                series: [{
                    name: 'facebook',
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                }, {
                    name: 'twitter',
                    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'linkedin',
                    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'blog',
                    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                }, {
                    name: 'instagram',
                    data: [-5.2, 1, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'youtube',
                    data: [-3, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'google +',
                    data: [-8, 1.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'reclame aqui',
                    data: [-9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'flickr',
                    data: [-6.7, -4.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'pinterest',
                    data: [-3.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'foursquare',
                    data: [-9.2, 6.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }]
            });
        });


        // SEGUIDORES
        jq(function () {
            jq('#relevancia-das-midias-seguidores').highcharts({
                chart: {
                    width: 705,
                    height: 300
                },
                title: {
                    text: 'Relevância das mídias: seguidores'
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
                    valueSuffix: '%'
                },
                series: [{
                    name: 'facebook',
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                }, {
                    name: 'twitter',
                    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'linkedin',
                    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'blog',
                    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                }, {
                    name: 'instagram',
                    data: [-5.2, 1, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'youtube',
                    data: [-3, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'google +',
                    data: [-8, 1.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'reclame aqui',
                    data: [-9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'flickr',
                    data: [-6.7, -4.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'pinterest',
                    data: [-3.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'foursquare',
                    data: [-9.2, 6.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }]
            });
        });



    //BUZZ

        // CITAÇÕES POR DIA
        jq(function () {
            jq('#buzz-por-dia').highcharts({
                chart: {
                    width: 705,
                    height: 300
                },
                title: {
                    text: 'Citações por dia'
                },
                xAxis: {
                    categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
                },
                yAxis: {
                    title: {
                        text: 'quantidade de citações'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: ' '
                },
                series: [{
                    name: 'facebook',
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                }, {
                    name: 'twitter',
                    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'linkedin',
                    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'blog',
                    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                }, {
                    name: 'instagram',
                    data: [-5.2, 1, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'youtube',
                    data: [-3, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'google +',
                    data: [-8, 1.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'reclame aqui',
                    data: [-9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'flickr',
                    data: [-6.7, -4.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'pinterest',
                    data: [-3.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'foursquare',
                    data: [-9.2, 6.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }]
            });
        });

        // CITAÇÕES POR HORARIO
        jq(function () {
            jq('#buzz-por-horario').highcharts({
                chart: {
                    width: 705,
                    height: 300
                },
                title: {
                    text: 'Citações por horário'
                },
                xAxis: {
                    categories: ['00-02', '02-04', '04-06', '06-08', '08-10', '10-12', '12-14', '14-16', '16-18', '18-20', '20-22', '22-00']
                },
                yAxis: {
                    title: {
                        text: 'quantidade de citações'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: ' '
                },
                series: [{
                    name: 'facebook',
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                }, {
                    name: 'twitter',
                    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'linkedin',
                    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'blog',
                    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                }, {
                    name: 'instagram',
                    data: [-5.2, 1, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'youtube',
                    data: [-3, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'google +',
                    data: [-8, 1.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'reclame aqui',
                    data: [-9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'flickr',
                    data: [-6.7, -4.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'pinterest',
                    data: [-3.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'foursquare',
                    data: [-9.2, 6.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }]
            });
        });

        //SENTIMENTO
        jq(function () {
            jq('#buzz-sentimento').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    height: 300,
                    width: 815
                },
                title: {
                    text: 'Sentimento'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            }
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'Browser share',
                    data: [
                        {
                            name: 'negativo',
                            y: 12.8,
                            color: '#C0392B'
                        },{
                            name: 'neutro',
                            y: 7,
                            color: '#2980B9'
                        },{
                            name: 'positivo',
                            y: 3.4,
                            color: '#27AE60'
                        },
                    ]
                }]
            });
        });


//TWITTER

    //EVOLUÇÃO RTs
        jq(function () {
            jq('#twitter-evolucao').highcharts({
                chart: {
                    width: 705,
                    height: 300
                },
                title: {
                    text: 'Twitter: Evolução dos Retweets'
                },
                xAxis: {
                    categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
                },
                yAxis: {
                    title: {
                        text: 'quantidade de RTs'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: ' '
                },
                series: [{
                    name: 'facebook',
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                }, {
                    name: 'twitter',
                    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'linkedin',
                    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'blog',
                    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                }, {
                    name: 'instagram',
                    data: [-5.2, 1, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'youtube',
                    data: [-3, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'google +',
                    data: [-8, 1.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'reclame aqui',
                    data: [-9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'flickr',
                    data: [-6.7, -4.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'pinterest',
                    data: [-3.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'foursquare',
                    data: [-9.2, 6.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }]
            });
        });

