import React from 'react';
import classNames from 'classnames';

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">



      <li>
          <a href="https://discord.gg/MXRKxaRPUK">
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 15"
              xmlns="http://www.w3.org/2000/svg">
              <title>Discord</title>
              <g>
              <path class="cls-1" d="M17.4,1.78A8.42,8.42,0,0,0,12.63,0l-.24.27a11.38,11.38,0,0,1,4.23,2.16A13.89,13.89,0,0,0,11.5.8a14.47,14.47,0,0,0-3.43,0,1.55,1.55,0,0,0-.29,0A12.63,12.63,0,0,0,3.93,1.94c-.63.29-1,.49-1,.49A11.53,11.53,0,0,1,7.39.2L7.22,0A8.4,8.4,0,0,0,2.45,1.78,22.77,22.77,0,0,0,0,11.69a6.16,6.16,0,0,0,5.18,2.59s.63-.77,1.14-1.42a5.23,5.23,0,0,1-3-2s.17.12.47.29l.07,0,.15.08a9.17,9.17,0,0,0,1.25.58,13.55,13.55,0,0,0,2.49.73,11.76,11.76,0,0,0,4.4,0,11.26,11.26,0,0,0,2.47-.73,9.52,9.52,0,0,0,2-1,5.37,5.37,0,0,1-3.07,2c.51.64,1.12,1.38,1.12,1.38a6.22,6.22,0,0,0,5.2-2.59A22.77,22.77,0,0,0,17.4,1.78ZM6.75,10.11A1.82,1.82,0,0,1,5,8.23,1.82,1.82,0,0,1,6.75,6.34,1.8,1.8,0,0,1,8.48,8.23,1.81,1.81,0,0,1,6.75,10.11Zm6.2,0a1.82,1.82,0,0,1-1.73-1.88A1.81,1.81,0,0,1,13,6.34a1.81,1.81,0,0,1,1.73,1.89A1.81,1.81,0,0,1,13,10.11Z"/>
              </g>
            </svg>
          </a>
        </li>   

                 


        <li>
          <a href="https://twitter.com/animalphunks">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <title>Twitter</title>
              <path
                d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" />
            </svg>
          </a>
        </li>

        <li>
          <a href="https://www.instagram.com/animalphunks/">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <title>Instagram</title>
              <g>
                <circle cx="12.145" cy="3.892" r="1" />
                <path
                  d="M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                <path
                  d="M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z" />
              </g>
            </svg>
          </a>
        </li>

        <li>
          <a href="https://t.me/animalphunks">
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 15"
              xmlns="Telegram">
              <title>Instagram</title>
              <g>
                <path id="path2989" class="cls-1" d="M7.64,16a1.2,1.2,0,0,0,.93-.46l5.6-5.45L11,9.31,8,11.18l-.39,4.67Z"/>
                <path id="path2991" class="cls-1" d="M8,11.24l7.53,5.56c.86.46,1.48.23,1.7-.8L20.24,1.56C20.55.3,19.76-.26,18.94.11L1,7.05C-.28,7.55-.27,8.24.73,8.53L5.35,10,16,3.24c.5-.31,1-.14.59.2Z"/>
              </g>
            </svg>
          </a>
        </li>  


        <li>
          <a href="https://github.com/phunklabs">
          <svg xmlns="http://www.w3.org/2000/svg"
            aria-label="GitHub" role="img"
            width="16" height="16"
            viewBox="0 0 512 512"
            ><title>Github</title><path  d="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-44c-71 16-86-34-86-34-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"/></svg>
                      
          </a>
        </li>

      </ul>
    </div>
  );
}

export default FooterSocial;