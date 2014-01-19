Ext.define('MyApp.models.Inteiro', {
    extend    : 'MyApp.models.Produto',
    requires: ['MyApp.models.Item'],
    fields   : [

        {name: 'item', type: 'auto'}
    ],

    hasOne    : {

        model: 'MyApp.models.Item'

    },

    proxy: {
        type: 'rest',
        url : '/inteiros'

    } ,

    writer:{
        type:'json'
    },
    reader: {
        type: 'json',
        root: 'data'
    }





});
