Ext.define('MyApp.views.fornecedor.FornecedorGridPanel', {
    extend   : 'Ext.grid.Panel',
    alias    : 'widget.fornecedorgridpanel',
    requires : [
        'MyApp.stores.FornecedorStore',
        'MyApp.models.Fornecedor',
        'MyApp.views.fornecedor.FornecedorFormPanel'

    ],

    //style
    stripeRows: true,
    cls: 'grid-row',
    columnLines: true,
    selType: 'rowmodel',


    // conf


    emptyText: 'Nenhum fornecedor encontrado! ',


    initComponent : function() {
        this.store   = Ext.create('MyApp.stores.FornecedorStore');
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
                xtype: 'actioncolumn',
                sortable: false,
                menuDisabled: true,
                header    : 'Excluir',
                width: 60,
                align: 'center',
                items: [
                    { icon: 'img/trash.png',
                        handler: function (grid, rowIndex, colIndex) {

                            Ext.MessageBox.confirm( {
                                title:'Remover fornecedor',
                                msg: 'Deseja realmente remover este fornecedor ?',
                                buttonText: {yes: "Remover",cancel: "Cancelar"},
                                fn: function(btn){
                                    if (btn === 'yes') {

                                        var store = grid.getStore()

                                        var fornecedor = store.getAt(rowIndex)

                                        store.remove(fornecedor)

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

                var form = Ext.create('MyApp.views.fornecedor.FornecedorFormPanel', {  edicao: true

                });

                win.removeAll(); win.add(form);

                form.loadRecord(records[0]);


            }
        }
    },

    plugins: [

        {
        ptype: 'rowexpander',
        rowBodyTpl : new Ext.XTemplate(

            '<tpl for="endereco">',

                '<p>{logradouro}</p>',

            '</tpl>'

        )

    }

    ]


});
