Ext.define('MyApp.views.processado.ProcessadoFormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.ProcessadoFormPanel',
    requires: ['MyApp.stores.ProcessadoStore', 'MyApp.stores.ItemStore', 'MyApp.stores.CompraStore', 'MyApp.models.Item'],

    bodyStyle: 'padding: 10px; background-color: #DCE5F0; border-left: none;',
    defaultType: 'textfield',


    defaults: {

        labelWidth: 150
    },

    edicao: false,


    initComponent: function () {
        this.items = this.buildItems();

        this.callParent();
    },
    buildItems: function () {
        return [
           /* {
                xtype: 'fieldset',
                title: 'Compra para processar',
                labelStyle: 'color:#888;padding:0',
                defaultType: 'textfield',
                defaults: {

                },
                height: 100,
                items: [*/
                    {
                        xtype: 'combobox',
                        fieldLabel: 'Selecione o item',
                        itemId: 'cbItemProcessamento',
                        name: 'item',
                        displayField: 'nome',
                        loadingText: 'Carregando...',
                        valueField: 'itemCompra',
                        //store: MyApp.stores.ItemStore,
                        store: Ext.create('Ext.data.Store', {

                            sortInfo:{
                                field:'nome',
                                direction:'ASC'// or 'DESC' (case sensitive for local sorting)
                            },

                            model: Ext.ModelManager.getModel('MyApp.models.ItemCompra'),

                            proxy: {
                                type: 'rest',
                                url: '/compras/items',

                                reader: {
                                    type: 'json',
                                    root: 'data'
                                }

                            }
                        }),


                        queryMode: 'local', //default behavior
                        forceSelection: true,
                        lazyRender: true,
                        width: 600,
                        typeAhead: true,
                        typeAheadDelay: 100,
                        listConfig: {
                            getInnerTpl: function (v, a, b) {

                                var combo =  Ext.ComponentQuery.query('#cbItemProcessamento')

                                var store = combo[0].getStore()


                                store.filterBy(function( rec, id ){

                                    return rec.get('processavel')


                                });

                                var tpl = '' +

                                    '<div style="font-weight:bold;background: #ffe5c1">{nome}</div>' +

                                    '<table style="width: 100%">'+
                                        '<tr>'+
                                            '<td>Lote</td>'+
                                            '<td>Valor</td>'+
                                            '<td>Validade</td>'+
                                            '<td>Qtd</td>'+
                                            '<td>Un. Medida</td>'+
                                            '<td>Valor por {unMedida}</td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td>{lote}</td>'+
                                            '<td>{[moneyBRL(values.valor)]}</td>'+
                                            '<td>{[dateFormat(values.validade)]}</td>'+
                                            '<td>{quantidade}</td>'+
                                            '<td>{unMedida}</td>'+
                                            '<td>{[moneyBRL(values.valor/values.quantidade)]}</td>'+
                                        '</tr>'+
                                    '</table>'+


                                    '';
                                return tpl;
                            },

                            listeners: {
                                itemclick: function (list, record) {
                                    var form = this.up('form').getForm()

                                    var item_id = form.findField('item').getValue();

                                    console.log(record.data)

                                    form.setValues(record.data)

                                    form.setValues('itemCompra',record.data)

                                    ;

                                    var itemCompra = record.data;

                                    console.log(itemCompra.fatorCorrecao)

                                    var res = itemCompra.fatorCorrecao+'';

                                    form.findField('correcao').setValue(res.substr(0,5))



                                    //var itemCompra = Ext.create('MyApp.models.ItemCompra', record.data)



                                }
                            }
                        }


                    },

                    {
                        xtype : 'hidden',  //should use the more standard hiddenfield
                        name  : 'itemCompra'
                    },

                    {
                        xtype: 'fieldset',
                        title: 'Compra para processar',

                        layout: 'hbox',

                        height: 150,
                        items: [


                            {
                                xtype: 'container',
                                flex:1,

                                layout: 'vbox',


                                items: [


                                    {
                                        xtype: 'displayfield',
                                        name: 'nome',
                                        labelAlign: 'left',
                                        margins: '0 10 4 0',
                                        labelStyle: 'color:#333',
                                        style: 'background: #FFE5C1; padding: 2px;',
                                        fieldLabel: 'Nome'
                                    },

                                    {
                                        xtype: 'displayfield',
                                        name: 'categoria',
                                        labelAlign: 'left',
                                        margins: '0 10 5 0',
                                        labelStyle: 'color:#333',
                                        style: 'background: #FFE5C1; padding: 2px;',
                                        fieldLabel: 'Categoria'
                                    },

                                    {
                                        xtype: 'displayfield',
                                        name: 'fornecedor',
                                        labelAlign: 'left',
                                        margins: '0 10 5 0',
                                        labelStyle: 'color:#333',
                                        style: 'background: #FFE5C1; padding: 2px;',
                                        fieldLabel: 'Fornecedor'
                                    },

                                    {
                                        xtype: 'displayfield',
                                        name: 'valorProcessamento',
                                        labelAlign: 'left',
                                        margins: '0 10 5 0',
                                        labelStyle: 'color:#333',
                                        style: 'background: #FFE5C1; padding: 2px; font-weight:bold;font-size: 18px;',
                                        fieldLabel: 'Valor do processamneto',
                                        renderer: moneyBRL
                                    }


                                ]
                            },

                            {
                                xtype: 'container',
                                flex:1,

                                layout: 'vbox',

                                items: [


                                    {
                                        xtype: 'displayfield',
                                        name: 'fatorCorrecao',
                                        width: '100%',
                                        value: 1,
                                        labelAlign: 'left',
                                        margins: '0 10 5 0',
                                        labelStyle: 'color:#333',
                                        style: 'background: #FFE5C1; padding: 2px;',
                                        fieldLabel: 'Fator de correção',
                                        renderer: moneyFormat
                                    },

                                    {
                                        xtype: 'displayfield',
                                        name: 'localizacao',
                                        labelAlign: 'left',
                                        margins: '0 10 5 0',
                                        labelStyle: 'color:#333',
                                        style: 'background: #FFE5C1; padding: 2px;',
                                        fieldLabel: 'Localização'
                                    },

                                    {
                                        xtype: 'displayfield',
                                        name: 'validade',
                                        labelAlign: 'left',
                                        margins: '0 10 5 0',
                                        labelStyle: 'color:#333',
                                        style: 'background: #FFE5C1; padding: 2px;',
                                        fieldLabel: 'Validade',
                                        renderer: dateFormat
                                    },

                                    {
                                        xtype: 'displayfield',
                                        name: 'valorPor',
                                        labelAlign: 'left',
                                        margins: '0 10 5 0',
                                        labelStyle: 'color:#333',
                                        style: 'background: #FFE5C1; padding: 2px;',
                                        fieldLabel: 'Valor por Un. Medida',
                                        renderer: moneyBRL
                                    }


                                ]
                            },

                            {
                                xtype: 'container',
                                flex:1,

                                layout: 'vbox',

                                items: [


                                    {
                                        xtype: 'displayfield',
                                        name: 'codigoBarras',
                                        labelAlign: 'left',
                                        margins: '0 10 5 0',
                                        labelStyle: 'color:#333',
                                        style: 'background: #FFE5C1; padding: 2px;',
                                        fieldLabel: 'Código'
                                    },

                                    {
                                        xtype: 'displayfield',
                                        name: 'lote',
                                        labelAlign: 'left',
                                        margins: '0 10 5 0',
                                        labelStyle: 'color:#333',
                                        style: 'background: #FFE5C1; padding: 2px;',
                                        fieldLabel: 'Lote'
                                    },

                                    {
                                        xtype: 'displayfield',
                                        name: 'valor',
                                        labelAlign: 'left',
                                        margins: '0 10 5 0',
                                        labelStyle: 'color:#333',
                                        style: 'background: #FFE5C1; padding: 2px;',
                                        fieldLabel: 'Valor pago',
                                        renderer: moneyBRL
                                    } ,

                                    {
                                        xtype: 'displayfield',
                                        width: '100%',
                                        name: 'quantidade',
                                        labelAlign: 'left',
                                        margins: '0 10 5 0',
                                        labelStyle: 'color:#333',
                                        style: 'background: #FFE5C1; padding: 2px;',
                                        fieldLabel: 'Quantidade'
                                    }


                                ]
                            }
                        ]

                    },


            {
                xtype: 'fieldset',
                title: 'Processamento',
                labelStyle: 'color:#888;padding:0',
                defaultType: 'textfield',

                defaults: {

                },

                items: [

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
                                flex: 1,
                                fieldLabel: 'Quantidade',
                                name: 'quantidadeProcessada',
                                xtype: 'numberfield',
                                width: 180,
                                value: 1,
                                minValue: 1,
                                listeners: {

                                    change: function(){

                                        var form = this.up('form').getForm();
                                        var quantidadeProcessada = form.findField('quantidadeProcessada').getValue();
                                        var numPecas = form.findField('numPecas').getValue();
                                        var correcao = form.findField('correcao').getValue();

                                        var res = quantidadeProcessada/numPecas*(1/correcao);

                                        res += ''

                                        form.findField('pesoPorPeca').setValue(res.substr(0,5));


                                        var valorPor = form.findField('valorPor').getValue();


                                        form.findField('valorProcessamento').setValue(quantidadeProcessada*valorPor);

                                    }
                                }

                            },
                            { flex: 1,fieldLabel: 'Correção', name: 'correcao', width: 200, renderer: function(v) { return  } },
                            { fieldLabel: 'Projeção de perda', name: 'projecaoPerda', width: 200 }


                        ]
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Destino',
                labelStyle: 'color:#888;padding:0',

                defaultType: 'textfield',
                fieldDefaults: {
                    labelAlign: 'top',
                    margins: '0 10 10 0'
                },
                items: [


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

                            { fieldLabel: 'Novo Nome', name: 'novoNome', flex: 1 },
                            {
                                fieldLabel: 'Num. Peças',
                                name: 'numPecas',
                                value: 1,
                                minValue: 1,
                                xtype: 'numberfield',
                                width: 100,
                                listeners: {

                                    change: function(){

                                        var form = this.up('form').getForm();
                                        var quantidadeProcessada = form.findField('quantidadeProcessada').getValue();
                                        var numPecas = form.findField('numPecas').getValue();
                                        var correcao = form.findField('correcao').getValue();

                                        var res = quantidadeProcessada/numPecas*(1/correcao);

                                        res += ''

                                        form.findField('pesoPorPeca').setValue(res.substr(0,5));

                                        var valorPor = form.findField('valorPor').getValue();


                                        form.findField('valorProcessamento').setValue(quantidadeProcessada*valorPor);

                                    }
                                }

                            },

                            { fieldLabel: 'Peso por peça', name: 'pesoPorPeca', width: 100 }
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

                            { fieldLabel: 'Data processamento', name: 'dataProcesamento', format: 'd/m/Y',xtype: 'datefield', width: 150, value: new Date() },
                            { fieldLabel: 'Nova validade', name: 'novaValidade', format: 'd/m/Y', xtype: 'datefield', width: 150 },
                            { fieldLabel: 'Local', name: 'local', width: 200 }

                        ]
                    }


                ] }
        ];

    },

    buttons: [
        {
            text: 'Salvar',
            handler: function () {

                var formPanel = this.up('form');

                var form = formPanel.getForm();

                var win = this.up('window')


                if (formPanel.edicao) {

                    var processado = Ext.create('MyApp.models.Processado', form.getFieldValues());

                    processado.set(form.getFieldValues())

                    processado.save({
                        success: function (item) {
                            console.log(item)

                            Ext.MessageBox.alert('Adiconar processamento', 'Alterado com sucesso');


                            form.reset()
                            win.removeAll();
                            win.add(MyApp.views.processado.ProcessadoGridPanel);
                            MyApp.stores.ProcessadoStore.load();


                        }
                    });

                } else {




                    var item = Ext.create('MyApp.models.Processado', form.getFieldValues());

                     console.log(form.getFieldValues())





                    item.save({
                        success: function (item) {
                            console.log(item)

                            Ext.MessageBox.alert('Adiconar processamento', 'Adicionado com sucesso');


                            form.reset()
                            win.removeAll();
                            win.add(MyApp.views.processado.ProcessadoGridPanel);
                            MyApp.stores.ProcessadoStore.load();


                        }
                    });
                }

            }
        },
        {
            text: 'Cancelar',
            handler: function () {


                this.up('form').getForm().reset();

                var win = this.up('window')

                win.removeAll();
                win.add(MyApp.views.processado.ProcessadoGridPanel);
                MyApp.stores.ProcessadoStore.load();


            }
        }
    ]
});

