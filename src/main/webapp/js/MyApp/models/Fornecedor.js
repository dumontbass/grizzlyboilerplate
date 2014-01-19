Ext.define('MyApp.models.Fornecedor', {
    extend    : 'Ext.data.Model',
    fields   : [



        {name:'nome', type: 'string'},
        {name:'cnpj', type: 'string'},
        {name:'endereco', type: 'auto'},
        {name:'telefone', type: 'string'},
        {name:'nomeContato', type: 'string'},
        {name:'emailContato', type: 'string'},
        {name:'telefoneContato', type: 'string'},
        {name:'celularContato', type: 'string'}

    ],


    hasOne: {

        model: 'MyApp.models.Endereco', name: 'endereco'

    },

    proxy: {
        type: 'rest',
        url : '/fornecedores'

    },

    reader: {
        type: 'json',
        root: 'data'
    },

    writer: {
        type: 'json'
    }










});
