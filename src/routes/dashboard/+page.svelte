<script>
</script>

<div class="dashboard">
	<div class="card">
		<h2>dashboard card 1</h2>
		<p>This is the content of dashboard card 1.</p>
	</div>
	<div class="card">
		<h2>dashboard card 2</h2>
		<p>This is the content of dashboard card 2.</p>
	</div>
	<div class="card">
		<h2>dashboard card 3</h2>
		<p>This is the content of dashboard card 3.</p>
	</div>
</div>

<style>
	.dashboard {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 20px;
	}

	.card {
		background-color: #f0f0f0;
		border: 1px solid #ddd;
		border-radius: 5px;
		margin: 10px;
		padding: 20px;
		width: 300px;
	}

	@media (max-width: 600px) {
		.card {
			width: calc(100% - 20px);
		}
	}
</style>
