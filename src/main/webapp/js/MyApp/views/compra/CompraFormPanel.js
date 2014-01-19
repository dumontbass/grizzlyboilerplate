Ext.define('MyApp.views.compra.CompraFormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.compraformpanel',
    xtype: 'compraform',
    requires: [
        'MyApp.stores.CompraStore',
        'MyApp.stores.ItemStore',
        'MyApp.models.Item',
        'MyApp.models.Compra',
        'MyApp.models.ItemCompra',

        'MyApp.views.compra.ItemsCompraGridPanel'
    ],
    bodyStyle: 'padding: 10px; background-color: #DCE5F0; border-left: none;',


    defaults: { labelWidth: 150 },

    edicao: false,

    initComponent: function () {
        this.items = this.buildItems();
        this.callParent();

    },

    buildItems: function () {
        return [

            {
                xtype: 'fieldset',
                title: 'Dados da compra',
                labelStyle: 'color:#888;padding:0',
                layout: 'hbox',
                defaultType: 'textfield',
                fieldDefaults: {
                    labelAlign: 'top',
                    margins: '0 10 10 0'
                },
                items: [

                    { fieldLabel: 'NF', name: 'notaFiscal', width: 200 },
                    { fieldLabel: 'Valor Total', name: 'valorTotal', xtype: 'numberfield',decimalSeparator: ',', value: 0.0, width: 200, renderer: moneyBRL, readOnly: true, hideTrigger: true },
                    {
                        xtype: 'combobox',
                        store: Ext.create('MyApp.stores.FornecedorStore'),
                        queryMode: 'local',
                        typeAhead: true,
                        displayField: 'nome',
                        valueField: 'nome',
                        fieldLabel: 'Fornecedor',
                        name: 'fornecedor',
                        flex: 1

                    },
                    { fieldLabel: 'Data', name: 'dataCompra',  format: 'd/m/Y', xtype: 'datefield', width: 150, value: new Date() }

                ]
            },

            {
                xtype: 'fieldset',
                title: 'Itens',
                labelStyle: 'color:#888;padding:0',
                layout: 'vbox',
                defaultType: 'textfield',
                fieldDefaults: {
                    labelAlign: 'top',
                    margins: '0 10 10 0'
                },
                items: [

                    {
                        xtype: 'container',
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
                                itemId: 'comboboxItemCompra',
                                displayField: 'nome',
                                valueField: 'id',
                                lazyRender: true,
                                width: 400,
                                store: Ext.create('MyApp.stores.ItemStore'),

                                listConfig: {
                                    itemTpl: '<div>Un: {unMedida} <br />cat: {categoria}</div>'
                                },
                                queryMode: 'local', //default behavior
                                forceSelection: true,
                                flex: 1,
                                typeAhead: true,
                                typeAheadDelay: 1000,
                                listConfig: {
                                    listeners: {
                                        itemclick: function (list, record) {


                                            var unMedida = Ext.getCmp('unMedida');

                                            unMedida.setValue(record.get('unMedida'))


                                            var form = this.up('form').getForm();
                                            var valorPor = form.findField('valorPor');

                                            var texto = valorPor.getFieldLabel()

                                            valorPor.setFieldLabel('Valor por '+unMedida.getValue())

                                        }
                                    }
                                },
                                listeners: {
                                    select: {
                                        fn: function (cb, records) {

                                            //window.location.search = Ext.urlEncode({"lang":record.get("code"),"charset":record.get("charset")});
                                        },
                                        scope: this
                                    },
                                    blur: {

                                        fn: function (me, The, eOpts) {

                                            var obj = me.displayTplData[0];

                                            var unMedida = Ext.getCmp('unMedida');

                                            unMedida.setValue(obj.unMedida);
                                            var form = this.up('form').getForm();
                                            var valorPor = form.findField('valorPor');

                                            var texto = valorPor.getFieldLabel()
                                            valorPor.setFieldLabel('Valor por '+unMedida.getValue())

                                        }

                                    }
                                }

                            },

                            {
                                fieldLabel: 'Quantidade',
                                name: 'quantidade',
                                xtype: 'numberfield',
                                width: 90,
                                value: 1,
                                minValue: 0,
                                step: 1.000,
                                minValue: 0,
                                value: 0.0,
                                decimalSeparator: ',',
                                maxValue: 10000.00,
                                thousandSeparator: '.',
                                decimalPrecision: 3,
                                invalidText: 'Não válido',
                                listeners: {

                                    change: function(field, v){


                                        var form = this.up('form').getForm();

                                        var quantidade = form.findField('quantidade').getValue();

                                        var valor = form.findField('valor').getValue();

                                        var res = valor/quantidade;

                                        form.findField('valorPor').setValue(res)
                                    }
                                }


                            },
                            { fieldLabel: 'Un. Medida', name: 'unMedida', id: 'unMedida', width: 90, readOnly: true },
                            { fieldLabel: 'Lote', name: 'lote', width: 100, margins: '0 10 10 10' }


                        ]
                    },


                    {
                        xtype: 'container',

                        labelStyle: 'color:#888;padding:0',
                        layout: 'hbox',
                        defaultType: 'textfield',
                        fieldDefaults: {
                            labelAlign: 'top',
                            margins: '0 10 10 0'
                        },
                        items: [

                            { fieldLabel: 'Validade', name: 'validade', submitFormat: 'Y-m-d', format: 'd/m/Y', xtype: 'datefield', width: 150, value: new Date()},
                            {
                                fieldLabel: 'Valor',
                                name: 'valor',
                                xtype: 'numberfield',
                                step: 0.01,
                                minValue: 0,
                                value: 0.0,
                                decimalSeparator: ',',
                                maxValue: 10000.00,
                                thousandSeparator: '.',
                                decimalPrecision: 2,
                                width: 150,
                                currencySign: 'R$',
                                submitLocaleSeparator : false,
                                alwaysDisplayDecimals: true,
                                renderData: function (v) { return Ext.util.Format.currency(v,'R$',2) },
                                listeners: {
                                    blur: function (field, v) {

                                        var form = this.up('form').getForm();

                                        var quantidade = form.findField('quantidade').getValue();

                                        var valor = form.findField('valor').getValue();

                                        var res = valor/quantidade;

                                        form.findField('valorPor').setValue(res)




                                    }
                                }


                            },

                            {
                                fieldLabel: 'Valor por ',
                                name: 'valorPor',
                                //maskRe:'[0-8]',
                                flex: 1,
                                step: 0.01,
                                minValue: 0,
                                value: 0.0,
                                xtype: 'numberfield',
                                decimalSeparator: ',',
                                listeners: {

                                    blur: function(){

                                        var form = this.up('form').getForm();

                                        var quantidade = form.findField('quantidade').getValue();

                                        var valorPor = form.findField('valorPor').getValue();

                                        var res = valorPor*quantidade;

                                        form.findField('valor').setValue(res)
                                    }

                                }

                            },

                            { fieldLabel: 'Localização', name: 'localizacao', flex: 1 },

                            {

                                xtype: 'button',
                                name: 'items',
                                text: 'Adicionar item',
                                iconCls: 'add-icon', action: 'edit',
                                margins: '14 0 0 20',
                                padding: '6',
                                listeners: {
                                    click: function (a, value) {

                                        var form = this.up('form').getForm();

                                        var item_id = form.findField('item').getValue();

                                        var itemStore =  Ext.data.StoreManager.lookup('itemStore');

                                       /* itemStore.sync()

                                        itemStore.load(function(records, operation, success) {
                                            console.log('loaded records'+records);
                                        });*/
                                        var item = itemStore.getById(item_id);

                                        var item_compra = Ext.create('MyApp.models.ItemCompra');


                                        item_compra.set('id', item.get('id'));
                                        item_compra.set('nome', item.get('nome'));
                                        item_compra.set('codigoBarras', item.get('codigoBarras'));
                                        item_compra.set('categoria', item.get('categoria'));
                                        item_compra.set('limiteMinimo', item.get('limiteMinimo'));

                                        item_compra.set('processavel', item.get('processavel'));
                                        item_compra.set('fracionavel', item.get('fracionavel'));
                                        item_compra.set('fatorCorrecao', item.get('fatorCorrecao'));
                                        item_compra.set('unMedida', item.get('unMedida'));


                                        item_compra.set('valor', form.findField('valor').getValue());
                                        item_compra.set('valorPor', form.findField('valorPor').getValue());
                                        item_compra.set('validade', form.findField('validade').getValue());
                                        item_compra.set('localizacao', form.findField('localizacao').getValue());
                                        item_compra.set('lote', form.findField('lote').getValue());

                                        item_compra.set('quantidade', form.findField('quantidade').getValue());

                                        var valorTotalNota = form.findField('valorTotal').getValue();

                                        valorTotalNota += item_compra.get('valor');


                                        form.findField('valorTotal').setValue(valorTotalNota);



                                        var store = Ext.data.StoreManager.lookup('itemCompraStore');

                                        if (item_id !== '') {
                                            store.add(item_compra)
                                        }




                                        form.findField('valor').setValue(0);
                                        form.findField('valorPor').setValue(0);

                                        var cbItem = Ext.ComponentQuery.query('#comboboxItemCompra')[0];

                                        cbItem.setValue('');

                                        cbItem.focus();

                                    }
                                }
                            }
                        ]
                    }

                ]
            },

            {
                xtype: 'fieldcontainer',
                title: 'Itens',
                labelStyle: 'color:#888;padding:0',
                name: 'items',
                defaultType: 'textfield',

                fieldDefaults: {
                    labelAlign: 'top',
                    margins: '0 10 10 0'
                },
                items: [

                    MyApp.views.compra.ItemsCompraGridPanel

                ]
            }

        ];

    },

    buttons: [
        {
            text: 'Salvar',
            handler: function () {

                var formPanel = this.up('form');

                var form = formPanel.getForm();

                var win = this.up('window');

                var store = Ext.data.StoreManager.lookup('itemCompraStore');




                if (formPanel.edicao) {

                    var compra = form.getRecord();


                   // return;

                    var id = form.getRecord().getId('id');

                    compra.beginEdit();

                    compra.set('id',id);

                    var items = [];


                    store.data.each(function () {

                        items.push(this.data)

                    })



                    compra.set('items', items);

                    compra.commit()

                    compra.save({
                        success: function (item) {


                            Ext.MessageBox.alert('Alterar compra', 'Alterado com sucesso');


                            form.reset()
                            win.removeAll();
                            win.add(MyApp.views.compra.CompraGridPanel);
                            store.load();


                        }
                    });

                } else {


                    var compra = Ext.create('MyApp.models.Compra', form.getFieldValues());


                    var items = [];

                   // store.sync()

                    store.data.each(function () {



                        items.push(this.data)



                    })

                    compra.set('items', items);

                    compra.save({
                        success: function (item) {


                            Ext.MessageBox.alert('Adiconar compra', 'Adicionado com sucesso');


                            form.reset()
                            win.removeAll();
                            win.add(MyApp.views.compra.CompraGridPanel);
                            store.load();

                            store.removeAll();


                        }
                    });

                    //var item = MyApp.stores.ItemStore.getById();





                }


            }
        },
        {
            text: 'Cancelar',
            handler: function () {


                this.up('form').getForm().reset();

                var win = this.up('window')

                win.removeAll();
                win.add(MyApp.views.compra.CompraGridPanel);



            }
        }
    ]
});

