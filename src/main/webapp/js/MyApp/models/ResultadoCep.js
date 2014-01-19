Ext.define('MyApp.models.ResultadoCep', {
    extend    : 'Ext.data.Model',
    fields   : [
        'resultado',
        'uf',
        'cidade',
        'bairro',
        'tipo_logradouro'


    ],


    reader: {
        type: 'json',
        root: 'data'
    },

    writer: {
        type: 'json'
    }



});
