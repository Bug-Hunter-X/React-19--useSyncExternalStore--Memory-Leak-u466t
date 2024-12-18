The solution involves ensuring that the unsubscribe function, returned by the subscription in `useSyncExternalStore`, is called when the component unmounts. This is typically done using the `useEffect` hook and its cleanup function.
```javascript
import { useSyncExternalStore } from 'react';

function MyComponent() {
  const unsubscribe = useSyncExternalStore(subscribe, getSnapshot);

  useEffect(() => {
    return unsubscribe; // Cleanup function: unsubscribe when component unmounts
  }, []);

  // ... rest of your component
}
```
By including the `return unsubscribe;` in the `useEffect` hook's cleanup function, we ensure that the subscription is properly cleaned up when the component unmounts, preventing memory leaks.