Ext.define('MyApp.stores.CompraStore', {
    extend: 'Ext.data.Store',
    //singleton: true,
    requires: ['MyApp.models.Compra'],
    autoLoad: true,
    model: 'MyApp.models.Compra',

    storeId: 'compraStore'


});

