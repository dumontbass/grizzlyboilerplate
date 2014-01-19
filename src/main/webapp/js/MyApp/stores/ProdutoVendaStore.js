Ext.define('MyApp.stores.ProdutoVendaStore', {
    extend: 'Ext.data.Store',
    // singleton: true,
    requires: ['MyApp.models.ProdutoVenda'],
    //autoLoad: true,
    model: 'MyApp.models.ProdutoVenda',

    storeId: 'produtoVendaStore'





});


