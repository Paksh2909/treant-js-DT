var config = {
                container: "#lead_time",
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
node0 = {text: {samples: '# Options: 16 (100.0%)', average: 'Average lead_time: 1w, 6d, 16h, 17m', range: 'Range: [5d, 21h, 20m, 8s - 2w, 4d, 17h, 43m]', condition: 'cost?'}},
node1 = {parent: node0, collapsed: true, text: {filter: 'cost <= $42050.00', samples: '# Options: 7 (43.75%)', average: 'Average lead_time: 1w, 2d, 16h, 30m', range: 'Range: [5d, 21h, 20m, 8s - 1w, 4d, 19h, 10m]', condition: 'method?'}, folders: ['config_3_8', 'config_1_2', 'config_3_1', 'config_3_1', 'config_2_7', 'config_3_5', 'config_1_7']},
node2 = {parent: node1, collapsed: true, text: {filter: 'method is not Subtractive', samples: '# Options: 4 (25.0%)', average: 'Average lead_time: 1w, 4d, 4h, 5m', range: 'Range: [1w, 3d, 13h, 1m - 1w, 4d, 19h, 10m]', condition: 'mass?'}, folders: ['config_3_8', 'config_3_1', 'config_3_1', 'config_3_5']},
node3 = {parent: node2, collapsed: true, text: {filter: 'mass <= 95.38g', samples: '# Options: 3 (18.75%)', average: 'Average lead_time: 1w, 3d, 23h, 3m', range: 'Range: [1w, 3d, 13h, 1m - 1w, 4d, 4h, 4m]', condition: 'mass?'}, folders: ['config_3_1', 'config_3_1', 'config_3_5']},
node4 = {parent: node3, collapsed: true, text: {filter: 'mass <= 86.33g', samples: '# Options: 1 (6.25%)', average: 'Average lead_time: 910862.0', range: 'Range: [1w, 3d, 13h, 1m - 1w, 3d, 13h, 1m]'}, folders: ['config_3_5']},
node5 = {parent: node3, collapsed: true, text: {filter: 'mass > 86.33g', samples: '# Options: 2 (12.5%)', average: 'Average lead_time: 965099.0', range: 'Range: [1w, 4d, 4h, 4m - 1w, 4d, 4h, 4m]'}, folders: ['config_3_1', 'config_3_1']},
node6 = {parent: node2, collapsed: true, text: {filter: 'mass > 95.38g', samples: '# Options: 1 (6.25%)', average: 'Average lead_time: 1019424.0', range: 'Range: [1w, 4d, 19h, 10m - 1w, 4d, 19h, 10m]'}, folders: ['config_3_8']},
node7 = {parent: node1, collapsed: true, text: {filter: 'method is Subtractive', samples: '# Options: 3 (18.75%)', average: 'Average lead_time: 1w, 17h, 3m, 3s', range: 'Range: [5d, 21h, 20m, 8s - 1w, 2d, 13h, 7m]', condition: 'mass?'}, folders: ['config_1_2', 'config_2_7', 'config_1_7']},
node8 = {parent: node7, collapsed: true, text: {filter: 'mass <= 770.05g', samples: '# Options: 2 (12.5%)', average: 'Average lead_time: 6d, 19h, 58s', range: 'Range: [5d, 21h, 20m, 8s - 1w, 16h, 41m, 48s]', condition: 'cost?'}, folders: ['config_2_7', 'config_1_7']},
node9 = {parent: node8, collapsed: true, text: {filter: 'cost <= $29100.00', samples: '# Options: 1 (6.25%)', average: 'Average lead_time: 508808.0', range: 'Range: [5d, 21h, 20m, 8s - 5d, 21h, 20m, 8s]'}, folders: ['config_1_7']},
node10 = {parent: node8, collapsed: true, text: {filter: 'cost > $29100.00', samples: '# Options: 1 (6.25%)', average: 'Average lead_time: 664908.0', range: 'Range: [1w, 16h, 41m, 48s - 1w, 16h, 41m, 48s]'}, folders: ['config_2_7']},
node11 = {parent: node7, collapsed: true, text: {filter: 'mass > 770.05g', samples: '# Options: 1 (6.25%)', average: 'Average lead_time: 824833.0', range: 'Range: [1w, 2d, 13h, 7m - 1w, 2d, 13h, 7m]'}, folders: ['config_1_2']},
node12 = {parent: node0, collapsed: true, text: {filter: 'cost > $42050.00', samples: '# Options: 9 (56.25%)', average: 'Average lead_time: 2w, 2d, 18h, 47m', range: 'Range: [1w, 3d, 15h, 13m - 2w, 4d, 17h, 43m]', condition: 'machine_type?'}, folders: ['config_2_5', 'config_2_2', 'config_1_4', 'config_2_1', 'config_2_1', 'config_2_8', 'config_1_1', 'config_1_1', 'config_1_8']},
node13 = {parent: node12, collapsed: true, text: {filter: 'machine_type is not 3Axis', samples: '# Options: 8 (50.0%)', average: 'Average lead_time: 2w, 3d, 13h, 14m', range: 'Range: [2w, 2d, 5h, 41m - 2w, 4d, 17h, 43m]', condition: 'cost?'}, folders: ['config_2_5', 'config_1_4', 'config_2_1', 'config_2_1', 'config_2_8', 'config_1_1', 'config_1_1', 'config_1_8']},
node14 = {parent: node13, collapsed: true, text: {filter: 'cost <= $44950.00', samples: '# Options: 2 (12.5%)', average: 'Average lead_time: 2w, 2d, 7h, 44m', range: 'Range: [2w, 2d, 5h, 41m - 2w, 2d, 9h, 48m]', condition: 'mass?'}, folders: ['config_2_5', 'config_1_4']},
node15 = {parent: node14, collapsed: true, text: {filter: 'mass <= 165.05g', samples: '# Options: 1 (6.25%)', average: 'Average lead_time: 1402873.0', range: 'Range: [2w, 2d, 5h, 41m - 2w, 2d, 5h, 41m]'}, folders: ['config_1_4']},
node16 = {parent: node14, collapsed: true, text: {filter: 'mass > 165.05g', samples: '# Options: 1 (6.25%)', average: 'Average lead_time: 1417705.0', range: 'Range: [2w, 2d, 9h, 48m - 2w, 2d, 9h, 48m]'}, folders: ['config_2_5']},
node17 = {parent: node13, collapsed: true, text: {filter: 'cost > $44950.00', samples: '# Options: 6 (37.5%)', average: 'Average lead_time: 2w, 3d, 23h, 4m', range: 'Range: [2w, 3d, 13h, 14m - 2w, 4d, 17h, 43m]', condition: 'cost?'}, folders: ['config_2_1', 'config_2_1', 'config_2_8', 'config_1_1', 'config_1_1', 'config_1_8']},
node18 = {parent: node17, collapsed: true, text: {filter: 'cost <= $48350.00', samples: '# Options: 4 (25.0%)', average: 'Average lead_time: 2w, 3d, 13h, 44m', range: 'Range: [2w, 3d, 13h, 14m - 2w, 3d, 14h, 14m]', condition: 'cost?'}, folders: ['config_2_1', 'config_2_1', 'config_1_1', 'config_1_1']},
node19 = {parent: node18, collapsed: true, text: {filter: 'cost <= $46650.00', samples: '# Options: 2 (12.5%)', average: 'Average lead_time: 1516466.0', range: 'Range: [2w, 3d, 13h, 14m - 2w, 3d, 13h, 14m]'}, folders: ['config_1_1', 'config_1_1']},
node20 = {parent: node18, collapsed: true, text: {filter: 'cost > $46650.00', samples: '# Options: 2 (12.5%)', average: 'Average lead_time: 1520078.0', range: 'Range: [2w, 3d, 14h, 14m - 2w, 3d, 14h, 14m]'}, folders: ['config_2_1', 'config_2_1']},
node21 = {parent: node17, collapsed: true, text: {filter: 'cost > $48350.00', samples: '# Options: 2 (12.5%)', average: 'Average lead_time: 2w, 4d, 17h, 43m', range: 'Range: [2w, 4d, 17h, 43m - 2w, 4d, 17h, 43m]', condition: 'mass?'}, folders: ['config_2_8', 'config_1_8']},
node22 = {parent: node21, collapsed: true, text: {filter: 'mass <= 199.84g', samples: '# Options: 1 (6.25%)', average: 'Average lead_time: 1619020.5', range: 'Range: [2w, 4d, 17h, 43m - 2w, 4d, 17h, 43m]'}, folders: ['config_2_8', 'config_1_8']},
node23 = {parent: node21, collapsed: true, text: {filter: 'mass > 199.84g', samples: '# Options: 1 (6.25%)', average: 'Average lead_time: nan', range: 'Range: [N/A - N/A]'}, folders: []},
node24 = {parent: node12, collapsed: true, text: {filter: 'machine_type is 3Axis', samples: '# Options: 1 (6.25%)', average: 'Average lead_time: 918819.0', range: 'Range: [1w, 3d, 15h, 13m - 1w, 3d, 15h, 13m]'}, folders: ['config_2_2']},
chart_config = [config, node0, node1, node2, node3, node4, node5, node6, node7, node8, node9, node10, node11, node12, node13, node14, node15, node16, node17, node18, node19, node20, node21, node22, node23, node24];