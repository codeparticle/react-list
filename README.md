<h1>React List</h1>

This is a generic list component that accepts a list of items and renders them.

It can accept a custom renderer to replace the default rendered list item component, or just send in styles to style the component to your liking.

<h1>Install</h1>
<code>npm install --save @codeparticle/react-list</code>

<h1>Usage</h1>

```javascript
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

<h1>Props</h1>
<h2>List</h2>
|Prop|type|default|description|
|----|----|-------|-----------|
|listItems|array|none|The list of items|
|containerStyles|object|none|Inline styles for the container|
|className|string|none|Class name for the container. If it exists it will disable the inline styles|
|itemRenderer|React Element|none|Custom renderer to for the list items|

<h2>ListItem</h2>
|Prop|type|default|description|
|----|----|-------|-----------|
|title|array|none|The title of the list item|
|description|object|none|The description of the list item|
|className|string|none|Class name for the container. If it exists it will disable the inline styles|
|onClick|function|none|onClick for the list item. It is passed the event and will change the cursor to 'pointer' if it exists.|

<h1>License</h1>
Copyright 2019 Code Particle Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.