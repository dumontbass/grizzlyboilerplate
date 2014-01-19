Ext.define('MyApp.stores.EnderecoStore', {
    extend: 'Ext.data.Store',
    //singleton: true,
    requires: ['MyApp.models.Endereco'],
    autoLoad: true,
    model: 'MyApp.models.Endereco',

    storeId: 'enderecoStore'



 });

