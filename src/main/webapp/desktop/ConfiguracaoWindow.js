/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('MyDesktop.ConfiguracaoWindow', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'Ext.data.ArrayStore',
        'Ext.util.Format',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'MyApp.views.configuracao.ConfiguracaoFormPanel'
    ],

    id:'configuracao-win',

    autoScroll: true,

    init : function(){
        this.launcher = {
            text: 'Configurações',
            iconCls:'configuracao-shortcut-icon'
        };
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('configuracao-win');


        if(!win){
            win = desktop.createWindow({
                id: 'configuracao-win',
                title:'Configurações',
                width:800,
                height:400,
                iconCls: 'configuracao-shortcut-icon',
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit'


            });


            win.add(MyApp.views.configuracao.ConfiguracaoFormPanel);
        }
        return win;
    }
});

