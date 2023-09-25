var config = {
                container: "#cost",
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
node0 = {text: {samples: '# Options: 16 (100.0%)', average: 'Average cost: $39500.00', range: 'Range: [$24500.00 - $50000.00]', condition: 'lead_time?'}},
node1 = {parent: node0, collapsed: true, text: {filter: 'lead_time <= 2w, 25m, 48s', samples: '# Options: 8 (50.0%)', average: 'Average cost: $32412.50', range: 'Range: [$24500.00 - $47000.00]', condition: 'mass?'}, folders: ['config_2_2', 'config_3_8', 'config_1_2', 'config_3_1', 'config_3_1', 'config_2_7', 'config_3_5', 'config_1_7']},
node2 = {parent: node1, collapsed: true, text: {filter: 'mass <= 770.05g', samples: '# Options: 6 (37.5%)', average: 'Average cost: $28500.00', range: 'Range: [$24500.00 - $33700.00]', condition: 'compliance?'}, folders: ['config_3_8', 'config_3_1', 'config_3_1', 'config_2_7', 'config_3_5', 'config_1_7']},
node3 = {parent: node2, collapsed: true, text: {filter: 'compliance <= 1.12E-06m/N', samples: '# Options: 4 (25.0%)', average: 'Average cost: N/A', range: 'Range: [N/A - N/A]', condition: 'lead_time?'}, folders: []},
node4 = {parent: node3, collapsed: true, text: {filter: 'lead_time <= 1w, 3d, 20h, 33m', samples: '# Options: 2 (12.5%)', average: 'Average cost: N/A', range: 'Range: [N/A - N/A]', condition: 'compliance?'}, folders: []},
node5 = {parent: node4, collapsed: true, text: {filter: 'compliance <= 7.11E-07m/N', samples: '# Options: 1 (6.25%)', average: 'Average cost: nan', range: 'Range: [N/A - N/A]'}, folders: []},
node6 = {parent: node4, collapsed: true, text: {filter: 'compliance > 7.11E-07m/N', samples: '# Options: 1 (6.25%)', average: 'Average cost: nan', range: 'Range: [N/A - N/A]'}, folders: []},
node7 = {parent: node3, collapsed: true, text: {filter: 'lead_time > 1w, 3d, 20h, 33m', samples: '# Options: 2 (12.5%)', average: 'Average cost: nan', range: 'Range: [N/A - N/A]'}, folders: []},
node8 = {parent: node2, collapsed: true, text: {filter: 'compliance > 1.12E-06m/N', samples: '# Options: 2 (12.5%)', average: 'Average cost: $28500.00', range: 'Range: [$24500.00 - $33700.00]', condition: 'compliance?'}, folders: ['config_3_8', 'config_3_1', 'config_3_1', 'config_2_7', 'config_3_5', 'config_1_7']},
node9 = {parent: node8, collapsed: true, text: {filter: 'compliance <= 2.02E-06m/N', samples: '# Options: 1 (6.25%)', average: 'Average cost: nan', range: 'Range: [N/A - N/A]'}, folders: []},
node10 = {parent: node8, collapsed: true, text: {filter: 'compliance > 2.02E-06m/N', samples: '# Options: 1 (6.25%)', average: 'Average cost: 28500.0', range: 'Range: [$24500.00 - $33700.00]'}, folders: ['config_3_8', 'config_3_1', 'config_3_1', 'config_2_7', 'config_3_5', 'config_1_7']},
node11 = {parent: node1, collapsed: true, text: {filter: 'mass > 770.05g', samples: '# Options: 2 (12.5%)', average: 'Average cost: $44150.00', range: 'Range: [$41300.00 - $47000.00]', condition: 'lead_time?'}, folders: ['config_2_2', 'config_1_2']},
node12 = {parent: node11, collapsed: true, text: {filter: 'lead_time <= 1w, 3d, 2h, 10m', samples: '# Options: 1 (6.25%)', average: 'Average cost: 41300.0', range: 'Range: [$41300.00 - $41300.00]'}, folders: ['config_1_2']},
node13 = {parent: node11, collapsed: true, text: {filter: 'lead_time > 1w, 3d, 2h, 10m', samples: '# Options: 1 (6.25%)', average: 'Average cost: 47000.0', range: 'Range: [$47000.00 - $47000.00]'}, folders: ['config_2_2']},
node14 = {parent: node0, collapsed: true, text: {filter: 'lead_time > 2w, 25m, 48s', samples: '# Options: 8 (50.0%)', average: 'Average cost: $46587.50', range: 'Range: [$42800.00 - $50000.00]', condition: 'lead_time?'}, folders: ['config_2_5', 'config_1_4', 'config_2_1', 'config_2_1', 'config_2_8', 'config_1_1', 'config_1_1', 'config_1_8']},
node15 = {parent: node14, collapsed: true, text: {filter: 'lead_time <= 2w, 2d, 23h, 31m', samples: '# Options: 2 (12.5%)', average: 'Average cost: $43050.00', range: 'Range: [$42800.00 - $43300.00]', condition: 'mass?'}, folders: ['config_2_5', 'config_1_4']},
node16 = {parent: node15, collapsed: true, text: {filter: 'mass <= 165.05g', samples: '# Options: 1 (6.25%)', average: 'Average cost: 42800.0', range: 'Range: [$42800.00 - $42800.00]'}, folders: ['config_1_4']},
node17 = {parent: node15, collapsed: true, text: {filter: 'mass > 165.05g', samples: '# Options: 1 (6.25%)', average: 'Average cost: 43300.0', range: 'Range: [$43300.00 - $43300.00]'}, folders: ['config_2_5']},
node18 = {parent: node14, collapsed: true, text: {filter: 'lead_time > 2w, 2d, 23h, 31m', samples: '# Options: 6 (37.5%)', average: 'Average cost: $47766.67', range: 'Range: [$46600.00 - $50000.00]', condition: 'mass?'}, folders: ['config_2_1', 'config_2_1', 'config_2_8', 'config_1_1', 'config_1_1', 'config_1_8']},
node19 = {parent: node18, collapsed: true, text: {filter: 'mass <= 191.59g', samples: '# Options: 4 (25.0%)', average: 'Average cost: $46650.00', range: 'Range: [$46600.00 - $46700.00]', condition: 'lead_time?'}, folders: ['config_2_1', 'config_2_1', 'config_1_1', 'config_1_1']},
node20 = {parent: node19, collapsed: true, text: {filter: 'lead_time <= 2w, 3d, 13h, 44m', samples: '# Options: 2 (12.5%)', average: 'Average cost: 46600.0', range: 'Range: [$46600.00 - $46600.00]'}, folders: ['config_1_1', 'config_1_1']},
node21 = {parent: node19, collapsed: true, text: {filter: 'lead_time > 2w, 3d, 13h, 44m', samples: '# Options: 2 (12.5%)', average: 'Average cost: 46700.0', range: 'Range: [$46700.00 - $46700.00]'}, folders: ['config_2_1', 'config_2_1']},
node22 = {parent: node18, collapsed: true, text: {filter: 'mass > 191.59g', samples: '# Options: 2 (12.5%)', average: 'Average cost: 50000.0', range: 'Range: [$50000.00 - $50000.00]'}, folders: ['config_2_8', 'config_1_8']},
chart_config = [config, node0, node1, node2, node3, node4, node5, node6, node7, node8, node9, node10, node11, node12, node13, node14, node15, node16, node17, node18, node19, node20, node21, node22];