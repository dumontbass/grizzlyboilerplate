Ext.define('MyApp.stores.ItemComposicaoStore', {
    extend: 'Ext.data.Store',
    singleton: true,
    requires: ['MyApp.models.ItemCompra'],
    model: 'MyApp.models.ItemCompra'


});
