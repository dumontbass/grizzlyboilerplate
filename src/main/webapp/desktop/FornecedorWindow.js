/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('MyDesktop.FornecedorWindow', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'Ext.data.ArrayStore',
        'Ext.util.Format',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'MyApp.views.fornecedor.FornecedorFormPanel',
        'MyApp.views.fornecedor.FornecedorGridPanel'
    ],

    id:'fornecedor-win',

    autoScroll: true,

    init : function(){
        this.launcher = {
            text: 'Fornecedors',
            iconCls:'fornecedor-icon'
        };
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('fornecedor-win');
        var fornecedorPanel = MyApp.views.fornecedor.FornecedorFormPanel;
        var fornecedorGrid = Ext.create('MyApp.views.fornecedor.FornecedorGridPanel');

        var store = Ext.data.StoreManager.lookup('fornecedorStore');

        if(!win){





            win = desktop.createWindow({
                id: 'fornecedor-win',
                title:'Fornecedors',
                width:900,
                height:400,
                iconCls: 'fornecedor-icon',
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit',

                tbar:[{
                    text:'Adicionar fornecedor',
                    tooltip:'Adiciona um fornecedor no estoque',
                    iconCls:'add',
                    handler: function(){
                        var fornecedorPanel = MyApp.views.fornecedor.FornecedorFormPanel;
                        win.removeAll(); win.add(fornecedorPanel);

                    }
                },
                    '-',
                    {
                        xtype    : 'textfield',
                        text     : 'search',
                        listeners: {

                            change: function(a,v){

                                console.log(v)

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


            win.add(fornecedorGrid);
            //console.log(store.count())

            /*if(store.count() > 0){

                store.load();
                win.add(fornecedorGrid);

            }else{

                win.add(fornecedorPanel);

            }*/
        }
        return win;
    }
});

