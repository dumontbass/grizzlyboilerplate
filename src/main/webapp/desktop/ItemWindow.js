/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('MyDesktop.ItemWindow', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'Ext.data.ArrayStore',
        'Ext.util.Format',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'MyApp.views.item.ItemFormPanel',
        'MyApp.views.item.ItemGridPanel'
    ],

    id:'item-win',

    autoScroll: true,

    init : function(){
        this.launcher = {
            text: 'Itens',
            iconCls:'item-icon'
        };
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('item-win');
        var itemPanel = MyApp.views.item.ItemFormPanel;
        var itemGrid = Ext.create('MyApp.views.item.ItemGridPanel');

        var store = Ext.data.StoreManager.lookup('itemStore');

        if(!win){

            win = desktop.createWindow({
                id: 'item-win',
                title:'Items',
                width:900,
                height:400,
                iconCls: 'item-icon',
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit',

                tbar:[{
                    text:'Adicionar item',
                    tooltip:'Adiciona um item no estoque',
                    iconCls:'add',
                    handler: function(){
                        var itemPanel = MyApp.views.item.ItemFormPanel;
                        win.removeAll(); win.add(itemPanel);

                    }
                },
                    '-',
                    {
                        xtype    : 'textfield',
                        text     : 'search',
                        listeners: {

                            change: function(a,v){


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


            win.add(itemGrid);
            //console.log(store.count())

            /*if(store.count() > 0){

                store.load();
                win.add(itemGrid);

            }else{

                win.add(itemPanel);

            }*/
        }
        return win;
    }
});

