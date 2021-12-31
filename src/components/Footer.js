import React from 'react'
import './Footer.css';

const footer = () => (
    <footer className='footer'>
        <div className='footer__copyright'>
            &copy; 2022 Made with ❤️ by{' '}
            <a className='footer__copyright--link' href='https://github.com/Ansar1337'>
                {' '}
                Ansar Shayekin
            </a>
        </div>
    </footer>
);

export default footer