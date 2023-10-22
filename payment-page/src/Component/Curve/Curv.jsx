import React, { useEffect, useRef } from 'react';

const StockMarketUpwardTrendWiderGaps = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(0, 100);

    let arr = [0, 0, -3, -3, 0, 0, -9, -9, -9];

    // Simulate an upward trend with wider gaps
    for (let i = 1; i < arr.length; i++) {
      const x = i * 40;
      const y = Math.max(50, 100 - i * 2 + arr[i] * 10);

      // Draw a line segment
      ctx.lineTo(x, y);

      // Add labels for values from 780 to 956
      if (x >= 780 && x <= 956) {
        ctx.fillText(y, x, y - 10); // Display the value just above the point
      }
    }

    ctx.lineWidth = 2;
    ctx.strokeStyle = 'grey';
    ctx.stroke();
  }, []);

  return <canvas ref={canvasRef} width={1000} height={200}></canvas>;
};

export default StockMarketUpwardTrendWiderGaps;
