Ext.define('MyApp.models.Compra', {
    extend: 'Ext.data.Model',
    requires: ['MyApp.models.Item'],
    fields: [
         'id',

        { name: 'dataCompra', type: 'auto', dateFormat: 'd/m/Y' },
        { name: 'items', type: 'auto' },

        { name: 'notaFiscal', type: 'string' },
        { name: 'valorTotal', type: 'float' },

        { name: 'fornecedor', type: 'string' }
        //{ name: 'validade', type: 'auto' }

    ],





    hasMany    : {

      model: 'MyApp.models.ItemCompra', name: 'items'

    },


    proxy: {
        type: 'rest',
        url: '/compras'

    },

    reader: {
        type: 'json',
        root: 'data'
    },


    writer : {
        type: 'json'
    }

});
