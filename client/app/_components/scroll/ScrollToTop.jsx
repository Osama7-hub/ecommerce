"use client"
import React from "react";

function ScrollToTop() {
  return (
    // <button className="bg-primary fixed bottom-[33px] right-[33px]" onClick={() => {window.scrollTo(0, 0)}}>
    <button className="bg-primary text-white py-4 px-3 fixed bottom-0 right-[20px]" onClick={() => { window.scrollTo(0, 0) }}>
      Top
    </button>
    // </button>
    // <Zoom in={useScrollTrigger({ threshold: 100 })}>
    //   <Fab
    // onClick={() => {
    //   window.scrollTo(0, 0);
    // }}
    //     variant="extended"
    //     size="small"
    //     sx={{ position: "fixed", bottom: 33, right: 33 }}
    //     color="primary"
    //     aria-label="add"
    //   >
    //     <KeyboardArrowUp fontSize="medium" />
    //   </Fab>
    // </Zoom>
  );
};

export default ScrollToTop;
