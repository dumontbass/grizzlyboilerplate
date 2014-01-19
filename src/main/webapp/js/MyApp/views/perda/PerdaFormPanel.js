Ext.define('MyApp.views.perda.PerdaFormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.PerdaFormPanel',
    requires: ['MyApp.stores.PerdaStore','MyApp.stores.ItemStore','MyApp.models.Item'],


    layout: 'column',
    bodyStyle: 'padding: 10px; background-color: #DCE5F0; border-left: none;',
    defaultType: 'textfield',


    defaults: {

        labelWidth: 150,
        columnWidth: 0.4
    },


    initComponent: function () {
        this.items = this.buildItems();

        this.callParent();
    },
    buildItems : function() {
        return [
        {
            xtype: 'combobox',
            fieldLabel: 'Selecione o item',
            name: 'item',
            displayField: 'nome',
            valueField: 'item',
            store: MyApp.stores.ItemStore,
            queryMode: 'local', //default behavior
            forceSelection: true,
            anchor: '80%',
            typeAhead: true,
            typeAheadDelay: 100
        },
        {
            fieldLabel: 'Data',
            name: 'data',
            xtype: 'datefield',
            format: 'd/m/Y',
            submitFormat: 'Y-m-d H:i:s',
            allowBlank: false,


            anchor: '20%'

        },
        {
            fieldLabel: 'Quantidade',
            name: 'quantidade',
            xtype: 'numberfield'
        },
        {
            fieldLabel: 'Descrição',
            name: 'descricao'

        }
        ];

    },

    buttons: [
        {
            text: 'Salvar',
            handler: function () {

                var form = this.up('form').getForm();

                var item = Ext.create('MyApp.models.Perda', form.getFieldValues());

                item.save({
                    success: function (item) {
                        console.log(item)


                        MyApp.stores.PerdaStore.load();

                        //user.save(); //PUT /users/123
                    }
                });





            }
        },
        {
            text: 'Cancelar',
            handler: function(){


                this.up('form').getForm().reset();

            }
        }
    ]
});

