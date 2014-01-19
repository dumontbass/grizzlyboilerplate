Ext.define('MyApp.stores.ComboStore', {
    extend: 'Ext.data.Store',
    singleton: true,
    requires: ['MyApp.models.Combo'],
    autoLoad: true,
    model: 'MyApp.models.Combo'




});

