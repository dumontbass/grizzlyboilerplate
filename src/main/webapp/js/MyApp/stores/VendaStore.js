Ext.define('MyApp.stores.VendaStore', {
    extend: 'Ext.data.Store',
    //singleton: true,
    requires: ['MyApp.models.Venda'],
    autoLoad: true,
    model: 'MyApp.models.Venda',

    storeId: 'vendaStore'



 });

