Ext.define('MyApp.views.produto.InteiroFormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.InteiroFormPanel',
    requires: [
        'MyApp.stores.InteiroStore',
        'MyApp.stores.ItemStore',
        'MyApp.models.Item',
        'MyApp.views.produto.InteiroGridPanel',
        'MyApp.models.Inteiro'],


    bodyStyle: 'padding: 10px; background-color: #DCE5F0; border-left: none;',
    defaultType: 'textfield',



    defaults: {

        labelWidth: 70
    },


    initComponent: function () {
        this.items = this.buildItems();

        var win = Ext.WindowMgr.get('produto-win')
        win.setSize(900, 500)

        this.callParent();
    },
    buildItems: function () {





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

                    {
                        xtype: 'combobox',
                        fieldLabel: 'Selecione o item',
                        name: 'item',
                        displayField: 'nome',
                        valueField: 'item',
                        store: Ext.create('MyApp.stores.ItemStore'),
                        queryMode: 'local', //default behavior
                        forceSelection: true,
                        flex: 0.7,
                        typeAhead: true,
                        typeAheadDelay: 100,
                        listConfig: {
                            listeners: {
                                afterrender: function (list, record) {

                                    var store = list.getStore();

                                    store.clearFilter(true);
                                    store.filter('processavel', false);
                                    store.filter('fracionavel', false);

                                },

                                itemclick: function(list, record){

                                    var form = this.up('form').getForm();

                                    form.setValues('item', record.raw)



                                    console.log(record);
                                }
                            }
                        }

                    },
                    {
                        flex: 1,
                        name: 'nome',
                        fieldLabel: 'Nome de venda',

                        allowBlank: false

                    },
                    {
                        xtype: 'filefield',
                        id: 'form-file',
                        emptyText: 'Selecione uma imagem',
                        fieldLabel: 'Imagem',
                        name: 'imagem',
                        width: 150,
                        buttonText: '',
                        buttonConfig: {
                            iconCls: 'upload-icon'
                        }
                    },
                    {
                        width: 100,
                        name: 'valor',
                        fieldLabel: 'Valor',
                        xtype: 'numberfield',
                        step: 0.01,
                        allowBlank: false,
                        minValue: 0,
                        value: 0.0,
                        decimalSeparator: ',',
                        maxValue: 10000.00,
                        thousandSeparator: '.',
                        decimalPrecision: 2,
                        submitLocaleSeparator : false,
                        alwaysDisplayDecimals: true

                    }
                ]
            },

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


                    {
                        xtype: 'textarea',
                        width: 400,
                        name: 'descricao',
                        fieldLabel: 'Descricao',
                        allowBlank: false

                    },

                    {
                        flex: 1,
                        name: 'opcionais',
                        fieldLabel: 'Opcionais',

                        allowBlank: false

                    },
                    {
                        xtype: 'combobox',
                        flex: 0.6,
                        store: Ext.create('MyApp.stores.CategoriaStore'),
                        fieldLabel: 'Categoria',
                        valueField: 'nome',
                        displayField: 'nome',
                        name: 'categoria',
                        queryMode: 'remote', //default behavior
                        forceSelection: true,
                        width: 220,
                        typeAhead: true,
                        typeAheadDelay: 1000

                    }

                ]
            },
            {
                xtype: 'fieldset',
                title: 'Produtos inteiros',
                defaultType: 'textfield',
                defaults: {
                    anchor: '100%'
                },

               // height: 500,
                items: [
                    MyApp.views.produto.InteiroGridPanel
                ]
            }
        ];

    },

    buttons: [
        {
            text: 'Salvar',
            handler: function () {

                var form = this.up('form').getForm();

                var item = Ext.create('MyApp.models.Inteiro', form.getFieldValues());

                item.save({
                    success: function (item) {
                        console.log(item)


                        var imagem = form.findField('imagem');

                        console.log(imagem)


                        MyApp.stores.InteiroStore.load();

                        //user.save(); //PUT /users/123
                    }
                });


            }
        },
        {
            text: 'Cancelar',
            handler: function () {

                this.up('form').getForm().reset();


            }
        }
    ]
});

