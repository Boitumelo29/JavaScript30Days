const words = ['BOB', 'BAM', 'BND', 'XOF', 'BIF',
    'KHR', 'XAF', 'CVE', 'XAF', 'CLP', 'COP', 'KMF',
    'CRC', 'CUP', 'CDF', 'DKK', 'DJF', 'XCD', 'DOP',
    'EGP', 'XAF', 'ERN', 'ETB', 'FJD', 'XAF', 'GEL',
    'mud', 'sky', 'grew', 'hard', 'ill', 'frame',
    'XCD', 'GNF', 'GTQ', 'XOF', 'GYD', 'HTG', 'HNL',
    'GNF', 'HNL', 'ISK', 'IRR', 'Japan', 'Australia', 'Afghanistan',
    'Albania', 'Algeria', 'Brunei', 'Barbados', 'Chile', 'Dominica', 'Zambia',
    'Aromatic', 'Hearty', 'Roux', 'Victuals', 'Chiffonade', 'Divine', 'Omakase',
    'Sapid', 'Earthy', 'Fresh', 'Smoky', 'Sweet', 'Sour', 'Airy',
    'Chewy', 'Creamy', 'Crumbly', 'Blackened', 'Broiled', 'Glazed', 'Sauteed',
    'Basement', 'Den', 'Hall', 'Porch', 'Yard', 'Counter', 'Mirror',
    'Sink', 'Armchair ', 'Rug', 'Glass', 'Napkin', 'Stove', 'Microwave',
    'Toaster', 'dig', 'new', 'rest', 'play', 'win', 'strong'];

function getPassword() {
    const char = '0123456789/%?#@#$%';
    const clenght = char.length;
    let password = '';

    while (password.length < 20) {
        password = password.concat(randomNumber(char.length));
        password = password.concat(char[randomNumber(clenght)]);
    }

    password = password.substring(0, 16);
    document.getElementById('password').value = password;
}

function randomNumber(e) {
    return Math.floor(Math.random() * e);
}

function randomWord() {
    const number = randomNumber(words.length);
    return words[number]
}