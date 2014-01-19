Ext.define('MyApp.views.cardapio.CardapioGridPanel', {
    extend   : 'Ext.grid.Panel',
    alias    : 'widget.cardapiogridpanel',
    requires : [
        'MyApp.stores.CardapioStore',
        'MyApp.models.Cardapio',
        'MyApp.views.cardapio.CardapioFormPanel'

    ],

    //style
    stripeRows: true,
    cls: 'grid-row',
    columnLines: true,
    selType: 'rowmodel',


    // conf


    emptyText: 'Nenhum cardapio encontrado! ',


    initComponent : function() {
        this.store   = Ext.create('MyApp.stores.CardapioStore');
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
                header    : 'Categoria',
                dataIndex : 'nome',
                width     :  100
            },
            {
                xtype: 'actioncolumn',
                sortable: false,
                menuDisabled: true,
                header    : 'Excluir',
                width: 60,
                align: 'center',
                cardapios: [
                    { icon: 'img/trash.png',
                        handler: function (grid, rowIndex, colIndex) {

                            Ext.MessageBox.confirm( {
                                title:'Remover cardapio',
                                msg: 'Deseja realmente remover este cardapio ?',
                                buttonText: {yes: "Remover",cancel: "Cancelar"},
                                fn: function(btn){
                                    if (btn === 'yes') {

                                        var store = grid.getStore()

                                        var cardapio = store.getAt(rowIndex)

                                        store.remove(cardapio)

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



        }
    },

    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl : new Ext.XTemplate(

            '<table class="rowexpanderGrid">',
            '<tr>',
            '<td>Nome</td>',

            '</tr>',
            '<tpl for="categorias">',
            '<tr>',
            '<td>{nome}</td>',

            '</tr>',
            '</tpl>',
            '</table>'

        )

    }

    ]


});
