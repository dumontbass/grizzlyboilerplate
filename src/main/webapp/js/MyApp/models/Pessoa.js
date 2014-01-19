Ext.define('MyApp.models.Pessoa', {
    extend    : 'Ext.data.Model',
    fields   : [


        'nome',

        { name: 'enderecos', type: 'auto' },
        'email',
        'sobrenome',
        'rg',
        'telefoneRes',
        'telefoneCel',
        { name: 'nascimento', type: 'auto'}
        //'dispositivos'

    ],

    hasMany    : {

        model: 'MyApp.models.Endereco', name: 'enderecos'

    }






});
