Ext.define('MyApp.views.produto.ComposicaoFormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.ComposicaoFormPanel',
    requires: [
        'MyApp.stores.ComposicaoStore',
        'MyApp.stores.ItemStore',
        'MyApp.models.Item',
        'MyApp.views.produto.ComposicaoGridPanel',
        'MyApp.views.produto.ItemsComposicaoGridPanel',
        'MyApp.stores.ItemComposicaoStore',
        'MyApp.models.Composicao'],


    bodyStyle: 'padding: 10px; background-color: #DCE5F0; border-left: none;',
    defaultType: 'textfield',


    defaults: {

        labelWidth: 70
    },


    initComponent: function () {
        this.items = this.buildItems();


        var win = Ext.WindowMgr.get('produto-win')
        win.setSize(1000, 650)

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
                    labelAlign: 'top'

                },
                items: [

                    {

                        xtype: 'container',

                        defaultType: 'textfield',
                        margins: '0 10 0 10',
                        layout: 'vbox',
                        items: [
                            {
                                width: 220,
                                name: 'nome',
                                fieldLabel: 'Nome de venda',

                                allowBlank: false

                            },
                            {
                                xtype: 'combobox',
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

                            },

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
                                // currencySymbol: 'R$',
                                submitLocaleSeparator: false,
                                alwaysDisplayDecimals: true

                            },
                            {

                                width: 220,
                                name: 'descricao',
                                fieldLabel: 'Descricao',
                                allowBlank: false

                            } ,

                            {
                                xtype: 'filefield',
                                itemId: 'form-file',

                                emptyText: 'Selecione uma imagem',
                                fieldLabel: 'Imagem',
                                name: 'imagem',
                                width: 220,
                                buttonText: '',
                                buttonConfig: {
                                    iconCls: 'upload-icon'
                                }
                            }

                          /*  {

                                xtype: 'fieldset',
                                title: 'Picture',
                                width: 170, 

                                items: [
                                    {
                                        xtype: 'image', 
                                        itemId: 'imgProduto',
                                        height: 150,
                                        width: 150,
                                        src: '',
                                        listeners: {
                                            change: function () {

                                                    console.log('hkjhkjhkjh');


                                                    return
                                                    var file = filefield.fileInputEl.dom.files[0]; 
                                                    var picture = this.getUserPicture(); 
                                                    if (typeof FileReader !== "undefined" && (/image/i).test(file.
                                                        type)) {

                                                        var reader = new FileReader();

                                                        reader.onload = function(e){

                                                            picture.setSrc(e.target.result); 
                                                        };
                                                        reader.readAsDataURL(file);

                                                    } else if (!(/image/i).test(file.type)){ 
                                                        Ext.Msg.alert('Warning', 'You can only upload image files!');
                                                        filefield.reset();

                                                    }
                                                }
                                            

                                        }
                                    }
                                ]


                            }*/

                       ]
                    },


                    {
                        xtype: 'fieldset',
                        title: 'Itens',
                        defaultType: 'textfield',
                        // layout: 'vbox',
                        defaults: {
                            anchor: '100%'
                        },

                        flex: 0.8,
                        height: 250,

                        items: [

                            {
                                xtype: 'fieldcontainer',
                                layout: 'hbox',
                               // margins: '10 10 10 10',
                                items: [

                                    {
                                        xtype: 'combobox',
                                        fieldLabel: 'Selecione o item',
                                        boxLabel: 'Days', 
                                        name: 'item',
                                        displayField: 'nome',
                                        valueField: 'id',
                                        itemId: 'comboItemComposicao',
                                        margins: '0 10 0 0',
                                        store: Ext.create('MyApp.stores.ItemStore'),

                                        queryMode: 'local', //default behavior
                                        forceSelection: true,
                                        flex: 0.7,
                                        typeAhead: true,
                                        typeAheadDelay: 100,
                                        listConfig: {
                                            listeners: {
                                                itemclick: function (list, record) {

                                                    var unMedida = record.get('unMedida')

                                                    var labelQuantidade = this.up('form').getForm().findField('quantidade');

                                                    labelQuantidade.setFieldLabel('Quantidade ' + unMedida);



                                                }
                                            },

                                            getInnerTpl: function (v, a, b) {

                                                var combo = Ext.ComponentQuery.query('#comboItemComposicao')

                                                var store = combo[0].getStore();



                                                // store.filterBy(function (rec, id) {

                                                //     /*return ( !rec.data.get('processavel') || !rec.data.get('fracionavel') )*/

                                                //     var isProcessavel = rec.get('processavel');
                                                //     var isFracionavel = rec.get('fracionavel');

                                                //     console.log(isProcessavel)
                                                //     console.log(isFracionavel)

                                                //     return ( isFracionavel || isProcessavel);
                                                // });


                                                var tpl = '' +

                                                    '<div class="itens_composicao">{nome}</div>' +



                                                    '';
                                                return tpl;
                                            }



                                        }
                                    },
                                    {
                                        xtype: 'numberfield',
                                        name: 'quantidade',
                                        fieldLabel: 'Quantidade',
                                        itemId: 'quantidadeComposicao',
                                        step: 1,
                                        minValue: 0,
                                        value: 1,
                                        decimalSeparator: ',',
                                        maxValue: 1000.00,
                                        thousandSeparator: '.',
                                        decimalPrecision: 3,
                                        width: 150,
                                        margins: '0 10 0 10',
                                        submitLocaleSeparator: false,
                                        alwaysDisplayDecimals: true


                                    },
                                    {

                                        xtype: 'button',
                                        name: 'items',
                                        text: 'Adicionar item',
                                        iconCls: 'add-icon', action: 'edit',
                                        margins: '16 10 0 10',
                                        padding: '4',
                                        listeners: {
                                            click: function (a, value) {

                                                console.log(value)

                                                var combo = Ext.ComponentQuery.query('#comboItemComposicao');

                                                var quantidade = this.up('form').getForm().findField('quantidade').getValue();

                                                var storeItem = combo[0].getStore();

                                                var form = this.up('form').getForm();

                                                var item_id = form.findField('item').getValue();

                                                var item = storeItem.getById(item_id);

                                                var item_compra = Ext.create('MyApp.models.ItemCompra');

                                                item_compra.set('nome', item.getData().nome);
                                                item_compra.set('codigoBarras', item.getData().codigoBarras);
                                                item_compra.set('categoria', item.getData().categoria);
                                                item_compra.set('limiteMinimo', item.getData().limiteMinimo);
                                                item_compra.set('quantidade', quantidade);

                                                item_compra.set('processavel', item.getData().processavel);
                                                item_compra.set('fracionavel', item.getData().fracionavel);
                                                item_compra.set('fatorCorrecao', item.getData().fatorCorrecao);
                                                item_compra.set('unMedida', item.getData().unMedida);

                                                var store = MyApp.stores.ItemComposicaoStore;

                                                if (item_id !== '') {
                                                    store.add(item_compra)
                                                }

                                            }
                                        }
                                    }

                                ]

                            },

                            MyApp.views.produto.ItemsComposicaoGridPanel

                        ]
                    }

                    /* {
                     xtype: 'textarea',

                     name: 'opcionais',
                     fieldLabel: 'Opcionais',
                     allowBlank: false

                     }*/

                ]
            },

            {
                xtype: 'fieldset',
                title: 'Produtos compostos',
                defaultType: 'textfield',
                defaults: {
                    anchor: '100%'
                },
                height: 260,
                items: [
                    MyApp.views.produto.ComposicaoGridPanel
                ]
            }


        ];

    },

    buttons: [
        {
            text: 'Salvar',
            handler: function () {

                var form = this.up('form').getForm();

                var item = Ext.create('MyApp.models.Composicao', form.getFieldValues());

                var items = [];

                // store.sync()
                var storeItemComp = MyApp.stores.ItemComposicaoStore;

                storeItemComp.each(function(record){

                    items.push(record.data);

                });



                if( form.getRecord() == null){

                    item.set('items', items);

                    item.save({
                        success: function (item) {


                            MyApp.stores.ComposicaoStore.load();

                            //user.save(); //PUT /users/123
                        }
                    });

                } else{

                    console.log(form.getRecord().get('id'));


                    item.beginEdit();

                    item.set(form.getValues());

                    item.set('items', items);

                    item.set('id',form.getRecord().get('id'));

                    item.commit()

                    // MyApp.stores.ItemStore.sync();
                    item.save({
                        success: function (item) {
                            console.log(item)

                            Ext.MessageBox.alert('Alterar produto', 'Alterado com sucesso');

                            form.reset();

                        }
                    });


                }

                MyApp.stores.ComposicaoStore.load();
                storeItemComp.removeAll();

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

