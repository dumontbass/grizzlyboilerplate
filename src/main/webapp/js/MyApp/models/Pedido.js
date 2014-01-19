Ext.define('MyApp.models.Pedido', {
    extend    : 'Ext.data.Model',
    fields   : [
        'id',
        'nome'

    ],

    proxy: {
        type: 'rest',
        url : '/pedidos'

    },

    reader: {
        type: 'json',
        root: 'data'
    },

    writer: {
        type: 'json'
    }










});
