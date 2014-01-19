Ext.define('MyApp.models.Fracionado', {
    extend    : 'MyApp.models.Produto',
    requires: ['MyApp.models.Item'],
    fields   : [
        'id',
        {name: 'item', type: 'auto'} ,
        'fracao'
    ],

    proxy: {
        type: 'rest',
        url : '/fracionados'

    } ,

    writer:{
        type:'json'
    },
    reader: {
        type: 'json',
        root: 'data'
    }

});
