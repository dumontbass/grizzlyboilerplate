Ext.define('MyApp.views.produto.ItemsComposicaoGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.itemscomposicaogridpanel',
    requires: [

       'MyApp.stores.ItemComposicaoStore'
    ],



    initComponent: function () {

        this.store = MyApp.stores.ItemComposicaoStore;
        this.columns = this.buildColumns();
        this.weight = 300;
        this.height = 170;


        this.callParent();


    },

    buildColumns: function () {




        return [
            {
                xtype: 'templatecolumn',
                header: 'Item',
                dataIndex: 'nome',
                flex:0.8,
                tpl: '<span>{nome}  -' +
                    '  {codigoBarras}</span><br />'


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
                flex     :  0.4,
                renderer  : moneyFormat
            },

            {
                header    : 'Un.',
                dataIndex : 'unMedida',
                width     :  80
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

                                        var item = MyApp.stores.ItemComposicaoStore.getAt(rowIndex)

                                        MyApp.stores.ItemComposicaoStore.remove(item)

                                        //MyApp.stores.ItemComposicaoStore.sync();
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
