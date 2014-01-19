Ext.define('MyApp.views.categoria.CategoriaFormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.CategoriaFormPanel',

    id : 'categoriaForm',
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



                var store = Ext.data.StoreManager.lookup('categoriaStore');


                console.log(formPanel.edicao)

                if(formPanel.edicao){

                    var categoria = store.getById(form._record.data.id);

                    categoria.beginEdit();

                    categoria.set(form.getValues());

                    categoria.commit()


                    categoria.save({
                        success: function (categoria) {
                            console.log(categoria)

                            Ext.MessageBox.alert('Alterar categoria', 'Alterado com sucesso');


                            form.reset()
                            win.removeAll();
                            win.add(MyApp.views.categoria.CategoriaGridPanel);
                            //MyApp.stores.CategoriaStore.load();


                        }
                    });


                } else{

                    var categoria = Ext.create('MyApp.models.Categoria', form.getFieldValues());

                    categoria.save({
                        success: function (categoria) {
                            console.log(categoria)

                            Ext.MessageBox.alert('Adiconar compra', 'Adicionado com sucesso');


                            form.reset()
                            win.removeAll();
                            win.add(MyApp.views.categoria.CategoriaGridPanel);
                            //MyApp.stores.CategoriaStore.load();


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
                win.add(MyApp.views.categoria.CategoriaGridPanel);
                //MyApp.stores.CategoriaStore.load();


            }
        }
    ]



});

