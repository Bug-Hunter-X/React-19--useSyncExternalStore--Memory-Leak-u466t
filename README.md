# React 19 `useSyncExternalStore` Memory Leak

This repository demonstrates a memory leak that can occur when using React 19's `useSyncExternalStore` hook with a custom subscription function that doesn't properly handle unsubscribing. The bug and its solution are described below.

## Bug Description
The issue arises when a component using `useSyncExternalStore` unmounts, but the underlying subscription remains active.  This results in the subscription continuing to push updates, even though the component is no longer present to receive them.  This leads to wasted resources and potential memory leaks.

## Bug Reproduction
The `bug.js` file contains code that reproduces this memory leak. Running this code and then unmounting the component will not release the subscription properly.

## Solution
The `bugSolution.js` file provides a corrected implementation of the subscription function.  The key change is ensuring that the unsubscribe function returned by the subscription is called when the component unmounts, effectively cleaning up the subscription and preventing the memory leak.

## How to Run
1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm start` to start the development server.
5. Observe the memory usage before and after unmounting the component in the browser's developer tools.