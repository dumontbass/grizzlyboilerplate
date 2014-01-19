Ext.define('MyApp.views.venda.VendaGridPanel', {
    extend   : 'Ext.grid.Panel',
    alias    : 'widget.vendagridpanel',
    requires : [
        'MyApp.stores.VendaStore',
        'MyApp.models.Venda'


    ],

    //style
    stripeRows: true,
    cls: 'grid-row',
    columnLines: true,
    selType: 'rowmodel',


    // conf


    emptyText: 'Nenhuma venda encontrada! ',


    initComponent : function() {
        this.store   = Ext.create('MyApp.stores.VendaStore');
        this.columns = this.buildColumns();
        this.callParent();


    },





    buildColumns : function() {
        return [

            {
                header    : 'Cliente',
                renderer: function(value, record){

                    console.log(record.record.data.cliente)

                    return  record.record.data.cliente.nome;

                },
                dataIndex : 'fornecedor.nome',
                width     :  200
            },
            {
                header    : 'Valor total',
                dataIndex : 'valorTotal',
                width     :  200,
                renderer  :  moneyBRL
            },
            {
                header    : 'Meio pagto.',
                width     :  200,
                dataIndex : 'meioPagamento'
            },
            {
                header    : 'Data',
                width     :  80,
                dataIndex : 'dataVenda',
                renderer  :  dateFormat
            },

            {
                xtype: 'actioncolumn',
                sortable: false,
                menuDisabled: true,
                header    : 'Excluir',
                width: 60,
                align: 'center',
                vendas: [
                    { icon: 'img/trash.png',
                        handler: function (grid, rowIndex, colIndex) {

                            Ext.MessageBox.confirm('Remover venda', 'Deseja realmente remover este venda ?', function (btn) {
                                if (btn === 'yes') {


                                    var store = grid.getStore()

                                    var venda = store.getAt(rowIndex)

                                    store.remove(venda)

                                    store.sync();
                                }
                                else {
                                    return;
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

               /* var form = Ext.create('MyApp.views.venda.VendaFormPanel', {  edicao: true

                });

                win.removeAll(); win.add(form);

                form.loadRecord(records[0]);*/


            }
        }
    },

    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl : new Ext.XTemplate(

            '<table class="rowexpanderGrid">',
            '<tr>',
            '<td>Nome</td>',
            '<td>Quantidade</td>',
            '<td>Descricao</td>',
            '<td>Valor Unit.</td>',
            '<td>Valor<td>',

            '</tr>',

            '<tpl for="produtos">',
            '<tr>',
            '<td>{nome}</td>',
            '<td>{quantidade}</td>',
            '<td>{descricao}</td>',
            '<td>{[moneyBRL(values.valorUnitario)]}</td>',
            '<td>{[moneyBRL(values.valorVenda)]}</td>',

            '</tr>',
            '</tpl>',
            '</table>'

        )

    }

    ]


});
