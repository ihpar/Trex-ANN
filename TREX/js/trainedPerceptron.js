'use-strict';
var trainedPerceptron = {
    "neurons":[ {
        "trace": {
            "elegibility": {}
            ,
            "extended": {}
        }
        ,
        "state":0,
        "old":0,
        "activation":0.0375,
        "bias":0,
        "layer":"input",
        "squash":"LOGISTIC"
    }
    ,
    {
        "trace": {
            "elegibility": {}
            ,
            "extended": {}
        }
        ,
        "state":0,
        "old":0,
        "activation":0.91,
        "bias":0,
        "layer":"input",
        "squash":"LOGISTIC"
    }
    ,
    {
        "trace": {
            "elegibility": {}
            ,
            "extended": {}
        }
        ,
        "state":0,
        "old":0,
        "activation":1,
        "bias":0,
        "layer":"input",
        "squash":"LOGISTIC"
    }
    ,
    {
        "trace": {
            "elegibility": {}
            ,
            "extended": {}
        }
        ,
        "state":2.847789811060442,
        "old":2.7789943141794198,
        "activation":0.9452043227982069,
        "bias":1.3306403139712668,
        "layer":"0",
        "squash":"LOGISTIC"
    }
    ,
    {
        "trace": {
            "elegibility": {}
            ,
            "extended": {}
        }
        ,
        "state":-3.8778873928165485,
        "old":-3.615651103166824,
        "activation":0.02027491909881801,
        "bias":-1.701362987593204,
        "layer":"0",
        "squash":"LOGISTIC"
    }
    ,
    {
        "trace": {
            "elegibility": {}
            ,
            "extended": {}
        }
        ,
        "state":1.2026829168696302,
        "old":1.2311256711420882,
        "activation":0.7690017156127149,
        "bias":0.49754505558737616,
        "layer":"0",
        "squash":"LOGISTIC"
    }
    ,
    {
        "trace": {
            "elegibility": {}
            ,
            "extended": {}
        }
        ,
        "state":-1.4891199605692131,
        "old":-1.4103961993508163,
        "activation":0.18405385326415483,
        "bias":-0.6211737194406336,
        "layer":"0",
        "squash":"LOGISTIC"
    }
    ,
    {
        "trace": {
            "elegibility": {}
            ,
            "extended": {}
        }
        ,
        "state":-4.7014477730579305,
        "old":-4.379742680930583,
        "activation":0.009000376246316612,
        "bias":-1.9763237460128251,
        "layer":"0",
        "squash":"LOGISTIC"
    }
    ,
    {
        "trace": {
            "elegibility": {}
            ,
            "extended": {}
        }
        ,
        "state":-3.063228696313283,
        "old":-2.8641922908265807,
        "activation":0.044649776560016056,
        "bias":-1.243107695759816,
        "layer":"0",
        "squash":"LOGISTIC"
    }
    ,
    {
        "trace": {
            "elegibility": {}
            ,
            "extended": {}
        }
        ,
        "state":-9.249897502168482,
        "old":-9.10315250986734,
        "activation":0.00009611226534671809,
        "bias":-5.600701064667432,
        "layer":"output",
        "squash":"LOGISTIC"
    }
    ,
    {
        "trace": {
            "elegibility": {}
            ,
            "extended": {}
        }
        ,
        "state":9.229628579588212,
        "old":9.084097714371033,
        "activation":0.9999019199586752,
        "bias":5.639333222485235,
        "layer":"output",
        "squash":"LOGISTIC"
    }
    ],
    "connections":[ {
        "from": "0", "to": "3", "weight": -3.210456521114374, "gater": null
    }
    ,
    {
        "from": "0", "to": "4", "weight": 12.237693516987136, "gater": null
    }
    ,
    {
        "from": "0", "to": "5", "weight": 1.3273285327146955, "gater": null
    }
    ,
    {
        "from": "0", "to": "6", "weight": 3.673775523525175, "gater": null
    }
    ,
    {
        "from": "0", "to": "7", "weight": 15.012904299276165, "gater": null
    }
    ,
    {
        "from": "0", "to": "8", "weight": 9.288365589379431, "gater": null
    }
    ,
    {
        "from": "1", "to": "3", "weight": 0.42244930312313095, "gater": null
    }
    ,
    {
        "from": "1", "to": "4", "weight": -1.0980233978912375, "gater": null
    }
    ,
    {
        "from": "1", "to": "5", "weight": 0.10919047977431112, "gater": null
    }
    ,
    {
        "from": "1", "to": "6", "weight": -0.33996500653169304, "gater": null
    }
    ,
    {
        "from": "1", "to": "7", "weight": -1.3398218788061749, "gater": null
    }
    ,
    {
        "from": "1", "to": "8", "weight": -0.8979496400235352, "gater": null
    }
    ,
    {
        "from": "2", "to": "3", "weight": 1.253112750788915, "gater": null
    }
    ,
    {
        "from": "2", "to": "4", "weight": -1.636236620029336, "gater": null
    }
    ,
    {
        "from": "2", "to": "5", "weight": 0.5559997047108299, "gater": null
    }
    ,
    {
        "from": "2", "to": "6", "weight": -0.6963446673169328, "gater": null
    }
    ,
    {
        "from": "2", "to": "7", "weight": -2.068870028554342, "gater": null
    }
    ,
    {
        "from": "2", "to": "8", "weight": -1.3513005377337788, "gater": null
    }
    ,
    {
        "from": "3", "to": "9", "weight": -4.2534869272165095, "gater": null
    }
    ,
    {
        "from": "3", "to": "10", "weight": 4.233594566263891, "gater": null
    }
    ,
    {
        "from": "4", "to": "9", "weight": 6.713692052857402, "gater": null
    }
    ,
    {
        "from": "4", "to": "10", "weight": -6.727065083270572, "gater": null
    }
    ,
    {
        "from": "5", "to": "9", "weight": -0.46231128611633454, "gater": null
    }
    ,
    {
        "from": "5", "to": "10", "weight": 0.3786160735224071, "gater": null
    }
    ,
    {
        "from": "6", "to": "9", "weight": 1.6054594638586381, "gater": null
    }
    ,
    {
        "from": "6", "to": "10", "weight": -1.473788014465148, "gater": null
    }
    ,
    {
        "from": "7", "to": "9", "weight": 8.510172020431272, "gater": null
    }
    ,
    {
        "from": "7", "to": "10", "weight": -8.522271688048875, "gater": null
    }
    ,
    {
        "from": "8", "to": "9", "weight": 4.894327993625994, "gater": null
    }
    ,
    {
        "from": "8", "to": "10", "weight": -4.885180617876958, "gater": null
    }
    ]
};