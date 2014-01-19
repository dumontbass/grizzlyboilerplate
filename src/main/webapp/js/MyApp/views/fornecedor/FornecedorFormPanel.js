Ext.define('MyApp.views.fornecedor.FornecedorFormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.FornecedorFormPanel',

    id : 'fornecedorForm',
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
                        flex: 0.5,
                        name: 'cnpj',
                        fieldLabel: 'CNPJ',
                        validator: function(v) { return (v === "") ? "Não pode estar vazio!" : true; }


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
                        flex: 0.3,
                        name: 'endereco.cep',
                        fieldLabel: 'CEP',
                        validator: function(v) { return (v === "") ? "Não pode estar vazio!" : true; }


                    } ,
                    {
                        flex: 1,
                        name: 'endereco.logradouro',
                        fieldLabel: 'Nome',
                        validator: function(v) { return (v === "") ? "Não pode estar vazio!" : true; }


                    } ,
                    {
                        flex: 0.5,
                        name: 'endereco.bairro',
                        fieldLabel: 'Bairro',
                        validator: function(v) { return (v === "") ? "Não pode estar vazio!" : true; }


                    },
                    {
                        flex: 0.5,
                        name: 'endereco.cidade',
                        fieldLabel: 'Cidade',
                        validator: function(v) { return (v === "") ? "Não pode estar vazio!" : true; }


                    },
                    {
                        flex: 0.5,
                        name: 'endereco.estado',
                        fieldLabel: 'Estado',
                        validator: function(v) { return (v === "") ? "Não pode estar vazio!" : true; }


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



                var store = Ext.data.StoreManager.lookup('fornecedorStore');


                console.log(formPanel.edicao)

                if(formPanel.edicao){

                    var fornecedor = store.getById(form._record.data.id);

                    fornecedor.beginEdit();

                    fornecedor.set(form.getValues());

                    fornecedor.commit()


                    fornecedor.save({
                        success: function (fornecedor) {
                            console.log(fornecedor)

                            Ext.MessageBox.alert('Alterar fornecedor', 'Alterado com sucesso');


                            form.reset()
                            win.removeAll();
                            win.add(MyApp.views.fornecedor.FornecedorGridPanel);
                            //MyApp.stores.FornecedorStore.load();


                        }
                    });


                } else{

                    var fornecedor = Ext.create('MyApp.models.Fornecedor', form.getFieldValues());


                    var endereco = Ext.create('MyApp.models.Endereco');

                    var form = this.up('form').getForm();


                    endereco.set('cep', form.findField('endereco.cep').getValue());
                    endereco.set('logradouro', form.findField('endereco.logradouro').getValue());
                    endereco.set('bairro', form.findField('endereco.bairro').getValue());
                    endereco.set('cidade', form.findField('endereco.cidade').getValue());
                    endereco.set('estado', form.findField('endereco.estado').getValue());
                    endereco.set('logradouro', form.findField('endereco.logradouro').getValue());


                    fornecedor.set('endereco', endereco.getData());


                    fornecedor.save({
                        success: function (fornecedor) {
                            console.log(fornecedor)

                            Ext.MessageBox.alert('Adiconar compra', 'Adicionado com sucesso');


                            form.reset()
                            win.removeAll();
                            win.add(MyApp.views.fornecedor.FornecedorGridPanel);
                            //MyApp.stores.FornecedorStore.load();


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
                win.add(MyApp.views.fornecedor.FornecedorGridPanel);
                //MyApp.stores.FornecedorStore.load();


            }
        }
    ]



});

