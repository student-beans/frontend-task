export default function timeSincePost(epochTime) {
    const currentTime = Math.floor(Date.now() / 1000);

    const timeElapsed = currentTime - epochTime;

    if (timeElapsed < 60) {
        return timeElapsed + ' seconds ago';
    } else if (timeElapsed < 3600) {
        const minutes = Math.floor(timeElapsed / 60);
        return minutes + (minutes === 1 ? ' minute' : ' minutes') + ' ago';
    } else if (timeElapsed < 86400) {
        const hours = Math.floor(timeElapsed / 3600);
        return hours + (hours === 1 ? ' hour' : ' hours') + ' ago';
    } else if (timeElapsed < 604800) {
        const days = Math.floor(timeElapsed / 86400);
        return days + (days === 1 ? ' day' : ' days') + ' ago';
    } else if (timeElapsed < 2419200) {
        const weeks = Math.floor(timeElapsed / 604800);
        return weeks + (weeks === 1 ? ' week' : ' weeks') + ' ago';
    } else {
        const years = Math.floor(timeElapsed / 31536000); 
        return years + (years === 1 ? ' year' : ' years') + ' ago';
    }
}





