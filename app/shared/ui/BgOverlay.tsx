const BgOverlay = () => {
  return (
    <div>
      <div className="absolute inset-x-0 top-0 h-125 bg-[radial-gradient(ellipse_at_top,rgba(0,0,255,0.5),transparent_60%)]" />
      <div className="absolute inset-y-0 bottom-12 left-0 w-125 bg-[radial-gradient(circle_at_left,rgba(0,0,255,0.5),transparent_60%)]" />
      <div className="absolute inset-y-0 bottom-12 right-0 w-125 bg-[radial-gradient(circle_at_right,rgba(0,0,255,0.5),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(9,93,255,0.25),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(191,9,255,0.2),transparent_45%)]" />
    </div>
  );
};

export default BgOverlay;
