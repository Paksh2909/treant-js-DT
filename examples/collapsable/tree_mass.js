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
node0 = {text: {samples: '# Options: 29 (100.0%)', average: 'Average mass: 853.55g', range: 'Range: [92.77g - 1814.53g]', condition: 'method?'}},
node1 = {parent: node0, collapsed: true, text: {filter: 'method is not Subtractive', samples: '# Options: 10 (34.48%)', average: 'Average mass: 292.12g', range: 'Range: [92.77g - 647.89g]', condition: 'lead_time?'}, folders: ['config_2_10', 'config_2_7', 'config_2_7', 'config_1_10', 'config_3_2', 'config_3_2', 'config_3_5', 'config_3_5', 'config_1_7', 'config_1_7']},
node2 = {parent: node1, collapsed: true, text: {filter: 'lead_time <= 55585.5secs', samples: '# Options: 8 (27.59%)', average: 'Average mass: 203.18g', range: 'Range: [92.77g - 323.8g]', condition: 'lead_time?'}, folders: ['config_2_10', 'config_2_7', 'config_2_7', 'config_1_10', 'config_3_5', 'config_3_5', 'config_1_7', 'config_1_7']},
node3 = {parent: node2, collapsed: true, text: {filter: 'lead_time <= 33879.0secs', samples: '# Options: 6 (20.69%)', average: 'Average mass: 162.98g', range: 'Range: [92.77g - 213.76g]', condition: 'cost?'}, folders: ['config_2_10', 'config_1_10', 'config_3_5', 'config_3_5', 'config_1_7', 'config_1_7']},
node4 = {parent: node3, collapsed: true, text: {filter: 'cost <= $47450.0', samples: '# Options: 4 (13.79%)', average: 'Average mass: 137.59g', range: 'Range: [92.77g - 160.07g]', condition: 'compliance?'}, folders: ['config_2_10', 'config_1_10', 'config_3_5', 'config_3_5']},
node5 = {parent: node4, collapsed: true, text: {filter: 'compliance <= 0.0m/N', samples: '# Options: 3 (10.34%)', average: 'Average mass: nang', range: 'Range: [nang - nang]', condition: 'cost?'}, folders: []},
node6 = {parent: node5, collapsed: true, text: {filter: 'cost <= $39800.0', samples: '# Options: 1 (3.45%)', average: 'Average mass: nan', range: 'Range: [nang - nang]'}, folders: []},
node7 = {parent: node5, collapsed: true, text: {filter: 'cost > $39800.0', samples: '# Options: 2 (6.9%)', average: 'Average mass: nan', range: 'Range: [nang - nang]'}, folders: []},
node8 = {parent: node4, collapsed: true, text: {filter: 'compliance > 0.0m/N', samples: '# Options: 1 (3.45%)', average: 'Average mass: 137.59', range: 'Range: [92.77g - 160.07g]'}, folders: ['config_2_10', 'config_1_10', 'config_3_5', 'config_3_5']},
node9 = {parent: node3, collapsed: true, text: {filter: 'cost > $47450.0', samples: '# Options: 2 (6.9%)', average: 'Average mass: 213.76', range: 'Range: [213.76g - 213.76g]'}, folders: ['config_1_7', 'config_1_7']},
node10 = {parent: node2, collapsed: true, text: {filter: 'lead_time > 33879.0secs', samples: '# Options: 2 (6.9%)', average: 'Average mass: 323.8', range: 'Range: [323.8g - 323.8g]'}, folders: ['config_2_7', 'config_2_7']},
node11 = {parent: node1, collapsed: true, text: {filter: 'lead_time > 55585.5secs', samples: '# Options: 2 (6.9%)', average: 'Average mass: 647.89', range: 'Range: [647.89g - 647.89g]'}, folders: ['config_3_2', 'config_3_2']},
node12 = {parent: node0, collapsed: true, text: {filter: 'method is Subtractive', samples: '# Options: 19 (65.52%)', average: 'Average mass: 1149.04g', range: 'Range: [434.18g - 1814.53g]', condition: 'cost?'}, folders: ['config_2_5', 'config_2_2', 'config_2_3', 'config_2_4', 'config_1_5', 'config_1_2', 'config_3_1', 'config_1_3', 'config_1_4', 'config_2_1', 'config_2_6', 'config_2_8', 'config_2_9', 'config_1_1', 'config_1_6', 'config_1_8', 'config_1_9', 'config_3_4', 'config_3_3']},
node13 = {parent: node12, collapsed: true, text: {filter: 'cost <= $76750.0', samples: '# Options: 14 (48.28%)', average: 'Average mass: 961.97g', range: 'Range: [434.18g - 1105.92g]', condition: 'compliance?'}, folders: ['config_2_5', 'config_2_2', 'config_2_4', 'config_1_5', 'config_1_2', 'config_3_1', 'config_1_4', 'config_2_1', 'config_2_8', 'config_1_1', 'config_1_6', 'config_1_8', 'config_3_4', 'config_3_3']},
node14 = {parent: node13, collapsed: true, text: {filter: 'compliance <= 0.0m/N', samples: '# Options: 11 (37.93%)', average: 'Average mass: nan', range: 'Range: [nang - nang]'}, folders: []},
node15 = {parent: node13, collapsed: true, text: {filter: 'compliance > 0.0m/N', samples: '# Options: 3 (10.34%)', average: 'Average mass: 961.97g', range: 'Range: [434.18g - 1105.92g]', condition: 'compliance?'}, folders: ['config_2_5', 'config_2_2', 'config_2_4', 'config_1_5', 'config_1_2', 'config_3_1', 'config_1_4', 'config_2_1', 'config_2_8', 'config_1_1', 'config_1_6', 'config_1_8', 'config_3_4', 'config_3_3']},
node16 = {parent: node15, collapsed: true, text: {filter: 'compliance <= 0.0m/N', samples: '# Options: 1 (3.45%)', average: 'Average mass: nan', range: 'Range: [nang - nang]'}, folders: []},
node17 = {parent: node15, collapsed: true, text: {filter: 'compliance > 0.0m/N', samples: '# Options: 2 (6.9%)', average: 'Average mass: 961.97', range: 'Range: [434.18g - 1105.92g]'}, folders: ['config_2_5', 'config_2_2', 'config_2_4', 'config_1_5', 'config_1_2', 'config_3_1', 'config_1_4', 'config_2_1', 'config_2_8', 'config_1_1', 'config_1_6', 'config_1_8', 'config_3_4', 'config_3_3']},
node18 = {parent: node12, collapsed: true, text: {filter: 'cost > $76750.0', samples: '# Options: 5 (17.24%)', average: 'Average mass: 1672.81g', range: 'Range: [1105.92g - 1814.53g]', condition: 'machine_type?'}, folders: ['config_2_3', 'config_1_3', 'config_2_6', 'config_2_9', 'config_1_9']},
node19 = {parent: node18, collapsed: true, text: {filter: 'machine_type is not 2Axis', samples: '# Options: 3 (10.34%)', average: 'Average mass: 1814.53', range: 'Range: [1814.53g - 1814.53g]'}, folders: ['config_2_3', 'config_1_3', 'config_2_6']},
node20 = {parent: node18, collapsed: true, text: {filter: 'machine_type is 2Axis', samples: '# Options: 2 (6.9%)', average: 'Average mass: 1460.22g', range: 'Range: [1105.92g - 1814.53g]', condition: 'lead_time?'}, folders: ['config_2_9', 'config_1_9']},
node21 = {parent: node20, collapsed: true, text: {filter: 'lead_time <= 22604.0secs', samples: '# Options: 1 (3.45%)', average: 'Average mass: 1814.53', range: 'Range: [1814.53g - 1814.53g]'}, folders: ['config_1_9']},
node22 = {parent: node20, collapsed: true, text: {filter: 'lead_time > 22604.0secs', samples: '# Options: 1 (3.45%)', average: 'Average mass: 1105.92', range: 'Range: [1105.92g - 1105.92g]'}, folders: ['config_2_9']},
chart_config = [config, node0, node1, node2, node3, node4, node5, node6, node7, node8, node9, node10, node11, node12, node13, node14, node15, node16, node17, node18, node19, node20, node21, node22];