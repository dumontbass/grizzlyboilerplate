Ext.define('MyApp.views.pdv.PdvFormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.pdvformpanel',

    id : 'pdvForm',
    bodyStyle: 'padding: 10px; background-color: #DCE5F0; border-left: none;',
    defaultType: 'textfield',



    fieldDefaults: {
        labelAlign: 'top'
    },


    initComponent: function () {
        this.items = this.buildItems();

        this.callParent();
    },
    buildItems: function () {
        return [



            ]

    }

});

