Ext.define('MyApp.stores.CategoriaStore', {
    extend: 'Ext.data.Store',
    //singleton: true,
    requires: ['MyApp.models.Categoria'],
    autoLoad: true,
    model: 'MyApp.models.Categoria',

    storeId: 'categoriaStore'



 });

