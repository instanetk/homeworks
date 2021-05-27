import React from 'react';

const Tooltip = () => {
  return (
    <React.Fragment>
      <div className="flex">
        <div className="relative mx-2">
          <div className="bg-black text-white text-xs rounded py-1 px-4 right-0 bottom-full">
            Tooltip center
            <svg
              className="absolute text-black h-2 w-full left-0 top-full"
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
              xml:space="preserve">
              <polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
            </svg>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tooltip;
