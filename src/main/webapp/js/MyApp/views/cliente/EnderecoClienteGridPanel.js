Ext.define('MyApp.views.cliente.EnderecoClienteGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.enderecoclientegridpanel',
    requires: [

       'MyApp.stores.EnderecoStore'
    ],



    initComponent: function () {

        this.store = Ext.create('MyApp.stores.EnderecoStore');
        this.columns = this.buildColumns();
        this.weight = 300;
        this.maxHeight = 200;


        this.callParent();


    },

    buildColumns: function () {




        return [



            {
                header    : 'Tipo',
                dataIndex : 'tipoLogradouro',
                width     :  100
            },

            {
                header    : 'Logradouro',
                dataIndex : 'logradouro',
                flex     :  1
            },

            {
                header    : 'Número',
                dataIndex : 'numero',
                width     :  80
            },

            {
                header    : 'Cep',
                dataIndex : 'cep',
                width     :  80
            },

            {
                header    : 'Cidade',
                dataIndex : 'cidade',
                width     :  150
            },

            {
                header    : 'Estado',
                dataIndex : 'estado',
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

                                        var store = Ext.data.StoreManager.lookup('enderecoStore')

                                        var item = store.getAt(rowIndex)

                                        store.remove(item)

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

    emptyText: 'Nenhum endereço encontrado! '


});
