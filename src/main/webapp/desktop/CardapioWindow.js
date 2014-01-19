/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('MyDesktop.CardapioWindow', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'Ext.data.ArrayStore',
        'Ext.util.Format',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'MyApp.views.cardapio.CardapioFormPanel',
        'MyApp.views.cardapio.CardapioGridPanel'
    ],

    id:'cardapio-win',

    autoScroll: true,

    init : function(){
        this.launcher = {
            text: 'Itens',
            iconCls:'cardapio-icon'
        };
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('cardapio-win');
        var cardapioPanel = MyApp.views.cardapio.CardapioFormPanel;
        var cardapioGrid = Ext.create('MyApp.views.cardapio.CardapioGridPanel');

        var store = Ext.data.StoreManager.lookup('cardapioStore');

        if(!win){





            win = desktop.createWindow({
                id: 'cardapio-win',
                title:'Cardapios',
                width:900,
                height:400,
                iconCls: 'cardapio-icon',
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit',

                tbar:[{
                    text:'Adicionar cardapio',
                    tooltip:'Adiciona um cardapio no estoque',
                    iconCls:'add',
                    handler: function(){
                        var cardapioPanel = MyApp.views.cardapio.CardapioFormPanel;
                        win.removeAll(); win.add(cardapioPanel);

                    }
                },
                    '-',
                    {
                        xtype    : 'textfield',
                        text     : 'search',
                        listeners: {

                            change: function(a,v){



                                console.log(store)

                                store.clearFilter(true);
                                store.filter('nome', v);
                            }

                        }

                    }
                    //TODO Excel
                   /* {
                        text: 'Excel',
                        handler: function(){
                            var form = this.up('form').getForm();
                            if(form.isValid()){
                                form.submit({
                                    url: '/excel',
                                    waitMsg: 'Uploading your photo...',
                                    success: function(fp, o) {
                                        msg('Success', 'Processed file "' + o.result.file + '" on the server');
                                    }
                                });
                            }
                        }
                    }*/
                ]
            });


            win.add(cardapioGrid);
            //console.log(store.count())

            /*if(store.count() > 0){

                store.load();
                win.add(cardapioGrid);

            }else{

                win.add(cardapioPanel);

            }*/
        }
        return win;
    }
});

