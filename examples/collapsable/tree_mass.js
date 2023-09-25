var config = {
                container: "#mass",
                animateOnInit: true,
                node: {
                    collapsable: true
                },
                animation: {
                    nodeAnimation: "easeOutBounce",
                    nodeSpeed: 700,
                    connectorsAnimation: "bounce",
                    connectorsSpeed: 700
                }
            },
node0 = {text: {samples: '# Options: 16 (100.0%)', average: 'Average mass: 306.60g', range: 'Range: [81.81g - 1105.92g]', condition: 'method?'}},
node1 = {parent: node0, collapsed: true, text: {filter: 'method is not Additive', samples: '# Options: 4 (25.0%)', average: 'Average mass: 770.05g', range: 'Range: [434.18g - 1105.92g]', condition: 'compliance?'}, folders: ['config_2_2', 'config_1_2', 'config_2_7', 'config_1_7']},
node2 = {parent: node1, collapsed: true, text: {filter: 'compliance <= 5.18E-07m/N', samples: '# Options: 2 (12.5%)', average: 'Average mass: nan', range: 'Range: [N/A - N/A]'}, folders: []},
node3 = {parent: node1, collapsed: true, text: {filter: 'compliance > 5.18E-07m/N', samples: '# Options: 2 (12.5%)', average: 'Average mass: 770.05', range: 'Range: [434.18g - 1105.92g]'}, folders: ['config_2_2', 'config_1_2', 'config_2_7', 'config_1_7']},
node4 = {parent: node0, collapsed: true, text: {filter: 'method is Additive', samples: '# Options: 12 (75.0%)', average: 'Average mass: 152.11g', range: 'Range: [81.81g - 199.84g]', condition: 'lead_time?'}, folders: ['config_2_5', 'config_3_8', 'config_3_1', 'config_3_1', 'config_1_4', 'config_2_1', 'config_2_1', 'config_2_8', 'config_1_1', 'config_1_1', 'config_1_8', 'config_3_5']},
node5 = {parent: node4, collapsed: true, text: {filter: 'lead_time <= 2w, 25m, 48s', samples: '# Options: 4 (25.0%)', average: 'Average mass: 90.85g', range: 'Range: [81.81g - 99.90g]', condition: 'compliance?'}, folders: ['config_3_8', 'config_3_1', 'config_3_1', 'config_3_5']},
node6 = {parent: node5, collapsed: true, text: {filter: 'compliance <= 1.62E-06m/N', samples: '# Options: 3 (18.75%)', average: 'Average mass: N/A', range: 'Range: [N/A - N/A]', condition: 'compliance?'}, folders: []},
node7 = {parent: node6, collapsed: true, text: {filter: 'compliance <= 4.23E-07m/N', samples: '# Options: 2 (12.5%)', average: 'Average mass: nan', range: 'Range: [N/A - N/A]'}, folders: []},
node8 = {parent: node6, collapsed: true, text: {filter: 'compliance > 4.23E-07m/N', samples: '# Options: 1 (6.25%)', average: 'Average mass: nan', range: 'Range: [N/A - N/A]'}, folders: []},
node9 = {parent: node5, collapsed: true, text: {filter: 'compliance > 1.62E-06m/N', samples: '# Options: 1 (6.25%)', average: 'Average mass: 90.85', range: 'Range: [81.81g - 99.90g]'}, folders: ['config_3_8', 'config_3_1', 'config_3_1', 'config_3_5']},
node10 = {parent: node4, collapsed: true, text: {filter: 'lead_time > 2w, 25m, 48s', samples: '# Options: 8 (50.0%)', average: 'Average mass: 182.74g', range: 'Range: [163.81g - 199.84g]', condition: 'lead_time?'}, folders: ['config_2_5', 'config_1_4', 'config_2_1', 'config_2_1', 'config_2_8', 'config_1_1', 'config_1_1', 'config_1_8']},
node11 = {parent: node10, collapsed: true, text: {filter: 'lead_time <= 2w, 2d, 23h, 31m', samples: '# Options: 2 (12.5%)', average: 'Average mass: 165.05g', range: 'Range: [163.81g - 166.28g]', condition: 'cost?'}, folders: ['config_2_5', 'config_1_4']},
node12 = {parent: node11, collapsed: true, text: {filter: 'cost <= $43050.00', samples: '# Options: 1 (6.25%)', average: 'Average mass: 163.81', range: 'Range: [163.81g - 163.81g]'}, folders: ['config_1_4']},
node13 = {parent: node11, collapsed: true, text: {filter: 'cost > $43050.00', samples: '# Options: 1 (6.25%)', average: 'Average mass: 166.28', range: 'Range: [166.28g - 166.28g]'}, folders: ['config_2_5']},
node14 = {parent: node10, collapsed: true, text: {filter: 'lead_time > 2w, 2d, 23h, 31m', samples: '# Options: 6 (37.5%)', average: 'Average mass: 188.64g', range: 'Range: [182.74g - 199.84g]', condition: 'cost?'}, folders: ['config_2_1', 'config_2_1', 'config_2_8', 'config_1_1', 'config_1_1', 'config_1_8']},
node15 = {parent: node14, collapsed: true, text: {filter: 'cost <= $48350.00', samples: '# Options: 4 (25.0%)', average: 'Average mass: 183.05g', range: 'Range: [182.74g - 183.35g]', condition: 'cost?'}, folders: ['config_2_1', 'config_2_1', 'config_1_1', 'config_1_1']},
node16 = {parent: node15, collapsed: true, text: {filter: 'cost <= $46650.00', samples: '# Options: 2 (12.5%)', average: 'Average mass: 182.74', range: 'Range: [182.74g - 182.74g]'}, folders: ['config_1_1', 'config_1_1']},
node17 = {parent: node15, collapsed: true, text: {filter: 'cost > $46650.00', samples: '# Options: 2 (12.5%)', average: 'Average mass: 183.35', range: 'Range: [183.35g - 183.35g]'}, folders: ['config_2_1', 'config_2_1']},
node18 = {parent: node14, collapsed: true, text: {filter: 'cost > $48350.00', samples: '# Options: 2 (12.5%)', average: 'Average mass: 199.84g', range: 'Range: [199.84g - 199.84g]', condition: 'lead_time?'}, folders: ['config_2_8', 'config_1_8']},
node19 = {parent: node18, collapsed: true, text: {filter: 'lead_time <= 2w, 4d, 17h, 43m', samples: '# Options: 1 (6.25%)', average: 'Average mass: 199.84', range: 'Range: [199.84g - 199.84g]'}, folders: ['config_2_8']},
node20 = {parent: node18, collapsed: true, text: {filter: 'lead_time > 2w, 4d, 17h, 43m', samples: '# Options: 1 (6.25%)', average: 'Average mass: 199.84', range: 'Range: [199.84g - 199.84g]'}, folders: ['config_1_8']},
chart_config = [config, node0, node1, node2, node3, node4, node5, node6, node7, node8, node9, node10, node11, node12, node13, node14, node15, node16, node17, node18, node19, node20];