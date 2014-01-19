Ext.define('MyApp.models.Produto', {
    extend    : 'Ext.data.Model',

    fields   : [


        'nome',
        'descricao',
        'opcionais',
        'imagem',
        'categoria',
        {name: 'valor', type: 'float'}


    ]



});


