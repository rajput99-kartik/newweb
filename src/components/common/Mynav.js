import React from 'react'
import './Mynav.css'

function Mynav() {
  return (
    <>
     <div id="section-header" data-section-id="header">

          <div
            class="header header--light header--left"
            kjb-settings-id="sections_header_settings_background_color"
          >
            <div class="container">
              <a href="/" class="logo logo--image">
                <img
                  src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/sites/6930/images/sz20g5RUScmf4ayAfkAU_YS_cropsmall.jpg"
                  kjb-settings-id="sections_header_settings_logo"
                />
              </a>

              <div class="header-ham">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div
                kjb-settings-id="sections_header_settings_menu"
                class="header-menu"
              >
                <a href="https://www.rebeccasnowball.com/store">Classes</a>

                <a href="https://www.rebeccasnowball.com/pages/about-you"
                  >About You</a
                >

                <a href="https://www.rebeccasnowball.com/pages/about-me"
                  >About Me</a
                >

                <a href="https://www.rebeccasnowball.com/pages/schedule"
                  >Live Streaming Yoga</a
                >

                <a href="https://www.rebeccasnowball.com/library">My Library</a>

                <a href="https://www.rebeccasnowball.com/pages/student-success"
                  >Student Success</a
                >

                

                <span kjb-settings-id="sections_header_settings_language_login"
                  ><a href="/login">Login</a></span
                >
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Mynav