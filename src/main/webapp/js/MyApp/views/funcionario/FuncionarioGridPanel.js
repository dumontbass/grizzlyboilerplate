Ext.define('MyApp.views.funcionario.FuncionarioGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.FuncionarioGridPanel',
    requires: [
        'MyApp.stores.FuncionarioStore',
        'MyApp.models.Funcionario',
        'Ext.ux.RowExpander',
        'MyApp.views.funcionario.FuncionarioFormPanel'

    ],


    stripeRows: true,
    cls: 'grid-row',
    columnLines: true,
    selType: 'rowmodel',

    emptyText: 'Nenhum funcionario encontrado! ',


    initComponent: function () {
        this.store = MyApp.stores.FuncionarioStore;
        this.columns = this.buildColumns();
        this.callParent();

    },
    buildColumns: function () {
        return [

            { header: 'Nome', dataIndex: 'nome', flex: 1 },

            { header: 'Sobrenome', dataIndex: 'sobrenome', flex: 1 },

            { header: 'Email', dataIndex: 'email', width: 100 },

            { header: 'RG', dataIndex: 'rg', width: 70 },

            { header: 'Tel. Res', dataIndex: 'telefoneRes', width: 100 },

            { header: 'Celular', dataIndex: 'telefoneCel', width: 100 },

            { header: 'Nascimento', dataIndex: 'nascimento', width: 90, xtype:'datecolumn', renderer: this.renderData},


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
                                title:'Remover funcionário',
                                msg: 'Deseja realmente remover este funcionario ?',
                                buttonText: {yes: "Remover",cancel: "Cancelar"},
                                fn: function(btn){

                                    if (btn === 'yes') {

                                        var funcionario = MyApp.stores.CompraStore.getAt(rowIndex)

                                        MyApp.stores.CompraStore.remove(funcionario)

                                        MyApp.stores.CompraStore.sync();
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

    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl : [

            '<p><b>Endereco:</b> {endereco}</p>',
            '<p><b>Tel. Res.:</b> {telefoneRes}</p>',
            '<p><b>Celular:</b> {telefoneCel}</p>'
        ]

        }


    ],

    listeners: {
        selectionchange: function(model, records) {


            var win = this.up('window')

            var nascimento = records[0].data.nascimento


            records[0].data.nascimento = new Date(nascimento)

            if (records[0]) {

                var form = Ext.create('MyApp.views.funcionario.FuncionarioFormPanel', {  edicao: true

                });

                win.removeAll(); win.add(form);

                form.loadRecord(records[0]);


            }
        }
    },

    renderData : function(value){


        if ( value == null) return 'data n rolou'


        return Ext.Date.format(new Date(value),'d/m/Y')
    }



});
