import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import LandingPage from "./Components/LandingPage/LandingPage";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import ToastWrapper from "./common/ToastWrapper";
import CartContextProvider from "./utils/context/CartContext";

function App() {
	const [showLanding, setShowLanding] = useState(true);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Simulate initial loading.
		const timerId = setTimeout(() => setIsLoading(false), 1200);
		return () => clearTimeout(timerId);
	}, []);

	const handleExploreProducts = () => {
		setShowLanding(false);
	};

	const handleBackToLanding = () => {
		setShowLanding(true);
	};

	return (
		<div className="App">
			<CartContextProvider>
				<ToastWrapper>
					{/* =============== Loader =============== */}
					{isLoading && (
						<div
							className="app-loader-overlay"
							role="status"
							aria-live="polite"
						>
							<div
								className="app-spinner"
								aria-hidden="true"
							></div>
							<span className="app-loader-text">
								Loading ProductHub…
							</span>
						</div>
					)}

					{/* =============== Landing Page =============== */}
					{showLanding ? (
						<LandingPage
							onExploreProducts={handleExploreProducts}
						/>
					) : (
						/* =============== Products Page =============== */
						<>
							<div className="back-to-landing-container">
								<div className="back-to-landing">
									<button
										onClick={handleBackToLanding}
										className="btn-back"
									>
										← Back to Home
									</button>
								</div>
							</div>
							<Products />

							{/* =============== Footer =============== */}
							<Footer />
						</>
					)}
				</ToastWrapper>
			</CartContextProvider>
		</div>
	);
}

export default App;
