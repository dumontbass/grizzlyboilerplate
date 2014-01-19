Ext.define('MyApp.views.cliente.ClienteGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.ClienteGridPanel',
    requires: [
        'MyApp.stores.ClienteStore',
        'MyApp.models.Cliente',
        'Ext.ux.RowExpander',
        'MyApp.views.cliente.ClienteFormPanel'

    ],

    stripeRows: true,
    cls: 'grid-row',
    columnLines: true,
    selType: 'rowmodel',

    emptyText: 'Nenhum cliente encontrado! ',

    initComponent: function () {
        this.store = Ext.create('MyApp.stores.ClienteStore');
        this.columns = this.buildColumns();
        this.callParent();

    },
    buildColumns: function () {
        return [

            { header: 'Nome', dataIndex: 'nome', flex: 1 },

            { header: 'Sobrenome', dataIndex: 'sobrenome', flex: 1 },

            { header: 'Email', dataIndex: 'email', width: 100 },

            { header: 'RG', dataIndex: 'rg', width: 70 },

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


                            Ext.MessageBox.confirm({

                                title:'Remover cliente',
                                msg: 'Deseja realmente remover este cliente ?',
                                buttonText: {yes: "Remover",cancel: "Cancelar"},
                                fn: function(btn){
                                    console.log('you clicked: ',btn); //you clicked:  yes
                                    if (btn === 'yes') {

                                        var cliente = MyApp.stores.ClienteStore.getAt(rowIndex)

                                        MyApp.stores.ClienteStore.remove(cliente)

                                        MyApp.stores.ClienteStore.sync();
                                    }
                                    else {
                                        return;
                                    }
                                }


                            });


                        }
                    }
                ]
            },

            {
                xtype: 'actioncolumn',
                width: 50,
                align: 'center',
                sortable: false,
                menuDisabled: true,
                header: 'Editar',
                items: [
                    { icon: 'img/editar.png',
                        handler: function (grid, rowIndex, colIndex, item, e,record) {

                            var win = this.up('window')

                            var cliente = record;

                            var nascimento = cliente.get('nascimento');

                            cliente.set('nascimento', new Date(nascimento));

                            if (cliente) {

                                var form = Ext.create('MyApp.views.cliente.ClienteFormPanel', {  edicao: true

                                });


                                var enderecosStore = Ext.data.StoreManager.lookup('enderecoStore');

                                var enderecos = cliente.get('enderecos');

                                for(var endereco in enderecos){

                                        enderecosStore.add(enderecos[endereco])
                                };

                                win.removeAll(); win.add(form);

                                form.loadRecord(cliente);


                            }

                        }
                    }
                ]
            }
        ]

    },

    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl : [

            '<tpl for="enderecos">',
            '<p><b>Endereco:</b> {tipoLogradouro} {logradouro} , {numero}, {bairro} , {cidade} - {estado} </p>',

            '</tpl>'
        ]

        }


    ],

    renderData : function(value){


        if ( value == null) return '-'


        return Ext.Date.format(new Date(value),'d/m/Y')
    }

});
