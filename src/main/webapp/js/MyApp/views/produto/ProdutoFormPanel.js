Ext.define('MyApp.views.produto.ProdutoFormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.ProdutoFormPanel',
    requires: ['MyApp.stores.ProdutoStore','MyApp.stores.ItemStore','MyApp.models.Item'],


    bodyStyle: 'padding: 10px; background-color: #DCE5F0; border-left: none;',
    defaultType: 'textfield',


    defaults: {

        labelWidth: 70
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
            queryMode: 'remote', //default behavior
            forceSelection: true,
            anchor: '80%',
            typeAhead: true,
            typeAheadDelay: 100
        }];

    },

    buttons: [
        {
            text: 'Salvar',
            handler: function () {

                var form = this.up('form').getForm();

                var item = Ext.create('MyApp.models.Produto', form.getFieldValues());

                item.save({
                    success: function (item) {
                        console.log(item)


                        MyApp.stores.ProdutoStore.load();

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

