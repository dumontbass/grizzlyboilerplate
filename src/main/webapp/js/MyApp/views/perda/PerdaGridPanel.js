Ext.define('MyApp.views.perda.PerdaGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.PerdaGridPanel',
    requires: [
        'MyApp.stores.PerdaStore',

        'Ext.selection.CheckboxModel'

    ],

    initComponent: function () {
        this.store = MyApp.stores.PerdaStore;
        this.columns = this.buildColumns();
        this.callParent();

        var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToMoveEditor: 1,
            autoCancel: false
        });
    },


    buildColumns: function () {
        return [


            {
                header: 'Item',
                dataIndex: 'item',
                width: 100
            },
            {

                header: 'Data',
                dataIndex: 'data',
                width: 95


            }
        ]
    },

    stripeRows: true,
    animCollapse: true,
    selType: 'cellmodel'




});
