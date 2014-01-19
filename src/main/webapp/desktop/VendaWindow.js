/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('MyDesktop.VendaWindow', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'Ext.data.ArrayStore',
        'Ext.util.Format',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        
        'MyApp.views.venda.VendaGridPanel'
    ],

    id:'venda-win',

    autoScroll: true,

    init : function(){
        this.launcher = {
            text: 'Vendas',
            iconCls:'venda-icon'
        };
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('venda-win');
        //var vendaPanel = MyApp.views.venda.VendaFormPanel;
        var vendaGrid = Ext.create('MyApp.views.venda.VendaGridPanel');

        var store = Ext.data.StoreManager.lookup('vendaStore');

        if(!win){





            win = desktop.createWindow({
                id: 'venda-win',
                title:'Vendas',
                width:800,
                height:400,
                iconCls: 'venda-icon',
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit'
            });


            win.add(vendaGrid);
            //console.log(store.count())

            /*if(store.count() > 0){

                store.load();
                win.add(vendaGrid);

            }else{

                win.add(vendaPanel);

            }*/
        }
        return win;
    }
});

