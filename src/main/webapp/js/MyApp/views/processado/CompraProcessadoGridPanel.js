Ext.define('MyApp.views.processado.CompraProcessadoGridPanel', {
    //extend: 'MyApp.views.compra.CompraGridPanel',
    alias: 'widget.CompraProcessadoGridPanel',
    requires: [
        'MyApp.stores.CompraStore',
        'MyApp.models.Compra'

    ],

    stripeRows: true,
    cls: 'grid-row',
    columnLines: true,
    selType: 'rowmodel',

    emptyText: 'Nenhum item encontrado! ',

    initComponent: function () {
        this.store = MyApp.stores.CompraStore;
        this.columns = this.buildColumns();
        this.callParent();


    },

    buildColumns: function () {
        return [



            { header: 'Localização', dataIndex: 'localizacao' }

        ]
    },

    listeners: {
        selectionchange: function(model, records) {


            var win = this.up('window')



            var data = records[0].data.data
            var validade = records[0].data.validade

            records[0].data.data = new Date(data)
            records[0].data.validade = new Date(validade)

            if (records[0]) {




            }
        }
    },



    renderItem : function(value){


        return value


    },


});
