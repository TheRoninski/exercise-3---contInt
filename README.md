# @roninski/password-utilities (Class 3 evaluated exercise)

> A small JavaScript library that provides password utility functions.

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

    - [Examples](#examples)

- [Contribution](#contribution)

- [Security](#security)

- [License](#license)

## Installation

Install via npm:

```bash
npm install @roninski/password-utilities
```

Install via yarn:

```bash
yarn add @roninski/password-utilities
```

## Usage

Basic Usage

```js
import passwordUtilityModule from '@roninski/password-utilities';

const {generateStrongPassword} = passwordUtilityModule;

const password = generateStrongPassword(8);

console.log(password);       // e.g., "pCw01mW@"
```



```js
import passwordUtilityModule from '@roninski/password-utilities';

const {isStrongPassword} = passwordUtilityModule;

const password = "pCw01mW@";

const isStrong = isStrongPassword(password);

console.log(isStrong);       // e.g., "true" or "false"
```

## Contribution

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for more details.

## Security

Please refer to our [SECURITY.md](./SECURITY.md) for information about our security policies, how to report
vulnerabilities, and our approach to handling security concerns.

## License

This project is licensed under the [MIT License](./LICENSE.md).
