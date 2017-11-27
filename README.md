# Chairs

Hacked-together tracking of objects by scanning QR codes.

## Installation

```bash
$ git clone https://github.com/quadnix/chairs
$ cd chairs/server
$ npm install
$ node server.js [port]
```

## Usage

Navigate to [the page](http://chairs.kagelabs.org/) to see a full overview of all tracked objects. To create a QR code, use your favorite QR code generator to make a QR code pointing at a URL of form `http://chairs.kagelabs.org/c/:object_id`. Curl `http://chairs.kagelabs.org/api/reset` to reset the demo.


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

