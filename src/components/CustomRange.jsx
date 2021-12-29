import React from 'react'
import { getTrackBackground, Range } from 'react-range'

const CustomRange = ({onChange,min,max,step,value}) => {
    return (
        <Range
            values={[value]}
            step={step}
            min={min}
            max={max}
            onChange={values=>onChange(values[0])}
            renderTrack={({ props, children }) => (
              <div
                className="w-full h-7 flex group"
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{ ...props.style }}
              >
                <div
                  className="h-1 w-full rounded-md self-center"
                  ref={props.ref}
                  style={{
                    background: getTrackBackground({
                      values: [value],
                      colors: ["#1db954", "#535353"],
                      min,
                      max
                    }),
                    alignSelf: "center",
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                className={`w-3 h-3 rounded-full bg-white ${
                  !isDragged ? "opacity-0" : ""
                } group-hover:opacity-100`}
                style={{
                  ...props.style,
                  boxShadow: "0px 2px 4px 0 rgba(0 0 0 0.5)",
                }}
              />
            )}
          />
    )
}

export default CustomRange
