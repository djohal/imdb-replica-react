importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");
firebase.initializeApp({
  // Project Settings => Add Firebase to your web app
  messagingSenderId: "1062407524656",
});
const messaging = firebase.messaging();

// messaging.setBackgroundMessageHandler(function (payload) {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   // Customize notification here
//   const notificationTitle = "Background Message Title";
//   const notificationOptions = {
//     body: "Background Message body.",
//     icon: "/logo.png",
//   };

//   return self.registration.showNotification(
//     notificationTitle,
//     notificationOptions
//   );
// });

// messaging.setBackgroundMessageHandler(function (payload) {
//   const promiseChain = clients
//     .matchAll({
//       type: "window",
//       includeUncontrolled: true,
//     })
//     .then((windowClients) => {
//       for (let i = 0; i < windowClients.length; i++) {
//         const windowClient = windowClients[i];
//         windowClient.postMessage(payload);
//       }
//     })
//     .then(() => {
//       const options = {
//         body: "CHECK THIS OUT",
//         icon: "https://unsplash.com/photos/nW33enCuCQY",
//         vibrate: [200, 100, 200],
//         image: "https://unsplash.com/photos/nW33enCuCQY",
//         badge: "https://spyna.it/icons/favicon.ico",
//         actions: [
//           {
//             action: "Detail",
//             title: "View",
//             icon: "https://via.placeholder.com/128/ff0000",
//           },
//         ],
//       };
//       return registration.showNotification("WOOHOOO");
//     });
//   return promiseChain;
// });
// self.addEventListener("notificationclick", function (event) {
//   // do what you want
//   // ...
//   console.log("Clicked");
// });
