/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('MyDesktop.PerdasWindow', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'Ext.data.ArrayStore',
        'Ext.util.Format',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer'
    ],

    id:'perda-win',

    init : function(){
        this.launcher = {
            text: 'Perdas',
            iconCls:'perda-icon'
        };
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('perda-win');

        var perdaPanel = MyApp.views.PerdaFormPanel;
        var perdaGrid = MyApp.views.PerdaGridPanel;


        if(!win){


            win = desktop.createWindow({
                id: 'perda-win',
                title:'Perdas',
                width:740,
                height:480,
                iconCls: 'perda-icon',
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit',


                tbar:[{
                    text:'Adicionar perda',
                    tooltip:'Adiciona uma perda no estoque',
                    iconCls:'add',
                    handler: function(){win.removeAll(); win.add(perdaPanel);  }
                },'-',{
                    text:'Listar',
                    tooltip:'Lista as perdas de estoque',
                    iconCls:'listar',
                    handler: function(){win.removeAll(); win.add(perdaGrid); MyApp.stores.PerdaStore.load(); }
                }]
            });

            win.removeAll(); win.add(perdaGrid); MyApp.stores.PerdaStore.load();
        }
        return win;
    }
});

