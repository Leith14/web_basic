function kun(value) {
    switch (value) {
        case '唱歌':
            console.log('唱歌');
            break;
        case '跳舞':
            console.log('跳舞');
            break;
        case 'rap':
            console.log('rap');
            break;
        case '打篮球':
            console.log('打篮球');
            break;
        default:
            const error = value; //穷尽性检查
            break;
    }
}
export {};
//# sourceMappingURL=never.js.map