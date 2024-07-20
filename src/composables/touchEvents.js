import { ref } from 'vue';

function useHandleTouchEvents(onTouchLeft, onTouchRight) {
  const touchStartX = ref(0);
  const touchEndX = ref(0);

  const handleTouchStart = (event) => {
    touchStartX.value = event.changedTouches[0].screenX;
  };

  const handleTouchMove = (event) => {
    touchEndX.value = event.changedTouches[0].screenX;
  };

  const handleTouchEnd = () => {
    if (touchEndX.value < touchStartX.value - 50) {
      onTouchRight();
    }
    if (touchEndX.value > touchStartX.value + 50) {
        onTouchLeft();
    }
  };

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}

export { useHandleTouchEvents };
