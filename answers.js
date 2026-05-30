// ===== ЭТАЛОННЫЕ ОТВЕТЫ (защищены от просмотра) =====
// Этот файл будет обфусцирован (запутан), чтобы дети не нашли ответы

(function() {
    // Для русских букв используем кодирование в Unicode-последовательности
    const encryptedAnswers = {
        ans1: '\\u0430\\u043b\\u043b\\u0438\\u0433\\u0430\\u0442\\u043e\\u0440', // аллигатор
        ans2: '\\u043b\\u043a\\u043e\\u0431\\u043b\\u043e\\u0441\\u0430', // лкоблоса
        ans3: '20',
        ans4: '4',
        ans5: '9',
        ans6: '5',
        ans7: '4213756',
        ans8: '10800',
        ans9: '4',
        ans10: '42',
        ans11: '\\u0423\\u0431\\u0438\\u0439\\u0446\\u0430', // Убийца
        ans12: '16',
        h2: '2',
        h3: '482.50'
    };

    // Функция для декодирования Unicode-последовательностей
    function decodeUnicode(str) {
        if (!str.includes('\\u')) return str;
        return str.replace(/\\u([0-9a-fA-F]{4})/g, (match, code) => {
            return String.fromCharCode(parseInt(code, 16));
        });
    }

    // Функция для получения ответов
    window.getCorrectAnswers = function() {
        const correct = {};
        for (let key in encryptedAnswers) {
            // Декодируем ответы
            correct[key] = decodeUnicode(encryptedAnswers[key]);
        }
        return correct;
    };
})();