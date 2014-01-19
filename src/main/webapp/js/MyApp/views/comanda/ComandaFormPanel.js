Ext.define('MyApp.views.comanda.ComandaFormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.comandaformpanel',
    xtype: 'comandaform',
    requires: [
        'MyApp.stores.ComandaStore',
        'MyApp.stores.ItemStore',
        'MyApp.models.Item',
        'MyApp.models.Comanda',
        'MyApp.models.Pedido',

        'MyApp.views.comanda.PedidoComandaGridPanel'
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
                title: 'Dados da comanda',
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
                        fieldLabel: 'Selecione o cliente',
                        name: 'cliente',
                        id: 'comboboxClienteComanda',
                        displayField: 'nome',
                        valueField: 'id',
                        lazyRender: true,
                        width: 400,
                        store: Ext.create('MyApp.stores.ClienteStore'),

                        listConfig: {
                            itemTpl: '<div>Nome: {nome} <br />nome: {nome}</div>'
                        },
                        queryMode: 'local', //default behavior
                        forceSelection: true,
                        flex: 1,
                        typeAhead: true,
                        typeAheadDelay: 1000,
                        listConfig: {
                            listeners: {
                                itemclick: function (list, record) {



                                }
                            }
                        },
                        listeners: {
                            select: {
                                fn: function (cb, records) {

                                    //window.location.search = Ext.urlEncode({"lang":record.get("code"),"charset":record.get("charset")});
                                },
                                scope: this
                            }
                        }

                    },
                    { fieldLabel: 'Valor Total', name: 'valorTotal', xtype: 'numberfield', value: 0.0, width: 200, renderer: moneyBRL },

                    { fieldLabel: 'Data', name: 'dataComanda',  format: 'd/m/Y', xtype: 'datefield', width: 150, value: new Date() }

                ]
            },


            {
                xtype: 'fieldset',
                title: 'Pedidos',
                labelStyle: 'color:#888;padding:0',
                //layout: 'vbox',
                defaultType: 'textfield',
                fieldDefaults: {
                    labelAlign: 'top',
                    margins: '0 10 10 0'
                },
                items: [

                    MyApp.views.comanda.PedidoComandaGridPanel

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

                var store = Ext.data.StoreManager.lookup('itemComandaStore');


                if (formPanel.edicao) {

                    var comanda = form.getRecord();

                    comanda.beginEdit();

                    var items = [];


                    store.data.each(function () {

                        console.log(this.data)
                        items.push(this.data)

                    })


                    return;

                    comanda.set('items', items);

                    comanda.commit()

                    comanda.save({
                        success: function (item) {
                            console.log(item)

                            Ext.MessageBox.alert('Alterar comanda', 'Alterado com sucesso');


                            form.reset()
                            win.removeAll();
                            win.add(MyApp.views.comanda.ComandaGridPanel);
                            store.load();


                        }
                    });

                } else {


                    var comanda = Ext.create('MyApp.models.Comanda', form.getFieldValues());



                    var items = [];

                   // store.sync()

                    store.data.each(function () {


                        console.log(this.data)
                        items.push(this.data)



                    })

                    comanda.set('items', items);

                    comanda.save({
                        success: function (item) {
                            console.log(item)

                            Ext.MessageBox.alert('Adiconar comanda', 'Adicionado com sucesso');


                            form.reset()
                            win.removeAll();
                            win.add(MyApp.views.comanda.ComandaGridPanel);
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
                win.add(MyApp.views.comanda.ComandaGridPanel);



            }
        }
    ]
});

