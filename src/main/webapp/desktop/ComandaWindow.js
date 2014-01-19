/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('MyDesktop.ComandaWindow', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'Ext.data.ArrayStore',
        'Ext.util.Format',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'MyApp.stores.ComandaStore',
        'MyApp.views.comanda.ComandaFormPanel',
        'MyApp.views.comanda.ComandaGridPanel'

    ],



    id:'comanda-win',

    init : function(){
        this.launcher = {
            text: 'Comandas',
            iconCls:'comanda-icon'


        };


    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('comanda-win');


        var comandaGrid = MyApp.views.comanda.ComandaGridPanel;


        var store = Ext.data.StoreManager.lookup('comandaStore');

        if(!win){


            win = desktop.createWindow({
                id: 'comanda-win',
                title:'Comandas',
                width:900,
                minWidth: 600,
                height:520,
                iconCls: 'comanda-icon',
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit',


                tbar:[{
                    text:'Adicionar comanda',
                    tooltip:'Adiciona um item no estoque',
                    iconCls:'add',
                    handler: function(){



                        //if(store.count() > 0) store.remove();
                        var comandaPanel = MyApp.views.comanda.ComandaFormPanel;
                        win.removeAll(); win.add(comandaPanel);  }
                }]
            });

            win.add(comandaGrid);



          /*  if(store.count() > 0){

                store.load();
                win.add(comandaGrid);

            }else{

                win.add(comandaPanel);

            }*/
        }
        return win;
    }
});

