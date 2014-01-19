Ext.define('MyApp.views.compra.CompraGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.compragridpanel',

    requires: [
        'MyApp.stores.CompraStore',
        'MyApp.models.Compra'

    ],

    stripeRows: true,
    cls: 'grid-row',
    columnLines: true,
    selType: 'rowmodel',

    emptyText: 'Nenhum item encontrado! ',

    initComponent: function () {
        this.store = Ext.create('MyApp.stores.CompraStore');
        this.columns = this.buildColumns();
        this.callParent();


    },

    buildColumns: function () {
        return [


            { header: 'Nota Fiscal.', dataIndex: 'notaFiscal', flex: 1 },
            { header: 'Valor total.', dataIndex: 'valorTotal', flex: 0.5, renderer: moneyBRL },
            {
                header: 'Fornecedor',
                dataIndex: 'fornecedor',
                flex: 1

            },
            { header: 'Data', dataIndex: 'dataCompra', width: 100, xtype:'datecolumn', renderer: dateFormat},

            {
                xtype: 'actioncolumn',
                width: 50,
                align: 'center',
                sortable: false,
                menuDisabled: true,
                header: 'Excluir',
                items: [
                    { icon: 'img/trash.png',
                        handler: function (grid, rowIndex, colIndex) {

                            Ext.MessageBox.confirm( {
                                title:'Remover compra',
                                msg: 'Deseja realmente remover esta compra ?',
                                buttonText: {yes: "Remover",cancel: "Cancelar"},
                                fn: function(btn){
                                    
                                    if (btn === 'yes') {


                                        var store = grid.getStore();

                                        var compra = store.getAt(rowIndex)

                                        store.remove(compra)

                                        store.sync();
                                    }
                                    else {
                                        return;
                                    }
                                }

                            });

                            


                        }
                    }
                ]
            },
            {
                xtype: 'actioncolumn',
                width: 50,
                align: 'center',
                sortable: false,
                menuDisabled: true,
                header: 'Editar',
                items: [
                    { icon: 'img/editar.png',
                        handler: function (grid, rowIndex, colIndex, item, e,record) {

                            var win = this.up('window')

                            var store = grid.getStore();

                            var compra =  record;

                            var dataCompra = compra.get('dataCompra');
                            var validade = compra.get('validade');

                            compra.set('dataCompra', new Date(dataCompra));
                            compra.set('validade', new Date(validade));


                            var gridItemCompra = Ext.create('MyApp.views.compra.ItemsCompraGridPanel');

                            //compra.set('items', compra.get('items');

                            if (compra) {

                                var form = Ext.create('MyApp.views.compra.CompraFormPanel', { edicao: true

                                });

                                win.removeAll();

                                var itemCompraStore = Ext.data.StoreManager.lookup('itemCompraStore');


                                var items = compra.get('items');


                                for(var item in items){

                                    itemCompraStore.add(items[item])
                                };

                                //itemCompraStore.removeAll();

                                //itemCompraStore.add(compra.get('items'));

                                form.loadRecord(compra);

                                win.add(form);


                            }



                        }
                    }
                ]
            }
        ]
    },


    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl : new Ext.XTemplate(

            '<table class="rowexpanderGrid">',
            '<tr>',
            '<th>Nome</th>',
            '<th>Valor</th>',

            '<th>Quantidade</th>',
            '<th>Valor por</th>',
            '<th>Un. Medida</th>',
            '<th>Lote</th>',

            '<th>Validade</th>',
            '<th>Localização</th>',
            '</tr>',
            '<tpl for="items">',
            '<tr>',
                '<td>{nome}</td>',
                '<td>{[moneyBRL(values.valor)]}</td>',

                '<td>{quantidade}</td>',
                '<td>{[moneyBRL(values.valorPor)]}</td>',
                '<td>{unMedida}</td>',
                '<td>{lote}</td>',

                '<td>{[ dateFormat(values.validade)]}</td>',
                '<td>{localizacao}</td>',
            '</tr>',
            '</tpl>',


            '</table>'

        )

    }


    ]

});
