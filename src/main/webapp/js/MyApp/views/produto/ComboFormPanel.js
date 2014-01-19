Ext.define('MyApp.views.produto.ComboFormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.ComboFormPanel',
    requires: [
        'MyApp.stores.ComboStore',
        'MyApp.stores.ProdutoStore',
        'MyApp.models.Item',
        'MyApp.views.produto.ComboGridPanel',
        'MyApp.stores.ItemComboStore',
        'MyApp.views.produto.ProdutosComboGridPanel',

        'MyApp.models.Combo'],


    bodyStyle: 'padding: 10px; background-color: #DCE5F0; border-left: none;',
    defaultType: 'textfield',


    defaults: {

        labelWidth: 70
    },


    initComponent: function () {
        this.items = this.buildItems();


        var win = Ext.WindowMgr.get('produto-win')
        win.setSize(1000, 600)

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
                        height: 290,

                        items: [

                            {
                                xtype: 'fieldcontainer',
                                layout: 'hbox',
                               // margins: '10 10 10 10',
                                items: [

                                    {
                                        xtype: 'combobox',
                                        fieldLabel: 'Selecione o produto',
                                        name: 'item',
                                        displayField: 'nome',
                                        valueField: 'id',
                                        itemId: 'comboProduto',
                                        margins: '0 10 0 10',
                                        store: MyApp.stores.ProdutoStore,

                                        queryMode: 'local', //default behavior
                                        forceSelection: true,
                                        flex: 0.7,
                                        typeAhead: true,
                                        typeAheadDelay: 100,
                                        listConfig: {
                                            listeners: {
                                                itemclick: function (list, record) {

                                                   /* var unMedida = record.get('unMedida')

                                                    var labelQuantidade = this.up('form').getForm().findField('quantidade');

                                                    labelQuantidade.setFieldLabel('Quantidade ' + unMedida);*/



                                                }
                                            },

                                            getInnerTpl: function (v, a, b) {

                                                var combo = Ext.ComponentQuery.query('#comboProduto')

                                                var store = combo[0].getStore()
/*

                                                store.filterBy(function (rec, id) {

                                                    *//*return ( !rec.data.get('processavel') || !rec.data.get('fracionavel') )*//*

                                                    var isProcessavel = rec.get('processavel');
                                                    var isFracionavel = rec.get('fracionavel');

                                                    console.log(isProcessavel)
                                                    console.log(isFracionavel)

                                                    return ( isFracionavel || isProcessavel);
                                                });*/


                                                var tpl = '' +

                                                    '<div style="font-weight:bold;background: #ffe5c1">{nome}</div>' +
                                                    '<table style="width: 100%">' +
                                                    '<tr>' +

                                                    '<td>Produto</td>' +
                                                    '<td>Quantidade</td>' +

                                                    '</tr>' +
                                                    '<tr>' +

                                                    '<td>{nome}</td>' +
                                                    '<td>{valor}</td>' +

                                                    '</tr>' +
                                                    '</table>' +


                                                    '';
                                                return tpl;
                                            }



                                        }
                                    },
                                    {
                                        xtype: 'numberfield',
                                        name: 'quantidade',
                                        fieldLabel: 'Quantidade',
                                        itemId: 'quantidadeCombo',
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

                                                var combo = Ext.ComponentQuery.query('#comboProduto');

                                                var quantidade = this.up('form').getForm().findField('quantidade').getValue();

                                                var storeItem = combo[0].getStore();

                                                var form = this.up('form').getForm();

                                                var item_id = form.findField('item').getValue();

                                                var item = storeItem.getById(item_id);

                                                var item_compra = Ext.create('MyApp.models.Produto');

                                                item_compra.set('nome', item.getData().nome);
                                                item_compra.set('codigoBarras', item.getData().codigoBarras);
                                                item_compra.set('categoria', item.getData().categoria);
                                                item_compra.set('limiteMinimo', item.getData().limiteMinimo);
                                                item_compra.set('quantidade', quantidade);

                                                item_compra.set('processavel', item.getData().processavel);
                                                item_compra.set('fracionavel', item.getData().fracionavel);
                                                item_compra.set('fatorCorrecao', item.getData().fatorCorrecao);
                                                item_compra.set('unMedida', item.getData().unMedida);

                                                var store = MyApp.stores.ItemComboStore;


                                                console.log(store);

                                                if (item_id !== '') {
                                                    store.add(item_compra)
                                                }

                                            }
                                        }
                                    }

                                ]

                            },

                            MyApp.views.produto.ProdutosComboGridPanel

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
                title: 'Combos',
                defaultType: 'textfield',
                defaults: {
                    anchor: '100%'
                },
                height: 200,
                items: [
                    MyApp.views.produto.ComboGridPanel
                ]
            }


        ];

    },

    buttons: [
        {
            text: 'Salvar',
            handler: function () {

                var form = this.up('form').getForm();


                var item = Ext.create('MyApp.models.Combo', form.getFieldValues());

                var items = [];

                // store.sync()
                var storeItemComp = MyApp.stores.ItemComboStore;


                MyApp.stores.ItemComboStore.each(function () {


                    console.log(this.data)
                    items.push(this.data)


                })

                item.set('produtos', items);

                item.save({
                    success: function (item) {
                        console.log(item)

                        // var composicao = Ext.create('MyApp.models.Combo', form.getFieldValues());


                        MyApp.stores.ComboStore.load();

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

