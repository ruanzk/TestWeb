/**
 * 用于生成行唯一标识，在grid组件中被使用到
 * @returns UUID字符串
 */
function UUID() {
    var s = [], itoh = '0123456789ABCDEF'.split('');
    for (var i = 0; i < 36; i++) s[i] = Math.floor(Math.random() * 0x10);
    s[14] = 4;
    s[19] = (s[19] & 0x3) | 0x8;
    for (var i = 0; i < 36; i++) s[i] = itoh[s[i]];
    s[8] = s[13] = s[18] = s[23] = '-';
    return s.join('');
}