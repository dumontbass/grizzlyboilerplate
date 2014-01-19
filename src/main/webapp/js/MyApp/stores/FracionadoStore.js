Ext.define('MyApp.stores.FracionadoStore', {
    extend: 'Ext.data.Store',
    singleton: true,
    requires: ['MyApp.models.Fracionado'],
    autoLoad: true,
    model: 'MyApp.models.Fracionado'




});

