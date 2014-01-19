/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('MyDesktop.ProcessadosWindow', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'Ext.data.ArrayStore',
        'Ext.util.Format',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'MyApp.views.processado.ProcessadoFormPanel',
        'MyApp.views.processado.ProcessadoGridPanel'
    ],

    id:'processado-win',

    init : function(){
        this.launcher = {
            text: 'Processados',
            iconCls:'processado-icon'
        };
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('processado-win');

        var processadoPanel = MyApp.views.processado.ProcessadoFormPanel;
        var processadoGrid = MyApp.views.processado.ProcessadoGridPanel;


        if(!win){


            win = desktop.createWindow({
                id: 'processado-win',
                title:'Processados',
                width:760,
                height:550,
                iconCls: 'processado-icon',
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit',


                tbar:[{
                    text:'Adicionar processamento',
                    tooltip:'Adiciona um item para processamento',
                    iconCls:'add',
                    handler: function(){win.removeAll(); win.add(processadoPanel);  }
                }]
            });

            var store = MyApp.stores.ProcessadoStore;

            console.log(store.count())

            if(store.count() > 0){

                store.load();
                win.add(processadoGrid);

            }else{

                win.add(processadoPanel);

            }
        }
        return win;
    }
});

