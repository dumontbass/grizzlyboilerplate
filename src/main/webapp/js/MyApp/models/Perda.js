Ext.define('MyApp.models.Perda', {
    extend    : 'Ext.data.Model',
    requires: ['MyApp.models.Item'],
    fields   : [


        {name: 'data',
            type: 'datetime' }



    ],

    belongsTo:[
        {
            name:'item',
            instanceName:'item',
            model:'My.models.Item'
        }
    ],

    proxy: {
        type: 'rest',
        url : '/perdas'

    } ,

    belongsTo: { name: 'MyApp.models.Item' },

    writer:{
        type:'json'
    },
    reader: {
        type: 'json',
        getData:function(data){
            for(i = 0; i < data.length; i++){
                data[i].createdTime = Ext.Date.format(new Date(data[i].createdTime), "Y-m-d");
            }
            return data;
        }
    }

});
