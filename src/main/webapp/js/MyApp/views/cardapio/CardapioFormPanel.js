Ext.define('MyApp.views.cardapio.CardapioFormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.cardapioformpanel',

    requires : [
            'MyApp.views.cardapio.ProdutosCardapioGridPanel'
    ],

    id: 'cardapioForm',
    bodyStyle: 'padding: 10px; background-color: #DCE5F0; border-left: none;',
    defaultType: 'textfield',
    defaults: {

        labelWidth: 150
    },

    edicao: false,

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
                        validator: function (v) {
                            return (v === "") ? "Não pode estar vazio!" : true;
                        }


                    },
                    {
                        xtype: 'combobox',
                        fieldLabel: 'Selecione a categoria',
                        name: 'categoria',
                        id: 'comboboxCategoriaCardapio',
                        displayField: 'nome',
                        valueField: 'nome',
                        lazyRender: true,
                        width: 400,
                        store: Ext.create('MyApp.stores.CategoriaStore')
                    },
                    {
                        xtype: 'button',
                        text: 'Adicionar categoria',
                        listeners: {
                            click: function (a, value) {

                                var categoria = Ext.ComponentQuery.query('#comboboxCategoriaCardapio')[0];



                                var cat = Ext.create('MyApp.models.Categoria')

                                cat.set('nome',categoria.getValue());

                                var grid  = Ext.ComponentQuery.query('#categoriaCardapioGrid')[0];

                               grid.getStore().add(cat);




                            }
                        }
                    }
                ]
            },

            /*{
                xtype: 'container',
                title: 'Produtos',
                labelStyle: 'color:#888;padding:0',
                name: 'produtos',
                defaultType: 'textfield',
                fieldDefaults: {
                    labelAlign: 'top',
                    margins: '0 10 10 0'
                },
                items: [

                    MyApp.views.categoria.CategoriaGridPanel

                ]
            }*/

            {
                xtype: 'grid',
                itemId: 'categoriaCardapioGrid',
                store:  Ext.create('Ext.data.Store',{


                    sortInfo:{
                        field:'nome',
                        direction:'ASC'// or 'DESC' (case sensitive for local sorting)
                    },

                    model: Ext.ModelManager.getModel('MyApp.models.Categoria'),

                    proxy: {
                        type: 'rest',
                        url: '/categorias',

                        reader: {
                            type: 'json',
                            root: 'data'
                        }

                    }


                }),
                columns: [
                    { text: 'Nome',  dataIndex: 'nome' , flex: 1},

                    {
                        xtype: 'actioncolumn',
                        width: 60,
                        align: 'center',
                        sortable: false,
                        menuDisabled: true,
                        header: 'Excluir',
                        items: [
                            { icon: 'img/trash.png',
                                handler: function (grid, rowIndex, colIndex) {

                                    Ext.MessageBox.confirm( {
                                        title:'Remover item',
                                        msg: 'Deseja realmente remover este item ?',
                                        buttonText: {yes: "Remover",cancel: "Cancelar"},
                                        fn: function(btn){

                                            if (btn === 'yes') {

                                                var store = Ext.data.StoreManager('produtoVendaStore');

                                                var item = store.getAt(rowIndex)

                                                store.remove(item)

                                                //MyApp.stores.CardapioCompraStore.sync();
                                            }
                                            else {
                                                return;
                                            }
                                        }

                                    });


                                }
                            }
                        ]
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


                var store = Ext.data.StoreManager.lookup('cardapioStore');


                console.log(formPanel.edicao)

                if (formPanel.edicao) {

                    var cardapio = store.getById(form._record.data.id);

                    cardapio.beginEdit();

                    cardapio.set(form.getValues());

                    cardapio.commit()


                    cardapio.save({
                        success: function (cardapio) {
                            console.log(cardapio)

                            Ext.MessageBox.alert('Alterar cardapio', 'Alterado com sucesso');


                            form.reset()
                            win.removeAll();
                            win.add(MyApp.views.cardapio.CardapioGridPanel);
                            //MyApp.stores.CardapioStore.load();


                        }
                    });


                } else {

                    var cardapio = Ext.create('MyApp.models.Cardapio', form.getFieldValues());

                    var grid  = Ext.ComponentQuery.query('#categoriaCardapioGrid')[0];


                    var categorias = [];

                    grid.getStore().data.each(function(){

                          categorias.push(this.data)

                    });


                    cardapio.set('categorias',categorias);

                    cardapio.save({
                        success: function (cardapio) {
                            console.log(cardapio)

                            Ext.MessageBox.alert('Adiconar compra', 'Adicionado com sucesso');


                            form.reset()
                            win.removeAll();
                            win.add(MyApp.views.cardapio.CardapioGridPanel);
                            //MyApp.stores.CardapioStore.load();


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
                win.add(MyApp.views.cardapio.CardapioGridPanel);
                //MyApp.stores.CardapioStore.load();


            }
        }
    ]



});

