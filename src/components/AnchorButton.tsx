import React from 'react'

interface AnchorButtonProps {
  title: string,
  onNavbarSelection: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
  isSelected: boolean,
}

const AnchorButton = (props: AnchorButtonProps) => {
  const { title, onNavbarSelection, isSelected } = props;

  return (
    <li>
      <button
        className={`
          ${isSelected ? 'text-BurntOrange' : 'text-MidnightDarkBlue dark:text-LightGray'}
          ${isSelected ? 'font-extrabold' : 'font-medium'}
          text-xl
          sticky block py-2 px-3
          transition-all duration-500
          group
       `}
        onClick={(e) => onNavbarSelection(e)}
      >
        {title}
        {/* Below is code responsible for rendering orange line on hover */}
        {/* I have no idea why "sticky" is needed for this to work properly */}
        <span
          className="
            absolute left-0 bottom-0 w-full h-0.5 bg-SunsetOrange
            transform scale-x-0 group-hover:scale-x-100
            transition-transform duration-500
          "
        ></span>
      </button>
    </li>

  )
}

export default AnchorButton

/**
Explanation:

  Transitions:
    transition-all duration-500
      - Applies transition effects to all properties over 500ms to the button.

  Positioning and Grouping:

    relative: Ensures the button can be used as a reference point for the absolute positioning of the underline.
    group: Used to group the button and its child span to control the hover state.

  Underline Effect:

    The span element is used to create the underline.

    absolute left-0 bottom-0 w-full h-0.5 bg-blue-700
      - Positions the underline at the bottom of the button, making it full width and setting its height.

    transform scale-x-0 group-hover:scale-x-100
      - Scales the underline from 0 to 100% on hover.

    transition-transform duration-500
      - Adds a transition effect for half a second (500ms).
 */