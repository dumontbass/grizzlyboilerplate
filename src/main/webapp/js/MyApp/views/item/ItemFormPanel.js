Ext.define('MyApp.views.item.ItemFormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.ItemFormPanel',

    id : 'itemForm',
    bodyStyle: 'padding: 10px; background-color: #DCE5F0; border-left: none;',
    defaultType: 'textfield',
    defaults: {

        labelWidth: 150
    },

    edicao : false,

    fieldDefaults: {
        labelAlign: 'top'
    },


    initComponent: function () {
        this.items = this.buildItems();

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
                        flex: 1,
                        name: 'nome',
                        fieldLabel: 'Nome',
                        validator: function(v) { return (v === "") ? "Não pode estar vazio!" : true; }


                    },
                    {
                        xtype: 'combobox',
                        fieldLabel: 'Categoria',
                        name: 'categoria',


                        store: [
                            'Horti fruti',
                            'Carnes bovinas',
                            'Aves',
                            'Bebidas',
                            'Bebidas Alcólicas',
                            'Carnes suínas',
                            'Outras carnes',
                            'Cereais',
                            'Pescados',
                            'Mercearia',
                            'Massas',
                            'Mercearia',
                            'Sorveteria',
                            'Conservas',
                            'Sementes e frutas secas',
                            'Padaria e panificação',
                            'Temperos e especiarias',
                            'Descartáveis',
                            'Produtos de limpeza',
                            'Laticínios e queijos',
                            'Embutidos e defumados',
                            'Congelados'

                        ],

                        forceSelection: true,
                        width: 200,
                        typeAhead: true,
                        typeAheadDelay: 100

                    },
                    {
                        xtype: 'combobox',
                        fieldLabel: 'Unidade de medida',
                        name: 'unMedida',


                        store: ['KG', 'L', 'Maço', 'Unitário'],

                        forceSelection: true,
                        width: 150,
                        typeAhead: true,
                        typeAheadDelay: 100

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
                        xtype: 'numberfield',
                        flex: 0.7,
                        name: 'codigoBarras',
                        fieldLabel: 'Cód. Barras ( EAN - 13 )',
                        allowBlank: false,
                        maxLength: 13,
                        value: '7891027124274',
                        vtypeText: 'Código EAN inválido - máx. de 13 dígitos'

                    },
                    {

                        xtype: 'button',
                        width: 80,
                        text: 'Gerar',

                        margins: '18 18 10 0',
                        listeners: {
                            click: function (a, value) {

                                var form = this.up('form').getForm();

                                var filed = Ext.getCmp('codBarrasImg');

                                filed.setValue(form.findField('codigoBarras').getValue())
                            }
                        }

                    },

                    {

                        fieldLabel: 'Limite mínimo',
                        name: 'limiteMinimo',
                        xtype: 'numberfield',
                        allowNegative: false,
                        width: 100,
                        value: 1

                    },
                    {




                        xtype: 'checkboxgroup',
                        fieldLabel: 'Produção',
                        flex: 0.5 ,
                        columns: 2,
                        vertical: true ,
                        items: [{
                            boxLabel: 'Processável',
                            name: 'processavel'
                        }, {
                            boxLabel: 'Fracionável',
                            name: 'fracionavel'
                        }] ,

                        listeners: {
                            /*change: function (checkbox, newVal, oldVal) {
                                if (newVal == '1' && oldVal == '0') {
                                    var allCheckBoxes = checkbox.up('checkboxgroup').items.items;
                                    for (var i = 0; i < allCheckBoxes.length; i++) {
                                        allCheckBoxes[i].setValue('1');
                                    }
                                }
                            }*/
                        }

                    },


                    {
                        width: 130,
                        name: 'fatorCorrecao',
                        fieldLabel: 'Fator de correção',
                        step: 0.01,
                        decimalSeparator: ',',
                        minValue: 0,
                        xtype: 'numberfield',
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
                        xtype: 'displayfield',
                        flex: 1,
                        renderer: function(v){
                            if ( v === '' || v === null) return;
                            return MyApp.util.BarcodeGenerator.generateHtml(v);
                        },
                        labelAlign: 'left',
                        id: 'codBarrasImg',

                        //labelStyle: 'color:#333',
                        style: 'background: #FFE5C1; padding: 2px;'
                        //fieldLabel: 'Código de barras'
                    }
                ]

            }


        ]
    },
    buttons: [
        {
            text: 'Salvar',
            handler: function () {

                var formPanel = this.up('form');

                var form = formPanel.getForm();

                var win = this.up('window')



                var store = Ext.data.StoreManager.lookup('itemStore');


                console.log(formPanel.edicao)

                if(formPanel.edicao){

                    //var item = store.getById(form._record.data.id);


                    var item = Ext.create('MyApp.models.Item', form.getFieldValues());

                    item.beginEdit();

                    item.set('id',form._record.data.id)

                    //item.set(form.getValues());

                    item.commit()


                    item.save({
                        success: function (item) {
                            console.log(item)

                            Ext.MessageBox.alert('Alterar item', 'Alterado com sucesso');


                            form.reset()
                            win.removeAll();
                            win.add(MyApp.views.item.ItemGridPanel);
                            //MyApp.stores.ItemStore.load();


                        }
                    });


                } else{

                    var item = Ext.create('MyApp.models.Item', form.getFieldValues());

                    item.save({
                        success: function (item) {
                            console.log(item)

                            Ext.MessageBox.alert('Adiconar compra', 'Adicionado com sucesso');


                            form.reset()
                            win.removeAll();
                            win.add(MyApp.views.item.ItemGridPanel);
                            //MyApp.stores.ItemStore.load();


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
                win.add(MyApp.views.item.ItemGridPanel);
                //MyApp.stores.ItemStore.load();


            }
        }
    ]



});

