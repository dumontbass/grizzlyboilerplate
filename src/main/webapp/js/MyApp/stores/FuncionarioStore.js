Ext.define('MyApp.stores.FuncionarioStore', {
    extend: 'Ext.data.Store',
    singleton: true,
    requires: ['MyApp.models.Funcionario'],
    autoLoad: true,
    model: 'MyApp.models.Funcionario'





});

