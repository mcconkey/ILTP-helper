// This is a Recoil atom which is responsible for maintaining state of
// the visibility of objects across the App--allowing one component to hide
// another component, without trixy callback functions and param passing.

import { atom } from 'recoil';

const visibilityState = atom({
    key: 'visibilityState',
    default: {
        intro: true,
    },
});

export default visibilityState;