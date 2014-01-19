Ext.define('MyApp.stores.PedidoStore', {
    extend: 'Ext.data.Store',
    //singleton: true,
    requires: ['MyApp.models.Pedido'],
    autoLoad: true,
    model: 'MyApp.models.Pedido',

    storeId: 'pedidoStore'



 });

