Ext.define('MyApp.models.Venda', {
    extend    : 'Ext.data.Model',
    fields   : [

         {name:'valorTotal', type: 'float'},
         'meioPagamento',
         {name:'cliente', type: 'auto'},
         {name:'dataVenda', type: 'auto', dateFormat: 'd/m/Y' },

         {name:'produtos' , type: 'auto'}
    ],


    hasMany    : {

        model: 'MyApp.models.ProdutoVenda', name: 'produtos'

    },


    hasOne    : {

        model: 'MyApp.models.Cliente', name: 'cliente'

    },


    proxy: {
        type: 'rest',
        url : '/vendas'

    },

    reader: {
        type: 'json',
        root: 'data'
    },

    writer: {
        type: 'json'
    }










});
