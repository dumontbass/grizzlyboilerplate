Ext.define('MyApp.stores.ItemCompraStore', {
    extend: 'Ext.data.Store',
    //singleton: true,
    requires: ['MyApp.models.ItemCompra'],
    model: 'MyApp.models.ItemCompra',

    storeId: 'itemCompraStore'


});
