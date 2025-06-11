import React from 'react';

const SocialMediaIcons: React.FC = () => {
    return (
        <div style={{ display: 'flex', gap: '15px' }}>
            <a href="https://www.facebook.com/share/15MQC3hRZt/" target="_blank" rel="noopener noreferrer">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    alt="Facebook"
                    style={{ width: '40px', height: '40px' }}
                />
            </a>
            <a href="https://wa.me/6281212154019" target="_blank" rel="noopener noreferrer">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    style={{ width: '40px', height: '40px' }}
                />
            </a>
            <a href="https://www.instagram.com/fhlmln_828?igsh=bTE5dHlhbDIwemo1" target="_blank" rel="noopener noreferrer">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                    alt="Instagram"
                    style={{ width: '40px', height: '40px' }}
                />
            </a>
            <a href="https://www.linkedin.com/in/fahrul-maulana-3297b616b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
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