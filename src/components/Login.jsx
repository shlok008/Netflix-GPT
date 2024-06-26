import React, { useRef, useState } from "react";
import Header from "./Header";
import { CheckValidateData } from "../utils/validate";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Background_Url } from "../utils/constants";

const Login = () => {
	const dispatch = useDispatch();
	const [isSignIn, setIsSignIn] = useState(true);
	const [errorMsg, setErrorMsg] = useState(null);

	const toggleSignIn = () => {
		setIsSignIn(!isSignIn);
	};

	const displayNameRef = useRef(null);
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const handleButtonClick = () => {
		const msg = CheckValidateData(
			emailRef.current.value,
			passwordRef.current.value
		);

		setErrorMsg(msg);
		if (msg) return;

		if (isSignIn) {
			//signin user
			signInWithEmailAndPassword(
				auth,
				emailRef.current.value,
				passwordRef.current.value
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					console.log(user);
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMsg(errorCode + " - " + errorMessage);
				});
		} else {
			//sign up user
			createUserWithEmailAndPassword(
				auth,
				emailRef.current.value,
				passwordRef.current.value
			)
				.then((userCredential) => {
					const user = userCredential.user;
					updateProfile(user, {
						displayName: displayNameRef.current.value,
					})
						.then(() => {
							const { uid, email, displayName } =
								auth.currentUser;
							dispatch(addUser({ uid, email, displayName }));
						})
						.catch((error) => {
							setErrorMsg(error.message);
						});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMsg(errorCode + " - " + errorMessage);
				});
		}
	};
	return (
		<div className="relative min-h-screen flex items-center justify-center bg-black">
			<Header />
			<div className="absolute inset-0">
				<img
					src={Background_Url}
					alt="Background"
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="relative flex flex-col items-center justify-center md:w-full w-4/5 max-w-lg md:p-5 p-3 bg-black bg-opacity-75 rounded-lg shadow-lg">
				<form className="w-full" onSubmit={(e) => e.preventDefault()}>
					<h1 className="font-bold md:text-4xl text-xl md:p-4 text-white">
						{isSignIn ? "Sign In" : "Sign Up"}
					</h1>
					{!isSignIn && (
						<input
							ref={displayNameRef}
							type="text"
							placeholder="Name"
							className="md:p-5 md:m-2 md:w-full p-1 w-4/5 m-1 bg-gray-700 text-white rounded"
						/>
					)}
					<input
						ref={emailRef}
						type="email"
						placeholder="Email Address"
						className="md:p-5 md:m-2 md:w-full p-1 w-4/5 m-1 bg-gray-700 text-white rounded"
					/>
					<input
						ref={passwordRef}
						type="password"
						placeholder="Password"
						className="md:p-5 md:m-2 md:w-full p-1 w-4/5 m-1 bg-gray-700 text-white rounded"
					/>
					<p className="text-red-500 md:px-4 md:py-2  px-2 py-1 font-bold md:text-lg  text-md">
						{errorMsg}
					</p>
					<button
						className="md:p-4 md:m-2 md:w-full p-1 w-4/5 m-1 bg-red-600 text-white rounded"
						onClick={handleButtonClick}
					>
						{isSignIn ? "Sign In" : "Sign Up"}
					</button>
					<h1
						className="md:px-4 md:py-2 md:text-lg px-2 py-1 text-xs text-white hover:cursor-pointer text-wrap"
						onClick={toggleSignIn}
					>
						{isSignIn
							? "Don't have an account? Click <HERE> to Sign Up"
							: "Already registered? Click <HERE> to Sign In"}
					</h1>
					<button className="md:p-5 md:m-2 md:w-full p-1 m-1 w-4/5 bg-orange-600 text-white rounded text-lg">
						USE ID-'shlok@gmail.com', PASS-'Shlok12345'
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
