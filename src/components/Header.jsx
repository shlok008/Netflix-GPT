import {signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGO } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";

const Header = () => {
	const [btnName,setBtnName] = useState("🔍GPT Search");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);
	/* eslint-disable react-hooks/exhaustive-deps */
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				const { uid, email, displayName } = user;
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
					})
				);
				navigate("/browse");
			} else {
				// User is signed out
				dispatch(removeUser());
				navigate("/");
			}
		});
	}, []); 
	//no dependency
	/* eslint-enable react-hooks/exhaustive-deps */

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				navigate("/");
			})
			.catch((error) => {
				// An error happened.
				navigate("/error");
			});
			
	};

	const handleGPTSearchClick = () =>{
				dispatch(toggleGptSearch())
				btnName === "🔍GPT Search"
					? setBtnName("⬅ Go Back")
					: setBtnName("🔍 GPT Search");
			};
	return (
		<div className="absolute w-full flex flex-col md:flex-row  justify-between bg-gradient-to-b from-black to-transparent  top-0 left-0 z-10 p-4">
			<img
				src={LOGO}
				alt=""
				className="h-12"
			/>
			{user && (
				<div className="nav-items ">
					<ul className="flex items-center space-x-8 border-black">
						<li>
							<h1 className="text-white font-bold">
								Welcome {user.displayName}
							</h1>
						</li>
						<li>
							<button className="p-4 border bg-gray-800 rounded-lg text-white" onClick={handleGPTSearchClick}>
								{btnName}
							</button>
						</li>
						<li>
							<img
								className="w-10 rounded m-10"
								src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
								alt="account"
							/>
						</li>
						<li
							className="text-white font-bold hover:cursor-pointer"
							onClick={handleSignOut}
						>
							(Sign Out)
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default Header;
