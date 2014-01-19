Ext.define('MyApp.stores.InteiroStore', {
    extend: 'Ext.data.Store',
    singleton: true,
    requires: ['MyApp.models.Inteiro'],
    autoLoad: true,
    model: 'MyApp.models.Inteiro'




});

