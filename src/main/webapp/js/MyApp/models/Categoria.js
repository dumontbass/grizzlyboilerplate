Ext.define('MyApp.models.Categoria', {
    extend    : 'Ext.data.Model',
    fields   : [
        'id',
        'nome'

    ],

    proxy: {
        type: 'rest',
        url : '/categorias'

    },

    reader: {
        type: 'json',
        root: 'data'
    },

    writer: {
        type: 'json'
    }










});
