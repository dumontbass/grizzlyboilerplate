Ext.define('MyApp.models.Combo', {
    extend   : 'Ext.data.Model',

    fields   : [


        'nome',
        'descricao',
        'opcionais',
        'imagem',
        'categoria',
        {name: 'valor', type: 'float'},
        {name: 'produtos', type: 'auto'}


    ],

    hasMany:[
        {
            name:'produtos',
            model:'MyApp.models.ProdutoCombo'
        }
    ],


    proxy: {
        type: 'rest',
        url : '/combos'

    } ,

    writer:{
        type:'json'
    },

    reader: {
        type: 'json',
        root: 'data'
    }

});


