module.exports = function check(str, bracketsConfig) {
    let stack = [],
        open = ['{', '(', '['],
        close = ['}', ')', ']'],
        elements = str.split(''),
        openIndex,
        closeIndex;
    // Проходимся по строке, проверяя каждый ее символ
    for (let i = 0; i < elements.length; i++) {
        openIndex = open.indexOf(elements[i]);
        if (openIndex !== -1) {
            // Нашли открывающую скобку. Помещаем ее в стек
            stack.push(openIndex);
            continue;
        }
        closeIndex = close.indexOf(elements[i]);
        if (closeIndex !== -1) {
            // Нашли закрывающую скобку. Проверяем ее соответствие открывающей
            openIndex = stack.pop();
            if (closeIndex !== openIndex) {
                return false;
            }
        }
    }
    // Проверяем дисбаланс открытых/закрытых скобок
    if (stack.length !== 0) {
        return false;
    }
    return true;
}