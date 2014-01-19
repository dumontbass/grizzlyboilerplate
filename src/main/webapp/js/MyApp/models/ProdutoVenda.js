Ext.define('MyApp.models.ProdutoVenda', {
    extend: 'MyApp.models.Produto',

    fields: [


        'quantidade',
        {name: 'valorVenda', type: 'float'},
        {name: 'valorUnitario', type: 'float'},
        'opcionais'

        ]

});

