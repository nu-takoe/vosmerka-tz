import { createMachine } from "xstate";

const stateMachine = createMachine(
    {
        id: "machine",
        initial: "close",
        states: {
            close: {
                on: {
                    TOGGLE_ON: {
                        target: "open"
                    }
                }
            },
            open: {
                // "type": "parallel",
                // "states": {
                //     "mode": {
                //         "initial": "pause",
                //         "states": {
                //             "pause": {
                //                 "on": {
                //                     "MODE": {
                //                         "target": "play"
                //                     }
                //                 }
                //             },
                //             "play": {
                //                 "on": {
                //                     "MODE": {
                //                         "target": "pause"
                //                     }
                //                 }
                //             }
                //         }
                //     },
                //     "size": {
                //         "initial": "mini",
                //         "states": {
                //             "mini": {
                //                 "on": {
                //                     "SIZE": {
                //                         "target": "big"
                //                     }
                //                 }
                //             },
                //             "big": {
                //                 "on": {
                //                     "SIZE": {
                //                         "target": "mini"
                //                     }
                //                 }
                //             }
                //         }
                //     }
                // },
                on: {
                    TOGGLE_OFF: {
                        target: "close"
                    }
                }
            }
        }
    }
)

export default stateMachine