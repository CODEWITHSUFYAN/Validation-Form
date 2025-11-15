import { useEffect, useRef } from "react";
import gsap from "gsap";
import confetti from "canvas-confetti";
import Lottie from "lottie-react";
import successAnim from "../Success.json";

const SuccessAnimation = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.from(boxRef.current, {
      scale: 0.6,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    });

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.4 },
      ticks: 400,
      gravity: 0.5
    });
  }, []);

  return (
    <div ref={boxRef} className="success-box">
      <Lottie 
        animationData={successAnim} 
        style={{ width: 180, margin: "auto" }} 
        loop={false} 
        autoplay={true} 
        animationSpeed={0.5} 
      />
      <h2>Account Created Successfully!</h2>
      <p>Your information has been submitted.</p>
    </div>
  );
};

export default SuccessAnimation;
