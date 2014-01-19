Ext.define('MyApp.stores.FornecedorStore', {
    extend: 'Ext.data.Store',
    //singleton: true,
    requires: ['MyApp.models.Fornecedor'],
    autoLoad: true,
    model: 'MyApp.models.Fornecedor',

    storeId: 'fornecedorStore'



 });

