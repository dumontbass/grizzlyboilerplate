/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('MyDesktop.CompraWindow', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'Ext.data.ArrayStore',
        'Ext.util.Format',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'MyApp.stores.CompraStore',
        'MyApp.views.compra.CompraFormPanel',
        'MyApp.views.compra.CompraGridPanel'

    ],



    id:'compra-win',

    init : function(){
        this.launcher = {
            text: 'Compras',
            iconCls:'compra-icon'


        };


    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('compra-win');
        var compraGrid = MyApp.views.compra.CompraGridPanel;
        var store = Ext.data.StoreManager.lookup('compraStore');

        if(!win){


            win = desktop.createWindow({
                id: 'compra-win',
                title:'Compras',
                width:900,
                minWidth: 600,
                height:520,
                iconCls: 'compra-icon',
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit',


                tbar:[{
                    text:'Adicionar compra',
                    tooltip:'Adiciona um item no estoque',
                    iconCls:'add',
                    handler: function(){



                        //if(store.count() > 0) store.remove();
                        var compraPanel = MyApp.views.compra.CompraFormPanel;
                        win.removeAll(); win.add(compraPanel);

                    }
                }]
            });

            win.add(compraGrid);

        }
        return win;
    }
});

