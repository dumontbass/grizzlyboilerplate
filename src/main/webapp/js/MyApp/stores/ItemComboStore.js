Ext.define('MyApp.stores.ItemComboStore', {
    extend: 'Ext.data.Store',
    singleton: true,
    requires: ['MyApp.models.ProdutoCombo'],
    model: 'MyApp.models.ProdutoCombo'


});
