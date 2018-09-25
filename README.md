# Check Adblock
Check if your browser uses adblock.

## Setup

1. Specify the script in a script tag
```js
<script src="https://cdn.jsdelivr.net/gh/Richienb/check-adblock@ff39a04075a6737d991195524ca1edc91d934564/src/check-adblock.min.js"></script>
```
2. Initialise the pretend adblock script
```js
check-adblock.init();
```
3. Check the result
```js
if check-adblock.check() === true {
  // Ads allowed
} else {
  // Ads not allowed
}
```
