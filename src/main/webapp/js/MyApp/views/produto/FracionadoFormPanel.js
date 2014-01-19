Ext.define('MyApp.views.produto.FracionadoFormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.FracionadoFormPanel',
    requires: [
        'MyApp.stores.FracionadoStore',
        'MyApp.stores.ItemStore',
        'MyApp.models.Item',
        'MyApp.views.produto.FracionadoGridPanel',
        'MyApp.models.Fracionado'],

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
                                    store.filter('fracionavel', true);

                                },

                                itemclick: function(list, record){

                                    var form = this.up('form').getForm();

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
                        emptyText: 'Seelecione uma imagem',
                        fieldLabel: 'Imagem',
                        name: 'imagem',
                        width: 150,
                        buttonText: '',
                        buttonConfig: {
                            iconCls: 'upload-icon'
                        }
                    },
                    {
                        xtype: 'numberfield',
                        width: 100,
                        name: 'valor',
                        fieldLabel: 'Valor',
                        step: 0.01,
                        allowBlank: false,
                        minValue: 0,
                        value: 0.0,
                        decimalSeparator: ',',
                        maxValue: 10000.00,
                        thousandSeparator: '.',
                        decimalPrecision: 2,
                        submitLocaleSeparator : false,
                        alwaysDisplayDecimals: true,

                        allowBlank: false

                    },
                    {
                        xtype: 'numberfield',
                        width: 100,
                        name: 'fracao',
                        fieldLabel: 'Fração',

                        allowBlank: false

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
                title: 'Produtos fracionados',
                defaultType: 'textfield',
                defaults: {
                    anchor: '100%'
                },
                height: 500,
                items: [
                    MyApp.views.produto.FracionadoGridPanel
                ]
            }


        ];

    },

    buttons: [
        {
            text: 'Salvar',
            handler: function () {

                var form = this.up('form').getForm();

                var item = Ext.create('MyApp.models.Fracionado', form.getFieldValues());

                item.save({
                    success: function (item) {
                        console.log(item)


                        MyApp.stores.FracionadoStore.load();

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

