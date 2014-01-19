Ext.define('MyApp.views.categoria.CategoriaGridPanel', {
    extend   : 'Ext.grid.Panel',
    alias    : 'widget.categoriagridpanel',
    requires : [
        'MyApp.stores.CategoriaStore',
        'MyApp.models.Categoria',
        'MyApp.views.categoria.CategoriaFormPanel'

    ],

    //style
    stripeRows: true,
    cls: 'grid-row',
    columnLines: true,
    selType: 'rowmodel',


    // conf


    emptyText: 'Nenhum categoria encontrado! ',


    initComponent : function() {
        this.store   = Ext.create('MyApp.stores.CategoriaStore');
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
                                title:'Remover categoria',
                                msg: 'Deseja realmente remover este categoria ?',
                                buttonText: {yes: "Remover",cancel: "Cancelar"},
                                fn: function(btn){
                                    if (btn === 'yes') {

                                        var store = grid.getStore()

                                        var categoria = store.getAt(rowIndex)

                                        store.remove(categoria)

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

                var form = Ext.create('MyApp.views.categoria.CategoriaFormPanel', {  edicao: true

                });

                win.removeAll(); win.add(form);

                form.loadRecord(records[0]);


            }
        }
    },

    plugins: [

       /* {
        ptype: 'rowexpander',
        rowBodyTpl : new Ext.XTemplate(

            '<table class="rowexpanderGrid">',
            '<tr>',
            '<td></td>',

            '</tr>',

            '<tr>',
            '<td></td>',

            '</tr>',

            '</table>'

        )

    }*/

    ]


});
