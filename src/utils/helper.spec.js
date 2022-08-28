import { round, composeDateTime } from './helper';

describe('Helper Js', () => {
    it('should rounded value with precision', () => {
        const output = round(26.777,1);
        expect(output).toEqual(26.8);
    });
    it('should construct date time from given timestamp', () => {
        const output = composeDateTime(1661590800);
        expect(output).toEqual('Sat Aug 27 2022 @ 17:0:0');
    });
});