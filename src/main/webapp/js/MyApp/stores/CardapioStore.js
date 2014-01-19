Ext.define('MyApp.stores.CardapioStore', {
    extend: 'Ext.data.Store',
    //singleton: true,
    requires: ['MyApp.models.Cardapio'],
    autoLoad: true,
    model: 'MyApp.models.Cardapio',

    storeId: 'cardapioStore'



 });

