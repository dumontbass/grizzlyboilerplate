Ext.define('MyApp.stores.ProdutoStore', {
    extend: 'Ext.data.Store',
    singleton: true,
    requires: ['MyApp.models.Produto'],
    autoLoad: true,
    model: 'MyApp.models.Produto',

    storeId: 'produtoStore',

    proxy: {
        type: 'rest',
        url : '/produtos'

    } ,

    writer:{
        type:'json'
    },
    reader: {
        type: 'json',
        root: 'data'
    }






});

