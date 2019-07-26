
const isPalindrome = (string) => string == string.split('').reverse().join('');

const palindrome = (req, res, next ) => {
    const { palabra } = req.body;
    if(!palabra)
        return res.status(503).json({ success: false, message: 'Campo palabra es requerido' });

    var word = palabra.split(' ');

    if(word.length > 1)
        return res.status(503).json({ success: false, message: 'Debe introducir una sola palabra, sin espacios' });


    if(isPalindrome(palabra)){
        return res.status(200).json({ success: true, message: palabra + ' es Palindrome' });
    }else{
        return res.status(200).json({ success: false, message: palabra + ' NO es Palindrome' });
    }

      
}



module.exports = {
    palindrome
}