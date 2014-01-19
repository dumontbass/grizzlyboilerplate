

Ext.define('MyApp.views.UserFormPanel', {
    extend      : 'Ext.form.Panel',
    alias       : 'widget.UserFormPanel',
    requires : 'MyApp.stores.UserStore',

    bodyStyle   : 'padding: 10px; background-color: #DCE5F0; border-left: none;',
    defaultType : 'textfield',
    defaults    : {
        anchor     : '-10',
        labelWidth : 70
    },

    initComponent : function() {
        this.items = this.buildItems();

        this.callParent();
    },
    buildItems : function() {
        return [
            {
                fieldLabel : 'Nome',
                name       : 'nome'
            },
            {
                fieldLabel : 'Email',
                name       : 'email',
                id         : 'testeid',
                vtype: 'email'
            },
            {
                fieldLabel : 'Sobrenome',
                name       : 'sobrenome'
            },
            {
                fieldLabel : 'ID',
                name       : '_id'
            },
            {
                xtype: 'combobox',
                fieldLabel: 'Select User',
                displayField: 'nome',
                valueField: 'userID',
                store: MyApp.stores.UserStore,
                queryMode: 'remote', //default behavior
                forceSelection: true,
                anchor: '80%',
                typeAhead: true,
                typeAheadDelay: 100
            }
        ];
    },
    buttons: [{
        text: 'Submit',
        handler: function(){
            MyApp.stores.UserStore.save();
        }
    }]
});

