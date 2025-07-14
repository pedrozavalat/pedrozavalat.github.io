const ColorfulBlobs = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const drawBlob = (x, y, color) => {
      ctx.beginPath();
      ctx.moveTo(x + 50, y);
      ctx.bezierCurveTo(x + 100, y - 50, x + 150, y + 50, x + 50, y + 100);
      ctx.bezierCurveTo(x - 50, y + 150, x - 50, y - 50, x + 50, y);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    };

    // Limpia el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibuja varias manchas
    const colors = ["#FF6F61", "#6B5B95", "#88B04B", "#F7CAC9", "#92A8D1"];
    for (let i = 0; i < 10; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const color = colors[Math.floor(Math.random() * colors.length)];
      drawBlob(x, y, color);
    }
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", zIndex: -1 }} />;
};

export default ColorfulBlobs;