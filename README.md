# Modal Component

A reusable React component for managing modals. The component allows you to display a modal with a header, body, and a display button that can be initialized to true or false.
Installation

Use npm or yarn to install the Modal component.


```
$ npm install modal
```

```
$ yarn install modal
```


## Usage

Import the Modal component and use it in your React application.

```jsx

import React from 'react';
import Modal from 'modal';

function App() {
    return (
        <div>
            {/* Your app content */}
            <Modal header="Modal Header" title="Modal Title" displayButton={true} />
        </div>
    );
}
export default App;
```






## Props

The Modal component accepts the following props:

    - Header (string): The header text of the modal.
    - Body (string): The body of the modal.
    - displayButton (boolean): Specifies whether the display button should be shown or hidden.

Example

Here's an example of using the Modal component with different props:

```jsx

<Modal header="Welcome" title="Modal Content" displayButton={false} />

```

This will render a modal without a display button.

## Development

To run the development environment, follow these steps:

### Clone the repository:


```
git clone https://github.com/your-username/modal.git

```

### Install the dependencies:

```
$ npm install
```

Start the development server:
```
$ npm start
```

Open your browser and navigate to http://localhost:3000 to see the demo.


