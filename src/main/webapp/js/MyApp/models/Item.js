Ext.define('MyApp.models.Item', {
    extend    : 'Ext.data.Model',
    fields   : [
        'id',
        'nome',
        'codigoBarras',
        'categoria',
        'limiteMinimo',
        'quantidadeTotal',
        { name: 'processavel', type: 'boolean'},
        { name: 'fracionavel', type: 'boolean'},
        { name: 'fatorCorrecao', type: 'float'},
        'unMedida'

    ],

    proxy: {
        type: 'rest',
        url : '/items'

    },

    reader: {
        type: 'json',
        root: 'data'
    },

    writer: {
        type: 'json'
    }










});
