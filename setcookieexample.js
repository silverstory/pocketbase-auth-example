// I'm not sure that I understand the question. I assume that you mean the JS SDK and the SSR flow.
// It is up to the developer how and what cookie will be set and returned.
// The JS SDK cookie helper pb.authStore.exportToCookie() generates a cookie string with
// both the token and auth user data as serialized json, but it is not required to use it if
// you don't need this behavior. You can generate and set your own cookie. We can provide an
// option to skip the auth data from the export, but I'm not sure that I understand the
// use case for this and I suspect that it may cause some confusion since when you call the
// reverse operation, loadFromCookie, it will result in an empty pb.authStore.model.

// The easiest way to "hide" data at the moment is to move your private/sensitive fields in a different collection with its own API rules, and add a relation field in your main auth collection pointing to it.

// sveltekit sample
// import PocketBase, { getTokenPayload } from "pocketbase";

// const payload = getTokenPayload(event.locals.pb.authStore.token);

// cookies.set("pb_auth", JSON.stringify({token: event.locals.pb.authStore.token}), {
//   path: "/",
//   secure: true,
//   httpOnly: true,
//   sameSite: "strict",
//   expires: new Date(payload.exp * 1000);
// })


// import PocketBase, { getTokenPayload } from "pocketbase";

// const payload = getTokenPayload(event.locals.pb.authStore.token);

// cookies.set("pb_auth", JSON.stringify({token: event.locals.pb.authStore.token}), {
//   path: "/",
//   secure: true,
//   httpOnly: true,
//   sameSite: "strict",
//   expires: new Date(payload.exp * 1000);
// })


// pocketbase BaseAuthStore

// BaseAuthStore {
//     // base fields
//     token:   string            // the authenticated token
//     model:   Record|Admin|null // the authenticated Record or Admin model
//     isValid: boolean           // checks if the store has existing and unexpired token

//     // main methods
//     clear()            // "logout" the authenticated Record or Admin
//     save(token, model) // update the store with the new auth data
//     onChange(callback, fireImmediately = false) // register a callback that will be called on store change

//     // cookie parse and serialize helpers
//     loadFromCookie(cookieHeader, key = 'pb_auth')
//     exportToCookie(options = {}, key = 'pb_auth')
// }