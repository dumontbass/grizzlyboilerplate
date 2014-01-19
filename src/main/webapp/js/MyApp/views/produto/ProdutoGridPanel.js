Ext.define('MyApp.views.produto.ProdutoGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.ProdutoGridPanel',
    requires: [
        'MyApp.stores.ProdutoStore',

        'Ext.selection.CheckboxModel'

    ],

    initComponent: function () {
        this.store = MyApp.stores.ProdutoStore;
        this.columns = this.buildColumns();
        this.callParent();


    },
    buildColumns: function () {
        return  [


            {
                xtype: 'actioncolumn',
                width: 80,
                sortable: false,
                menuDisabled: true,
                header: 'Excluir',
                items: [
                    { icon: 'img/trash.png',
                        handler: function (grid, rowIndex, colIndex) {

                            if (confirm("Deseja realmente remover este item?")) {

                                MyApp.stores.ProdutoStore.removeAt(rowIndex);

                                //MyApp.models.Produto.remove(rowIndex)

                                console.log(grid.getSelectionModel().getSelection())
                            }

                        }
                    }
                ]
            }
        ]
    },
    stripeRows: true,
    animCollapse: true,
    selType: 'cellmodel'





});
