"use client";

import { useEffect } from "react";

export default function AppBanner() {
    useEffect(() => {
        // Check if user is on Android
        const isAndroid = /Android/i.test(navigator.userAgent);

        if (isAndroid) {
            // Create the app banner
            const banner = document.createElement('div');
            banner.style.position = 'fixed';
            banner.style.top = '0';
            banner.style.left = '0';
            banner.style.right = '0';
            banner.style.backgroundColor = '#f1f1f1';
            banner.style.padding = '10px';
            banner.style.zIndex = '9999';
            banner.style.display = 'flex';
            banner.style.alignItems = 'center';
            banner.style.justifyContent = 'space-between';
            banner.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';

            // Banner text
            const text = document.createElement('div');
            text.textContent = 'Открыть в приложении Onvi Mobile?';
            text.style.flex = '1';
            text.style.marginRight = '10px';

            // Open button
            const openButton = document.createElement('button');
            openButton.textContent = 'Открыть';
            openButton.style.backgroundColor = '#4CAF50';
            openButton.style.color = 'white';
            openButton.style.border = 'none';
            openButton.style.padding = '8px 16px';
            openButton.style.borderRadius = '4px';
            openButton.style.cursor = 'pointer';

            // Close button
            const closeButton = document.createElement('button');
            closeButton.textContent = '×';
            closeButton.style.backgroundColor = 'transparent';
            closeButton.style.border = 'none';
            closeButton.style.fontSize = '20px';
            closeButton.style.marginLeft = '10px';
            closeButton.style.cursor = 'pointer';

            // Add elements to banner
            banner.appendChild(text);
            banner.appendChild(openButton);
            banner.appendChild(closeButton);

            // Check if banner was already closed
            if (typeof sessionStorage !== 'undefined' && !sessionStorage.getItem('appBannerClosed')) {
                // Add banner to page
                document.body.appendChild(banner);
                // Adjust body padding to account for banner
                document.body.style.paddingTop = (parseInt(document.body.style.paddingTop || '0') + banner.offsetHeight) + 'px';
            }

            // Handle open button click
            openButton.addEventListener('click', function() {
                // Get current page path
                const currentPath = window.location.pathname;

                // Store timestamp to detect if user returns quickly (app not installed)
                sessionStorage.setItem('appOpenAttempt', Date.now().toString());

                // Try to open app with current URL
                window.location.href = `https://onvione.ru${currentPath}`;

                // If user returns quickly, go to Play Store
                setTimeout(function() {
                    const attemptTime = parseInt(sessionStorage.getItem('appOpenAttempt') || '0');
                    const timeElapsed = Date.now() - attemptTime;

                    // If less than 2 seconds passed, assume app not opened
                    if (timeElapsed < 2000 && !document.hidden) {
                        window.location.href = 'https://play.google.com/store/apps/details?id=com.onvimobile';
                    }
                }, 1500);
            });

            // Handle close button click
            closeButton.addEventListener('click', function() {
                // Remove banner
                document.body.removeChild(banner);

                // Reset body padding
                const currentPadding = parseInt(document.body.style.paddingTop || '0');
                document.body.style.paddingTop = Math.max(0, currentPadding - banner.offsetHeight) + 'px';

                // Remember that user closed banner
                sessionStorage.setItem('appBannerClosed', 'true');
            });

            // Cleanup function to remove banner when component unmounts
            return () => {
                if (document.body.contains(banner)) {
                    document.body.removeChild(banner);
                    const currentPadding = parseInt(document.body.style.paddingTop || '0');
                    document.body.style.paddingTop = Math.max(0, currentPadding - banner.offsetHeight) + 'px';
                }
            };
        }
    }, []); // Empty dependency array means this runs once after component mount

    return null; // This component doesn't render anything visible
}
