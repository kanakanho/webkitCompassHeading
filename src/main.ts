window.addEventListener("deviceorientation", (event: DeviceOrientationEvent) => {
    if (event.webkitCompassHeading !== undefined) {
        console.log(`Compass Heading: ${event.webkitCompassHeading}`);
    } else {
        console.log("webkitCompassHeading is not supported on this device.");
    }
});
