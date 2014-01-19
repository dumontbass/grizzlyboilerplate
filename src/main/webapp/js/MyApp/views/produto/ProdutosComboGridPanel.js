Ext.define('MyApp.views.produto.ProdutosComboGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.produtoscombogridpanel',
    requires: [

       'MyApp.stores.ItemComboStore'
    ],



    initComponent: function () {

        this.store = MyApp.stores.ItemComboStore;
        this.columns = this.buildColumns();
        this.weight = 300;
        this.height = 200;


        this.callParent();


    },

    buildColumns: function () {




        return [
            {
                xtype: 'templatecolumn',
                header: 'Item',
                dataIndex: 'nome',
                flex:1,
                tpl: '{nome}<br />' +
                    '<span>{quantidade}</span><br />'


            },
            /*{ header    : 'Nome', dataIndex : 'nome', flex:1 },*/

            {
                header    : 'Categoria',
                dataIndex : 'categoria',
                width     :  100
            },

            {
                header    : 'Qtd',
                dataIndex : 'quantidade',
                width     :  40,
                renderer  : moneyFormat
            },

            {
                header    : 'Un.',
                dataIndex : 'unMedida',
                width     :  40
            },




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
                                title:'Remover produto',
                                msg: 'Deseja realmente remover este produto ?',
                                buttonText: {yes: "Remover",cancel: "Cancelar"},
                                fn: function(btn){

                                    if (btn === 'yes') {

                                        var item = MyApp.stores.ItemComboStore.getAt(rowIndex)

                                        MyApp.stores.ItemComboStore.remove(item)

                                        //MyApp.stores.ItemComboStore.sync();
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

    emptyText: 'Nenhum produto encontrado! '


});
