Ext.define('MyApp.views.UsersGridPanel', {
    extend   : 'Ext.grid.Panel',
    alias    : 'widget.UsersGridPanel',
    requires : ['MyApp.stores.UserStore'],

    initComponent : function() {
        this.store   = MyApp.stores.UserStore;
        this.columns = this.buildColumns();
        this.callParent();
    },
    buildColumns : function() {
        return [
            {
                header    : 'ID',
                dataIndex : '_id',
                width     : 70
            },
            {
                header    : 'Nome',
                dataIndex : 'nome',
                width     : 70
            },
            {
                header    : 'Sobrenome',
                dataIndex : 'sobrenome',
                width     : 70
            },
            {
                header    : 'Email',
                dataIndex : 'email',
                width     : 70
            }
        ];
    }
});
