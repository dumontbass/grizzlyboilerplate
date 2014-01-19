Ext.define('MyApp.views.cardapio.ProdutosCardapioGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.produtoscardapiogridpanel',
    requires: [

        'MyApp.stores.ProdutoVendaStore'
    ],



    initComponent: function () {

        this.store = Ext.create('MyApp.stores.ProdutoVendaStore');
        this.columns = this.buildColumns();
        this.callParent();


    },

    buildColumns: function () {




        return [
            {
                xtype: 'templatecolumn',
                header: 'Categoria',
                dataIndex: 'nome',
                flex:1,
                tpl: '{nome}<br />'



            },
            /*{ header    : 'Nome', dataIndex : 'nome', flex:1 },*/





            {
                xtype: 'actioncolumn',
                width: 60,
                align: 'center',
                sortable: false,
                menuDisabled: true,
                header: 'Excluir',
                items: [
                    { icon: 'img/trash.png',
                        handler: function (grid, rowIndex, colIndex) {

                            Ext.MessageBox.confirm( {
                                title:'Remover item',
                                msg: 'Deseja realmente remover este item ?',
                                buttonText: {yes: "Remover",cancel: "Cancelar"},
                                fn: function(btn){

                                    if (btn === 'yes') {

                                        var store = Ext.data.StoreManager('produtoVendaStore');

                                        var item = store.getAt(rowIndex)

                                        store.remove(item)

                                        //MyApp.stores.CardapioCompraStore.sync();
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
    },



    stripeRows: true,
    cls: 'grid-row',
    columnLines: true,
    selType: 'rowmodel',

    emptyText: 'Nenhum item encontrado! '


});
