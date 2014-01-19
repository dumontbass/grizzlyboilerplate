Ext.define('MyApp.views.item.ItemGridPanel', {
    extend   : 'Ext.grid.Panel',
    alias    : 'widget.itemgridpanel',
    requires : [
        'MyApp.stores.ItemStore',
        'MyApp.models.Item',
        'MyApp.views.item.ItemFormPanel',
        'MyApp.util.BarcodeGenerator'

    ],

    //style
    stripeRows: true,
    cls: 'grid-row',
    columnLines: true,
    selType: 'rowmodel',


    // conf


    emptyText: 'Nenhum item encontrado! ',


    initComponent : function() {
        this.store   = Ext.create('MyApp.stores.ItemStore');
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
                flex: 0.4,
                dataIndex: 'quantidadeTotal',
                align: 'center',
                itemId: 'quantidadeTotal',
                header: 'Estoque'
            },

            {
                header    : 'Categoria',
                dataIndex : 'categoria',
                width     :  100
            },
            {
                header    : 'Lim. mínimo',
                width     :  70,
                dataIndex : 'limiteMinimo',
                renderer  : function(v){

                    var total =  Ext.ComponentQuery.query('#quantidadeTotal')[0];

                    //TODO - limite
                    if(false){

                        return '<span style="color: red;font-weight: bold;">'+v+'</span>';
                    }

                    else {
                        return v;
                    }



                }
            },
            {
                header    : 'Un. Medida',
                width     :  70,
                dataIndex : 'unMedida'
            },
            {
                header    : 'Processável',
                dataIndex : 'processavel',
                width     :  80,
                renderer  : this.renderProcessavel

            },
            {
                header    : 'Fracionável',
                dataIndex : 'fracionavel',
                width     :  80,
                renderer  : this.renderProcessavel
            },
            {
                header    : 'Fat. Correção',
                dataIndex : 'fatorCorrecao',
                width     :  80,
                renderer  : moneyFormat
            },
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
                                title:'Remover item',
                                msg: 'Deseja realmente remover este item ?',
                                buttonText: {yes: "Remover",cancel: "Cancelar"},
                                fn: function(btn){
                                    if (btn === 'yes') {

                                        var store = grid.getStore()

                                        var item = store.getAt(rowIndex)

                                        store.remove(item)

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

                var form = Ext.create('MyApp.views.item.ItemFormPanel', {  edicao: true

                });

                win.removeAll(); win.add(form);

                form.loadRecord(records[0]);


            }
        }
    }

   /* plugins: [{
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

    ]*/


});
