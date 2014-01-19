Ext.define('MyApp.models.Funcionario', {
    extend    : 'MyApp.models.Pessoa',

    fields   : [

        'funcao',
        {name:'ativo', type: 'boolean'}



    ],

    proxy: {
        type: 'rest',
        url : '/funcionarios'

    },

    reader: {
        type: 'json',
        root: 'data'
    },

    writer: {
        type: 'json'
    }



});
