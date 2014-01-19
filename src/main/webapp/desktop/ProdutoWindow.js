/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('MyDesktop.ProdutoWindow', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'Ext.data.ArrayStore',
        'Ext.util.Format',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',

        'MyApp.views.produto.ComposicaoFormPanel',
        'MyApp.views.produto.FracionadoFormPanel',
        'MyApp.views.produto.InteiroFormPanel',
        'MyApp.views.produto.ComboFormPanel'

    ],

    id: 'produto-win',

    init: function () {
        this.launcher = {
            text: 'Produtos',
            iconCls: 'produto-icon'
        };
    },

    createWindow: function () {
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('produto-win');

        //var produtoPanel = MyApp.views.produto.ProdutoFormPanel;
       // var produtoGrid = MyApp.views.produto.ProdutoGridPanel;


        var composicaoPanel = MyApp.views.produto.ComposicaoFormPanel;
        var fracionadoPanel = MyApp.views.produto.FracionadoFormPanel;
        var inteiroPanel = MyApp.views.produto.InteiroFormPanel;
        var comboPanel = MyApp.views.produto.ComboFormPanel;


        if (!win) {


            win = desktop.createWindow({
                id: 'produto-win',
                title: 'Produto',
                width: 900,
                height: 520,
                iconCls: 'produto-icon',
                animCollapse: false,
                constrainHeader: true,
                layout: 'fit',


                tbar: [
                    {
                        text: '+ Composição',
                        tooltip: 'Adiciona uma composição de produto',
                        iconCls: 'composicao',
                        handler: function () {
                            win.removeAll();
                            win.add(composicaoPanel);

                        }
                    },
                    '-',
                    {

                        text: '+ Fracionado',
                        tooltip: 'Adiciona um produto fracionado',
                        iconCls: 'fracionado',
                        handler: function () {
                            win.removeAll();
                            win.add(fracionadoPanel);

                        }
                    },
                    '-',
                    {

                        text: '+ Inteiro',
                        tooltip: 'Adiciona um produto unitário',
                        iconCls: 'inteiro',
                        handler: function () {
                            win.removeAll();
                            win.add(inteiroPanel);

                        }
                    },
                    {

                        text: '+ Combo',
                        tooltip: 'Adiciona um combo de produtos',
                        iconCls: 'combo',
                        handler: function () {
                            win.removeAll();
                            win.add(comboPanel);

                        }
                    }
                ]
            });


        }
        return win;
    }
});

