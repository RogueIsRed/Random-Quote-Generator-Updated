const quoteDisplay = document.getElementById('quote');
const quoteButton = document.getElementById('generate-quote');

async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) {
            throw new Error(`API error: ${response.statusText}`);
        }
        const data = await response.json();
        quoteDisplay.textContent = `${data.content} - ${data.author}`;
    } catch (error) {
        quoteDisplay.textContent = 'Failed to fetch quote. Try again!';
        console.error(error);
    }
}

quoteButton.addEventListener('click', fetchQuote);

// Load a random quote when the page loads
fetchQuote();