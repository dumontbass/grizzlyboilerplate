Ext.define('MyApp.views.pedido.PedidoGridPanel', {
    extend   : 'Ext.grid.Panel',
    alias    : 'widget.pedidogridpanel',
    requires : [
        'MyApp.stores.PedidoStore',
        'MyApp.models.Pedido',
        'MyApp.views.pedido.PedidoFormPanel'

    ],

    //style
    stripeRows: true,
    cls: 'grid-row',
    columnLines: true,
    selType: 'rowmodel',


    // conf


    emptyText: 'Nenhum pedido encontrado! ',


    initComponent : function() {
        this.store   = Ext.create('MyApp.stores.PedidoStore');
        this.columns = this.buildColumns();
        this.callParent();


    },


    renderProcessavel : function(value){

        return value ? 'sim' : 'não';
    },


    buildColumns : function() {
        return [
            { header    : 'Nome', dataIndex : 'nome', flex:1 },

            {
                header    : 'Pedido',
                dataIndex : 'pedido',
                width     :  100
            },
            {
                xtype: 'actioncolumn',
                sortable: false,
                menuDisabled: true,
                header    : 'Excluir',
                width: 60,
                align: 'center',
                pedidos: [
                    { icon: 'img/trash.png',
                        handler: function (grid, rowIndex, colIndex) {

                            Ext.MessageBox.confirm( {
                                title:'Remover pedido',
                                msg: 'Deseja realmente remover este pedido ?',
                                buttonText: {yes: "Remover",cancel: "Cancelar"},
                                fn: function(btn){
                                    if (btn === 'yes') {

                                        var store = grid.getStore()

                                        var pedido = store.getAt(rowIndex)

                                        store.remove(pedido)

                                        store.sync();
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
    ] },

    listeners: {
        selectionchange: function(model, records) {


            var win = this.up('window')

            if (records[0]) {

                var form = Ext.create('MyApp.views.pedido.PedidoFormPanel', {  edicao: true

                });

                win.removeAll(); win.add(form);

                form.loadRecord(records[0]);


            }
        }
    },

    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl : new Ext.XTemplate(

            '<table class="rowexpanderGrid">',
            '<tr>',
            '<td>Código de barras</td>',

            '</tr>',

            '<tr>',
            '<td>{[MyApp.util.BarcodeGenerator.generateHtml(values.codigoBarras)]}</td>',

            '</tr>',

            '</table>'

        )

    }

    ]


});
