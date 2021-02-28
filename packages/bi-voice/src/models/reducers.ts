//@ts-ignore
const autoload = require.context(__dirname, true, /slice\.ts$/)

export const reducers = autoload.keys().reduce(
    (all:any, cur: any) => ({
        ...all,
        ...autoload(cur).default,
    }),
    {}
)