
Ext.define('MyDesktop.FuncionarioWindow', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'Ext.data.ArrayStore',
        'Ext.util.Format',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'MyApp.views.funcionario.FuncionarioFormPanel',
        'MyApp.views.funcionario.FuncionarioGridPanel'
    ],

    id:'funcionario-win',

    init : function(){
        this.launcher = {
            text: 'Funcionarios',
            iconCls:'funcionario-icon'
        };
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('funcionario-win');

        var funcionarioPanel = MyApp.views.funcionario.FuncionarioFormPanel;
        var funcionarioGrid = MyApp.views.funcionario.FuncionarioGridPanel;


        if(!win){


            win = desktop.createWindow({
                id: 'funcionario-win',
                title:'Funcionarios',
                width:900,
                height:500,
                iconCls: 'funcionario-icon',
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit',


                tbar:[{
                    text:'Adicionar funcionario',
                    tooltip:'Adiciona um novo funcionario',
                    iconCls:'add',
                    handler: function(){win.removeAll(); win.add(funcionarioPanel);  }
                }]
            });



            var store = MyApp.stores.FuncionarioStore;

            console.log(store.count())

            if(store.count() > 0){

                store.load();
                win.add(funcionarioGrid);

            }else{

                win.add(funcionarioPanel);

            }


        }
        return win;
    }
});

