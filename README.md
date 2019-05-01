<h1>React List</h1>

This is a generic list component that accepts a list of items and renders them.

It can accept a custom renderer to replace the default rendered list item component, or just send in styles to style the component to your liking.

<h1>Install</h1>
<code>npm install --save @codeparticle/react-list</code>

<h1>Usage</h1>
```
  import React from 'react';
  import List from '@codeparticle/react-list';

  const SantasList = () => {
    const naughty = [{
      title: 'Nick',
      description: 'uses common bug for slack name',
      onClick: () => {alert('police')}
    }, {
      title: 'Ashley',
      description: 'spoiled Avengers Endgame'
    }]

    return <List listItems={naughty} style={{background: 'red'}} />
  }

  export default SantasList;
```

<h1>License</h1>
Copyright 2019 Code Particle Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.