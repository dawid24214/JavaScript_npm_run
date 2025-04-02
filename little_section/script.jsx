document.addEventListener('DOMContentLoaded', () => {
    const quote ={
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author:"Winston Churchill",
    };
    document.getElementById('quote-text').textContent = `"${quote.text}"`;
    document.getElementById('quote-author').textContent = `— ${quote.author}`;
})