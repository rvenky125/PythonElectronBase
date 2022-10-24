# Knowledge Transfer for GoPrayaan Web

Date Created: July 21, 2022 11:02 AM

There are three repositories for this Project.

1. Mobile (React Native) - https://github.com/vulcantechsdevs/goprayaanreactnative
2. Web (React JS) - https://github.com/vulcantechsdevs/goprayaanweb
3. Desktop (Electron) - https://github.com/vulcantechsdevs/goprayaandesktop

**Guide to develop the Desktop and Web application**

Project structure of Desktop project

- source(The files of the web app should be cloned to this repo)
- index.js
- package-lock.json(generated)
- package.json
- preload.js
- yarn.lock(generated)

The source folder is the web app. The developer should clone both repos to continue development with the project

The developer should change the scripts manually written in package.json while changing the name of the *source* folder.

**The changes on which the developer should be careful to build electron app are followed below.**

1. In the package.json of the react there should be a variable **homepage:”.”** before the dependencies variable
2. The Browser Router should be changed to hash router in App.js
3. Need to change the variable ***showTitleBar*** to true.
4. webkit-app-region: drag; This style is needed for top bar only