import { hiraganize } from "../src"

describe('hiraganize', () => {
    const text = "七人の兄妹が港で笑っている。敵の反乱だ。";

    test('Grade 1', async () => {
        console.log(`Grade1 = ${await hiraganize(text, 1)}`);
    })
    test('Grade 2', async () => {
        console.log(`Grade2 = ${await hiraganize(text, 2)}`);
    })
    test('Grade 3', async () => {
        console.log(`Grade3 = ${await hiraganize(text, 3)}`);
    })
    test('Grade 4', async () => {
        console.log(`Grade4 = ${await hiraganize(text, 4)}`);
    })
    test('Grade 5', async () => {
        console.log(`Grade5 = ${await hiraganize(text, 5)}`);
    })
    test('Grade 6', async () => {
        console.log(`Grade6 = ${await hiraganize(text, 6)}`);
    })

})