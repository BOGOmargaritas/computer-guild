<script lang="ts">
    import { Loader2 } from "lucide-svelte";

    let errorMessage = "";
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
            errorMessage = data.message;
        } else {
            errorMessage = "";
        }

        submitting = false;
    };
</script>

<form on:submit={onSubmit} class="container">
    <div class="input-group">
        <input class="input" type="email" id="email" name="email" placeholder="gameclubfan@gmail.com" disabled={submitting} required />
        <button disabled={submitting} type="submit">
            {#if submitting}
                <Loader2 size="1.5rem" class="loader" />
            {/if}
            Subscribe
        </button>
    </div>
    <p class="error">{errorMessage}</p>
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
        height: 3rem;
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: 1rem;
        line-height: 2;
        line-height: 1.5rem;
        border-width: 1px;
        border-radius: var(--rounded-btn, 0.5rem);
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
        transition-duration: 0.2s;
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
        margin-right: 0.5rem;
        height: 1rem;
        width: 1rem;
        animation: spin 1s linear infinite;
        color: red;
    }

    .error {
        font-size: 18px;
        color: #5663f6;
    }
</style>
