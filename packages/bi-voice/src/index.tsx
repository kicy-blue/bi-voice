import React from "react";
import ReactDOM from "react-dom";
import "./index.module.less";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./models/store";
import { Route } from "react-router-dom";
import Home from "./views/Home";

ReactDOM.render(
	<Provider store={store}>
		<Home />
	</Provider>,
	document.getElementById("root")
);

// const render = (Com:any) => {
//     ReactDOM.render(
//         <Provider store={store}>
//             <Com/>
//         </Provider>,
//          document.getElementById('root')
//     )
// }
// render(Route)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
