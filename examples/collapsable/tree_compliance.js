var config = {
                container: "#compliance",
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
node0 = {text: {samples: '# Options: 16 (100.0%)', average: 'Average compliance: 6.16E-07m/N', range: 'Range: [4.44E-08m/N - 2.73E-06m/N]', condition: 'cost?'}},
node1 = {parent: node0, collapsed: true, text: {filter: 'cost <= $37500.00', samples: '# Options: 6 (37.5%)', average: 'Average compliance: 1.03E-06m/N', range: 'Range: [3.42E-07m/N - 2.73E-06m/N]', condition: 'lead_time?'}, folders: ['config_3_8', 'config_3_1', 'config_3_1', 'config_2_7', 'config_3_5', 'config_1_7']},
node2 = {parent: node1, collapsed: true, text: {filter: 'lead_time <= 1w, 4d, 11h, 37m', samples: '# Options: 5 (31.25%)', average: 'Average compliance: 6.85E-07m/N', range: 'Range: [3.42E-07m/N - 1.32E-06m/N]', condition: 'method?'}, folders: ['config_3_1', 'config_3_1', 'config_2_7', 'config_3_5', 'config_1_7']},
node3 = {parent: node2, collapsed: true, text: {filter: 'method is not Subtractive', samples: '# Options: 3 (18.75%)', average: 'Average compliance: 3.96E-07m/N', range: 'Range: [3.42E-07m/N - 5.04E-07m/N]', condition: 'lead_time?'}, folders: ['config_3_1', 'config_3_1', 'config_3_5']},
node4 = {parent: node3, collapsed: true, text: {filter: 'lead_time <= 1w, 3d, 20h, 33m', samples: '# Options: 1 (6.25%)', average: 'Average compliance: 0.0', range: 'Range: [5.04E-07m/N - 5.04E-07m/N]'}, folders: ['config_3_5']},
node5 = {parent: node3, collapsed: true, text: {filter: 'lead_time > 1w, 3d, 20h, 33m', samples: '# Options: 2 (12.5%)', average: 'Average compliance: 0.0', range: 'Range: [3.42E-07m/N - 3.42E-07m/N]'}, folders: ['config_3_1', 'config_3_1']},
node6 = {parent: node2, collapsed: true, text: {filter: 'method is Subtractive', samples: '# Options: 2 (12.5%)', average: 'Average compliance: 1.12E-06m/N', range: 'Range: [9.17E-07m/N - 1.32E-06m/N]', condition: 'lead_time?'}, folders: ['config_2_7', 'config_1_7']},
node7 = {parent: node6, collapsed: true, text: {filter: 'lead_time <= 6d, 19h, 58s', samples: '# Options: 1 (6.25%)', average: 'Average compliance: 0.0', range: 'Range: [9.17E-07m/N - 9.17E-07m/N]'}, folders: ['config_1_7']},
node8 = {parent: node6, collapsed: true, text: {filter: 'lead_time > 6d, 19h, 58s', samples: '# Options: 1 (6.25%)', average: 'Average compliance: 0.0', range: 'Range: [1.32E-06m/N - 1.32E-06m/N]'}, folders: ['config_2_7']},
node9 = {parent: node1, collapsed: true, text: {filter: 'lead_time > 1w, 4d, 11h, 37m', samples: '# Options: 1 (6.25%)', average: 'Average compliance: 0.0', range: 'Range: [2.73E-06m/N - 2.73E-06m/N]'}, folders: ['config_3_8']},
node10 = {parent: node0, collapsed: true, text: {filter: 'cost > $37500.00', samples: '# Options: 10 (62.5%)', average: 'Average compliance: 3.70E-07m/N', range: 'Range: [4.44E-08m/N - 1.33E-06m/N]', condition: 'lead_time?'}, folders: ['config_2_5', 'config_2_2', 'config_1_2', 'config_1_4', 'config_2_1', 'config_2_1', 'config_2_8', 'config_1_1', 'config_1_1', 'config_1_8']},
node11 = {parent: node10, collapsed: true, text: {filter: 'lead_time <= 2w, 4d, 3h, 59m', samples: '# Options: 8 (50.0%)', average: 'Average compliance: 1.30E-07m/N', range: 'Range: [4.44E-08m/N - 1.82E-07m/N]', condition: 'cost?'}, folders: ['config_2_5', 'config_2_2', 'config_1_2', 'config_1_4', 'config_2_1', 'config_2_1', 'config_1_1', 'config_1_1']},
node12 = {parent: node11, collapsed: true, text: {filter: 'cost <= $42050.00', samples: '# Options: 1 (6.25%)', average: 'Average compliance: 0.0', range: 'Range: [4.44E-08m/N - 4.44E-08m/N]'}, folders: ['config_1_2']},
node13 = {parent: node11, collapsed: true, text: {filter: 'cost > $42050.00', samples: '# Options: 7 (43.75%)', average: 'Average compliance: 1.43E-07m/N', range: 'Range: [1.18E-07m/N - 1.82E-07m/N]', condition: 'cost?'}, folders: ['config_2_5', 'config_2_2', 'config_1_4', 'config_2_1', 'config_2_1', 'config_1_1', 'config_1_1']},
node14 = {parent: node13, collapsed: true, text: {filter: 'cost <= $44950.00', samples: '# Options: 2 (12.5%)', average: 'Average compliance: 0.0', range: 'Range: [1.81E-07m/N - 1.82E-07m/N]'}, folders: ['config_2_5', 'config_1_4']},
node15 = {parent: node13, collapsed: true, text: {filter: 'cost > $44950.00', samples: '# Options: 5 (31.25%)', average: 'Average compliance: 0.0', range: 'Range: [1.18E-07m/N - 1.30E-07m/N]'}, folders: ['config_2_2', 'config_2_1', 'config_2_1', 'config_1_1', 'config_1_1']},
node16 = {parent: node10, collapsed: true, text: {filter: 'lead_time > 2w, 4d, 3h, 59m', samples: '# Options: 2 (12.5%)', average: 'Average compliance: 0.0', range: 'Range: [1.33E-06m/N - 1.33E-06m/N]'}, folders: ['config_2_8', 'config_1_8']},
chart_config = [config, node0, node1, node2, node3, node4, node5, node6, node7, node8, node9, node10, node11, node12, node13, node14, node15, node16];