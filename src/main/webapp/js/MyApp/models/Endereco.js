Ext.define('MyApp.models.Endereco', {
    extend    : 'Ext.data.Model',
    fields   : [


            {name:'logradouro', type: 'string'},
            {name:'tipoLogradouro', type: 'string'},
            {name:'numero', type: 'string'},
            {name:'cep', type: 'string'},
            {name:'cidade', type: 'string'},
            {name:'estado', type: 'string'}



        ],


    proxy: {

        type: 'ajax',
        url: 'util/buscaCep'
    },

    reader: {
        type: 'json',
        root: 'data'
    },

    writer: {
        type: 'json'
    }
});
