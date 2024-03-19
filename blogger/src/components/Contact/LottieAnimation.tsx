// Optional: Define an interface for Lottie animation props (if needed)
interface LottieAnimationProps {
    src: string; // Animation source path
    autoplay?: boolean; // Enable autoplay (optional)
    loop?: boolean; // Enable looping (optional)
  }
  
  const LottieAnimation: React.FC<LottieAnimationProps> = ({
    src = "/animation_llqd7ey4.lottie",
    autoplay = true,
    loop = true,
  }) => {
    return (
      <DotLottiePlayer src={src} autoplay={autoplay} loop={loop} />
    );
  };
  
  export default LottieAnimation;
  