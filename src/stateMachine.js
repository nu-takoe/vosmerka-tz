import { assign, createMachine } from "xstate";

const stateMachine = createMachine({
    id: "machine",
    initial: "close",
    context: {
        //true - большой, false - маленький
        size: true,
        //false - пауза, true - проигрывается
        play: false,
    },
    states: {
        close: {
            exit: assign({ play: true }),
            on: {
                TOGGLE_ON: {
                    target: "open"
                }
            }
        },
        open: {
            exit: assign({ play: false }),
            type: "parallel",
            states: {
                mode: {
                    initial: "play",
                    states: {
                        pause: {
                            exit: assign({ play: true }),
                            on: {
                                MODE: {
                                    target: "play"
                                }
                            }
                        },
                        play: {
                            exit: assign({ play: false }),
                            on: {
                                MODE: {
                                    target: "pause"
                                }
                            }
                        }
                    }
                },
                size: {
                    initial: "big",
                    states: {
                        mini: {
                            exit: assign({ size: true }),
                            on: {
                                SIZE: {
                                    target: "big"
                                }
                            }
                        },
                        big: {
                            exit: assign({ size: false }),
                            on: {
                                SIZE: {
                                    target: "mini"
                                }
                            }
                        }
                    }
                }
            },
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