<script lang="ts">
    let formError = false;
    let formMessage = "";
    let submitting = false;

    const onSubmit = async (e: SubmitEvent) => {
        e.preventDefault();
        submitting = true;

        const formData = new FormData(e.target as HTMLFormElement);
        const response = await fetch("/api/add-email", {
            method: "POST",
            body: formData
        });
        const data = await response.json();

        if (data.error) {
            formError = true;
        } else {
            formError = false;
        }

        if (data.message) {
            formMessage = data.message;
        } else {
            formMessage = "";
        }

        submitting = false;
    };
</script>

<form on:submit={onSubmit} class="container">
    <div class="input-group">
        <input class="input" type="email" id="email" name="email" placeholder="gameclubfan@whatever.com" disabled={submitting} required />
        <button disabled={submitting} type="submit">
            {#if submitting}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-loader-2 loader"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg
                >
            {/if}
            Subscribe
        </button>
    </div>
    <p class={formError && "error"}>{formMessage}</p>
</form>

<style scoped>
    .container {
        width: "100%";
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .input-group {
        display: flex;
    }

    .input-group > :first-child {
        border-top-left-radius: var(--rounded-btn, 0.5rem);
        border-top-right-radius: 0;
        border-bottom-left-radius: var(--rounded-btn, 0.5rem);
        border-bottom-right-radius: 0;
    }

    .input-group > :last-child {
        border-top-left-radius: 0;
        border-top-right-radius: var(--rounded-btn, 0.5rem);
        border-bottom-left-radius: 0;
        border-bottom-right-radius: var(--rounded-btn, 0.5rem);
    }

    input {
        flex-shrink: 1;
        width: 250px;
        height: 3rem;
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: 1rem;
        line-height: 2;
        line-height: 1.5rem;
        border-width: 1px;
        border-radius: var(--rounded-btn, 0.5rem);
    }

    input::placeholder {
        color: #ccc;
        width: 100%;
    }

    button {
        display: inline-flex;
        flex-shrink: 0;
        cursor: pointer;
        -webkit-user-select: none;
        user-select: none;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        border-color: transparent;
        text-align: center;
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
            -webkit-backdrop-filter;
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
            backdrop-filter;
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
            backdrop-filter, -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        transition-duration: 0.4s;
        padding-left: 1rem;
        padding-right: 1rem;
        min-height: 3rem;
        font-size: 0.875rem;
        line-height: 1em;
        gap: 0.5rem;
        font-weight: 600;
        text-decoration-line: none;
        background-color: #5663f6;
        color: white;
    }

    button:hover {
        background-color: #6e7ef4;
    }

    button:disabled {
        background-color: #a0a0a0;
        color: #fff;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

    .loader {
        animation: spin 1s linear infinite;
    }

    .error {
        font-size: 14px;
        color: #fbefda;
    }
    
    @media only screen and (max-width: 1024px) {
    input {
        width: 450px;
        height: 4rem;
        font-size: 2rem;    
    }
}
</style>
