Ext.define('MyApp.models.Composicao', {
    extend    : 'MyApp.models.Produto',
    requires: ['MyApp.models.Item'],
    fields   : [
         'numPessoas',
        { name: 'items', type: 'auto' }
    ],

    hasMany:[
        {
            name:'items',

            model:'My.models.Item'
        }
    ],



    proxy: {
        type: 'rest',
        url : '/composicao'

    } ,

    writer:{
        type:'json'
    },
    reader: {
        type: 'json',
        root: 'data'
    }

});
