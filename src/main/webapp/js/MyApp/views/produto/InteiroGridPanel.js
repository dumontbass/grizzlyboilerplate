Ext.define('MyApp.views.produto.InteiroGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.InteiroGridPanel',
    requires: [
        'MyApp.stores.ItemStore',
        'MyApp.models.Produto',
        'MyApp.stores.InteiroStore'

    ],

    //style
    stripeRows: true,
    cls: 'grid-row',
    columnLines: true,
    selType: 'rowmodel',


    // conf

    emptyText: 'Nenhum item encontrado! ',


    initComponent: function () {
        this.store = MyApp.stores.InteiroStore;
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
                xtype: 'actioncolumn',
                sortable: false,
                menuDisabled: true,
                header: 'Excluir',
                items: [
                    { icon: 'img/trash.png',
                        handler: function (grid, rowIndex, colIndex) {


                            Ext.MessageBox.confirm( {
                                title:'Remover produto',
                                msg: 'Deseja realmente remover este produto ?',
                                buttonText: {yes: "Remover",cancel: "Cancelar"},
                                fn: function(btn){

                                    if (btn === 'yes') {

                                        var cliente = MyApp.stores.InteiroStore.getAt(rowIndex)

                                        MyApp.stores.InteiroStore.remove(cliente)

                                        MyApp.stores.InteiroStore.sync();
                                    }
                                    else {
                                        return;
                                    }
                                }

                            });


                        }
                    }
                ]
            }
        ]
    }


});
