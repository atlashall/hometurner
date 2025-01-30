document.addEventListener("DOMContentLoaded", function() {
    // Redirect "Remember" button to next page (Simulating page navigation)
    document.getElementById("remember").addEventListener("click", function(event) {
        event.preventDefault();
        document.body.innerHTML = `
            <div class="container">
                <h1>The Echo Speaks</h1>
                <p>They call it justice. It is not justice. It is necessity.</p>
                <p>The Hollow One whispers beneath the soil. It speaks through me.</p>
                <p>If you see the root, cut it.</p>
                <a href="#" id="hidden-link" class="hidden-link">.</a>
            </div>
        `;

        // Hidden link to next stage
        document.getElementById("hidden-link").addEventListener("click", function(event) {
            event.preventDefault();
            document.body.innerHTML = `
                <div class="container">
                    <h1>The Hollow One Stirs</h1>
                    <p>The Mourner was not the first.</p>
                    <p>The Hollow One stirs beneath. The cycle must break.</p>
                    <p class="scramble" id="scramble-text">ts nmae aws rveen ksneop.</p>
                </div>
            `;

            // Clicking scrambled text takes user to final page
            document.getElementById("scramble-text").addEventListener("click", function() {
                document.body.innerHTML = `
                    <div class="container">
                        <h1>You See Now.</h1>
                        <p>The Wake was never justice. It was never divine.</p>
                        <p>It was the voice of something deeper.</p>
                        <p>Now that you have seen, it will see you.</p>
                    </div>
                `;

                // Redirect to homepage after 10 seconds
                setTimeout(function() {
                    location.reload();
                }, 10000);
            });
        });
    });

    // "Forget" button refreshes the page endlessly
    document.getElementById("forget").addEventListener("click", function(event) {
        event.preventDefault();
        location.reload();
    });
});
