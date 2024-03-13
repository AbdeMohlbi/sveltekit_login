<script></script>

<div class="container">
	<header>
		<h1>Welcome to My Homepage</h1>
	</header>
	<main>
		<p>This is the main content of the page.</p>
	</main>
</div>
<footer>
	<p>&copy; 2024 My Homepage. All rights reserved.</p>
</footer>

<style>
	.container {
		flex: 1;
	}
	:global(body) {
		margin: 0;
		padding: 0;
		min-height: 100vh;
		position: relative;
	}

	.container {
		padding-bottom: 60px;
	}

	header {
		background-color: #333;
		color: #fff;
		padding: 20px;
		text-align: center;
	}

	main {
		padding: 0px;
	}

	footer {
		position: absolute;
		bottom: 0;
		width: 100%;
		background-color: #333;
		color: #fff;
		text-align: center;
	}
</style>
