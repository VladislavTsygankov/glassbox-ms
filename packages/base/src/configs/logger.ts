import pino from "pino";
import moment from "moment";

let n = 0;

export default pino({
    mixin() {
        return {
          line: ++n,
          appName: "user-sevice",
          logger: "PINO"
        }
      },
      formatters: {
        level(_, number) {
          return {level: pino.levels.labels[number].toUpperCase()}
        },
      },
      timestamp: () => moment().format('MMMM Do YYYY, h:mm:ss a')
})