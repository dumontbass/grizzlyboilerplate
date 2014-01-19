/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('MyDesktop.CategoriaWindow', {
    extend: 'Ext.ux.desktop.Module',

    requires: [

        'Ext.util.Format',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'MyApp.views.categoria.CategoriaFormPanel',
        'MyApp.views.categoria.CategoriaGridPanel'
    ],

    id:'categoria-win',

    autoScroll: true,

    init : function(){
        this.launcher = {
            text: 'Categorias',
            iconCls:'categoria-icon'
        };
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('categoria-win');
        var categoriaPanel = MyApp.views.categoria.CategoriaFormPanel;
        var categoriaGrid = Ext.create('MyApp.views.categoria.CategoriaGridPanel');

        var store = Ext.data.StoreManager.lookup('categoriaStore');

        if(!win){





            win = desktop.createWindow({
                id: 'categoria-win',
                title:'Categorias',
                width:900,
                height:400,
                iconCls: 'categoria-icon',
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit',

                tbar:[{
                    text:'Adicionar categoria',
                    tooltip:'Adiciona um categoria no estoque',
                    iconCls:'add',
                    handler: function(){
                        var categoriaPanel = MyApp.views.categoria.CategoriaFormPanel;
                        win.removeAll(); win.add(categoriaPanel);

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


            win.add(categoriaGrid);
            //console.log(store.count())

            /*if(store.count() > 0){

                store.load();
                win.add(categoriaGrid);

            }else{

                win.add(categoriaPanel);

            }*/
        }
        return win;
    }
});

