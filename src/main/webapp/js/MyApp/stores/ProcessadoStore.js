Ext.define('MyApp.stores.ProcessadoStore', {
    extend: 'Ext.data.Store',
    singleton: true,
    requires: ['MyApp.models.Processado'],
    autoLoad: true,
    model: 'MyApp.models.Processado'




});

