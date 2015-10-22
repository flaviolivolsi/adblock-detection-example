# adblock-detection-example
Simply detect an AdBlock user and execute a custom callback instead of your ads

### How it works
AdBlock will interrupt the execution of any script that contain the "ads" word in the filename, so we will check for the variable set in the ads.js file and, if undefined, we will run a callback.