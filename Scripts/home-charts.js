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

//EVOLUCAO

    // VARIAÇÃO CAPITAL SOCIAL
    jq(function () {
        jq('#variacao-chart').highcharts({
            chart: {
                width: 450,
                height: 150,
                type: 'line',
                marginTop: 0,
                marginLeft: 0
            },
            title: {
                text: 'capital social: evolução',
                x: -20 //center
            },
            xAxis: {
                categories: ['01/07', '30/06', '29/06']
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
                data: [7, 5, 4]
            }]
        });
    });

// SENTIMENTO

    jq(function () {
        jq('#sentimento-chart').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                width: 290,
                height: 160,
                marginLeft: 50,
                marginRight: 50,
                marginBottom: 50,
                marginTop: 0,
                spacingBottom: 20
            },
            title: {
                text: 'Sentimento - Roberta de Freitas'
            },
            tooltip: {
                pointFormat: '<b>{point.percentage:.1f}%</b>'
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
                name: 'sentimento de Roberto de Freitas',
                data: [
                    {
                        name: 'positivas',
                        y: 13,
                        color: '#27AE60'
                    },
                    {
                      name: 'neutras',
                      y: 5,
                      color: '#2980B9',
                    },
                    {
                      name: 'negativas',
                      y: 4,
                      color: '#C0392B',
                    }
                ]
            }]
        });
    });

    
//INDICADORES MEC

        jq(function () {
            jq('#indicadores-chart').highcharts({
                chart: {
                    type: 'bar',
                    height: 200,
                    width: 441,
                    marginTop: 0,
                    marginLeft: 0,
                    spacingTop: 0
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
                        text: null
                    }
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
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


// MARCADORES

        jq(function () {
            jq('#marcadores-chart').highcharts({
                chart: {
                    type: 'column',
                    width: 441,
                    height: 200,
                    marginTop: 0,
                    marginLeft: 0,
                    spacingTop: 0
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
