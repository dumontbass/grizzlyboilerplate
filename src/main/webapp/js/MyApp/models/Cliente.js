Ext.define('MyApp.models.Cliente', {
    extend    : 'MyApp.models.Pessoa',

    fields   : [

        { name: 'mailing', type: 'boolean'},
        { name: 'vip', type: 'boolean'},
        { name: 'blacklisted', type: 'boolean'},
        { name: 'ativo', type: 'boolean'}



    ],

    proxy: {
        type: 'rest',
        url : '/clientes'

    },

    reader: {
        type: 'json',
        root: 'data'
    },

    writer: {
        type: 'json'
    }



});
