# Core Modules in Node.js

Node.js provides several core modules that are available without the need for additional installation. These modules offer various functionalities for different purposes. Here are some of the core modules in Node.js:

- **http**: Provides functionality for creating HTTP servers and making HTTP requests.
- **https**: Similar to the `http` module, but for secure HTTPS connections.
- **fs**: Provides file system-related operations, such as reading and writing files.
- **path**: Offers utilities for working with file and directory paths.
- **util**: Provides various utility functions for debugging, formatting, and other common tasks.
- **events**: Allows the creation and handling of custom events.
- **stream**: Provides an interface for streaming data.
- **crypto**: Offers cryptographic functionality, such as encryption and hashing.
- **os**: Provides information about the operating system.
- **querystring**: Offers utilities for parsing and formatting URL query strings.
- **url**: Provides utilities for working with URLs.

These are just a few examples of the core modules available in Node.js. Each module has its own set of methods and functionalities, which can be explored in the Node.js documentation.

To use a core module in your Node.js application, you can import it using the `require` function, like this:

```javascript
const http = require("http");
```
