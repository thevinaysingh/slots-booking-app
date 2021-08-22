# Slots Booking App

A `react-native` app that show the list of slots for 3 days Today, Tomorrow, and Day after tomorrow. User can book the slots and App persist the booked slots data.

### How it works

![](https://github.com/thevinaysingh/slots-booking-app/blob/main/src/assets/gifs/slot-book-app-demo.gif)

### System requirements

- Node (v15.10.0)
- npm OR yarn
- CocoaPods
- XCode
- AndroidStudio

For setting up the whole environment for react-native apps, check out [this](https://reactnative.dev/docs/environment-setup).

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/thevinaysingh/slots-booking-app
$ cd slots-booking-app
$ yarn
```

### Run Apps

Run iOS

```sh
$ npx pod-install ios
$ yarn ios
```

Run Android

- Open android emulator
- Run the following command

```sh
$ yarn android
```

`Note`: In case of any error while running the android verison of the app, build the app from the Android Studio and then run it on the emulator.

### Structure

```
src/
├── app
│   ├── components
│   │   └── AppContainer.tsx
│   └── navigation
│       ├── enums
│       │   ├── AuthScreen.ts
│       │   ├── DashboardScreen.ts
│       │   └── Navigator.ts
│       ├── navigators
│       │   ├── AppNavigator.tsx
│       │   ├── AuthNavigator.tsx
│       │   └── DashboardNavigator.tsx
│       ├── params
│       │   ├── AppNavigatorParamsList.tsx
│       │   ├── AuthNavigatorParamsList.ts
│       │   └── DashboardNavigatorParamsList.ts
│       └── types
│           └── ParamsListOption.ts
├── assets
│   ├── gifs
│   │   └── slot-book-app-demo.gif
│   └── svgs
│       └── back-black.svg
├── common
│   ├── components
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── HeaderText.tsx
│   │   ├── InputBox.tsx
│   │   ├── LoadingText.tsx
│   │   └── NavigationBar.tsx
│   └── utilities
│       ├── firstName.ts
│       └── index.ts
├── constants
│   ├── Layout.ts
│   └── SvgImageAssets.ts
├── features
│   ├── auth
│   │   ├── injection-keys
│   │   │   ├── authRepositoryInjectionKey.ts
│   │   │   └── index.ts
│   │   ├── repositories
│   │   │   └── AuthRepository.ts
│   │   └── screens
│   │       ├── CreateAccount.tsx
│   │       ├── Login.tsx
│   │       ├── Splash.tsx
│   │       └── index.ts
│   └── dashboard
│       ├── components
│       │   └── SlotListItem.tsx
│       ├── injection-keys
│       │   ├── dashboardRepositoryInjectionKey.ts
│       │   └── index.ts
│       ├── repositories
│       │   └── DashboardRepository.ts
│       └── screens
│           ├── Dashboard.tsx
│           ├── Profile.tsx
│           └── index.ts
└── services
    ├── LocalStorage.ts
    ├── di
    │   ├── Dependencies.ts
    │   ├── DependencyContext.ts
    │   ├── IDependencies.ts
    │   ├── InjectionKey.ts
    │   ├── InjectionKeyScope.ts
    │   └── index.ts
    └── server
        ├── LocalDataSource.ts
        ├── LocalServer.ts
        └── injectionKey.ts

27 directories, 47 files
```

- `src/app`: It contains app level implemenations which should be used at once in whole application lifecycle like AppContainer, GraphQL and navigation.
- `src/assets`: It contains all type raw assets like svgs, gifs.
- `src/common`: It contains several subdirectories like components, utilities, enums etc. These files are common for all.
- `src/constants`: It contains global level constants which are used throughout the application.
- `src/features`: It contains a complete feature and whole stuffs around that like specfic components, apis (Queries), screens(List and Detail), repositories(CharacterRepository).
- `src/services`: It contains services which are used throughout the application like di (Dependency Injection), LocalServer, and LocalStorage.

### Development

- `Project Structure`: Used module wise directory structure as this makes code more readable.
- `server`: It uses LocalServer to mock like a server.
- `Functional component`: It uses a functional component as it has better readability and performance than Class components.
- `DI`: Custom Dependency injection implementation is added that supports repositories implementation where we can put the utilities/logics respective to the feature.
- `Navigation flow`: Used react-navigation to create a single navigator for the app.
- `Styling`: Used stylesheet to avoid the inline styles as those are getting created in every re-render.
- `Orientation`: Used portrait orientation.
- `Code Readibilty`: Maintained code readibilty.
- `Lazy Loading`: Used Lazy Loading react concept to improve the performance.

### Improvements

- Unit test cases for utility functions.
- UI improvements.
- Dynamic Login Flow
- Create Account feature
- Localization
- Theme support
- Replace Local Server to actual server.
- Add Database (Realm) to make the app more robust.
- Great chances for scalabilty.
