Ext.define('MyApp.views.pedido.PedidoFormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.PedidoFormPanel',

    id : 'pedidoForm',
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
                pedidos: [
                    {
                        flex: 1,
                        name: 'nome',
                        fieldLabel: 'Nome',
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



                var store = Ext.data.StoreManager.lookup('pedidoStore');


                console.log(formPanel.edicao)

                if(formPanel.edicao){

                    var pedido = store.getById(form._record.data.id);

                    pedido.beginEdit();

                    pedido.set(form.getValues());

                    pedido.commit()


                    pedido.save({
                        success: function (pedido) {
                            console.log(pedido)

                            Ext.MessageBox.alert('Alterar pedido', 'Alterado com sucesso');


                            form.reset()
                            win.removeAll();
                            win.add(MyApp.views.pedido.PedidoGridPanel);
                            //MyApp.stores.PedidoStore.load();


                        }
                    });


                } else{

                    var pedido = Ext.create('MyApp.models.Pedido', form.getFieldValues());

                    pedido.save({
                        success: function (pedido) {
                            console.log(pedido)

                            Ext.MessageBox.alert('Adiconar compra', 'Adicionado com sucesso');


                            form.reset()
                            win.removeAll();
                            win.add(MyApp.views.pedido.PedidoGridPanel);
                            //MyApp.stores.PedidoStore.load();


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
                win.add(MyApp.views.pedido.PedidoGridPanel);
                //MyApp.stores.PedidoStore.load();


            }
        }
    ]



});

