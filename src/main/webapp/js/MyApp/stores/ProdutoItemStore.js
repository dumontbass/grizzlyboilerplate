Ext.define('MyApp.stores.ProdutoItemStore', {
    extend: 'Ext.data.Store',
    //singleton: true,
    requires: ['MyApp.models.Produto'],
    autoLoad: true,

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'users'
        }
    },


    model: 'MyApp.models.Produto'




});
