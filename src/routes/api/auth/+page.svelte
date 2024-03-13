<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	export let form;
	const redirectTo = $page.url.searchParams.get('redirectTo') || '/';
</script>

<div class="container">
	<form class="login-form" method="post" action="?/login&redirectTo={redirectTo}" use:enhance>
		<p>{form?.message || ''}</p>
		<h2>Login</h2>
		<div class="input-group">
			<label for="username">Username</label>
			<input type="text" id="username" name="username" placeholder="Enter your username" />
		</div>
		<div class="input-group">
			<label for="password">Password</label>
			<input type="password" id="password" name="password" placeholder="Enter your password" />
		</div>
		<button type="submit">Login</button>
	</form>
</div>

<style>
	:root {
		--primary-color: lightblue;
		--primary-hover-color: #7abaff;
		--background-color: #f5f5f5;
		--form-background-color: #fff;
		--form-text-color: #000;
		--form-border-color: #ccc;
	}

	:global(body) {
		font-family: Arial, sans-serif;
		margin: 0;
		padding: 0;
		background-color: var(--primary-hover-color);
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	.login-form {
		background-color: var(--form-background-color);
		color: var(--form-text-color);
		padding: 30px;
		border-radius: 8px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		width: 300px;
	}

	.login-form h2 {
		text-align: center;
		margin-bottom: 20px;
	}

	.input-group {
		margin-bottom: 15px;
		text-align: center;
	}

	.input-group label {
		display: block;
		margin-bottom: 5px;
		font-weight: bold;
		text-align: left;
	}

	.input-group input {
		width: 100%;
		padding: 10px;
		border-radius: 5px;
		border: 1px solid var(--form-border-color);
		box-sizing: border-box;
	}

	button {
		width: 100%;
		padding: 10px;
		border: none;
		border-radius: 5px;
		background-color: var(--primary-color);
		color: #fff;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	button:hover {
		background-color: var(--primary-hover-color);
	}

	@media screen and (max-width: 500px) {
		.login-form {
			width: 90%;
		}
	}
</style>
