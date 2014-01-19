Ext.define('MyApp.views.login.LoginView', {

    requires: ['Ext.window.Window'],

    alias: 'widget.LoginView',

    autoShow: true,
    height: 170,
    width: 360,
    layout: {
        type: 'fit'
    },
    iconCls: 'key',
    title: "Login",
    closeAction: 'hide',
    closable: false,


    items: [
        {
            xtype: 'form',

            frame: false,

            bodyPadding: 15,

            defaults: {

                xtype: 'textfield',
                anchor: '100%',

                labelWidth: 60

            },
            items: [
                {
                    name: 'user',
                    fieldLabel: "User",
                    allowBlank: false,
                    vtype: 'alphanum',
                    minLength: 3,
                    msgTarget: 'under'





                },
                {
                    inputType: 'password',
                    name: 'password',
                    fieldLabel: "Password",
                    maxLength: 15,
                    allowBlank: false,
                    vtype: 'alphanum',
                    minLength: 3,
                    msgTarget: 'under'




                }
            ]
        }
    ],

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'button',
                    itemId: 'cancel',
                    iconCls: 'cancel',
                    text: 'Cancel'
                },
                {
                    xtype: 'button',
                    itemId: 'submit',
                    formBind: true,
                    iconCls: 'key-go',
                    text: "Submit"
                }
            ]
        }
    ]

});
