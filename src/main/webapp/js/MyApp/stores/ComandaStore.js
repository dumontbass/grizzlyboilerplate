Ext.define('MyApp.stores.ComandaStore', {
    extend: 'Ext.data.Store',
    //singleton: true,
    requires: ['MyApp.models.Comanda'],
    autoLoad: true,
    model: 'MyApp.models.Comanda',

    storeId: 'comandaStore'


});

