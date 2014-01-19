/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('MyDesktop.App', {
    extend: 'Ext.ux.desktop.App',

    requires: [
        'Ext.window.MessageBox',

        'Ext.ux.desktop.ShortcutModel',

        'MyDesktop.SystemStatus',
        'MyDesktop.VideoWindow',
        'MyDesktop.ClienteWindow',
        'MyDesktop.FuncionarioWindow',
        'MyDesktop.TabWindow',
        'MyDesktop.CardapioWindow',
        'MyDesktop.ProdutoWindow',
        'MyDesktop.Notepad',
        'MyDesktop.BogusMenuModule',
        'MyDesktop.BogusModule',
        'MyDesktop.ItemWindow',
        'MyDesktop.CompraWindow',
        'MyDesktop.PerdasWindow',
        'MyDesktop.ProcessadosWindow',
        'MyDesktop.ConfiguracaoWindow',
        'MyDesktop.PdvWindow',
        'MyDesktop.VendaWindow',
        'MyDesktop.PedidoWindow',
        'MyDesktop.CategoriaWindow',
        'MyDesktop.ComandaWindow',
        'MyDesktop.FornecedorWindow',


//        'MyDesktop.Blockalanche',
        'MyDesktop.Settings'
    ],

    init: function() {
        // custom logic before getXYZ methods get called...
        splashscreen = Ext.getBody().mask('Carregando...',
            'splashscreen');


        this.callParent();


        Ext.getBody().unmask();

        // now ready...
    },

    getModules : function(){
        return [

            new MyDesktop.SystemStatus(),
            new MyDesktop.ClienteWindow(),
            new MyDesktop.FuncionarioWindow(),

            new MyDesktop.CardapioWindow(),
            new MyDesktop.ProdutoWindow(),

            new MyDesktop.ItemWindow(),
            new MyDesktop.CompraWindow(),
            new MyDesktop.PdvWindow(),
            new MyDesktop.VendaWindow(),

            new MyDesktop.PerdasWindow(),
            new MyDesktop.ProcessadosWindow(),

            new MyDesktop.PedidoWindow(),
            new MyDesktop.CategoriaWindow(),
            new MyDesktop.ComandaWindow(),
            new MyDesktop.FornecedorWindow()


        ];
    },

    getDesktopConfig: function () {
        var me = this, ret = me.callParent();

        return Ext.apply(ret, {
            //cls: 'ux-desktop-black',

            contextMenuItems: [
                { text: 'Configura&ccedil;&atilde;es', handler: me.onSettings, scope: me }
            ],

            shortcuts: Ext.create('Ext.data.Store', {
                model: 'Ext.ux.desktop.ShortcutModel',
                data: [
                    { name: 'Clientes', iconCls: 'clientes-shortcut', module: 'cliente-win' },
                    { name: 'Funcionários', iconCls: 'funcionarios-shortcut', module: 'funcionario-win' },
                    { name: 'Cardápios', iconCls: 'cardapios-shortcut', module: 'cardapio-win' },
                    { name: 'Produtos', iconCls: 'produtos-shortcut', module: 'produto-win' },
                    { name: 'Items', iconCls: 'item-shortcut', module: 'item-win' },
                    { name: 'Compra', iconCls: 'compra-shortcut', module: 'compra-win' },
                    { name: 'Processados', iconCls: 'processados-shortcut', module: 'processado-win' },
                    { name: 'Perdas', iconCls: 'perdas-shortcut', module: 'perda-win' },
                    { name: 'Pdv', iconCls: 'pdv-shortcut', module: 'pdv-win' },
                    { name: 'Vendas', iconCls: 'venda-shortcut', module: 'venda-win' },
                    { name: 'Categorias', iconCls: 'categoria-shortcut', module: 'categoria-win' },
                    { name: 'Pedidos', iconCls: 'pedido-shortcut', module: 'pedido-win' },
                    { name: 'Comandas', iconCls: 'comanda-shortcut', module: 'comanda-win' },
                    { name: 'Fornecedores', iconCls: 'fornecedor-shortcut', module: 'fornecedor-win' }

                    //{ name: 'Notepad', iconCls: 'notepad-shortcut', module: 'notepad' },
                    //{ name: 'System Status', iconCls: 'cpu-shortcut', module: 'systemstatus'}
                ]
            }),

            wallpaper: 'desktop/wallpapers/Blue-Sencha.jpg',
            wallpaperStretch: false
        });
    },

    // config for the start menu
    getStartConfig : function() {
        var me = this, ret = me.callParent();

        return Ext.apply(ret, {
            title: 'Smartflex - comanda',
            iconCls: 'user',
            height: 300,
            toolConfig: {
                width: 100,
                items: [
                    {
                        text:'Configurações',
                        iconCls:'settings',
                        handler: me.onSettings,
                        scope: me
                    },
                    '-',
                    {
                        text:'Logout',
                        iconCls:'logout',
                        handler: me.onLogout,
                        scope: me
                    }
                ]
            }
        });
    },

    getTaskbarConfig: function () {
        var ret = this.callParent();

        return Ext.apply(ret, {
            quickStart: [
                { name: 'Itens', iconCls: 'item-icon', module: 'item-win' },
                { name: 'Produtos', iconCls: 'produto-icon', module: 'produto-win' },
                { name: 'Pdv', iconCls: 'pdv-icon', module: 'pdv-win' }

            ],
            trayItems: [
                { xtype: 'trayclock', flex: 1 }
            ]
        });
    },

    onLogout: function () {
        Ext.MessageBox.confirm({

            title:'Logout',
            msg: 'Deseja realmente sair do sistema ?',
            buttonText: {yes: "Sair",cancel: "Cancelar"},
            fn: function(btn){

                if (btn === 'yes') {

                    Ext.util.Cookies.clear("key");

                    window.location.href = "/login";
                }
                else {
                    return;
                }
            }


        });
    },

    onSettings: function () {
        var dlg = new MyDesktop.Settings({
            desktop: this.desktop
        });
        dlg.show();
    }
});
