Ext.define('MyApp.views.comanda.PedidoComandaGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.pedidocomandagridpanel',
    requires: [

        'MyApp.stores.PedidoStore'
    ],



    initComponent: function () {

        this.store = Ext.create('MyApp.stores.PedidoStore');
        this.columns = this.buildColumns();
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
                    '<span>{codigoBarras}</span><br />'+
                    '<span>lote: {lote}</span><br />'


            },
            /*{ header    : 'Nome', dataIndex : 'nome', flex:1 },*/

            {
                header    : 'Situação',
                dataIndex : 'situacao',
                width     :  100
            },

            {
                header    : 'Quantidade',
                dataIndex : 'quantidade',
                width     :  100
            },



            {
                header    : 'Valor',
                dataIndex : 'valor',
                width     :  100,
                renderer  : moneyBRL
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
                                title:'Remover item',
                                msg: 'Deseja realmente remover este item ?',
                                buttonText: {yes: "Remover",cancel: "Cancelar"},
                                fn: function(btn){

                                    if (btn === 'yes') {

                                        var store = Ext.data.StoreManager('itemCompraStore');

                                        var item = store.getAt(rowIndex)

                                        store.remove(item)

                                        //MyApp.stores.ItemCompraStore.sync();
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
