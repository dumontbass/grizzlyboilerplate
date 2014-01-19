Ext.define('MyApp.models.ItemCompra', {
    extend: 'MyApp.models.Item',

    fields: [


        'localizacao',
        'fornecedor',
        {name: 'validade', type: 'auto', dateFormat: 'd/m/y'},
        {name: 'valor', type: 'float'},
        {name: 'valorPor', type: 'float'},
        'quantidade',
        'lote'

        ]

});

