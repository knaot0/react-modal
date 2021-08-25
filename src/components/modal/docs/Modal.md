## 前提条件

```jsx
import React from 'react';
import { ModalProvider } from '...';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ModalProvider>
            <Component {...pageProps} />
        </ModalProvider>
    )
}

export default MyApp
```

## 使い方

```jsx
import React from 'react';
import { useModal } from '...';

const Item = () => {
    const openModal = useModal();

    const handleClick = () => {
        openModal();
    };

    return (
        <button onClick={handleClick}>Open Modal</button>
    );
};

```