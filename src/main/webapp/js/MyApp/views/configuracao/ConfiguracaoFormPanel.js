Ext.define('MyApp.views.configuracao.ConfiguracaoFormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.ConfiguracaoFormPanel',

    id: 'configuracaoForm',
    bodyStyle: 'padding: 10px; background-color: #DCE5F0; border-left: none;',
    defaultType: 'textfield',
    defaults: {

        labelWidth: 150
    },

    edicao: false,

    fieldDefaults: {
        labelAlign: 'top'
    },


    initComponent: function () {
        this.items = this.buildConfiguracaos();

        this.callParent();
    },
    buildConfiguracaos: function () {
        return [
            {
                xtype: 'fieldcontainer',

                labelStyle: 'color:#888;padding:0',
                layout: 'hbox',
                defaultType: 'textfield',
                fieldDefaults: {
                    labelAlign: 'top',
                    margins: '0 10 10 0'
                },
                items: [

                ]
            }
        ]
    },
    buttons: [
        {
            text: 'Salvar',
            handler: function () {








            }

        }
    ]
});

