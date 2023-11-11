if (typeof TelegramWebApp !== 'undefined') {
    TelegramWebApp.getUserProfile().then(profile => {
        document.getElementById('userPhoto').src = profile.photos[0].url;
        document.getElementById('userName').innerText = profile.first_name + ' ' + profile.last_name;
        document.getElementById('userPhotoButton').src = profile.photos[0].url;
        document.getElementById('userNameButton').innerText = 'Open in Telegram (' + profile.username + ')';
    }).catch(error => {
        console.error('Error getting user profile:', error);
    });
}