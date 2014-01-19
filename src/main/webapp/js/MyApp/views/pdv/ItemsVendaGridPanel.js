Ext.define('MyApp.views.pdv.ItemsVendaGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.itemsvendagridpanel',
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
                header: 'Item',
                dataIndex: 'nome',
                flex:1,
                tpl: '{nome}<br />' +
                   // '<span>{codigoBarras}</span><br />'+
                    '<span>lote: {descricao}</span><br />'


            },
            /*{ header    : 'Nome', dataIndex : 'nome', flex:1 },*/

            {
                header    : 'Quantidade',
                dataIndex : 'quantidade',
                width     :  100
            },

            {
                header    : 'Descrição',
                dataIndex : 'descricao',
                width     :  100
            },

            {
                header    : 'Valor Un.',
                dataIndex : 'valorUnitario',
                width     :  100,
                renderer: moneyBRL
            },

            {
                header    : 'Valor',
                dataIndex : 'valorVenda',
                width     :  100,
                renderer: moneyBRL
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

                                        var store = Ext.data.StoreManager.lookup('produtoVendaStore');

                                        var item = store.getAt(rowIndex)

                                        store.remove(item)

                                        // Total

                                        var valorTotal = 0.0



                                        store.each(function(item){

                                            valorTotal += item.data.valorVenda;
                                            console.log(item)

                                        });

                                        var total = Ext.ComponentQuery.query('#totalVenda');

                                        console.log(total)

                                        total[0].setValue(valorTotal)

                                        //MyApp.stores.ItemVendaStore.sync();
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
