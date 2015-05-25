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
                width: 350,
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
                width: 242,
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
