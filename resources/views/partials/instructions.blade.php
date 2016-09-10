<section class="instructions z-depth-1 md-padding">
	<h2>Instructions</h2>
	
	<ul>
		<li>
			1. To run vue as dev mode: <i class="bold">npm run vue</i>
		</li>
		<li>
			2. To run browsersync: <i class="bold">npm run dev</i>
		</li>
		<li>
			3. To create a Vue component, model or provider just execute <i class="bold">npm run vue:create</i>
		</li>
		<li>
			4. To run script to autoinstall vue components: <i class="bold">npm run vue:compile</i>
		</li>
		<li>
			5. To make a build in whole application (Laravel & Vue) : <i class="bold">npm run prod</i>
		</li>
	</ul>

	<h2>Notes</h2>

	<p>
		<ul>
			<li>
				- This setup does not work for SPA Vue Apps.
			</li>
			<li>
				- <i>src/store.js</i>, saves our variables and we can use them in any laravel view or partial, no necessity of being inside a component. So on any update they will be changed instantly in all the sections we used them (state.our_variable_name). 
			</li>
		</ul>
	</p>
	<p>
		Example:

	</p>
	<div class="username" v-cloak>  <!-- USE V-CLOAK TO AVOID CURLY DIRTY BRACES ON RENDER -->
		<p>Rendered outside any Vue component:
			<i>
            	@{{state.user.first_name}} <!-- share vue variables in whole app through stored in stores.js-->
			</i>
		</p>
		<p>Variable Updated from Vue</p>
		<p>
			<label for="id-name" class="grey-text text-darken-2">First name</label>
        	<input type="text" id="id-name" placeholder="Name" v-model="state.user.first_name">
		</p>
    </div> 
    
    <br>
    <div class="links">
        <a href="https://laravel.com/docs">Documentation</a>
        <a href="https://laracasts.com">Laracasts</a>
        <a href="https://laravel-news.com">News</a>
        <a href="https://forge.laravel.com">Forge</a>
        <a href="https://github.com/laravel/laravel">GitHub</a>
    </div>


</section>