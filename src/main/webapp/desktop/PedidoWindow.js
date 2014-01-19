/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('MyDesktop.PedidoWindow', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'Ext.data.ArrayStore',
        'Ext.util.Format',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'MyApp.views.pedido.PedidoFormPanel',
        'MyApp.views.pedido.PedidoGridPanel'
    ],

    id:'pedido-win',

    autoScroll: true,

    init : function(){
        this.launcher = {
            text: 'Pedidos',
            iconCls:'pedido-icon'
        };
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('pedido-win');
        var pedidoPanel = MyApp.views.pedido.PedidoFormPanel;
        var pedidoGrid = Ext.create('MyApp.views.pedido.PedidoGridPanel');

        var store = Ext.data.StoreManager.lookup('pedidoStore');

        if(!win){





            win = desktop.createWindow({
                id: 'pedido-win',
                title:'Pedidos',
                width:900,
                height:400,
                iconCls: 'pedido-icon',
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit',

                tbar:[{
                    text:'Adicionar pedido',
                    tooltip:'Adiciona um pedido no estoque',
                    iconCls:'add',
                    handler: function(){
                        var pedidoPanel = MyApp.views.pedido.PedidoFormPanel;
                        win.removeAll(); win.add(pedidoPanel);

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


            win.add(pedidoGrid);
            //console.log(store.count())

            /*if(store.count() > 0){

                store.load();
                win.add(pedidoGrid);

            }else{

                win.add(pedidoPanel);

            }*/
        }
        return win;
    }
});

