Ext.define('MyApp.util.BarcodeGenerator', {
    requires: ['Ext.XTemplate'],


    singleton: true,


    constructor : function(){
        var me = this;
        /* Odd-parity left-hand digits. */
        me.odd = [
            [0,0,0,1,1,0,1], // 0
            [0,0,1,1,0,0,1], // 1
            [0,0,1,0,0,1,1], // 2
            [0,1,1,1,1,0,1], // 3
            [0,1,0,0,0,1,1], // 4
            [0,1,1,0,0,0,1], // 5
            [0,1,0,1,1,1,1], // 6
            [0,1,1,1,0,1,1], // 7
            [0,1,1,0,1,1,1], // 8
            [0,0,0,1,0,1,1] // 9
        ];
        /* Even-parity left-hand digits. */
        me.even = [
            [0,1,0,0,1,1,1], // 0
            [0,1,1,0,0,1,1], // 1
            [0,0,1,1,0,1,1], // 2
            [0,1,0,0,0,0,1], // 3
            [0,0,1,1,1,0,1], // 4
            [0,1,1,1,0,0,1], // 5
            [0,0,0,0,1,0,1], // 6
            [0,0,1,0,0,0,1], // 7
            [0,0,0,1,0,0,1], // 8
            [0,0,1,0,1,1,1] // 9
        ],
            me.right = [
                [1,1,1,0,0,1,0], // 0
                [1,1,0,0,1,1,0], // 1
                [1,1,0,1,1,0,0], // 2
                [1,0,0,0,0,1,0], // 3
                [1,0,1,1,1,0,0], // 4
                [1,0,0,1,1,1,0], // 5
                [1,0,1,0,0,0,0], // 6
                [1,0,0,0,1,0,0], // 7
                [1,0,0,1,0,0,0], // 8
                [1,1,1,0,1,0,0] // 9
            ]


        me.parity = [
            [ me.odd, me.odd, me.odd, me.odd, me.odd, me.odd ], // 0
            [ me.odd, me.odd, me.even, me.odd, me.even, me.even ], // 1
            [ me.odd, me.odd, me.even, me.even, me.odd, me.even ], // 2
            [ me.odd, me.odd, me.even, me.even, me.even, me.odd ], // 3
            [ me.odd, me.even, me.odd, me.odd, me.even, me.even], // 4
            [ me.odd, me.even, me.even, me.odd, me.odd, me.even ], // 5
            [ me.odd, me.even, me.even, me.even, me.odd, me.odd ], // 6
            [ me.odd, me.even, me.odd, me.even, me.odd, me.even ], // 7
            [ me.odd, me.even, me.odd, me.even, me.even, me.odd ], // 8
            [ me.odd, me.even, me.even, me.odd, me.even, me.odd ] // 9
        ]
    },
    renderTpl : new Ext.XTemplate(
        '<div class="barcode">',
        '<div class="quiteZone">',
        '<div class="bitOff"></div><div class="bitOff"></div>',
        '<div class="bitOff"></div><div class="bitOff"></div>',
        '<div class="bitOff"></div><div class="bitOff"></div>',
        '<div class="bitOff"></div><div class="bitOff"></div>',
        '<div class="bitOff"></div>',
        '</div>',
        '<div class="leader">',
        '<div class="bitOn"></div><div class="bitOff"></div><div class="bitOn"></div>',
        '</div>',
        '<tpl for="digits">',
        '<div id="digit{#}" class="digit">',
        '<tpl for=".">',
        '<div class="{class}"></div>',
        '</tpl>',
        '</div>',
        '<tpl if="xindex == 5">',
        '<div class="separator" class="digit">',
        '<div class="bitOff"></div><div class="bitOn"></div><div class="bitOff"></div><div class="bitOn"></div><div class="bitOff"></div>',
        '</div>',
        '</tpl>',
        '</tpl>',
        '<div class="trailer">',
        '<div class="bitOn"></div><div class="bitOff"></div><div class="bitOn"></div>',
        '</div>',
        '<div class="quiteZone">',
        '<div class="bitOff"></div><div class="bitOff"></div>',
        '<div class="bitOff"></div><div class="bitOff"></div>',
        '<div class="bitOff"></div><div class="bitOff"></div>',
        '<div class="bitOff"></div><div class="bitOff"></div>',
        '<div class="bitOff"></div>',
        '</div>',
        '<div class="codeDisplay EAN-13_countryCode">{countryCode}</div>',
        '<div class="codeDisplay EAN-13_group1">{group1}</div>',
        '<div class="codeDisplay EAN-13_group2">{group2}</div>',
        '</div>'
    ),
    generateHtml: function(value){
        return this.renderTpl.applyTemplate(this.generateData(value));
    },
    generateData: function(value){
        var me = this,
            retVal = 0,
            code = value,
            data = new Array();


        if(code.length > 12)
            code = code.substring(0,12);
        else if(code.length == 11)
            code = '0' + code;


        code = code + me.calculateChecksumDigit(code);


        var parityDigit = parseInt(code.charAt(0)),
            parityTable = me.parity[parityDigit];


        for (var i = 1; i < code.length; ++i) {
            var num = +code.charAt(i),
                digitData = new Array(),
                pattern = i < 7 ? parityTable[i-1][num] : me.right[num];

            for (var j = 0; j < 7; ++j){
                digitData.push({'class' : pattern[j] ? "bitOn" : "bitOff"});
            }
            data.push(digitData);
        };

        return {
            digits: data,
            countryCode: value.charAt(0),
            group1: value.substring(1, 7),
            group2: value.substring(7, 13)
        };
    },
    calculateChecksumDigit: function(code){
        var sum=0,
            digit = 0;


        for (var i = code.length; i >= 1; --i) {


            digit = parseInt(code.substring( i - 1, i ) );


            i % 2 == 0 ? sum += digit * 3 : sum += digit * 1;


        };
        return ( 10 - ( sum % 10 ) ) % 10;
    }
});
