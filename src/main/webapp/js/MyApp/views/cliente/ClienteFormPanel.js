var required = '<span style="color:#ff0000;font-weight:bold" data-qtip="Required">*</span>';
Ext.define('MyApp.views.cliente.ClienteFormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.ClienteFormPanel',
    requires: [

        'MyApp.views.cliente.EnderecoClienteGridPanel'
    ],

    id: 'clienteForm',
    bodyStyle: 'padding: 10px; background-color: #DCE5F0; border-left: none;',


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

            {

                xtype: 'fieldcontainer',
                layout: 'hbox',
                defaultType: 'textfield',
                fieldDefaults: {
                    labelAlign: 'top',
                    margins: '0 10 10 0'
                },
                items: [
                    {
                        fieldLabel: 'Nome',
                        afterLabelTextTpl: required,
                        name: 'nome',
                        flex: 1
                    },
                    {
                        fieldLabel: 'Sobrenome',
                        name: 'sobrenome',
                        flex: 1
                    }
                ]
            },
            {
                xtype: 'fieldcontainer',
                layout: 'hbox',
                defaultType: 'textfield',
                fieldDefaults: {
                    labelAlign: 'top',
                    margins: '0 10 10 0'
                },
                items: [
                    {
                        fieldLabel: 'RG',
                        afterLabelTextTpl: required,
                        name: 'rg',
                        width: 200
                    },
                    {
                        fieldLabel: 'Email',
                        afterLabelTextTpl: required,
                        name: 'email',
                        vtype: 'email',
                        flex: 1
                    }
                ]
            },
            {
                xtype: 'fieldcontainer',
                layout: 'hbox',
                defaultType: 'textfield',
                fieldDefaults: {
                    labelAlign: 'top',
                    margins: '0 10 10 0'
                },
                items: [
                    {
                        xtype: 'datefield',
                        fieldLabel: 'Data de nascimento',
                        afterLabelTextTpl: required,
                        name: 'nascimento',
                        submitFormat: 'Y-m-d\\TH:i:s',
                        format: 'd/m/Y',
                        margins: '0 30 10 0',
                        width: 150
                    },
                    {
                        xtype: 'checkbox',
                        fieldLabel: 'Mailing',
                        allowBlank: false,
                        name: 'mailing',
                        flex: 0.1
                    },

                    {
                        xtype: 'checkbox',
                        fieldLabel: 'VIP',
                        allowBlank: false,
                        name: 'vip',
                        flex: 0.1
                    },
                    {
                        xtype: 'checkbox',
                        fieldLabel: 'Ativo',
                        allowBlank: false,
                        name: 'ativo',
                        flex: 0.1
                    },
                    {
                        fieldLabel: 'Telefone Celular',
                        name: 'telefoneCel',
                        flex: 0.5
                    },
                    {
                        fieldLabel: 'Telefone Residencial',
                        name: 'telefoneRes',
                        flex: 0.5
                    }
                ]
            },
            {
                xtype: 'tabpanel',
                plain: true,
                activeTab: 0,
                height: 450,
                defaults: {
                    margins: '10 0',
                    bodyPadding: 10
                },
                items: [
                    {
                        title: 'Contato',
                        defaults: {
                            width: '100%'
                        },
                        defaultType: 'textfield',

                        items: [

                            {
                                xtype: 'fieldcontainer',
                                defaultType: 'textfield',
                                fieldDefaults: {
                                    labelAlign: 'top',
                                    margins: '0 10 10 0'
                                },
                                layout: 'hbox',

                                items: [

                                            {
                                                fieldLabel: 'CEP',
                                                xtype: 'numberfield',
                                                maxLength: 8,
                                                hideTrigger: true,
                                                name: 'cep',
                                                flex: 0.2,
                                                allowBlank: false,
                                                itemId: 'cepTxt'

                                            },
                                            {
                                                xtype: 'button',
                                                text: ' busca',
                                                margins: '18 10 0 0',
                                                listeners: {
                                                    click: function (field, v) {

                                                        var btn  = this;

                                                        //btn.setLoading(true);

                                                        btn.setLoading({
                                                            msg: "Buscando ..."

                                                        })

                                                        var form = this.up('form').getForm();

                                                        var value = Ext.ComponentQuery.query('#cepTxt')

                                                        var t = Ext.Ajax.request({
                                                            url: '/util/buscaCep?cep='+value[0].getValue(),
                                                            method: 'GET',
                                                            success: function(v, a, o){

                                                                var options = Ext.JSON.decode(v.responseText);



                                                                form.findField('tipoLogradouro').setValue(options.tipo_logradouro)
                                                                form.findField('logradouro').setValue(options.logradouro)

                                                                form.findField('bairro').setValue(options.bairro)
                                                                form.findField('cidade').setValue(options.cidade)
                                                                form.findField('estado').setValue(options.uf)



                                                                btn.setLoading(false);


                                                            },
                                                            failure: function(v){}

                                                        });

                                                        console.log(t)

                                                    }
                                                }

                                            },

                                        {
                                            fieldLabel: 'Tipo',
                                            name: 'tipoLogradouro',
                                            flex: 0.2,
                                            allowBlank: false,
                                            xtype: 'combobox',
                                            store: [
                                                'Rua',
                                                'Avenida',
                                                'Travessa',
                                                'Rodovia'

                                            ]
                                        },
                                        {
                                            fieldLabel: 'Logradouro',
                                            name: 'logradouro',
                                            flex: 0.5,
                                            allowBlank: false
                                        },

                                        {
                                            fieldLabel: 'Número',
                                            name: 'numero',
                                            flex: 0.1,
                                            allowBlank: false
                                        }


                                    ]
                            },

                            {
                                xtype: 'fieldcontainer',
                                defaultType: 'textfield',
                                fieldDefaults: {
                                    labelAlign: 'top',
                                    margins: '0 10 10 0'
                                },
                                layout: 'hbox',

                                items: [


                                    {
                                        fieldLabel: 'Bairro',
                                        name: 'bairro',
                                        flex: 0.6,
                                        allowBlank: false
                                    } ,

                                    {
                                        fieldLabel: 'Cidade',
                                        name: 'cidade',
                                        flex: 0.3,
                                        allowBlank: false
                                    },

                                    {
                                        fieldLabel: 'Estado',
                                        name: 'estado',
                                        flex: 0.3,
                                        allowBlank: false
                                    },
                                    {
                                        xtype:'button',
                                        margins: '18 0 0 0',
                                        text: 'Adicionar endereço',
                                        listeners: {

                                            click: function(c){

                                                console.log(c)

                                                var endereco = Ext.create('MyApp.models.Endereco');

                                                var form = this.up('form').getForm();

                                                endereco.set('logradouro', form.findField('logradouro').getValue())
                                                endereco.set('tipoLogradouro', form.findField('tipoLogradouro').getValue())
                                                endereco.set('cidade', form.findField('cidade').getValue())
                                                endereco.set('numero', form.findField('numero').getValue())
                                                endereco.set('bairro', form.findField('bairro').getValue())
                                                endereco.set('cep', form.findField('cep').getValue())
                                                endereco.set('estado', form.findField('estado').getValue())
                                                endereco.set('bairro', form.findField('bairro').getValue())

                                                var store = Ext.data.StoreManager.lookup('enderecoStore');

                                                store.add(endereco)




                                            }
                                        }
                                    }

                                ]
                            },

                            {
                                xtype: 'fieldset',
                                title: 'Endereços',
                                defaultType: 'textfield',
                                // layout: 'vbox',
                                defaults: {
                                    anchor: '100%'
                                },
                                margins: '0 0 10 10',
                                flex: 0.8,
                                height: 330,
                                maxHeight: 360,
                                items: [



                                    MyApp.views.cliente.EnderecoClienteGridPanel

                                ]
                            }
                        ]
                    },
                    {
                        title: 'Dispositivos',
                        defaults: {
                            width: 230
                        },
                        defaultType: 'textfield',

                        items: [

                        ]
                    },
                    {
                        title: 'Blacklist',
                        defaults: {
                            width: 230
                        },
                        defaultType: 'textfield',

                        items: [

                        ]
                    }
                    /*{
                        cls: 'x-plain',
                        title: 'Biography',
                        layout: 'fit',
                        items: {
                            xtype: 'htmleditor',
                            name: 'bio2',
                            fieldLabel: 'Biography'
                        }
                    }*/
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

                var store = Ext.data.StoreManager.lookup('clienteStore');

                var enderecoStore =  Ext.data.StoreManager.lookup('enderecoStore');

                var enderecos = [];

                enderecoStore.data.each(function () {

                    enderecos.push(this.data)

                })

                if(formPanel.edicao){


                    var cliente = store.getById(form._record.data.id);

                    cliente.beginEdit();

                    cliente.set('enderecos',enderecos);

                    var nascimento = cliente.get('nascimento');

                    cliente.set(form.getValues());

                    //TODO - Ganbii
                    cliente.set('nascimento', Ext.Date.add(new Date(nascimento), Ext.Date.DAY, 1));

                    cliente.commit()

                    // MyApp.stores.ItemStore.sync();
                    cliente.save({
                        success: function (item) {
                            console.log(item)

                            Ext.MessageBox.alert('Alterar cliente', 'Alterado com sucesso');


                            form.reset()
                            win.removeAll();
                            win.add(MyApp.views.cliente.ClienteGridPanel);
                            store.load();


                        }
                    });




                } else{

                    var cliente = Ext.create('MyApp.models.Cliente', form.getFieldValues());

                    cliente.set('enderecos',enderecos);

                    var nascimento = cliente.get('nascimento');

                    cliente.set('nascimento', Ext.Date.add(new Date(nascimento), Ext.Date.DAY, 1));

                    cliente.save({
                        success: function (cliente) {
                            console.log(cliente)

                            Ext.MessageBox.alert('Adiconar cliente', 'Adicionado com sucesso');


                            form.reset()
                            win.removeAll();
                            win.add(MyApp.views.cliente.ClienteGridPanel);
                            store.load();


                        }
                    });
                }


            }
        },
        {
            text: 'Cancelar',
            handler: function () {

                var store = Ext.data.StoreManager.lookup('clienteStore')


                this.up('form').getForm().reset();

                var win = this.up('window')

                win.removeAll();
                win.add(MyApp.views.cliente.ClienteGridPanel);
                store.load();




            }
        }
    ]
});

