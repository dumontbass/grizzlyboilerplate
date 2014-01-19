Ext.define('MyApp.views.comanda.ComandaGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.comandagridpanel',

    requires: [
        'MyApp.stores.ComandaStore',
        'MyApp.models.Comanda'

    ],

    stripeRows: true,
    cls: 'grid-row',
    columnLines: true,
    selType: 'rowmodel',

    emptyText: 'Nenhum item encontrado! ',

    initComponent: function () {
        this.store = Ext.create('MyApp.stores.ComandaStore');
        this.columns = this.buildColumns();
        this.callParent();


    },

    buildColumns: function () {
        return [


            { header: 'Cliente', dataIndex: 'cliente', flex: 1 },
            { header: 'Valor total', dataIndex: 'valorTotal', flex: 0.5, renderer: moneyBRL },

            { header: 'Data', dataIndex: 'dataComanda', width: 100, xtype:'datecolumn', renderer: dateFormat},

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
                                title:'Remover comanda',
                                msg: 'Deseja realmente remover esta comanda ?',
                                buttonText: {yes: "Remover",cancel: "Cancelar"},
                                fn: function(btn){
                                    
                                    if (btn === 'yes') {


                                        var store = grid.getStore();

                                        var comanda = store.getAt(rowIndex)

                                        store.remove(comanda)

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
                        handler: function (grid, rowIndex, colIndex) {

                            var win = this.up('window')

                            var store = grid.getStore();

                            console.log(store)

                            var comanda =  Ext.create('MyApp.models.Comanda', store.getAt(rowIndex));

                            var dataComanda = comanda.get('dataComanda');
                            var validade = comanda.get('validade');

                            comanda.set('dataComanda', new Date(dataComanda));
                            comanda.set('validade', new Date(validade));


                            var gridItemComanda = Ext.create('MyApp.views.comanda.ItemsComandaGridPanel');

                            console.log(gridItemComanda)

                            return


                            //comanda.set('items', comanda.get('items');

                            if (comanda) {

                                var form = Ext.create('MyApp.views.comanda.ComandaFormPanel', { edicao: true

                                });

                                win.removeAll();

                                var itemComandaStore = Ext.data.StoreManager.lookup('itemComandaStore');

                                //itemComandaStore.removeAll();

                                itemComandaStore.add(comanda.get('items'));

                                form.loadRecord(comanda);

                                win.add(form);


                            }



                        }
                    }
                ]
            }
        ]
    },

    listeners: {
        selectionchange: function(model, records) {


            /*var win = this.up('window')

            console.log(records[0])

            var data = records[0].data.data
            var validade = records[0].data.validade

            records[0].data.data = new Date(data)
            records[0].data.validade = new Date(validade)

            if (records[0]) {



                var form = Ext.create('MyApp.views.comanda.ComandaFormPanel', { edicao: true

                });

                win.removeAll();

                form.loadRecord(records[0]);

                win.add(form);


            }*/
        }
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
