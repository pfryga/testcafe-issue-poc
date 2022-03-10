const path = require('path');

const runDefaultVrTests = () => {
    const breakpointName = 'default';
    const width = 320;
    const height = 640;
    const presetName = 'normal'

    fixture(`Visual regression tests for breakpoint ${width} x ${height}`)
        .beforeEach(async (t) => {
            await t.resizeWindow(width, height);
        });

    test(`Create screenshot for preset: ${presetName}`, async (t) => {
        await t.navigateTo('https://allegro.pl');

        await t.takeScreenshot({
            path: path.join(breakpointName, `${presetName}.png`),
            fullPage: true,
        });
    });
};

runDefaultVrTests();
