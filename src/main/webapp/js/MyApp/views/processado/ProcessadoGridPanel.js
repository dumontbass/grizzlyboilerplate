Ext.define('MyApp.views.processado.ProcessadoGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.ProcessadoGridPanel',
    requires: [
        'MyApp.stores.ProcessadoStore',
        'MyApp.models.Processado'

    ],

    //style
    stripeRows: true,
    cls: 'grid-row',
    columnLines: true,
    selType: 'rowmodel',


    // conf


    emptyText: 'Nenhum item encontrado! ',

    initComponent: function () {
        this.store = MyApp.stores.ProcessadoStore;
        this.columns = this.buildColumns();
        this.callParent();


    },

    renderData : function(value){




        return value ;
    },

    buildColumns: function () {
        return [

            {
                header: 'Nome',
                dataIndex: 'novoNome',
                flex: 1
            },
            {

                header: 'Validade',
                dataIndex: 'novaValidade',
                width: 120,
                renderer: dateFormat


            },
            {
                header: 'Quantidade',
                dataIndex: 'quantidadeProcessada',
                width: 80

            },

            {
                header: 'Peças',
                dataIndex: 'numPecas',
                width: 80
            },

            {
                header: 'Peso por peça',
                dataIndex: 'pesoPorPeca',
                width: 80

            },

            {
                header: 'Local',
                dataIndex: 'local',
                width: 80

            },


            {
                xtype: 'actioncolumn',
                width: 80,
                sortable: false,
                menuDisabled: true,
                align : 'center',
                header: 'Excluir',
                items: [
                    { icon: 'img/trash.png',
                        handler: function (grid, rowIndex, colIndex) {


                            Ext.MessageBox.confirm('Remover item', 'Deseja realmente remover este item ?', function (btn) {
                                if (btn === 'yes') {

                                    var cliente = MyApp.stores.ProcessadoStore.getAt(rowIndex)

                                    MyApp.stores.ProcessadoStore.remove(cliente)

                                    MyApp.stores.ProcessadoStore.sync();
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

    } ,

    listeners: {
        selectionchange: function(model, records) {


            var win = this.up('window')

            if (records[0]) {

                var form = Ext.create('MyApp.views.processado.ProcessadoFormPanel', {  edicao: true

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
            '<td>Nome</td>',
            '<td>Quantidade</td>',
            '<td>Un. Medida</td>',
            '<td>Lote</td>',
            '<td>Valor</td>',
            '<td>Validade</td>',
            '<td>Localização</td>',
            '</tr>',

            '<tr>',
            '<td>{nome}</td>',
            '<td>{quantidadeTotal}</td>',
            '<td>{unMedida}</td>',
            '<td>{lote}</td>',
            '<td>{[moneyBRL(values.valor)]}</td>',
            '<td>{[ dateFormat(values.validade)]}</td>',
            '<td>{localizacao}</td>',
            '</tr>',



            '</table>'

        )

    }


    ]

});
