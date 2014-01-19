Ext.define('MyApp.stores.PerdaStore', {
    extend: 'Ext.data.Store',
    singleton: true,
    requires: ['MyApp.models.Perda'],
    autoLoad: true,
    model: 'MyApp.models.Perda'




});

