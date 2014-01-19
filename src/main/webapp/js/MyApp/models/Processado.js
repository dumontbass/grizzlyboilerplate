Ext.define('MyApp.models.Processado', {
    extend    : 'MyApp.models.ItemCompra',

    fields   : [


        {name: 'dataProcessamento', type: 'auto', dateFormat: 'd/m/Y'},
        {name: 'novaValidade',type: 'auto', dateFormat:'d/m/Y'},


        'quantidadeProcessada',
        'projecaoPerda',

        'novoNome',
        'numPecas',
        'pesoPorPeca',
        'local'


    ],

    proxy: {
        type: 'rest',
        url : '/processados'

    } ,

    writer:{
        type:'json'

    },
    reader: {
        type: 'json',
        root: 'data'
    }

});
