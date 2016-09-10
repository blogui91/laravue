  <div class="navbar-fixed">
    <nav class="navigation">
      <div class="nav-wrapper indigo">
        <a href="#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="#" >
              <div class="avatar" :style="{'background-image' : 'url('+state.user.avatar+')' }">
                
              </div>
              <span v-text="state.user.first_name"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>