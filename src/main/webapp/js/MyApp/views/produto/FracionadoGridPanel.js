Ext.define('MyApp.views.produto.FracionadoGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.FracionadoGridPanel',
    requires: [

        'MyApp.stores.FracionadoStore'

    ],

    //style
    stripeRows: true,
    cls: 'grid-row',
    columnLines: true,
    selType: 'rowmodel',


    // conf

    emptyText: 'Nenhum item encontrado! ',


    initComponent: function () {
        this.store = MyApp.stores.FracionadoStore;
        this.columns = this.buildColumns();
        this.height = 200;
        this.callParent();


    },
    buildColumns: function () {

        return [
            {
                header: 'Nome',
                dataIndex: 'nome',
                flex: 1
            },
            {
                header: 'Decrição',
                dataIndex: 'descricao'
            },
            {
                header: 'Opcionais',
                dataIndex: 'opcionais'
            },
            {
                header: 'Imagem',
                dataIndex: 'imagem'
            },
            {
                header: 'Valor',
                dataIndex: 'valor',
                renderer: moneyBRL
            },
            {
                header: 'Fração',
                dataIndex: 'fracao'
            },
            {
                xtype: 'actioncolumn',
                sortable: false,
                menuDisabled: true,
                header: 'Excluir',
                items: [
                    { icon: 'img/trash.png',
                        handler: function (grid, rowIndex, colIndex) {


                            Ext.MessageBox.confirm('Remover item', 'Deseja realmente remover este item ?', function (btn) {
                                if (btn === 'yes') {

                                    var cliente = MyApp.stores.FracionadoStore.getAt(rowIndex)

                                    MyApp.stores.FracionadoStore.remove(cliente)

                                    MyApp.stores.FracionadoStore.sync();
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
    }


});
