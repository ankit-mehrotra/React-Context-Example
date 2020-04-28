import React from 'react';

const Nav = ({name,price}) => {
    return (
        <header>
         
              <div class="logo">Logo</div>
              <nav>
              <ul>
                  <li>
              <a href="#">Link1</a></li>
              <li><a href="#">Link2</a></li>
              <li><a href="#">Link3</a></li>
              </ul>
          </nav>
        </header>
    )
}

export default Nav;