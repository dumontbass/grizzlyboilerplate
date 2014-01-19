Ext.define('MyApp.views.produto.ComposicaoGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.ComposicaoGridPanel',
    requires: [

        'MyApp.stores.ItemStore',
        'MyApp.models.Produto',
        'MyApp.stores.ComposicaoStore'
    ],

    initComponent: function () {

        this.store = MyApp.stores.ComposicaoStore;
        this.columns = this.buildColumns();
        this.height = 240;
        this.callParent();


    },

    buildColumns: function () {
        return [



            {
                header: 'Nome',
                dataIndex: 'nome',
                flex: 0.8
            },
            {
                header: 'Categoria',
                dataIndex: 'categoria',
                flex: 0.4
            },
            {
                header: 'Valor',
                dataIndex: 'valor',
                renderer: moneyBRL
            },
            {
                header: 'Imagem',
                dataIndex: 'imagem'
            },
            {
                xtype: 'actioncolumn',
                width: 80,
                sortable: false,
                menuDisabled: true,
                align: 'center',
                header: 'Excluir',
                items: [
                    { icon: 'img/trash.png',
                        handler: function (grid, rowIndex, colIndex) {


                            Ext.MessageBox.confirm('Remover item', 'Deseja realmente remover este item ?', function (btn) {
                                if (btn === 'yes') {

                                    var cliente = MyApp.stores.ComposicaoStore.getAt(rowIndex)

                                    MyApp.stores.ComposicaoStore.remove(cliente)

                                    MyApp.stores.ComposicaoStore.sync();
                                }
                                else {
                                    return;
                                }
                            });


                        }
                    }
                ]
            },

            {
                xtype: 'actioncolumn',
                width: 80,
                sortable: false,
                menuDisabled: true,
                align: 'center',
                header: 'Editar',
                items: [
                    { icon: 'img/editar.png',
                        handler: function (grid, rowIndex, colIndex, item, e,record) {

                            var store = MyApp.stores.ItemComposicaoStore;

                            var form = this.up('form').getForm();

                            form.loadRecord(record);

                            if( store.count() > 0){

                                store.removeAll();
                            }


                            var items = [];

                            items = record.data.items;


                            for( item in items){


                                var item_compra = Ext.create('MyApp.models.ItemCompra', items[item]);


                                store.add(item_compra)


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


            '<th>Quantidade</th>',

            '<th>Un. Medida</th>',

            '</tr>',
            '<tpl for="items">',
            '<tr>',
            '<td>{nome}</td>',


            '<td>{[weightFormat(values.quantidade)]}</td>',

            '<td>{unMedida}</td>',

            '</tr>',
            '</tpl>',


            '</table>'

        )

    }


    ]





});
