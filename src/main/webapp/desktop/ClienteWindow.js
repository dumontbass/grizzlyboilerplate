
Ext.define('MyDesktop.ClienteWindow', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'Ext.data.ArrayStore',
        'Ext.util.Format',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'MyApp.views.cliente.ClienteFormPanel',
        'MyApp.views.cliente.ClienteGridPanel'
    ],

    id:'cliente-win',

    init : function(){
        this.launcher = {
            text: 'Clientes',
            iconCls:'cliente-icon'
        };
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('cliente-win');

        var clientePanel = MyApp.views.cliente.ClienteFormPanel;
        var clienteGrid = MyApp.views.cliente.ClienteGridPanel;


        if(!win){


            win = desktop.createWindow({
                id: 'cliente-win',
                title:'Clientes',
                width:1000,
                height:700,
                iconCls: 'cliente-icon',
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit',


                tbar:[{
                    text:'Adicionar cliente',
                    tooltip:'Adiciona um novo cliente',
                    iconCls:'add',
                    handler: function(){win.removeAll(); win.add(clientePanel);  }
                }]
            });

            win.add(clienteGrid);


        }
        return win;
    }
});

