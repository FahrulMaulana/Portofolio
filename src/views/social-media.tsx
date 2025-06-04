import React from 'react';

const SocialMediaIcons: React.FC = () => {
    return (
        <div style={{ display: 'flex', gap: '15px' }}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    alt="Facebook"
                    style={{ width: '40px', height: '40px' }}
                />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                    alt="Twitter"
                    style={{ width: '40px', height: '40px' }}
                />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                    alt="Instagram"
                    style={{ width: '40px', height: '40px' }}
                />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"
                    alt="LinkedIn"
                    style={{ width: '40px', height: '40px' }}
                />
            </a>
        </div>
    );
};

export default SocialMediaIcons;