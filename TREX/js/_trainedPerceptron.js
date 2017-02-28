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
        "activation":0.06428571428571428,
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
        "activation":0.04,
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
        "state":1.1268448808265608,
        "old":1.127645660857915,
        "activation":0.7552561631253374,
        "bias":0.5806644176614006,
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
        "state":1.0527504496052396,
        "old":1.0554542081078173,
        "activation":0.741302711129975,
        "bias":0.43203471033354546,
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
        "state":0.9603949919510895,
        "old":0.9617911934254273,
        "activation":0.7232008821234064,
        "bias":0.47305989921305597,
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
        "state":1.0240072326579808,
        "old":1.0258331207965168,
        "activation":0.7357524244917379,
        "bias":0.43168089023301703,
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
        "state":1.1527796175752312,
        "old":1.155484778656926,
        "activation":0.7600182591576963,
        "bias":0.527295916966573,
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
        "state":1.0104444926928826,
        "old":1.0132572188993203,
        "activation":0.7331071281641698,
        "bias":0.5316511525452242,
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
        "state":5.137447633293558,
        "old":5.139425552303377,
        "activation":0.9941616269963685,
        "bias":1.4046266949464272,
        "layer":"1",
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
        "state":5.126072865527968,
        "old":5.128097351159501,
        "activation":0.9940952320983717,
        "bias":1.3352000107273243,
        "layer":"1",
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
        "state":5.129970096685537,
        "old":5.131914389528242,
        "activation":0.9941180644668642,
        "bias":1.481792087773536,
        "layer":"1",
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
        "state":5.135312996280023,
        "old":5.13730378529433,
        "activation":0.9941492238729771,
        "bias":1.356020638786165,
        "layer":"1",
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
        "state":4.016734744504958,
        "old":4.016769878797138,
        "activation":0.9823069989371781,
        "bias":0.9975494529370376,
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
        "state":-4.016702959694144,
        "old":-4.016738812938686,
        "activation":0.017693553489992242,
        "bias":-0.9363495746196333,
        "layer":"output",
        "squash":"LOGISTIC"
	}
    ],
    "connections":[ {
        "from": "0", "to": "3", "weight": 0.07473946959307017, "gater": null
	}
    ,
    {
        "from": "0", "to": "4", "weight": 0.2523507935739203, "gater": null
	}
    ,
    {
        "from": "0", "to": "5", "weight": 0.130312137604868, "gater": null
	}
    ,
    {
        "from": "0", "to": "6", "weight": 0.1704162262633689, "gater": null
	}
    ,
    {
        "from": "0", "to": "7", "weight": 0.2524817009581959, "gater": null
	}
    ,
    {
        "from": "0", "to": "8", "weight": 0.2625211126008678, "gater": null
	}
    ,
    {
        "from": "1", "to": "3", "weight": 0.028700703404613916, "gater": null
	}
    ,
    {
        "from": "1", "to": "4", "weight": 0.0027205900829337295, "gater": null
	}
    ,
    {
        "from": "1", "to": "5", "weight": 0.044967603755053535, "gater": null
	}
    ,
    {
        "from": "1", "to": "6", "weight": 0.05716374633726454, "gater": null
	}
    ,
    {
        "from": "1", "to": "7", "weight": -0.006375820628245311, "gater": null
	}
    ,
    {
        "from": "1", "to": "8", "weight": 0.05986316354927849, "gater": null
	}
    ,
    {
        "from": "2", "to": "3", "weight": 0.5402277548408496, "gater": null
	}
    ,
    {
        "from": "2", "to": "4", "weight": 0.6043843646529103, "gater": null
	}
    ,
    {
        "from": "2", "to": "5", "weight": 0.47715917974180405, "gater": null
	}
    ,
    {
        "from": "2", "to": "6", "weight": 0.5790844637402566, "gater": null
	}
    ,
    {
        "from": "2", "to": "7", "weight": 0.6095077669436182, "gater": null
	}
    ,
    {
        "from": "2", "to": "8", "weight": 0.4595224563670599, "gater": null
	}
    ,
    {
        "from": "3", "to": "9", "weight": 0.7554883935506966, "gater": null
	}
    ,
    {
        "from": "3", "to": "10", "weight": 0.8377943569653485, "gater": null
	}
    ,
    {
        "from": "3", "to": "11", "weight": 0.8148528003651754, "gater": null
	}
    ,
    {
        "from": "3", "to": "12", "weight": 0.9187635087902305, "gater": null
	}
    ,
    {
        "from": "4", "to": "9", "weight": 0.9054823752279002, "gater": null
	}
    ,
    {
        "from": "4", "to": "10", "weight": 0.8468924909962309, "gater": null
	}
    ,
    {
        "from": "4", "to": "11", "weight": 0.859991998879369, "gater": null
	}
    ,
    {
        "from": "4", "to": "12", "weight": 0.7727350782293292, "gater": null
	}
    ,
    {
        "from": "5", "to": "9", "weight": 0.8708249386065282, "gater": null
	}
    ,
    {
        "from": "5", "to": "10", "weight": 0.7967358807946201, "gater": null
	}
    ,
    {
        "from": "5", "to": "11", "weight": 0.74031901125553, "gater": null
	}
    ,
    {
        "from": "5", "to": "12", "weight": 0.7658733642798797, "gater": null
	}
    ,
    {
        "from": "6", "to": "9", "weight": 0.8910009186293517, "gater": null
	}
    ,
    {
        "from": "6", "to": "10", "weight": 0.7760749860399832, "gater": null
	}
    ,
    {
        "from": "6", "to": "11", "weight": 0.7947168995540546, "gater": null
	}
    ,
    {
        "from": "6", "to": "12", "weight": 0.7965168121985472, "gater": null
	}
    ,
    {
        "from": "7", "to": "9", "weight": 0.8693481617666693, "gater": null
	}
    ,
    {
        "from": "7", "to": "10", "weight": 0.9588867531934803, "gater": null
	}
    ,
    {
        "from": "7", "to": "11", "weight": 0.8735602349773123, "gater": null
	}
    ,
    {
        "from": "7", "to": "12", "weight": 0.9332275200985694, "gater": null
	}
    ,
    {
        "from": "8", "to": "9", "weight": 0.7433282067342851, "gater": null
	}
    ,
    {
        "from": "8", "to": "10", "weight": 0.8925697121927957, "gater": null
	}
    ,
    {
        "from": "8", "to": "11", "weight": 0.8337185779743271, "gater": null
	}
    ,
    {
        "from": "8", "to": "12", "weight": 0.9048752869461647, "gater": null
	}
    ,
    {
        "from": "9", "to": "13", "weight": 0.7415722762108616, "gater": null
	}
    ,
    {
        "from": "9", "to": "14", "weight": -0.842809579350462, "gater": null
	}
    ,
    {
        "from": "10", "to": "13", "weight": 0.7770898887363683, "gater": null
	}
    ,
    {
        "from": "10", "to": "14", "weight": -0.8056242765593502, "gater": null
	}
    ,
    {
        "from": "11", "to": "13", "weight": 0.765031965064147, "gater": null
	}
    ,
    {
        "from": "11", "to": "14", "weight": -0.7243190335550223, "gater": null
	}
    ,
    {
        "from": "12", "to": "13", "weight": 0.7533166281895006, "gater": null
	}
    ,
    {
        "from": "12", "to": "14", "weight": -0.7257849598512016, "gater": null
	}
    ]
};