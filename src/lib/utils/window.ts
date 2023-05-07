import { appWindow } from '@tauri-apps/api/window';

export let fullscreen: boolean = false;

export function toggleFullscreen() {
    console.log("toggleFullscreen");

    if (fullscreen) {
        minimizeWindow();
    } else {
        fullscreenWindow();
    }

    fullscreen = !fullscreen;
}

async function fullscreenWindow() {
    console.log("maximizeWindow");
    const result = await appWindow.setFullscreen(true);
    console.log(result);
}

async function minimizeWindow() {
    console.log("minimizeWindow");
    const result = await appWindow.setFullscreen(false);
}
