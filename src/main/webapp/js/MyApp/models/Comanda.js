Ext.define('MyApp.models.Comanda', {
    extend    : 'Ext.data.Model',

    fields   : [

        'id',
        'tipo',
        'numero',
        'aberta',
        'dataAbertura',
        'dataFechamento',

        'bloqueada',
        'perdida',
        'pago',
        'valorPago',

        {name: 'pedidos', type: 'auto'}

    ],

    hasMany    : {

        model: 'MyApp.models.Pedido', name: 'pedidos'

    },


    proxy:
    {
        type: 'rest',
        url: '/comandas'
    },



    reader: {
        type: 'json',
        root: 'data'
    },

    writer: {
        type: 'json'
    }








});
