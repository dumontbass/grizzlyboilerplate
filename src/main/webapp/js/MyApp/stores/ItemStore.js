Ext.define('MyApp.stores.ItemStore', {
    extend: 'Ext.data.Store',
    //singleton: true,
    requires: ['MyApp.models.Item'],
    autoLoad: true,
    model: 'MyApp.models.Item',

    storeId: 'itemStore'



 });

