export default function() {
    return new Promise((resolve, reject) => {
        var iframe = document.createElement('iframe');
        iframe.src = "https://www.example.com";
        iframe.style.width = "100%";
        iframe.style.height = "100%";

        // Resolve the promise when the iframe loads successfully
        iframe.addEventListener('load', function() {
            console.log('Iframe loaded successfully');
            resolve({});
        });

        // Reject the promise if an error occurs
        iframe.addEventListener('error', function() {
            console.error('An error occurred while loading the iframe');
            reject(new Error('An error occurred while loading the iframe'));
        });

        document.body.appendChild(iframe);
    });
}