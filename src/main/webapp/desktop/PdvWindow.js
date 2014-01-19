/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('MyDesktop.PdvWindow', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'Ext.data.ArrayStore',
        'Ext.util.Format',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'MyApp.views.pdv.PdvFormPanel' ,
        'MyApp.stores.ProdutoStore',
        'MyApp.views.pdv.ItemsVendaGridPanel',
        'MyApp.stores.ClienteStore',
        'Ext.ux.DataTip'
    ],

    id: 'pdv-win',

    autoScroll: true,

    init: function () {
        this.launcher = {
            text: 'PDV',
            iconCls: 'pdv-icon'
        };


    },

    createWindow: function () {
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('pdv-win');
        //var pdvPanel = MyApp.views.pdv.PdvFormPanel;
        //var pdvGrid = MyApp.views.pdv.PdvGridPanel;



        console.log(Ext.getBody().getViewSize())

        if (!win) {
            win = desktop.createWindow({
                id: 'pdv-win',
                title: 'Pdv',
                width: 900,
                height: 600,

                iconCls: 'pdv-icon',
                animCollapse: false,
                constrainHeader: true,
                layout: 'border',

                tbar: [
                    /*{
                     text: 'Opções',
                     //tooltip:'Adiciona um item no estoque',
                     iconCls: 'add',
                     handler: function () {


                     }
                     },

                     {
                     text: 'Ajuda',
                     //tooltip:'Adiciona um item no estoque',
                     iconCls: 'add',
                     handler: function () {


                     }
                     }*/

                ],

                items: [


                    {

                        title: 'Venda',
                        region: 'west',
                        xtype: 'fieldset',
                        margins: '0 5 0 5',

                        width: 200,

                        items: [
                            {
                                xtype: 'displayfield',
                                fieldCls: 'totalFieldPDV',
                                //labelCls: 'totalLabelPDV',
                                cls: 'vendaPDV',
                                fieldLabel: 'Total',
                                itemId: 'totalVenda',
                                margins: '10 10 10 10',
                                labelAlign: 'top',
                                name: 'valorTotal',
                                value: '0.00',


                                renderer: moneyBRL

                            },

                            {
                                fieldLabel: 'Desconto',
                                name: 'desconto',
                                xtype: 'numberfield',
                                fieldCls: 'totalFieldPDV',
                                hideTrigger: true,
                                margins: '10 10 10 10',
                                labelAlign: 'top',
                                minValue: 0,
                                value: 0.00,
                                decimalSeparator: ',',
                                maxValue: 10000.00,
                                thousandSeparator: '.',
                                decimalPrecision: 2,

                                renderer: moneyBRL,
                                listeners: {

                                    change: {

                                        fn: function (comp, value) {

                                            console.log(comp)
                                            console.log(value)
                                        }
                                    }
                                }

                            },

                            {
                                fieldLabel: 'Dinheiro',
                                name: 'dinheiro',
                                hidden: true,
                                xtype: 'numberfield',
                                fieldCls: 'totalFieldPDV',
                                itemId: 'dinheiroTxt',
                                hideTrigger: true,
                                margins: '10 10 10 10',
                                labelAlign: 'top',
                                minValue: 0,
                                value: 0.00,
                                decimalSeparator: ',',
                                maxValue: 10000.00,
                                thousandSeparator: '.',
                                decimalPrecision: 2,
                                renderer: moneyBRL,
                                listeners: {

                                    change: {

                                        fn: function (comp, value) {

                                            var totalCmp = Ext.ComponentQuery.query('#totalVenda');

                                            var troco = Ext.ComponentQuery.query('#trocoDisplay');

                                            var total = totalCmp[0].getValue();

                                            if (total < value) {

                                                troco[0].setValue(value - total);
                                            } else {

                                                troco[0].setValue(0.00);
                                            }

                                        }
                                    }
                                }

                            },

                            {
                                fieldLabel: 'Troco',
                                name: 'troco',
                                hidden: true,
                                xtype: 'displayfield',
                                fieldCls: 'totalFieldPDV',
                                itemId: 'trocoDisplay',
                                hideTrigger: true,
                                margins: '10 10 10 10',
                                labelAlign: 'top',
                                minValue: 0,
                                value: 0.00,
                                renderer: moneyBRL,
                                listeners: {

                                    change: {

                                        fn: function (comp, value) {

                                            console.log(comp)
                                            console.log(value)
                                        }
                                    }
                                }

                            },

                            {
                                xtype: 'button',
                                text: 'Finalizar pedido',
                                cls: 'btnFinalizaPedido',
                                margins: '50 10 0 0',
                                listeners: {
                                    click: function (a, value) {

                                        var venda = Ext.create('MyApp.models.Venda')

                                        var cliente = Ext.create('MyApp.models.Cliente');


                                        var produtoStore = Ext.data.StoreManager.lookup('produtoVendaStore');

                                        var produtos = [];

                                        produtoStore.each(function (item) {

                                            produtos.push(item.data)

                                        });


                                        //cliente.set('nome', 'fulano');

                                        var aux = [];

                                        cliente.set('enderecos', aux)

                                        venda.set('cliente', cliente.data)

                                        venda.set('produtos', produtos);

                                        var totalVenda = Ext.ComponentQuery.query('#totalVenda');


                                        venda.set('valorTotal', totalVenda[0].getValue());

                                        venda.save({
                                            success: function (item) {
                                                console.log(item)

                                                Ext.MessageBox.alert('Venda', 'Adicionado com sucesso');

                                                produtoStore.removeAll()

                                                produtos = [];


                                            }
                                        });

                                    },
                                    specialkey: {

                                        fn:function(f,e){
                                           if(e.getKey() == e.F4){

                                               var venda = Ext.create('MyApp.models.Venda')

                                               var cliente = Ext.create('MyApp.models.Cliente');


                                               var produtoStore = Ext.data.StoreManager.lookup('produtoVendaStore');

                                               var produtos = [];

                                               produtoStore.each(function (item) {

                                                   produtos.push(item.data)

                                               });


                                               //cliente.set('nome', 'fulano');

                                               var aux = [];

                                               cliente.set('enderecos', aux)

                                               venda.set('cliente', cliente.data)

                                               venda.set('produtos', produtos);

                                               var totalVenda = Ext.ComponentQuery.query('#totalVenda');


                                               venda.set('valorTotal', totalVenda[0].getValue());

                                               venda.save({
                                                   success: function (item) {
                                                       console.log(item)

                                                       Ext.MessageBox.alert('Venda', 'Adicionado com sucesso');

                                                       produtoStore.removeAll()

                                                       produtos = [];


                                                   }
                                               });
                                           }

                                        }
                                    }
                                }
                            }
                        ]
                    },
                    {

                        title: 'Produtos',
                        xtype: 'fieldset',
                        region: 'center',
                        margins: '0 5 0 0',


                        items: [

                            {
                                xtype: 'container',

                                labelStyle: 'color:#888;padding:0',

                                defaultType: 'textfield',
                                layout: 'hbox',


                                items: [

                                    {
                                        xtype: 'combobox',
                                        labelAlign: 'top',
                                        fieldLabel: 'Selecione o produto',
                                        fieldStyle: 'fieldComboItemCompraPdv',
                                        labelCls: 'labelComboItemCompraPdv',
                                        name: 'produto',
                                        itemId: 'comboboxItemCompra',
                                        margins: '10 10 10 10',
                                        tooltip: 'Enter your first name',
                                        // height: 100,
                                        cls: 'comboProduto',
                                        flex: 0.3,
                                        displayField: 'nome',
                                        valueField: 'id',
                                        //lazyRender: true,

                                        store: MyApp.stores.ProdutoStore,


                                        queryMode: 'local', //default behavior
                                        forceSelection: true,

                                        typeAhead: true,
                                        typeAheadDelay: 100,
                                        listConfig: {
                                            listeners: {
                                                itemclick: function (list, record) {
                                                    //Ext.getCmp('comboboxItemCompra').setValue(record);


                                                    console.log(record)


                                                }

                                            },

                                            getInnerTpl: function (v, a, b) {


                                                var tpl = '' +

                                                    '<div style="font-weight:bold;background: #ffe5c1">{nome}</div>' +

                                                    '<table style="width: 100%">' +
                                                    '<tr>' +

                                                    '<td>Valor</td>' +


                                                    '</tr>' +
                                                    '<tr>' +

                                                    '<td style="color: green;font-weight: bold;">{[moneyBRL(values.valor)]}</td>' +

                                                    '</tr>' +
                                                    '</table>' +


                                                    '';
                                                return tpl;
                                            }
                                        },
                                        listeners: {
                                            select: {
                                                fn: function (cb, records) {

                                                    //window.location.search = Ext.urlEncode({"lang":record.get("code"),"charset":record.get("charset")});
                                                },
                                                scope: this
                                            },


                                            specialkey: {

                                                fn:function(f,e){

                                                    var comboProduto = Ext.ComponentQuery.query('#comboboxItemCompra')[0];

                                                    var id = comboProduto.value

                                                    console.log(id)

                                                    if(id == null) return;

                                                    console.log(e.getKey())
                                                    if(e.getKey()==e.ENTER){



                                                        //var store = Ext.data.StoreManager.lookup('produtoStore');

                                                        var store = comboProduto.getStore();

                                                        var cmb = Ext.ComponentQuery.query('#comboboxItemCompra');

                                                        var item_id = cmb[0].getValue();

                                                        var item_produto = Ext.create('MyApp.models.ProdutoVenda');

                                                        var quantidade = Ext.ComponentQuery.query('#quantidade');

                                                        var item = store.getById(item_id, function(a) { console.log('caiu')})


                                                        item_produto.set('nome', item.getData().nome);
                                                        item_produto.set('descricao', item.getData().descricao);
                                                        item_produto.set('opcionais', item.getData().opcionais);
                                                        item_produto.set('imagem', item.getData().imagem);
                                                        item_produto.set('valorUnitario', item.getData().valor);
                                                        item_produto.set('quantidade', quantidade[0].getValue());

                                                        //item_produto.set('valorUnitario', item.getData().valorUnitario);

                                                        var valorItems = item.getData().valor * quantidade[0].getValue();

                                                        item_produto.set('valorVenda', valorItems);

                                                        if (item_id !== '') {
                                                            var vendaStore = Ext.data.StoreManager.lookup('produtoVendaStore');

                                                            vendaStore.add(item_produto);
                                                        }

                                                        // Total


                                                        var valorTotal = 0.0


                                                        vendaStore.each(function (item) {

                                                            valorTotal += item.data.valorVenda;
                                                            console.log(item)

                                                        });


                                                        var total = Ext.ComponentQuery.query('#totalVenda');

                                                        console.log(total)

                                                        total[0].setValue(valorTotal)


                                                        comboProduto.setValue("")

                                                    }



                                                    if(e.getKey() == e.F4){

                                                        var venda = Ext.create('MyApp.models.Venda')

                                                        var cliente = Ext.create('MyApp.models.Cliente');


                                                        var produtoStore = Ext.data.StoreManager.lookup('produtoVendaStore');

                                                        var produtos = [];

                                                        produtoStore.each(function (item) {

                                                            produtos.push(item.data)

                                                        });


                                                        //cliente.set('nome', 'fulano');

                                                        var aux = [];

                                                        cliente.set('enderecos', aux)

                                                        venda.set('cliente', cliente.data)

                                                        venda.set('produtos', produtos);

                                                        var totalVenda = Ext.ComponentQuery.query('#totalVenda');


                                                        venda.set('valorTotal', totalVenda[0].getValue());

                                                        venda.save({
                                                            success: function (item) {
                                                                console.log(item)

                                                                Ext.MessageBox.alert('Venda', 'Adicionado com sucesso');

                                                                produtoStore.removeAll()

                                                                produtos = [];


                                                            }
                                                        });
                                                    }


                                                }
                                            }
                                        }

                                    },
                                    {
                                        xtype: 'numberfield',
                                        name: 'quantidade',
                                        fieldLabel: 'Quantidade',
                                        enableKeyEvents: true,
                                        labelAlign: 'top',
                                        labelCls: 'labelQtdItemCompraPdv',
                                        fieldCls: 'fieldQtdItemCompraPdv',
                                        itemId: 'quantidade',
                                        margins: '10 10 10 10',
                                        minValue: 0,
                                        value: 1,
                                        maxValue: 1000,
                                        width: 100,
                                        listeners: {
                                            keypress: {
                                                fn: function (e, eOpts) {

                                                    console.log(e)
                                                    console.log(eOpts)
                                                }

                                            },


                                            specialkey: {

                                                fn:function(f,e){

                                                    if(e.getKey()==e.ENTER){


                                                        var comboProduto = Ext.ComponentQuery.query('#comboboxItemCompra')[0];
                                                        //var store = Ext.data.StoreManager.lookup('produtoStore');

                                                        var id = comboProduto.value


                                                        if(id == null) return;


                                                        var store = comboProduto.getStore();

                                                        var cmb = Ext.ComponentQuery.query('#comboboxItemCompra');

                                                        var item_id = cmb[0].getValue();

                                                        var item_produto = Ext.create('MyApp.models.ProdutoVenda');

                                                        var quantidade = Ext.ComponentQuery.query('#quantidade');

                                                        var item = store.getById(item_id, function(a) { console.log('caiu')})


                                                        item_produto.set('nome', item.getData().nome);
                                                        item_produto.set('descricao', item.getData().descricao);
                                                        item_produto.set('opcionais', item.getData().opcionais);
                                                        item_produto.set('imagem', item.getData().imagem);
                                                        item_produto.set('valorUnitario', item.getData().valor);
                                                        item_produto.set('quantidade', quantidade[0].getValue());

                                                        //item_produto.set('valorUnitario', item.getData().valorUnitario);

                                                        var valorItems = item.getData().valor * quantidade[0].getValue();

                                                        item_produto.set('valorVenda', valorItems);

                                                        if (item_id !== '') {
                                                            var vendaStore = Ext.data.StoreManager.lookup('produtoVendaStore');

                                                            vendaStore.add(item_produto);
                                                        }

                                                        // Total


                                                        var valorTotal = 0.0


                                                        vendaStore.each(function (item) {

                                                            valorTotal += item.data.valorVenda;
                                                            console.log(item)

                                                        });


                                                        var total = Ext.ComponentQuery.query('#totalVenda');

                                                        console.log(total)

                                                        total[0].setValue(valorTotal)


                                                        comboProduto.setValue("");

                                                        quantidade[0].setValue(1);


                                                        comboProduto.focus();

                                                    }


                                                }

                                            }
                                        }

                                    },
                                    {

                                        xtype: 'button',
                                        name: 'items',
                                        text: 'Adicionar item',
                                        iconCls: 'add-icon', action: 'edit',
                                        margins: '30 10 10 10',
                                        padding: '10',
                                        listeners: {
                                            click: function (a, value) {

                                                var store = Ext.data.StoreManager.lookup('produtoStore');

                                                var cmb = Ext.ComponentQuery.query('#comboboxItemCompra');

                                                var item_id = cmb[0].getValue();

                                                var item_produto = Ext.create('MyApp.models.ProdutoVenda');

                                                var quantidade = Ext.ComponentQuery.query('#quantidade');

                                                var item = store.getById(item_id)


                                                item_produto.set('nome', item.getData().nome);
                                                item_produto.set('descricao', item.getData().descricao);
                                                item_produto.set('opcionais', item.getData().opcionais);
                                                item_produto.set('imagem', item.getData().imagem);
                                                item_produto.set('valorUnitario', item.getData().valor);
                                                item_produto.set('quantidade', quantidade[0].getValue());

                                                //item_produto.set('valorUnitario', item.getData().valorUnitario);

                                                var valorItems = item.getData().valor * quantidade[0].getValue();

                                                item_produto.set('valorVenda', valorItems);

                                                if (item_id !== '') {
                                                    var vendaStore = Ext.data.StoreManager.lookup('produtoVendaStore');

                                                    vendaStore.add(item_produto);
                                                }

                                                // Total


                                                var valorTotal = 0.0


                                                vendaStore.each(function (item) {

                                                    valorTotal += item.data.valorVenda;
                                                    console.log(item)

                                                });


                                                var total = Ext.ComponentQuery.query('#totalVenda');

                                                console.log(total)

                                                total[0].setValue(valorTotal)

                                            }
                                        }
                                    }
                                ]


                            },

                            {
                                xtype: 'fieldcontainer',

                                labelStyle: 'color:#888;padding:0',
                                name: 'items',
                                defaultType: 'textfield',
                                fieldDefaults: {
                                    labelAlign: 'top',
                                    margins: '0 10 10 0'
                                },
                                items: [

                                    MyApp.views.pdv.ItemsVendaGridPanel

                                ]
                            }


                        ]
                    },


                    {
                        title: 'Informações do cliente',
                        xtype: 'fieldset',
                        layout: 'vbox',
                        height: 180,
                        region: 'south',
                        margins: '0 5 0 5',
                        items: [

                            {
                                xtype: 'fieldcontainer',
                                layout: 'hbox',
                                labelStyle: 'color:#888;padding:0',

                                defaultType: 'textfield',
                                fieldDefaults: {
                                    labelAlign: 'top'
                                    //margins: '10 10 10 0'
                                },
                                items: [


                                    {
                                        xtype: 'combobox',
                                        fieldLabel: 'Meio de pagamento',
                                        margins: '0 10 10 0',
                                        name: 'meioPagamento',


                                        store: [
                                            'Dinheiro',
                                            'Cheque',
                                            'Cartão'

                                        ],

                                        forceSelection: true,
                                        width: 200,
                                        typeAhead: true,
                                        typeAheadDelay: 100,
                                        listeners: {

                                            change: function (a, v) {

                                                var dinheiro = Ext.ComponentQuery.query('#dinheiroTxt');
                                                var troco = Ext.ComponentQuery.query('#trocoDisplay');


                                                if (v === 'Dinheiro') {

                                                    dinheiro[0].show();
                                                    troco[0].show();
                                                } else {

                                                    dinheiro[0].hide();
                                                    troco[0].hide();
                                                }


                                            }

                                        }

                                    },
                                   /* {
                                        xtype: 'combobox',
                                        fieldLabel: 'Cliente',
                                        itemId: 'clientePdvCombobox',
                                        margins: '0 10 10 10',
                                        name: 'cliente',
                                        displayField: 'nome',
                                        valueField: 'id',


                                        store: Ext.create('MyApp.stores.ClienteStore'),

                                        forceSelection: true,
                                        width: 200,
                                        typeAhead: true,
                                        typeAheadDelay: 100

                                    },*/
                                    {
                                        xtype: 'checkbox',
                                        fieldLabel: 'Entrega',
                                        margins: '0 10 0 10',
                                        listeners: {



                                            change: function (a, v) {

                                                var fContainer = Ext.ComponentQuery.query('#fieldcontainerEntrega');

                                                var dadosContainer = Ext.ComponentQuery.query('#dadosClienteContainer');


                                                var comboBuscaPdv = Ext.ComponentQuery.query('#comboBuscaPdv');
                                                if (v) {



                                                    //var clienteCombo = Ext.ComponentQuery.query('#clientePdvCombobox')[0];

                                                    //var cliente = clienteCombo.getValue();

                                                    //console.log(cliente);
                                                    comboBuscaPdv[0].show();

                                                    fContainer[0].show();

                                                    dadosContainer[0].show();
                                                } else {

                                                    comboBuscaPdv[0].hide();

                                                    fContainer[0].hide();

                                                    dadosContainer[0].hide();
                                                }

                                            }
                                        }
                                    },

                                    {
                                        xtype: 'combobox',
                                        fieldLabel: 'Digite o nome ou  telefone',
                                        name: 'item',
                                        displayField: 'nome',
                                        hidden: true,
                                        valueField: 'id',
                                        itemId: 'comboBuscaPdv',
                                        //store: Ext.create('MyApp.stores.ItemStore'),

                                        store: Ext.create('Ext.data.ArrayStore', {
                                            //extend: 'MyApp.stores.ItemStore',
                                            sortInfo: {
                                                field: 'nome',
                                                direction: 'ASC'// or 'DESC' (case sensitive for local sorting)
                                            },

                                            model: Ext.ModelManager.getModel('MyApp.models.Cliente'),

                                            proxy: {
                                                type: 'rest',
                                                url: '/clientes/buscaPdv',

                                                reader: {
                                                    type: 'json',
                                                    root: 'data'
                                                }

                                            }


                                        }),
                                        hideTrigger: true,
                                        queryMode: 'remote', //default behavior
                                        forceSelection: true,
                                        flex: 0.7,
                                        typeAhead: true,
                                        typeAheadDelay: 100,
                                        listConfig: {


                                            getInnerTpl: function (v, a, b) {



                                                var tpl = '' +

                                                    '<div style="font-weight:bold;background: #ffe5c1">{nome}</div>' +
                                                    '<div style="font-weight:bold;background: #ffe5c1">{telefoneRes}</div>' +




                                                    '';
                                                return tpl;
                                            }



                                        }  ,

                                        listeners: {

                                            change: {


                                                fn: function(comp,v){




                                                    if(v != null && v !== '' && v.length > 3){
                                                        comp.getStore().getProxy().url = '/clientes/buscaPdv/'+v;

                                                        comp.getStore().load();




                                                    }else{
                                                        return;

                                                    }


                                                }
                                            },

                                            select: {


                                                fn: function(combo, records, ops){

                                                    var cliente = records[0];

                                                    var enderecoEntrega = cliente.getData().enderecos[0];


                                                    var enderecoDisplay = Ext.ComponentQuery.query('#enderecoDisplay')[0];
                                                    var bairroDisplay = Ext.ComponentQuery.query('#bairroDisplay')[0];
                                                    var cidadeDisplay = Ext.ComponentQuery.query('#cidadeDisplay')[0];
                                                    var cepDisplay = Ext.ComponentQuery.query('#cepDisplay')[0];

                                                    var nomeDisplay = Ext.ComponentQuery.query('#nomeDisplay')[0];
                                                    var telefoneDisplay = Ext.ComponentQuery.query('#telefoneDisplay')[0];



                                                    enderecoDisplay.setValue(enderecoEntrega.tipoLogradouro+' '+enderecoEntrega.logradouro +', '+ enderecoEntrega.numero);
                                                    bairroDisplay.setValue(enderecoEntrega.bairro);
                                                    cidadeDisplay.setValue(enderecoEntrega.cidade);
                                                    cepDisplay.setValue(enderecoEntrega.cep);


                                                    nomeDisplay.setValue(cliente.get('nome'));
                                                    telefoneDisplay.setValue(cliente.get('telefone'));



                                                }
                                            }
                                        }


                                    },

                                    /*{
                                        xtype: 'fieldcontainer',
                                        hidden: true,
                                        layout: 'hbox',

                                        labelStyle: 'color:#888;padding:0',
                                        itemId: 'fieldcontainerEntrega',
                                        defaultType: 'textfield',
                                        fieldDefaults: {
                                            labelAlign: 'top',
                                            margins: '0 10 0 0'

                                        },
                                        items: [

                                            {
                                                xtype: 'combobox',
                                                flex: 1,
                                                fieldLabel: 'Endereço de entrega',
                                                itemId: 'cbItemProcessamento',
                                                margins: '0 10 0 0',
                                                name: 'endereco',
                                                displayField: 'logradouro',
                                                loadingText: 'Carregando...',
                                                valueField: 'endereco',
                                                width: 200,
                                                //store: MyApp.stores.ItemStore,
                                                store: Ext.create('Ext.data.Store', {

                                                    sortInfo: {
                                                        field: 'logradouro',
                                                        direction: 'ASC'// or 'DESC' (case sensitive for local sorting)
                                                    },

                                                    model: Ext.ModelManager.getModel('MyApp.models.Endereco'),

                                                    proxy: {
                                                        type: 'rest',
                                                        url: '/clientes/529512a0ccf22fe90021489c/enderecos',

                                                        reader: {
                                                            type: 'json',
                                                            root: 'data'
                                                        }

                                                    }
                                                }),


                                                queryMode: 'remote', //default behavior
                                                forceSelection: true,
                                                lazyRender: true,
                                                flex: 1,
                                                typeAhead: true,
                                                typeAheadDelay: 100,
                                                listConfig: {
                                                    getInnerTpl: function (v, a, b) {

                                                        var combo = Ext.ComponentQuery.query('#cbItemProcessamento')

                                                        var store = combo[0].getStore()


                                                        store.filterBy(function (rec, id) {

                                                            return rec.get('processavel')


                                                        });

                                                        var tpl = '' +

                                                            '<div style="font-weight:bold;background: #ffe5c1">{nome}</div>' +

                                                            '<table style="width: 100%">' +
                                                            '<tr>' +
                                                            '<td>Logradou</td>' +
                                                            '<td>Valor</td>' +
                                                            '<td>Validade</td>' +
                                                            '<td>Qtd</td>' +
                                                            '<td>Un. Medida</td>' +

                                                            '</tr>' +
                                                            '<tr>' +
                                                            '<td>{tipoLogradouro} {logradouro}</td>' +
                                                            '<td>{numero}</td>' +
                                                            '<td>{bairro}</td>' +
                                                            '<td>{cidade}</td>' +
                                                            '<td>{estado}</td>' +

                                                            '</tr>' +
                                                            '</table>' +


                                                            '';
                                                        return tpl;
                                                    },

                                                    listeners: {
                                                        itemclick: function (list, record) {


                                                        }
                                                    }
                                                }


                                            },
*/

                                    {
                                        xtype: 'fieldcontainer',
                                        hidden: true,
                                        layout: 'hbox',

                                        labelStyle: 'color:#888;padding:0',
                                        itemId: 'fieldcontainerEntrega',
                                        defaultType: 'textfield',
                                        fieldDefaults: {
                                            labelAlign: 'top',
                                            margins: '0 10 0 0'

                                        },
                                        items: [

                                            {
                                                xtype: 'combobox',
                                                flex: 1,
                                                fieldLabel: 'Entregador',
                                                itemId: 'cbFuncionario',
                                                margins: '0 10 0 10',
                                                name: 'funcionario',
                                                displayField: 'nome',
                                                loadingText: 'Carregando...',
                                                valueField: 'id',
                                                width: 200,
                                                //store: MyApp.stores.ItemStore,
                                                store: Ext.create('Ext.data.Store', {



                                                    model: Ext.ModelManager.getModel('MyApp.models.Funcionario'),

                                                    proxy: {
                                                        type: 'rest',
                                                        url: '/funcionarios',

                                                        reader: {
                                                            type: 'json',
                                                            root: 'data'
                                                        }

                                                    }
                                                }),


                                                queryMode: 'remote', //default behavior
                                                forceSelection: true,
                                                lazyRender: true,
                                                flex: 1,
                                                typeAhead: true,
                                                typeAheadDelay: 100,
                                                listConfig: {
                                                    getInnerTpl: function (v, a, b) {

                                                        var tpl = '' +

                                                            '<div style="font-weight:bold;background: #ffe5c1">{nome}</div>' +




                                                            '';
                                                        return tpl;

                                                    },

                                                    listeners: {
                                                        itemclick: function (list, record) {


                                                        }
                                                    }
                                                }


                                            },

                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: 'Taxa de entrega',
                                                width: 120,
                                                hideTrigger: true,
                                                value: 0.0,
                                                step: 0.01,
                                                minValue: 0,
                                                maxValue: 100.0,
                                                decimalSeparator: ',',

                                                thousandSeparator: '.',
                                                decimalPrecision: 2,
                                                listeners: {

                                                    change: function (compo, value) {


                                                        var vendaStore = Ext.data.StoreManager.lookup('produtoVendaStore')

                                                        var valorTotal = 0.0


                                                        vendaStore.each(function (item) {

                                                            valorTotal += item.data.valorVenda;


                                                        });

                                                        var totalVenda = Ext.ComponentQuery.query('#totalVenda');


                                                        totalVenda[0].setValue(valorTotal + value);


                                                    }
                                                }
                                            }


                                        ]
                                    }
                                ]

                            },

                            {
                                xtype: 'container',
                                layout: 'vbox',
                                labelStyle: 'color:#888;padding:0',
                                hidden: true,
                                cls: 'dadosClienteContainer',
                                itemId: 'dadosClienteContainer',
                                defaultType: 'textfield',
                                fieldDefaults: {
                                    labelAlign: 'top'
                                    //margins: '10 10 10 0'
                                },
                                items: [
                                    {
                                        xtype: 'fieldcontainer',
                                        layout: 'hbox',
                                        defaultType: 'textfield',
                                        fieldDefaults: {
                                            labelAlign: 'top',
                                            margins: '5 5 0 5'
                                        },
                                        items: [


                                            {
                                                fieldLabel: 'Nome',
                                                xtype: 'displayfield',
                                                itemId: 'nomeDisplay'

                                            },
                                            {
                                                fieldLabel: 'Telefone',
                                                xtype: 'displayfield',
                                                itemId: 'telefoneDisplay'

                                            },
                                            {
                                                fieldLabel: 'CEP',
                                                xtype: 'displayfield',
                                                itemId: 'cepDisplay'

                                            },
                                            {
                                                xtype: 'button',
                                                text: 'maps',
                                                listeners:{

                                                    click : function(a,b){


                                                        console.log('aclikk');

                                                        var mapwin = new Ext.Window({
                                                            layout: 'fit',
                                                            title: 'GMap Window',
                                                            closeAction: 'hide',
                                                            width:400,
                                                            height:400,
                                                            x: 40,
                                                            y: 60,
                                                            items: {
                                                                xtype: 'gmappanel',
                                                                region: 'center',
                                                                zoomLevel: 14,
                                                                gmapType: 'map',
                                                                addControl: new GSmallMapControl(),
                                                                setCenter: {
                                                                    geoCodeAddr: '4 Yawkey Way, Boston, MA, 02215-3409, USA',
                                                                    marker: {title: 'Fenway Park'}
                                                                },
                                                                markers: [{
                                                                    lat: 42.339641,
                                                                    'long': -71.094224,
                                                                    marker: {title: 'Boston Museum of Fine Arts'}
                                                                },{
                                                                    lat: 42.339419,
                                                                    'long': -71.09077,
                                                                    marker: {title: 'Northeastern University'}
                                                                }]
                                                            }
                                                        });

                                                        mapwin.show();

                                                    }

                                                }

                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        layout: 'hbox',
                                        defaultType: 'textfield',
                                        fieldDefaults: {
                                            labelAlign: 'top',
                                            margins: '5 5 0 5'
                                        },
                                        items: [

                                            {
                                                fieldLabel: 'Endereço',
                                                xtype: 'displayfield',
                                                itemId: 'enderecoDisplay'

                                            },
                                            {
                                                fieldLabel: 'Bairro',
                                                xtype: 'displayfield',
                                                itemId: 'bairroDisplay'

                                            },
                                            {
                                                fieldLabel: 'Cidade',
                                                xtype: 'displayfield',
                                                itemId: 'cidadeDisplay'

                                            }
                                        ]
                                    }

                                ]
                            }




                        ]
                    }


                ]
            });

           console.log(win)
           /* win.getEl().on('keydown', function(f, e) {
                if (e.getKey() === Ext.EventObject.ENTER)
                {
                    console.log(e.getKey);
                }
            });*/


            //win.add(MyApp.views.pdv.PdvFormPanel);



        }



        return win;
    }


});

