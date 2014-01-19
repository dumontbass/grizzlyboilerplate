Ext.define('MyApp.views.produto.ComboGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.ComboGridPanel',
    requires: [

        'MyApp.stores.ProdutoStore',
        'MyApp.models.Combo',
        'MyApp.stores.ComboStore'
    ],

    initComponent: function () {

        this.store = MyApp.stores.ComboStore;
        this.columns = this.buildColumns();
        this.height = 200;
        this.callParent();


    },

    buildColumns: function () {
        return [



            {
                header: 'Nome',
                dataIndex: 'nome'
            },
            {
                header: 'Categoria',
                dataIndex: 'categoria'
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
                header: 'Excluir',
                items: [
                    { icon: 'img/trash.png',
                        handler: function (grid, rowIndex, colIndex) {


                            Ext.MessageBox.confirm('Remover item', 'Deseja realmente remover este item ?', function (btn) {
                                if (btn === 'yes') {

                                    var cliente = MyApp.stores.ComboStore.getAt(rowIndex)

                                    MyApp.stores.ComboStore.remove(cliente)

                                    MyApp.stores.ComboStore.sync();
                                }
                                else {
                                    return;
                                }
                            });


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

            '<th>Valor</th>',

            '</tr>',
            '<tpl for="produtos">',
            '<tr>',
            '<td>{nome}</td>',


            '<td>{descricao}</td>',

            '<td>{valor}</td>',

            '</tr>',
            '</tpl>',


            '</table>'

        )

    }


    ]





});
