Ext.define('MyApp.models.Cardapio', {
    extend    : 'Ext.data.Model',
    fields   : [
        'id',
        'nome',

        { name: 'categorias', type: 'auto'}


    ],


    hasMany    : {

        model: 'MyApp.models.Categoria', name: 'categorias'

    },

    proxy: {
        type: 'rest',
        url : '/cardapios'

    },

    reader: {
        type: 'json',
        root: 'data'
    },

    writer: {
        type: 'json'
    }










});
