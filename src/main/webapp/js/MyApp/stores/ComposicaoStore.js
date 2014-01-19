Ext.define('MyApp.stores.ComposicaoStore', {
    extend: 'Ext.data.Store',
    singleton: true,
    requires: ['MyApp.models.Composicao'],
    autoLoad: true,
    model: 'MyApp.models.Composicao'




});

